package com.starter.InvestAndChill.pojo;

import java.time.LocalDateTime;

public class ValuationPhiTaiChinhDTO extends ValuationDTO{
	
	//Table report
	private Double vonChuSoHuuTruLoiIchCDTS;
	private Double nittm;
	private Double salettm;
	private Double roe;
	private Double ebitdattm;
	
public ValuationPhiTaiChinhDTO(String stockCode, String quarter, String year,LocalDateTime date,Double marketcap, Double pe,Double evebitda,Double pb,Double ps,Double roe,Double salettm,Double nittm,Double ebitdattm,Double vonChuSoHuuTruLoiIchCDTS) {
		
		this.stockCode = stockCode;
		this.quarter = quarter;
		this.year = year;
		this.marketcap = marketcap;
		this.pe = pe;
		this.evebitda = evebitda;
		this.pb = pb;
		this.ps = ps;
		this.roe = roe;
		this.salettm = salettm;
		this.nittm = nittm;
		this.ebitdattm = ebitdattm;
		this.vonChuSoHuuTruLoiIchCDTS =vonChuSoHuuTruLoiIchCDTS;
		this.date = date;
	}
	
	
	public Double getVonChuSoHuuTruLoiIchCDTS() {
	return vonChuSoHuuTruLoiIchCDTS;
}


public void setVonChuSoHuuTruLoiIchCDTS(Double vonChuSoHuuTruLoiIchCDTS) {
	this.vonChuSoHuuTruLoiIchCDTS = vonChuSoHuuTruLoiIchCDTS;
}


	public Double getNittm() {
		return nittm;
	}
	public void setNittm(Double nittm) {
		this.nittm = nittm;
	}
	public Double getSalettm() {
		return salettm;
	}
	public void setSalettm(Double salettm) {
		this.salettm = salettm;
	}
	public Double getRoe() {
		return roe;
	}
	public void setRoe(Double roe) {
		this.roe = roe;
	}
	public Double getEbitdattm() {
		return ebitdattm;
	}
	public void setEbitdattm(Double ebitdattm) {
		this.ebitdattm = ebitdattm;
	}
	
	

}
