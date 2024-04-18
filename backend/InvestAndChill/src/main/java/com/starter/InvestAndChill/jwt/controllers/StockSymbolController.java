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

import com.starter.InvestAndChill.jwt.models.StockSymbol;
import com.starter.InvestAndChill.jwt.repository.StockSymbolRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/stock")
public class StockSymbolController {
	@Autowired
	StockSymbolRepository stockSymbolRepository;
	
	@GetMapping("/all")
	public ResponseEntity<List<StockSymbol>> allAccess() {
		List<StockSymbol> listStockSymbol = stockSymbolRepository.findAll();
		return ResponseEntity.ok(listStockSymbol);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<StockSymbol>> getStockSymbolById(@PathVariable String id) {
	    Optional<StockSymbol> stockSymbol = stockSymbolRepository.findById(Integer.valueOf(id));
	    return ResponseEntity.ok(stockSymbol); 
	}
}
