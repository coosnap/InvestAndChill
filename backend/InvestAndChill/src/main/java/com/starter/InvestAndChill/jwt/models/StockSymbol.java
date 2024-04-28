package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "stocksymbol")
public class StockSymbol {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(length = 10)
	private String symbol;
	
	@Column(length = 200, name="company_name")
	private String companyName;
	
	@Column(length = 500)
	private String note;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
	
	public StockSymbol() {
	}
	
	public StockSymbol(int id, String symbol, String companyName, String note) {
		this.id = id;
		this.symbol = symbol;
		this.companyName = companyName;
		this.note = note;
	}
	

}
