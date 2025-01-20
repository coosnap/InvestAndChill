package com.starter.InvestAndChill.jwt.payload.response.filter;

import java.util.Map;

public class ChungKhoanSoSanhChiSoResponse {
	private String stockCode;
	private Map<String, Double> mapValue;
	public String getStockCode() {
		return stockCode;
	}
	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}
	public Map<String, Double> getMapValue() {
		return mapValue;
	}
	public void setMapValue(Map<String, Double> mapValue) {
		this.mapValue = mapValue;
	}
	
	

}
