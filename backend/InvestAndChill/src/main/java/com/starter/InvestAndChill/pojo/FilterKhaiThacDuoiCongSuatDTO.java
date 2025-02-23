package com.starter.InvestAndChill.pojo;

public class FilterKhaiThacDuoiCongSuatDTO extends FilterPhiTaiChinhDTO{
	private Double pi793;
	
	public FilterKhaiThacDuoiCongSuatDTO() {
		
	}
	
	public FilterKhaiThacDuoiCongSuatDTO(String stockCode, String quarter, String year, Double marketcap,Double roe,Double pe,Double pb,Double evebitda,Double divyld, Double pi793) {
		this.stockCode = stockCode;
		this.quarter =quarter;
		this.year = year;
		this.marketcap = marketcap;
		this.roe = roe;
		this.pe = pe;
		this.pb = pb;
		this.evebitda = evebitda;
		this.divyld = divyld;
		this.pi793 = pi793;
	}

	public Double getPi793() {
		return pi793;
	}

	public void setPi793(Double pi793) {
		this.pi793 = pi793;
	}
	
	
}
