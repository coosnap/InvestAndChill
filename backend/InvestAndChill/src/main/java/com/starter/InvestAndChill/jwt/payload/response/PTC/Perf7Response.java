package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf7Response extends ReportReponse{
	
	private Double roe;
	private Double roic;
	private Double laiVay;
	public Double getRoe() {
		return roe;
	}
	public void setRoe(Double roe) {
		this.roe = roe;
	}
	public Double getRoic() {
		return roic;
	}
	public void setRoic(Double roic) {
		this.roic = roic;
	}
	public Double getLaiVay() {
		return laiVay;
	}
	public void setLaiVay(Double laiVay) {
		this.laiVay = laiVay;
	}
	
	
	
}
