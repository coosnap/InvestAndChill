package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf4Response extends ReportReponse{
	private String EBITTrailing;
	private String NetFinanceialTrailing;
	private String NetFinancialAdjustTrailing;
	private String NImgTrailing;
	private String EBITmTrailing;
	public String getEBITTrailing() {
		return EBITTrailing;
	}
	public void setEBITTrailing(String eBITTrailing) {
		EBITTrailing = eBITTrailing;
	}
	public String getNetFinanceialTrailing() {
		return NetFinanceialTrailing;
	}
	public void setNetFinanceialTrailing(String netFinanceialTrailing) {
		NetFinanceialTrailing = netFinanceialTrailing;
	}
	public String getNetFinancialAdjustTrailing() {
		return NetFinancialAdjustTrailing;
	}
	public void setNetFinancialAdjustTrailing(String netFinancialAdjustTrailing) {
		NetFinancialAdjustTrailing = netFinancialAdjustTrailing;
	}
	public String getNImgTrailing() {
		return NImgTrailing;
	}
	public void setNImgTrailing(String nImgTrailing) {
		NImgTrailing = nImgTrailing;
	}
	public String getEBITmTrailing() {
		return EBITmTrailing;
	}
	public void setEBITmTrailing(String eBITmTrailing) {
		EBITmTrailing = eBITmTrailing;
	}
	

}
