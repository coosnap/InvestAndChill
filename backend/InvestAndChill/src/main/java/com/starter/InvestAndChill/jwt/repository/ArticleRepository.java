package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starter.InvestAndChill.jwt.models.Article;
import com.starter.InvestAndChill.jwt.models.StockSymbol;

public interface ArticleRepository extends JpaRepository<Article, Integer>{
	List<Article> findByLabel(String label);
	List<Article> findByStockId(StockSymbol stockId);
	List<Article> findByLabelAndStockId(String label,StockSymbol stockId);

}
