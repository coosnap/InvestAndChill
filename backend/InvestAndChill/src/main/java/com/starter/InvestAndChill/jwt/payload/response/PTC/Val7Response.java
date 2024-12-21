package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val7Response extends ValuationResponse{
	private Double ebitdattm;
	private Double evebitda;
	private Double evebitdaMedian;
	public Double getEbitdattm() {
		return ebitdattm;
	}
	public void setEbitdattm(Double ebitdattm) {
		this.ebitdattm = ebitdattm;
	}
	public Double getEvebitda() {
		return evebitda;
	}
	public void setEvebitda(Double evebitda) {
		this.evebitda = evebitda;
	}
	public Double getEvebitdaMedian() {
		return evebitdaMedian;
	}
	public void setEvebitdaMedian(Double evebitdaMedian) {
		this.evebitdaMedian = evebitdaMedian;
	}
}
