package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val1Response extends ValuationResponse{
	private Double roe;
	private Double pb;
	private Double pbMedian;
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
	public Double getPbMedian() {
		return pbMedian;
	}
	public void setPbMedian(Double pbMedian) {
		this.pbMedian = pbMedian;
	}

	
}
