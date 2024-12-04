package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf7Response extends ReportReponse{
	
	private Integer roe;
	private Integer roic;
	private Integer laiVay;
	public Integer getRoe() {
		return roe;
	}
	public void setRoe(Integer roe) {
		this.roe = roe;
	}
	public Integer getRoic() {
		return roic;
	}
	public void setRoic(Integer roic) {
		this.roic = roic;
	}
	public Integer getLaiVay() {
		return laiVay;
	}
	public void setLaiVay(Integer laiVay) {
		this.laiVay = laiVay;
	}
	
	
}
