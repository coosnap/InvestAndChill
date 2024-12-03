package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf7Response extends ReportReponse{
	
	private String roe;
	private String roic;
	private String laiVay;
	public String getRoe() {
		return roe;
	}
	public void setRoe(String roe) {
		this.roe = roe;
	}
	public String getRoic() {
		return roic;
	}
	public void setRoic(String roic) {
		this.roic = roic;
	}
	public String getLaiVay() {
		return laiVay;
	}
	public void setLaiVay(String laiVay) {
		this.laiVay = laiVay;
	}
	
	
}
