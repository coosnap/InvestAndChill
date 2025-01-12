package com.starter.InvestAndChill.pojo;

import java.time.LocalDateTime;

public class ValuationDTO {
	
	protected String stockCode;
	protected String quarter;
	protected String year;
	protected LocalDateTime date;
	protected Double marketcap;
	protected Double pe;
	protected Double evebitda;
	protected Double peMedian;
	protected Double evebitdaMedian;		
	protected Double pb;
	protected Double pbMedian;
	protected Double ps;
	protected Double psMedian;
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
	public LocalDateTime getDate() {
		return date;
	}
	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	public Double getMarketcap() {
		return marketcap;
	}
	public void setMarketcap(Double marketcap) {
		this.marketcap = marketcap;
	}
	public Double getPe() {
		return pe;
	}
	public void setPe(Double pe) {
		this.pe = pe;
	}
	public Double getEvebitda() {
		return evebitda;
	}
	public void setEvebitda(Double evebitda) {
		this.evebitda = evebitda;
	}
	public Double getPeMedian() {
		return peMedian;
	}
	public void setPeMedian(Double peMedian) {
		this.peMedian = peMedian;
	}
	public Double getEvebitdaMedian() {
		return evebitdaMedian;
	}
	public void setEvebitdaMedian(Double evebitdaMedian) {
		this.evebitdaMedian = evebitdaMedian;
	}
	public Double getPb() {
		return pb;
	}
	public void setPb(Double pb) {
		this.pb = pb;
	}
	public Double getPbMedian() {
		return pbMedian;
	}
	public void setPbMedian(Double pbMedian) {
		this.pbMedian = pbMedian;
	}
	public Double getPs() {
		return ps;
	}
	public void setPs(Double ps) {
		this.ps = ps;
	}
	public Double getPsMedian() {
		return psMedian;
	}
	public void setPsMedian(Double psMedian) {
		this.psMedian = psMedian;
	}
	
	

}
