package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val2Response extends ValuationResponse{
	private Double pe;
	private Double peMedian;
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
