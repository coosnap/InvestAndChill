package com.starter.InvestAndChill.jwt.payload.response.PTC;

public class Perf3Response extends ReportReponse{
	private Double SalesTrailing;
	private Double GPMTrailing;
	private Double SGAMTrailing;
	private Double EBITmTrailing;
	public Double getSalesTrailing() {
		return SalesTrailing;
	}
	public void setSalesTrailing(Double salesTrailing) {
		SalesTrailing = salesTrailing;
	}
	public Double getGPMTrailing() {
		return GPMTrailing;
	}
	public void setGPMTrailing(Double gPMTrailing) {
		GPMTrailing = gPMTrailing;
	}
	public Double getSGAMTrailing() {
		return SGAMTrailing;
	}
	public void setSGAMTrailing(Double sGAMTrailing) {
		SGAMTrailing = sGAMTrailing;
	}
	public Double getEBITmTrailing() {
		return EBITmTrailing;
	}
	public void setEBITmTrailing(Double eBITmTrailing) {
		EBITmTrailing = eBITmTrailing;
	}
}
