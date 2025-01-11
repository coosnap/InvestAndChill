package com.starter.InvestAndChill.jwt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.repository.ArticleRepository;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/filter")
public class FilterController {
	
	@Autowired
	ArticleRepository articleRepository;
	
	@GetMapping("/giaTangCongSuat")
	public ResponseEntity<?> filterGiaTangCongSuat(@RequestParam String type, @RequestParam Double min) {
		
		return new ResponseEntity<>("", HttpStatus.OK);
	}

}
