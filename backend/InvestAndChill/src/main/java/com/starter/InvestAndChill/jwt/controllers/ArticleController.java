package com.starter.InvestAndChill.jwt.controllers;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.models.Article;
import com.starter.InvestAndChill.jwt.models.StockSymbol;
import com.starter.InvestAndChill.jwt.repository.ArticleRepository;
import com.starter.InvestAndChill.jwt.repository.StockSymbolRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/article")
public class ArticleController {
	
	@Autowired
	ArticleRepository articleRepository;
	
	@Autowired
	StockSymbolRepository stockRepository;
	
	private final SimpleDateFormat DATE_TIME_FORMAT = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
	
	private java.sql.Timestamp parseTimestamp(String timestamp) {
	    try {
	        return new Timestamp(DATE_TIME_FORMAT.parse(timestamp).getTime());
	    } catch (ParseException e) {
	        throw new IllegalArgumentException(e);
	    }
	}
	
	public static long compareTwoTimeStamps(java.sql.Timestamp currentTime, java.sql.Timestamp oldTime){
	if (oldTime == null)
		return 0;
	  long milliseconds1 = oldTime.getTime();
	  long milliseconds2 = currentTime.getTime();

	  long diff = milliseconds2 - milliseconds1;
	  long diffSeconds = diff / 1000;
	  long diffMinutes = diff / (60 * 1000);
	  long diffHours = diff / (60 * 60 * 1000);
	  long diffDays = diff / (24 * 60 * 60 * 1000);

	    return diffDays;
	}
	
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
	
	@GetMapping("/search")
	public ResponseEntity<List<Article>> searchArticelByLabelAndCompany(@RequestParam(required = false,name = "stockId") Integer stockId,@RequestParam(required = false,name = "label") String label) {
		try {
			List<Article> articles = new ArrayList<Article>();
			if ((stockId == null) && (label == null)) {
				articleRepository.findAll().forEach(articles::add);
			} else if (stockId == null) {
				articleRepository.findByLabel(label).forEach(articles::add);
			} else if (label == null) {
				Optional<StockSymbol> stockData = 	stockRepository.findById(stockId);
				articleRepository.findByStockId(stockData.get()).forEach(articles::add);
			} else {
				Optional<StockSymbol> stockData = 	stockRepository.findById(stockId);
				articleRepository.findByLabelAndStockId(label,stockData.get()).forEach(articles::add);
			}

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
	    	Article a = article.get();
	    	a.setViews(a.getViews()+1);
	    	articleRepository.save(a);
	      return new ResponseEntity<>(article.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	 @PostMapping("/save")
	  public ResponseEntity<Article> createArticle(@RequestBody Article article, @RequestParam(required = false,name = "stockId") Integer stockId) {
	    try {
	    	Article newArtical = new Article(article.getId(),article.getTitle(),article.getContent(),article.getUrl(),0,article.getLabel());
	    	String now = DATE_TIME_FORMAT.format(new java.util.Date());
	    	newArtical.setCreateDate(parseTimestamp(now));
	    	
	    	if (stockId != null) {
	    		Optional<StockSymbol> stockData = stockRepository.findById(stockId);
		    	if (stockData.isEmpty()) {
		    		 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		    	} else {
		    		newArtical.setStockId(stockData.get());
		    	}
	    	}
	    	
	    	Article _article = articleRepository.save(newArtical);
	    	  	
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
	    	
	    	Timestamp createDate = _article.getCreateDate();
	    	Date date = new Date();
	    	Timestamp now = new Timestamp(date.getTime());
	    	long dateDiff = compareTwoTimeStamps(now,createDate);
//	    	if (dateDiff > 7)
//	    		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	    	
	    	_article.setTitle(article.getTitle());
	    	_article.setContent(article.getContent());
	    	_article.setUrl(article.getUrl());
	    	_article.setLabel(article.getLabel());
	      return new ResponseEntity<>(articleRepository.save(_article), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	 
	 @PutMapping("/{id}/updateWithStock/{stockId}")
	  public ResponseEntity<Article> updateArticleWithStockId(@PathVariable("id") int id, @RequestBody Article article,@PathVariable("stockId") int stockId) {
	    Optional<Article> articleData = articleRepository.findById(id);
	    Optional<StockSymbol> stockData = 	stockRepository.findById(stockId);
	    if (articleData.isPresent() && stockData.isPresent() ) {
	    	Article _article = articleData.get();
	    	_article.setTitle(article.getTitle());
	    	_article.setContent(article.getContent());
	    	_article.setUrl(article.getUrl());
	    	_article.setStockId(stockData.get());
	      return new ResponseEntity<>(articleRepository.save(_article), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	 
	 @PutMapping("{id}/linkArticle/{stockId}")
	  public ResponseEntity<Article> linkArticle(@PathVariable("id") int id, @PathVariable("stockId") int stockId) {
	    Optional<Article> articleData = articleRepository.findById(id);
	    Optional<StockSymbol> stockData = stockRepository.findById(stockId);
	    if (articleData.isPresent() && stockData.isPresent()) {
	    	Article _article = articleData.get();
	    	StockSymbol _stock = stockData.get();
	    	_article.setStockId(_stock);
	      return new ResponseEntity<>(articleRepository.save(_article), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	 
	 @DeleteMapping("/{id}")
	  public ResponseEntity<HttpStatus> deleteArticle(@PathVariable("id") int id) {
	    try {
	    	articleRepository.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
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
