package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starter.InvestAndChill.jwt.models.StockSymbol;

public interface StockSymbolRepository extends JpaRepository<StockSymbol, Integer>{
	List<StockSymbol> findBySizeOfCompany(Integer sizeOfCompany);
	
}
