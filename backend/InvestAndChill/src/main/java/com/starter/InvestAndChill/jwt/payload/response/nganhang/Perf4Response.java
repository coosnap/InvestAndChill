package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf4Response extends ReportReponse{
	public Integer getRoe() {
		return roe;
	}
	public void setRoe(Integer roe) {
		this.roe = roe;
	}
	public Integer getRoa() {
		return roa;
	}
	public void setRoa(Integer roa) {
		this.roa = roa;
	}
	private Integer roe;
	private Integer roa;
}
