package com.starter.InvestAndChill.jwt.payload.response;

public class Perf4Response extends ReportReponse{
	public String getSalesTrailing() {
		return SalesTrailing;
	}
	public void setSalesTrailing(String salesTrailing) {
		SalesTrailing = salesTrailing;
	}
	public String getGPMTrailing() {
		return GPMTrailing;
	}
	public void setGPMTrailing(String gPMTrailing) {
		GPMTrailing = gPMTrailing;
	}
	public String getSGAMTrailing() {
		return SGAMTrailing;
	}
	public void setSGAMTrailing(String sGAMTrailing) {
		SGAMTrailing = sGAMTrailing;
	}
	public String getEBITmTrailing() {
		return EBITmTrailing;
	}
	public void setEBITmTrailing(String eBITmTrailing) {
		EBITmTrailing = eBITmTrailing;
	}
	private String SalesTrailing;
	private String GPMTrailing;
	private String SGAMTrailing;
	private String EBITmTrailing;
	public Perf4Response() {
		
	}
}
