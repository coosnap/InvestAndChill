package com.starter.InvestAndChill.pojo;

import java.time.LocalDateTime;

public class ValuationBankingDTO extends ValuationDTO{

	//Table report
	private Double roe;
	private Double loiNhuanRong;
	private Double vonChuSoHuu;
	
public ValuationBankingDTO(String stockCode, String quarter, String year,LocalDateTime date,Double marketcap, Double pe,Double evebitda,Double pb,Double ps,Double roe, Double loiNhuanRong, Double vonChuSoHuu) {
		
		this.stockCode = stockCode;
		this.quarter = quarter;
		this.year = year;
		this.marketcap = marketcap;
		this.pe = pe;
		this.evebitda = evebitda;
		this.pb = pb;
		this.ps = ps;
		this.roe = roe;
		this.date = date;
		this.loiNhuanRong = loiNhuanRong;
		this.vonChuSoHuu = vonChuSoHuu;
	}
	
	public Double getRoe() {
		return roe;
	}
	public void setRoe(Double roe) {
		this.roe = roe;
	}
	public Double getLoiNhuanRong() {
		return loiNhuanRong;
	}
	public void setLoiNhuanRong(Double loiNhuanRong) {
		this.loiNhuanRong = loiNhuanRong;
	}
	public Double getVonChuSoHuu() {
		return vonChuSoHuu;
	}
	public void setVonChuSoHuu(Double vonChuSoHuu) {
		this.vonChuSoHuu = vonChuSoHuu;
	}
		
}
