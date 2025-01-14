package com.starter.InvestAndChill.pojo;

public class FilterXuLyKhauHaoNangDTO extends FilterPhiTaiChinhDTO{
	private Double pi70;
	private Double pi73;
	
	public FilterXuLyKhauHaoNangDTO(String stockCode, String quarter, String year, Double marketcap,Double roe,Double pe,Double pb,Double evebitda,Double divyld, Double pi70, Double pi73) {
		this.stockCode = stockCode;
		this.quarter =quarter;
		this.year = year;
		this.marketcap = marketcap;
		this.roe = roe;
		this.pe = pe;
		this.pb = pb;
		this.evebitda = evebitda;
		this.divyld = divyld;
		this.pi70 = pi70;
		this.pi73 = pi73;
	}

	public Double getPi70() {
		return pi70;
	}

	public void setPi70(Double pi70) {
		this.pi70 = pi70;
	}

	public Double getPi73() {
		return pi73;
	}

	public void setPi73(Double pi73) {
		this.pi73 = pi73;
	}

}
