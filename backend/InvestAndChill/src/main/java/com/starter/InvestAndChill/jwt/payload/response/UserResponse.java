package com.starter.InvestAndChill.jwt.payload.response;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.starter.InvestAndChill.jwt.models.Role;

public class UserResponse {
	private Long id;
	private String username;
	private String fullName;
	private String phoneNumber;
	//private Date dateOfBirth;
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
	
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
//	public Date getDateOfBirth() {
//		return dateOfBirth;
//	}
//	public void setDateOfBirth(Date dateOfBirth) {
//		this.dateOfBirth = dateOfBirth;
//	}
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
	public UserResponse(String username, String fullName, String phoneNumber,
			Integer isVip, Timestamp fromDate, Timestamp toDate, Set<Role> roles, Long id) {
		super();
		this.username = username;
		this.fullName = fullName;
		this.phoneNumber = phoneNumber;
		this.isVip = isVip;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.roles = roles;
		this.id = id;
	}
}
