package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal3Response extends ReportReponse{

	private Double GrossPPE;
	private Double DAPPE;
	private Double xayDungCoBanDoDang;
	public Double getGrossPPE() {
		return GrossPPE;
	}
	public void setGrossPPE(Double grossPPE) {
		GrossPPE = grossPPE;
	}
	public Double getDAPPE() {
		return DAPPE;
	}
	public void setDAPPE(Double dAPPE) {
		DAPPE = dAPPE;
	}
	public Double getXayDungCoBanDoDang() {
		return xayDungCoBanDoDang;
	}
	public void setXayDungCoBanDoDang(Double xayDungCoBanDoDang) {
		this.xayDungCoBanDoDang = xayDungCoBanDoDang;
	}
	
}
