package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

import com.starter.InvestAndChill.jwt.models.ChungKhoanReportQuy;
import com.starter.InvestAndChill.jwt.models.StockSymbol;
import com.starter.InvestAndChill.jwt.payload.response.MessageResponse;
import com.starter.InvestAndChill.jwt.payload.response.TypeResponse;
import com.starter.InvestAndChill.jwt.repository.CKRepositoryQuy;
import com.starter.InvestAndChill.jwt.repository.NganHangRepositoryQuy;
import com.starter.InvestAndChill.jwt.repository.PTCRepositoryQuy;
import com.starter.InvestAndChill.jwt.repository.StockSymbolRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/stock")
//@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
public class StockSymbolController {
	@Autowired
	StockSymbolRepository stockSymbolRepository;
	
	@Autowired
	PTCRepositoryQuy ptcRepository;
	
	@Autowired
	CKRepositoryQuy ckRepository;
	
	@Autowired
	NganHangRepositoryQuy nhRepository;
	
	@GetMapping("/all")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<StockSymbol>> allAccess(@RequestParam(required = false,name = "type") String type) {
		try {
			List<StockSymbol> stockSymbols = new ArrayList<StockSymbol>();
			
			if ("category".equals(type)) {
				stockSymbolRepository.findCategory().forEach(stockSymbols::add);
			} else if ("article".equals(type)) {
				stockSymbolRepository.findStockSymbolWithArticle().forEach(stockSymbols::add);
			} else {
				stockSymbolRepository.findAll().forEach(stockSymbols::add);
			}
			
//			if (size == null) {
//				stockSymbolRepository.findAll().forEach(stockSymbols::add);
//			} else {
//				stockSymbolRepository.findBySizeOfCompany(size).forEach(stockSymbols::add);
//			}
			
			if (stockSymbols.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(stockSymbols, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/getTitle/{stockSymbol}")
	public ResponseEntity<?> getTitle(@PathVariable String stockSymbol) {
		try {
			StockSymbol stockResult = new StockSymbol();
			stockResult = stockSymbolRepository.findStockSymbolTitle(stockSymbol);
			
			if (stockResult == null) {
				return new ResponseEntity<>(new MessageResponse("Data is empty"), HttpStatus.OK);
			}

			return new ResponseEntity<>(new MessageResponse(stockResult.getSymbol() + " - " + stockResult.getCompanyName()), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/type/{id}")
	public ResponseEntity<?> Stocktype(@PathVariable String id) {
		try {
			Long ptcReportNumber = ptcRepository.checkStockIsBelongTo(id);
			if (ptcReportNumber > 0) {
				return new ResponseEntity<>(new TypeResponse(id,"PTC"), HttpStatus.OK);
			}
			Long ckReportNumber = ckRepository.checkStockIsBelongTo(id);
			if (ckReportNumber > 0) {
				return new ResponseEntity<>(new TypeResponse(id,"ChungKhoan"), HttpStatus.OK);
			}
			Long nhReportNumber = nhRepository.checkStockIsBelongTo(id);
			if (nhReportNumber > 0) {
				return new ResponseEntity<>(new TypeResponse(id,"NganHang"), HttpStatus.OK);
			}
			
			return new ResponseEntity<>(null, HttpStatus.OK);
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
	    	StockSymbol _stockSymbol = stockSymbolRepository.save(new StockSymbol(stockSymbol.getId(), stockSymbol.getSymbol(), stockSymbol.getCompanyName(), stockSymbol.getNote(), stockSymbol.getSizeOfCompany(),stockSymbol.getLogo()));
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
	    	if (stockSymbol.getSizeOfCompany() != 0) {
	    		_stockSymbol.setSizeOfCompany(stockSymbol.getSizeOfCompany());
	    	}
	    	_stockSymbol.setLogo(stockSymbol.getLogo());
	    	
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
