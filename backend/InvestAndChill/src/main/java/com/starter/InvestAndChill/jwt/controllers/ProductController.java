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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.models.Article;
import com.starter.InvestAndChill.jwt.models.Product;
import com.starter.InvestAndChill.jwt.repository.ArticleRepository;
import com.starter.InvestAndChill.jwt.repository.ProductRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	@Autowired
	ProductRepository productRepository;
	
	@GetMapping("/all")
	public ResponseEntity<List<Product>> allProduct() {
		try {
			List<Product> products = new ArrayList<Product>();

			productRepository.findAll().forEach(products::add);

			if (products.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(products, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable String id) {
		Optional<Product> product = productRepository.findById(Long.valueOf(id));
		
	    if (product.isPresent()) {
	      return new ResponseEntity<>(product.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	@PutMapping("/{id}")
	  public ResponseEntity<Product> updateProduct(@PathVariable("id") long id, @RequestBody Product product) {
	    Optional<Product> productData = productRepository.findById(id);

	    if (productData.isPresent()) {
	    	Product _product = productData.get();
	    	_product.setName(product.getName());
	    	_product.setAcountFeeForWebsite(product.getAcountFeeForWebsite());
	    	_product.setBonus(product.getBonus());
	    	_product.setCommitmentTime(product.getCommitmentTime());
	    	_product.setDescription(product.getDescription());
	    	_product.setMinimumBudget(product.getMinimumBudget());
	    	_product.setNavFee(product.getNavFee());
	    	_product.setProfitRateCommitment(product.getProfitRateCommitment());
	    	
	    	
	      return new ResponseEntity<>(productRepository.save(_product), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
}
