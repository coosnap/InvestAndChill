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
		try {
			List<StockSymbol> stockSymbols = new ArrayList<StockSymbol>();

			stockSymbolRepository.findAll().forEach(stockSymbols::add);

			if (stockSymbols.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(stockSymbols, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<StockSymbol> getStockSymbolById(@PathVariable String id) {
		Optional<StockSymbol> stockSymbol = stockSymbolRepository.findById(Integer.valueOf(id));
		
	    if (stockSymbol.isPresent()) {
	      return new ResponseEntity<>(stockSymbol.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	 @PostMapping("/save")
	  public ResponseEntity<StockSymbol> createStockSymbol(@RequestBody StockSymbol stockSymbol) {
	    try {
	    	StockSymbol _stockSymbol = stockSymbolRepository.save(new StockSymbol(stockSymbol.getId(), stockSymbol.getSymbol(), stockSymbol.getCompanyName(), stockSymbol.getNote()));
	      return new ResponseEntity<>(_stockSymbol, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	 
	 @PutMapping("/{id}")
	  public ResponseEntity<StockSymbol> updateStockSymbol(@PathVariable("id") int id, @RequestBody StockSymbol stockSymbol) {
	    Optional<StockSymbol> stockSymbolData = stockSymbolRepository.findById(id);

	    if (stockSymbolData.isPresent()) {
	    	StockSymbol _stockSymbol = stockSymbolData.get();
	    	_stockSymbol.setSymbol(stockSymbol.getSymbol());
	    	_stockSymbol.setCompanyName(stockSymbol.getCompanyName());
	    	_stockSymbol.setNote(stockSymbol.getNote());
	      return new ResponseEntity<>(stockSymbolRepository.save(_stockSymbol), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	 
	 @DeleteMapping("/{id}")
	  public ResponseEntity<HttpStatus> deleteStockSymbol(@PathVariable("id") int id) {
	    try {
	    	stockSymbolRepository.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
}
