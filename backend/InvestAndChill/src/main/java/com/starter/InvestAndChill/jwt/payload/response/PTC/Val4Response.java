package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val4Response extends ValuationResponse{
	private Double ps;
	private Double psMedian;
	private Double salettm;
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
	public Double getSalettm() {
		return salettm;
	}
	public void setSalettm(Double salettm) {
		this.salettm = salettm;
	}
}
