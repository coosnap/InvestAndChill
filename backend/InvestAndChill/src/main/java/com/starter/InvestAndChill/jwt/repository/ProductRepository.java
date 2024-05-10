package com.starter.InvestAndChill.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starter.InvestAndChill.jwt.models.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
