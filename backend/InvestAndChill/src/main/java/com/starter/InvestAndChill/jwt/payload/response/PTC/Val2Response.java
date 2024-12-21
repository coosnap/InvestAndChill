package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val2Response extends ValuationResponse{
	private Double roe;
	private Double pb;
	public Double getRoe() {
		return roe;
	}
	public void setRoe(Double roe) {
		this.roe = roe;
	}
	public Double getPb() {
		return pb;
	}
	public void setPb(Double pb) {
		this.pb = pb;
	}
	
	private Double pbMedian;
	
	public Double getPbMedian() {
		return pbMedian;
	}

	public void setPbMedian(Double pbMedian) {
		this.pbMedian = pbMedian;
	}
}
