package com.starter.InvestAndChill.pojo;

public class FilterTheoDoiPreSalesDTO extends FilterPhiTaiChinhDTO{
	
	public FilterTheoDoiPreSalesDTO() {
		
	}
	
	protected Double pi75;
	
	public FilterTheoDoiPreSalesDTO(String stockCode, String quarter, String year, Double marketcap,Double roe,Double pe,Double pb,Double evebitda,Double divyld, Double pi75) {
		this.stockCode = stockCode;
		this.quarter =quarter;
		this.year = year;
		this.marketcap = marketcap;
		this.roe = roe;
		this.pe = pe;
		this.pb = pb;
		this.evebitda = evebitda;
		this.divyld = divyld;
		this.pi75 = pi75;
	}

	public Double getPi75() {
		return pi75;
	}

	public void setPi75(Double pi75) {
		this.pi75 = pi75;
	}
}
