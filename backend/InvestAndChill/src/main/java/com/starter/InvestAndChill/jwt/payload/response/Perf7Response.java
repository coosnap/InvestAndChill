package com.starter.InvestAndChill.jwt.payload.response;

public class Perf7Response extends ReportReponse{
	
	private Double roe;
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
	private Double roic;
	private Double laiVay;
}
