package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val3Response extends ValuationResponse{
	private Double salettm;
	private Double marketcap;
	public Double getSalettm() {
		return salettm;
	}
	public void setSalettm(Double salettm) {
		this.salettm = salettm;
	}
	public Double getMarketcap() {
		return marketcap;
	}
	public void setMarketcap(Double marketcap) {
		this.marketcap = marketcap;
	}
}
