package com.starter.InvestAndChill.pojo;

public class FilterNoNhieuSomChiTraDTO extends FilterPhiTaiChinhDTO{
	public FilterNoNhieuSomChiTraDTO() {
		
	}
	
	protected Double pi68;
	protected Double pi69;
	
	public FilterNoNhieuSomChiTraDTO(String stockCode, String quarter, String year, Double marketcap,Double roe,Double pe,Double pb,Double evebitda,Double divyld, Double pi68, Double pi69) {
		this.stockCode = stockCode;
		this.quarter =quarter;
		this.year = year;
		this.marketcap = marketcap;
		this.roe = roe;
		this.pe = pe;
		this.pb = pb;
		this.evebitda = evebitda;
		this.divyld = divyld;
		this.pi68 = pi68;
		this.pi69 = pi69;
	}
	
	public Double getPi68() {
		return pi68;
	}
	public void setPi68(Double pi68) {
		this.pi68 = pi68;
	}
	public Double getPi69() {
		return pi69;
	}
	public void setPi69(Double pi69) {
		this.pi69 = pi69;
	}
	
	
}
