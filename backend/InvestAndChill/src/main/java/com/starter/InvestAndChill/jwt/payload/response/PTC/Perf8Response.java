package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf8Response extends ReportReponse{

	private Double AssetTurnover;
	private Double Leverage;
	private Double DEE;
	private Double roe;
	private Double NImgTrailing;
	public Double getAssetTurnover() {
		return AssetTurnover;
	}
	public void setAssetTurnover(Double assetTurnover) {
		AssetTurnover = assetTurnover;
	}
	public Double getLeverage() {
		return Leverage;
	}
	public void setLeverage(Double leverage) {
		Leverage = leverage;
	}
	public Double getDEE() {
		return DEE;
	}
	public void setDEE(Double dEE) {
		DEE = dEE;
	}
	public Double getRoe() {
		return roe;
	}
	public void setRoe(Double roe) {
		this.roe = roe;
	}
	public Double getNImgTrailing() {
		return NImgTrailing;
	}
	public void setNImgTrailing(Double nImgTrailing) {
		NImgTrailing = nImgTrailing;
	}
	
	
	

}
