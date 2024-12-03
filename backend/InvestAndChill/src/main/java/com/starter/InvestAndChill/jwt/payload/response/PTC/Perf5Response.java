package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf5Response extends ReportReponse{
	
	private String NITrailing;
	private String NITrailingAdjust;	
	private String MinoritiesTrailing;
	private String AssociateTrailing;
	public String getNITrailing() {
		return NITrailing;
	}
	public void setNITrailing(String nITrailing) {
		NITrailing = nITrailing;
	}
	public String getNITrailingAdjust() {
		return NITrailingAdjust;
	}
	public void setNITrailingAdjust(String nITrailingAdjust) {
		NITrailingAdjust = nITrailingAdjust;
	}
	public String getMinoritiesTrailing() {
		return MinoritiesTrailing;
	}
	public void setMinoritiesTrailing(String minoritiesTrailing) {
		MinoritiesTrailing = minoritiesTrailing;
	}
	public String getAssociateTrailing() {
		return AssociateTrailing;
	}
	public void setAssociateTrailing(String associateTrailing) {
		AssociateTrailing = associateTrailing;
	}
	
	
	
	
}
