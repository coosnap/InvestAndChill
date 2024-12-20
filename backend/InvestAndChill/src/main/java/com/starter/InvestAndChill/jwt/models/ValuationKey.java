package com.starter.InvestAndChill.jwt.models;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Embeddable;
@Embeddable
public class ValuationKey implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column(name = "stock_code")
	private String stockCode;
	@Column(name = "quarter",nullable = true)
	private String quarter;
	@Column(name = "year")
	private String year;
	@Column(name = "date")
	private LocalDateTime date;
	public String getStockCode() {
		return stockCode;
	}
	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}
	public String getQuarter() {
		return quarter;
	}
	public void setQuarter(String quarter) {
		this.quarter = quarter;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public LocalDateTime getDate() {
		return date;
	}
	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	
	public ValuationKey() {
	}

	
	
	

}
