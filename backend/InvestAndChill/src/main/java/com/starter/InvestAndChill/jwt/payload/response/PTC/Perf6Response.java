package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf6Response extends ReportReponse{

	private Double EBITDATrailing;
	private Double InterestExpenseTrailing;
	private Double EBITTrailing;
	
	private Double EBITMarginTTM;
	private Double EBITDAMarginTTM;
	
	public Double getEBITMarginTTM() {
		return EBITMarginTTM;
	}
	public void setEBITMarginTTM(Double eBITMarginTTM) {
		EBITMarginTTM = eBITMarginTTM;
	}
	public Double getEBITDAMarginTTM() {
		return EBITDAMarginTTM;
	}
	public void setEBITDAMarginTTM(Double eBITDAMarginTTM) {
		EBITDAMarginTTM = eBITDAMarginTTM;
	}
	public Double getEBITDATrailing() {
		return EBITDATrailing;
	}
	public void setEBITDATrailing(Double eBITDATrailing) {
		EBITDATrailing = eBITDATrailing;
	}
	public Double getInterestExpenseTrailing() {
		return InterestExpenseTrailing;
	}
	public void setInterestExpenseTrailing(Double interestExpenseTrailing) {
		InterestExpenseTrailing = interestExpenseTrailing;
	}
	public Double getEBITTrailing() {
		return EBITTrailing;
	}
	public void setEBITTrailing(Double eBITTrailing) {
		EBITTrailing = eBITTrailing;
	}
	
	
}
