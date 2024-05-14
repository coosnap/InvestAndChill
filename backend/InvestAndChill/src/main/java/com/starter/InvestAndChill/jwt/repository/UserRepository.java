package com.starter.InvestAndChill.jwt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.starter.InvestAndChill.jwt.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
  
  Boolean existsByPhoneNumber(String phone);
  
  @Query(value = "SELECT CASE WHEN COUNT(*) > 0 THEN 'true' ELSE 'false' END FROM USERS WHERE email = ?1 and id != ?2", nativeQuery = true)
  Boolean existsByEmailForUpdate(String email, long id);
  
  @Query(value = "SELECT CASE WHEN COUNT(*) > 0 THEN 'true' ELSE 'false' END FROM USERS WHERE phone_number = ?1 and id != ?2", nativeQuery = true)
  Boolean existsByPhoneNumberForUpdate(String phone, long id);
  
  
}
