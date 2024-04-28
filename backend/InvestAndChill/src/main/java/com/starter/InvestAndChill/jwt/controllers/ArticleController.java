package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
		try {
			List<Article> articles = new ArrayList<Article>();

			articleRepository.findAll().forEach(articles::add);

			if (articles.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(articles, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Article> getArticleById(@PathVariable String id) {
		Optional<Article> article = articleRepository.findById(Integer.valueOf(id));
		
	    if (article.isPresent()) {
	      return new ResponseEntity<>(article.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	 @PostMapping("/save")
	  public ResponseEntity<Article> createArticle(@RequestBody Article article) {
	    try {
	    	Article _article = articleRepository.save(new Article(article.getId(),article.getTitle(),article.getContent(),article.getUrl()));
	      return new ResponseEntity<>(_article, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	 
	 @PutMapping("/{id}")
	  public ResponseEntity<Article> updateArticle(@PathVariable("id") int id, @RequestBody Article article) {
	    Optional<Article> articleData = articleRepository.findById(id);

	    if (articleData.isPresent()) {
	    	Article _article = articleData.get();
	    	_article.setTitle(article.getTitle());
	    	_article.setContent(article.getContent());
	    	_article.setUrl(article.getUrl());
	      return new ResponseEntity<>(articleRepository.save(_article), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	 
	 
//	  @DeleteMapping("/tutorials")
//	  public ResponseEntity<HttpStatus> deleteAllTutorials() {
//	    try {
//	      tutorialRepository.deleteAll();
//	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//	    } catch (Exception e) {
//	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//	    }
//
//	  }
//
//	  @GetMapping("/tutorials/published")
//	  public ResponseEntity<List<Tutorial>> findByPublished() {
//	    try {
//	      List<Tutorial> tutorials = tutorialRepository.findByPublished(true);
//
//	      if (tutorials.isEmpty()) {
//	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//	      }
//	      return new ResponseEntity<>(tutorials, HttpStatus.OK);
//	    } catch (Exception e) {
//	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//	    }
//	  }
	
}
