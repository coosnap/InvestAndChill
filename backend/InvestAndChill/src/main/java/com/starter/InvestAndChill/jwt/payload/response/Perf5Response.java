package com.starter.InvestAndChill.jwt.payload.response;

import javax.persistence.Column;

public class Perf5Response extends ReportReponse{
	private String roe;
	private String AssetTurnover;
	private String Leverage;
	private String DEE;
	public String getRoe() {
		return roe;
	}
	public void setRoe(String roe) {
		this.roe = roe;
	}
	public String getAssetTurnover() {
		return AssetTurnover;
	}
	public void setAssetTurnover(String assetTurnover) {
		AssetTurnover = assetTurnover;
	}
	public String getLeverage() {
		return Leverage;
	}
	public void setLeverage(String leverage) {
		Leverage = leverage;
	}
	public String getDEE() {
		return DEE;
	}
	public void setDEE(String dEE) {
		DEE = dEE;
	}
	public Perf5Response() {
		
	}
}
