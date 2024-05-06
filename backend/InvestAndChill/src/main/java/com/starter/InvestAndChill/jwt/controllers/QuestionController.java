package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
		try {
			List<Question> questions = new ArrayList<Question>();

			questionRepository.findAll().forEach(questions::add);

			if (questions.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(questions, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Question> getQuestionById(@PathVariable String id) {
		Optional<Question> question = questionRepository.findById(Integer.valueOf(id));
	    if (question.isPresent()) {
	      return new ResponseEntity<>(question.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    } 
	}
	
	@PostMapping("/save")
	  public ResponseEntity<Question> createQuestion(@RequestBody Question question) {
	    try {
	    	Question _question = questionRepository.save(new Question(question.getId(),question.getQuestionContent(),question.getAnswer()));
	      return new ResponseEntity<>(_question, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	 
	 @PutMapping("/{id}")
	  public ResponseEntity<Question> updateQuestion(@PathVariable("id") int id, @RequestBody Question question) {
	    Optional<Question> questionData = questionRepository.findById(id);

	    if (questionData.isPresent()) {
	    	Question _question = questionData.get();
	    	_question.setQuestionContent(question.getQuestionContent());
	    	_question.setAnswer(question.getAnswer());
	      return new ResponseEntity<>(questionRepository.save(_question), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	 
	 @DeleteMapping("/{id}")
	  public ResponseEntity<HttpStatus> deleteQuestion(@PathVariable("id") int id) {
	    try {
	    	questionRepository.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
}
