package com.starter.InvestAndChill.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starter.InvestAndChill.jwt.models.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

}
