package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.StockSymbol;

public interface StockSymbolRepository extends JpaRepository<StockSymbol, Integer>{
	List<StockSymbol> findBySizeOfCompany(Integer sizeOfCompany);
	
	@Query(value = "select * from stocksymbol s where size_of_company is not null",nativeQuery = true)
	List<StockSymbol> findCategory();
	
	@Query(value = "select * from stocksymbol s where id in (select stock_id as id from article a)",nativeQuery = true)
	List<StockSymbol> findStockSymbolWithArticle();
	
	@Query(value = "select * from stocksymbol s where symbol = :symbol",nativeQuery = true)
	StockSymbol findStockSymbolTitle(@Param("symbol") String symbol);
	
}
