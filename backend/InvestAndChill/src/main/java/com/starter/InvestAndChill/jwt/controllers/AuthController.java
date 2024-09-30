package com.starter.InvestAndChill.jwt.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.exception.TokenRefreshException;
import com.starter.InvestAndChill.jwt.models.ERole;
import com.starter.InvestAndChill.jwt.models.RefreshToken;
import com.starter.InvestAndChill.jwt.models.Role;
import com.starter.InvestAndChill.jwt.models.User;
import com.starter.InvestAndChill.jwt.payload.request.LoginRequest;
import com.starter.InvestAndChill.jwt.payload.request.SignupRequest;
import com.starter.InvestAndChill.jwt.payload.request.TokenRefreshRequest;
import com.starter.InvestAndChill.jwt.payload.response.JwtResponse;
import com.starter.InvestAndChill.jwt.payload.response.MessageResponse;
import com.starter.InvestAndChill.jwt.payload.response.TokenRefreshResponse;
import com.starter.InvestAndChill.jwt.payload.response.UserResponse;
import com.starter.InvestAndChill.jwt.repository.RoleRepository;
import com.starter.InvestAndChill.jwt.repository.UserRepository;
import com.starter.InvestAndChill.jwt.security.jwt.JwtUtils;
import com.starter.InvestAndChill.jwt.security.services.RefreshTokenService;
import com.starter.InvestAndChill.jwt.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @Autowired
  RefreshTokenService refreshTokenService;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager
        .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);

    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

    String jwt = jwtUtils.generateJwtToken(userDetails);

    List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
        .collect(Collectors.toList());

    RefreshToken refreshToken = refreshTokenService.createRefreshToken(userDetails.getId());

    return ResponseEntity.ok(new JwtResponse(jwt, refreshToken.getToken(), userDetails.getId(),
        userDetails.getUsername(),"",  roles));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {

    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
    }

    User user = new User(signUpRequest.getUsername(),signUpRequest.getFullName(),encoder.encode(signUpRequest.getPassword()));
    Set<String> strRoles = signUpRequest.getRole();
    Set<Role> roles = new HashSet<>();

    if (strRoles == null) {
      Role userRole = roleRepository.findByName(ERole.ROLE_USER)
          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
      roles.add(userRole);
    } else {
      strRoles.forEach(role -> {
        switch (role) {
        case "admin":
          Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(adminRole);

          break;
        case "mod":
          Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(modRole);

          break;
        case "mod_user":
            Role modUserRole = roleRepository.findByName(ERole.ROLE_MODERATOR_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(modUserRole);

            break;
        case "mod_article":
            Role modArticleRole = roleRepository.findByName(ERole.ROLE_MODERATOR_ARTICLE)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(modArticleRole);

            break;
        default:
          Role userRole = roleRepository.findByName(ERole.ROLE_USER)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(userRole);
        }
      });
    }

    user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }

  @PostMapping("/refreshtoken")
  public ResponseEntity<?> refreshtoken(@Valid @RequestBody TokenRefreshRequest request) {
    String requestRefreshToken = request.getRefreshToken();

    return refreshTokenService.findByToken(requestRefreshToken)
        .map(refreshTokenService::verifyExpiration)
        .map(RefreshToken::getUser)
        .map(user -> {
          String token = jwtUtils.generateTokenFromUsername(user.getUsername());
          return ResponseEntity.ok(new TokenRefreshResponse(token, requestRefreshToken));
        })
        .orElseThrow(() -> new TokenRefreshException(requestRefreshToken,
            "Refresh token is not in database!"));
  }
  
  @PostMapping("/signout")
  public ResponseEntity<?> logoutUser() {
    UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    Long userId = userDetails.getId();
    refreshTokenService.deleteByUserId(userId);
    return ResponseEntity.ok(new MessageResponse("Log out successful!"));
  }
  
//  @GetMapping("/{id}")
//	public ResponseEntity<UserResponse> getUserById(@PathVariable String id) {
//		Optional<User> userOptional = userRepository.findById(Long.valueOf(id));
//	    if (userOptional.isPresent()) {
//	    	User user = userOptional.get();
//	    	UserResponse u = new UserResponse(user.getUsername(), user.getEmail(), user.getFirstName(), user.getLastName(), user.getPhoneNumber(), user.getDateOfBirth(), user.getIsVip(), user.getFromDate(), user.getToDate(),user.getRoles(),user.getId());
//	      return new ResponseEntity<>(u, HttpStatus.OK);
//	    } else {
//	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//	    }
//	}
  
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable("id") Long id, @RequestBody SignupRequest user) {
		
		Optional<User> userData = userRepository.findById(id);

		if (userData.isPresent()) {
			User _user = userData.get();
			
			 Authentication authentication = authenticationManager
				        .authenticate(new UsernamePasswordAuthenticationToken(_user.getUsername(), user.getPassword()));
			_user.setFullName(user.getFullName());
			_user.setPhoneNumber(user.getPhoneNumber());
			User userPresent = userRepository.save(_user);
			UserResponse u = new UserResponse(userPresent.getUsername(), 
					userPresent.getFullName(), userPresent.getPhoneNumber(),
					userPresent.getIsVip(), userPresent.getFromDate(),
					userPresent.getToDate(), userPresent.getRoles(), userPresent.getId());
			return new ResponseEntity<>(u, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
  
//  @PutMapping("/upgrade")
//	public ResponseEntity<UserResponse> upgradeUser(@RequestBody UserUpAndDowngradeRequest requestUser) {
//	  Optional<User> userData = userRepository.findById(Long.valueOf(requestUser.getId()));
//	    if (userData.isPresent()) {
//	    	User user = userData.get();
//	    	user.setIsVip(requestUser.getIsVip());
//	    	user.setFromDate(requestUser.getFromDate());
//	    	user.setToDate(requestUser.getToDate());
//	    	User user2 = userRepository.save(user);
//	    	
//	    	UserResponse u = new UserResponse(user2.getUsername(), user2.getEmail(), user2.getFirstName(), user2.getLastName(), user2.getPhoneNumber(), user2.getDateOfBirth(), user2.getIsVip(), user2.getFromDate(), user2.getToDate(),user2.getRoles(),user2.getId());
//	      return new ResponseEntity<>( u, HttpStatus.OK);
//	    } else {
//	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//	    }
//	}
  
//  @GetMapping("/all")
//	public ResponseEntity<?> allUser() {
//		try {
//			List<User> users = new ArrayList<User>();
//			users = userRepository.findListNormalUser("ROLE_USER");
//			
//
//			if (users.isEmpty()) {
//				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//			}
//			
//			List<UserResponse> userReponseList = new ArrayList<UserResponse>();
//			
//			for (User user : users) {
//				UserResponse u = new UserResponse(user.getUsername(), user.getEmail(), user.getFirstName(), user.getLastName(), user.getPhoneNumber(), user.getDateOfBirth(), user.getIsVip(), user.getFromDate(), user.getToDate(),user.getRoles(),user.getId());
//				userReponseList.add(u);
//			}
//			
//			return new ResponseEntity<>(userReponseList, HttpStatus.OK);
//		} catch (Exception e) {
//			System.out.println("e:" + e.toString());
//			 logger.error("Get All User has problem: {}", e.getMessage());
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//
//	}
  
  @PostMapping("/changePassword")
 	public ResponseEntity<?> changPassword(@RequestBody Map<String, Object> payload) {
	  String userName = (String )payload.get("userName");
	  String oldPassword = (String )payload.get("oldPassword");
	  String newPassword = (String )payload.get("newPassword");
	  
	  Authentication authentication = authenticationManager
		        .authenticate(new UsernamePasswordAuthenticationToken(userName, oldPassword));

	  UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
	  Optional<User> userOptional = userRepository.findById(userDetails.getId());
	  if (userOptional.isPresent()) {
		  User user = userOptional.get();
		  user.setPassword( encoder.encode(newPassword));
		  userRepository.save(user);
	  }
	  
	  return new ResponseEntity<>(new MessageResponse("Password has been updated"), HttpStatus.OK);

 	}
  
  
  

}
