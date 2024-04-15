package com.starter.InvestAndChill.jwt.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.models.Question;
import com.starter.InvestAndChill.jwt.repository.QuestionRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/question")
public class QuestionController {

	@Autowired
	QuestionRepository questionRepository;
	
	@GetMapping("/all")
	public ResponseEntity<List<Question>> allAccessForQuestion() {
		List<Question> listQuestion = questionRepository.findAll();
		return ResponseEntity.ok(listQuestion);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Question>> getQuestionById(@PathVariable String id) {
	    Optional<Question> question = questionRepository.findById(Integer.valueOf(id));
	    return ResponseEntity.ok(question); 
	}
}
