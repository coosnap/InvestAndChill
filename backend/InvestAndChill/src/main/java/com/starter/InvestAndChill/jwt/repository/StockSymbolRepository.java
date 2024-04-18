package com.starter.InvestAndChill.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.starter.InvestAndChill.jwt.models.StockSymbol;

public interface StockSymbolRepository extends JpaRepository<StockSymbol, Integer>{

}
