package com.starter.InvestAndChill.jwt.payload.response;

public class TypeResponse {
	private String stock;
	private String type;
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
