package com.starter.InvestAndChill.jwt.payload.response;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

public class TypeResponse {
	private String stock;
	private String type;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private LocalDateTime recentDate;
	public LocalDateTime getRecentDate() {
		return recentDate;
	}
	public void setRecentDate(LocalDateTime recentDate) {
		this.recentDate = recentDate;
	}
	public String getStock() {
		return stock;
	}
	public void setStock(String stock) {
		this.stock = stock;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	public TypeResponse(String stock, String type) {
		this.stock = stock;
		this.type = type;
	}
}
