package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val1Response extends ValuationResponse{
	private Double pe;
	private Double evebitda;
	private Double peMedian;
	private Double evebitdaMedian;
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
}
