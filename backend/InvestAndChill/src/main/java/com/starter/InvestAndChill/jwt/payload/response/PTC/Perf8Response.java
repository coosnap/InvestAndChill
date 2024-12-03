package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf8Response extends ReportReponse{

	private String AssetTurnover;
	private String Leverage;
	private String DEE;
	private String roe;
	private String NImgTrailing;
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
	public String getRoe() {
		return roe;
	}
	public void setRoe(String roe) {
		this.roe = roe;
	}
	public String getNImgTrailing() {
		return NImgTrailing;
	}
	public void setNImgTrailing(String nImgTrailing) {
		NImgTrailing = nImgTrailing;
	}
	

}
