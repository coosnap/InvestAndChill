package com.starter.InvestAndChill.jwt.controllers;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.starter.InvestAndChill.jwt.models.User;
import com.starter.InvestAndChill.jwt.repository.UserRepository;
import com.starter.InvestAndChill.jwt.security.services.EmailService;
import com.starter.InvestAndChill.utils.PasswordGenerator;

@RestController
@RequestMapping("/api/email")
public class EmailController {

	@Autowired
    UserRepository userRepository;
	
    @Autowired
    private EmailService emailService;
    
    @Autowired
    PasswordEncoder encoder;

    @PostMapping("/send")
    public String sendEmail(@RequestBody Map<String, Object> payload) {
    	String username = (String )payload.get("username");
    	Optional<User> userOptional = userRepository.findByUsername(username);
    	 if (userOptional.isPresent()) {
    		 String newPassword = PasswordGenerator.generatePassword(8);
    		 User user = userOptional.get();
   		  	user.setPassword( encoder.encode(newPassword));
   		  	userRepository.save(user);
    		 
    		 emailService.sendEmail(username, "New Password", "Hi, Password mới của bạn là: " + newPassword);
    	     return "Email sent successfully";
    	 }
    	 return "Email sent not successfully";
        
    }
}

