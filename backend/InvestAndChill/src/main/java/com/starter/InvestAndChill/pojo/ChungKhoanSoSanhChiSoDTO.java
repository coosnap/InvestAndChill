package com.starter.InvestAndChill.pojo;

public class ChungKhoanSoSanhChiSoDTO {
	private String stockCode;
	private String quarter;
	private String year;
	
	private Double ci6;
	private Double ci7;
	private Double cb142;
	private Double cf158;
	private Double cb205;
	
	
	
	public ChungKhoanSoSanhChiSoDTO(String stockCode, String quarter, String year, Double ci6, Double ci7, Double cb142,
			Double cf158, Double cb205) {
		super();
		this.stockCode = stockCode;
		this.quarter = quarter;
		this.year = year;
		this.ci6 = ci6;
		this.ci7 = ci7;
		this.cb142 = cb142;
		this.cf158 = cf158;
		this.cb205 = cb205;
	}
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
	public Double getCi6() {
		return ci6;
	}
	public void setCi6(Double ci6) {
		this.ci6 = ci6;
	}
	public Double getCi7() {
		return ci7;
	}
	public void setCi7(Double ci7) {
		this.ci7 = ci7;
	}
	public Double getCb142() {
		return cb142;
	}
	public void setCb142(Double cb142) {
		this.cb142 = cb142;
	}
	public Double getCf158() {
		return cf158;
	}
	public void setCf158(Double cf158) {
		this.cf158 = cf158;
	}
	public Double getCb205() {
		return cb205;
	}
	public void setCb205(Double cb205) {
		this.cb205 = cb205;
	}
	
	
	
}
