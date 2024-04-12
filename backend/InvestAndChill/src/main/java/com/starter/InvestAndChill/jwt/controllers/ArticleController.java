package com.starter.InvestAndChill.jwt.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.models.Article;
import com.starter.InvestAndChill.jwt.repository.ArticleRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/article")
public class ArticleController {
	
	@Autowired
	ArticleRepository articleRepository;
	
	@GetMapping("/all")
	public ResponseEntity<List<Article>> allAccess() {
		List<Article> listArticle = articleRepository.findAll();
		return ResponseEntity.ok(listArticle);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Article>> getArticleById(@PathVariable String id) {
	    Optional<Article> article = articleRepository.findById(Integer.valueOf(id));
	    return ResponseEntity.ok(article);
	}
	
}
