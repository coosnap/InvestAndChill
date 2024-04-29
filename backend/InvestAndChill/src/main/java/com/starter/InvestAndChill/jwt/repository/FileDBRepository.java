package com.starter.InvestAndChill.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.starter.InvestAndChill.jwt.models.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String>{

}
