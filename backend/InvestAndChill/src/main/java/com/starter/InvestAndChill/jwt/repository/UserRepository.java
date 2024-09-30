package com.starter.InvestAndChill.jwt.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.starter.InvestAndChill.jwt.models.ERole;
import com.starter.InvestAndChill.jwt.models.Role;
import com.starter.InvestAndChill.jwt.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);
  
  Boolean existsByPhoneNumber(String phone);
  
//  @Query(value = "SELECT CASE WHEN COUNT(*) > 0 THEN 'true' ELSE 'false' END FROM USERS WHERE email = ?1 and id != ?2", nativeQuery = true)
//  Boolean existsByEmailForUpdate(String email, long id);
  
  @Query(value = "SELECT CASE WHEN COUNT(*) > 0 THEN 'true' ELSE 'false' END FROM USERS WHERE phone_number = ?1 and id != ?2", nativeQuery = true)
  Boolean existsByPhoneNumberForUpdate(String phone, long id);
  
  @Query(value = "select * from users where id in (select user_id from user_roles where role_id in (\n"
  		+ "SELECT DISTINCT (role_id) FROM user_roles, roles\n"
  		+ "where user_roles.role_id=roles.id\n"
  		+ "and roles.name=?1))", nativeQuery = true)
  List<User> findListNormalUser(String role);
}
