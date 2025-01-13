package com.starter.InvestAndChill.pojo;

public class FilterGiaTangCongSuatDTO extends FilterPhiTaiChinhDTO{
	protected Double pi77;
	protected Double pi78;
	
	public FilterGiaTangCongSuatDTO(String stockCode, String quarter, String year, Double marketcap,Double roe,Double pe,Double pb,Double evebitda,Double divyld, Double pi77, Double pi78) {
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
	
}
