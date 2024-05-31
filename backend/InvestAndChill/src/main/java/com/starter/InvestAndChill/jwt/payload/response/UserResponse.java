package com.starter.InvestAndChill.jwt.payload.response;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.starter.InvestAndChill.jwt.models.Role;
import com.starter.InvestAndChill.jwt.models.User;

public class UserResponse {
	private Long id;
	private String username;
	private String email;
	private String firstName;
	private String lastName;
	private String phoneNumber;
	private Date dateOfBirth;
	private Integer isVip;
	@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss")
	private Timestamp fromDate;
	@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss")
	private Timestamp toDate;
	private Set<Role> roles = new HashSet<>();	
	public Set<Role> getRoles() {
		return roles;
	}
	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public Integer getIsVip() {
		return isVip;
	}
	public void setIsVip(Integer isVip) {
		this.isVip = isVip;
	}
	
	public void setFromDate(Timestamp fromDate) {
		this.fromDate = fromDate;
	}
	
	public Timestamp getFromDate() {
		
		return fromDate;
	}
	
	public Timestamp getToDate() {
		return toDate;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setToDate(Timestamp toDate) {
		this.toDate = toDate;
	}
	
	public UserResponse() {
	}
	public UserResponse(String username, String email, String firstName, String lastName, String phoneNumber,
			Date dateOfBirth, Integer isVip, Timestamp fromDate, Timestamp toDate, Set<Role> roles, Long id) {
		super();
		this.username = username;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.dateOfBirth = dateOfBirth;
		this.isVip = isVip;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.roles = roles;
		this.id = id;
	}
}
