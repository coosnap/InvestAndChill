package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal3Response extends ReportReponse{

	private String GrossPPE;
	private String DAPPE;
	private String xayDungCoBanDoDang;
	public String getGrossPPE() {
		return GrossPPE;
	}
	public void setGrossPPE(String grossPPE) {
		GrossPPE = grossPPE;
	}
	public String getDAPPE() {
		return DAPPE;
	}
	public void setDAPPE(String dAPPE) {
		DAPPE = dAPPE;
	}
	public String getXayDungCoBanDoDang() {
		return xayDungCoBanDoDang;
	}
	public void setXayDungCoBanDoDang(String xayDungCoBanDoDang) {
		this.xayDungCoBanDoDang = xayDungCoBanDoDang;
	}
	
	
}
