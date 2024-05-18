package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.apache.commons.logging.Log;
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
import org.springframework.web.bind.annotation.GetMapping;
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
import com.starter.InvestAndChill.jwt.payload.request.UserUpAndDowngradeRequest;
import com.starter.InvestAndChill.jwt.payload.response.JwtResponse;
import com.starter.InvestAndChill.jwt.payload.response.MessageResponse;
import com.starter.InvestAndChill.jwt.payload.response.TokenRefreshResponse;
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
        userDetails.getUsername(), userDetails.getEmail(), roles));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
    }
    
    if (userRepository.existsByPhoneNumber(signUpRequest.getPhoneNumber())) {
        return ResponseEntity.badRequest().body(new MessageResponse("Error: Phone Number is already in use!"));
      }

    // Create new user's account
    User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(), 
        encoder.encode(signUpRequest.getPassword()),signUpRequest.getFirstName(), signUpRequest.getLastName(), signUpRequest.getPhoneNumber(), signUpRequest.getDateOfBirth(),0,null,null);

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
  
  @GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable String id) {
		Optional<User> user = userRepository.findById(Long.valueOf(id));
		user.get().setPassword(null);
	    if (user.isPresent()) {
	      return new ResponseEntity<>(user.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
  
  @PutMapping("/{id}")
  public ResponseEntity<?> updateUser(@PathVariable("id") Long id, @RequestBody SignupRequest user) {
	  if (userRepository.existsByEmailForUpdate(user.getEmail(),id)) {
	      return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
	    }
	    
	    if (userRepository.existsByPhoneNumberForUpdate(user.getPhoneNumber(),id)) {
	        return ResponseEntity.badRequest().body(new MessageResponse("Error: Phone Number is already in use!"));
	      }
	  
	  
	Optional<User> userData = userRepository.findById(id);

    if (userData.isPresent()) {
    	User _user = userData.get();
    	_user.setFirstName(user.getFirstName());
    	_user.setLastName(user.getLastName());
    	_user.setEmail(user.getEmail());
    	_user.setDateOfBirth(user.getDateOfBirth());
    	_user.setPassword(encoder.encode(user.getPassword()));
    	_user.setPhoneNumber(user.getPhoneNumber());
    	User userPresent = userRepository.save(_user);
    	userPresent.setPassword(null);
      return new ResponseEntity<>(userPresent, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  
  @PutMapping("/upgrade")
	public ResponseEntity<User> upgradeUser(@RequestBody UserUpAndDowngradeRequest requestUser) {
		//System.out.println(requestUser.getFromDate());
		//System.out.println(new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(requestUser.getFromDate()));
		//System.out.println(TimeZone.getDefault());
	  Optional<User> userData = userRepository.findById(Long.valueOf(requestUser.getId()));
	    if (userData.isPresent()) {
	    	User user = userData.get();
	    	user.setIsVip(requestUser.getIsVip());
	    	user.setFromDate(requestUser.getFromDate());
	    	user.setToDate(requestUser.getToDate());
	    	User user2 = userRepository.save(user);
	    	user2.setPassword(null);
	      return new ResponseEntity<>( user2, HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
  
  @GetMapping("/all")
	public ResponseEntity<?> allUser() {
		try {
			List<User> users = new ArrayList<User>();

			userRepository.findAll().forEach(users::add);

			if (users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			
			for (User user : users) {
				user.setPassword(null); 
			}
			
			return new ResponseEntity<>(users, HttpStatus.OK);
		} catch (Exception e) {
			 logger.error("Get All User has problem: {}", e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
  
  

}
