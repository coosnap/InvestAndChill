package com.starter.InvestAndChill.pojo;

public class FilterPhiTaiChinhDTO {
	private String stockCode;
	private String quarter;
	private String year;
	
	private Double marketcap;
	private Double roe;
	private Double pe;
	private Double pb;
	private Double evebitda;
	private Double divyld;
	
	private Double pi77;
	private Double pi78;
	
	public FilterPhiTaiChinhDTO(String stockCode, String quarter, String year, Double marketcap,Double roe,Double pe,Double pb,Double evebitda,Double divyld, Double pi77, Double pi78) {
		this.stockCode = stockCode;
		this.quarter =quarter;
		this.year = year;
		this.marketcap = marketcap;
		this.roe = roe;
		this.pe = pe;
		this.pb = pb;
		this.evebitda = evebitda;
		this.divyld = divyld;
		this.pi77 = pi77;
		this.pi78 = pi78;
	}
	
	public Double getPi77() {
		return pi77;
	}
	public void setPi77(Double pi77) {
		this.pi77 = pi77;
	}
	public Double getPi78() {
		return pi78;
	}
	public void setPi78(Double pi78) {
		this.pi78 = pi78;
	}
	
	public Double getMarketcap() {
		return marketcap;
	}
	public void setMarketcap(Double marketcap) {
		this.marketcap = marketcap;
	}
	public Double getRoe() {
		return roe;
	}
	public void setRoe(Double roe) {
		this.roe = roe;
	}
	public Double getPe() {
		return pe;
	}
	public void setPe(Double pe) {
		this.pe = pe;
	}
	public Double getPb() {
		return pb;
	}
	public void setPb(Double pb) {
		this.pb = pb;
	}
	public Double getEvebitda() {
		return evebitda;
	}
	public void setEvebitda(Double evebitda) {
		this.evebitda = evebitda;
	}
	public Double getDivyld() {
		return divyld;
	}
	public void setDivyld(Double divyld) {
		this.divyld = divyld;
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

}
