package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf3Response extends ReportReponse{
	private Integer SalesTrailing;
	private Integer GPMTrailing;
	private Integer SGAMTrailing;
	private Integer EBITmTrailing;
	public Integer getSalesTrailing() {
		return SalesTrailing;
	}
	public void setSalesTrailing(Integer salesTrailing) {
		SalesTrailing = salesTrailing;
	}
	public Integer getGPMTrailing() {
		return GPMTrailing;
	}
	public void setGPMTrailing(Integer gPMTrailing) {
		GPMTrailing = gPMTrailing;
	}
	public Integer getSGAMTrailing() {
		return SGAMTrailing;
	}
	public void setSGAMTrailing(Integer sGAMTrailing) {
		SGAMTrailing = sGAMTrailing;
	}
	public Integer getEBITmTrailing() {
		return EBITmTrailing;
	}
	public void setEBITmTrailing(Integer eBITmTrailing) {
		EBITmTrailing = eBITmTrailing;
	}
	
}
