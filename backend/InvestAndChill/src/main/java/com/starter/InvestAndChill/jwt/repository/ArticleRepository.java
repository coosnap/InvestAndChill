package com.starter.InvestAndChill.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starter.InvestAndChill.jwt.models.Article;

public interface ArticleRepository extends JpaRepository<Article, Integer>{

}
