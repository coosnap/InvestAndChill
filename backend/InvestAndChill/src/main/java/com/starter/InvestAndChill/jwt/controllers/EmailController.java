package com.starter.InvestAndChill.jwt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.starter.InvestAndChill.jwt.repository.UserRepository;
import com.starter.InvestAndChill.jwt.security.services.EmailService;

@RestController
@RequestMapping("/api/email")
public class EmailController {

    @Autowired
    private EmailService emailService;
    
    @Autowired
    UserRepository userRepository;

    @PostMapping("/send")
    public String sendEmail(@RequestParam String to, @RequestParam String subject, @RequestParam String body) {
        emailService.sendEmail(to, subject, body);
        return "Email sent successfully";
    }
}

