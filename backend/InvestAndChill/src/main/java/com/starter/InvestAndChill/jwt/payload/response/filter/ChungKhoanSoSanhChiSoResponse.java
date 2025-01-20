package com.starter.InvestAndChill.jwt.payload.response.filter;

public class ChungKhoanSoSanhChiSoResponse {
	private String stockCode;
	private String[] quarterYear;
	public String[] getQuarterYear() {
		return quarterYear;
	}
	public void setQuarterYear(String[] quarterYear) {
		this.quarterYear = quarterYear;
	}
	private Double[] arrayValue;
	public String getStockCode() {
		return stockCode;
	}
	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}
	public Double[] getArrayValue() {
		return arrayValue;
	}
	public void setArrayValue(Double[] arrayValue) {
		this.arrayValue = arrayValue;
	}
	

}
