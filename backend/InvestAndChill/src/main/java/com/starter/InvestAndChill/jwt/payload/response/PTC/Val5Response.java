package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val5Response extends ValuationResponse{
	private Double nittm;
	public Double getNittm() {
		return nittm;
	}
	public void setNittm(Double nittm) {
		this.nittm = nittm;
	}
	public Double getMarketcap() {
		return marketcap;
	}
	public void setMarketcap(Double marketcap) {
		this.marketcap = marketcap;
	}
	private Double marketcap;
}
