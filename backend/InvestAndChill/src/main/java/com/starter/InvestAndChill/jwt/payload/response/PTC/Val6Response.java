package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val6Response extends ValuationResponse{
	private Double nittm;
	private Double pe;
	private Double peMedian;
	public Double getNittm() {
		return nittm;
	}
	public void setNittm(Double nittm) {
		this.nittm = nittm;
	}
	public Double getPe() {
		return pe;
	}
	public void setPe(Double pe) {
		this.pe = pe;
	}
	public Double getPeMedian() {
		return peMedian;
	}
	public void setPeMedian(Double peMedian) {
		this.peMedian = peMedian;
	}
}
