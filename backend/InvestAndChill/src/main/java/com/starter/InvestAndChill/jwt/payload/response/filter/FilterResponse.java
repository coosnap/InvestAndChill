package com.starter.InvestAndChill.jwt.payload.response.filter;

import com.starter.InvestAndChill.jwt.models.ReportKey;

public class FilterResponse{
	protected ReportKey id;

	public Integer getMarketcap() {
		return marketcap;
	}

	public void setMarketcap(Integer marketcap) {
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

	public ReportKey getId() {
		return id;
	}

	public void setId(ReportKey id) {
		this.id = id;
	}
	
	protected Integer marketcap;
	protected Double roe;
	protected Double pe;
	protected Double pb;
	protected Double evebitda;
	protected Double divyld;
}
