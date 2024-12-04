package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal3Response extends ReportReponse{

	private Integer GrossPPE;
	private Integer DAPPE;
	private Integer xayDungCoBanDoDang;
	public Integer getGrossPPE() {
		return GrossPPE;
	}
	public void setGrossPPE(Integer grossPPE) {
		GrossPPE = grossPPE;
	}
	public Integer getDAPPE() {
		return DAPPE;
	}
	public void setDAPPE(Integer dAPPE) {
		DAPPE = dAPPE;
	}
	public Integer getXayDungCoBanDoDang() {
		return xayDungCoBanDoDang;
	}
	public void setXayDungCoBanDoDang(Integer xayDungCoBanDoDang) {
		this.xayDungCoBanDoDang = xayDungCoBanDoDang;
	}
	
	
}
