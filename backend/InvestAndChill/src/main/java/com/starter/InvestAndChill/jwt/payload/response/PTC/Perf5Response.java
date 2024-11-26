package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf5Response extends ReportReponse{
	
	private Double NITrailing;
	private Double NITrailingAdjust;	
	private Double MinoritiesTrailing;
	private Double AssociateTrailing;
	public Double getNITrailing() {
		return NITrailing;
	}
	public void setNITrailing(Double nITrailing) {
		NITrailing = nITrailing;
	}
	public Double getNITrailingAdjust() {
		return NITrailingAdjust;
	}
	public void setNITrailingAdjust(Double nITrailingAdjust) {
		NITrailingAdjust = nITrailingAdjust;
	}
	public Double getMinoritiesTrailing() {
		return MinoritiesTrailing;
	}
	public void setMinoritiesTrailing(Double minoritiesTrailing) {
		MinoritiesTrailing = minoritiesTrailing;
	}
	public Double getAssociateTrailing() {
		return AssociateTrailing;
	}
	public void setAssociateTrailing(Double associateTrailing) {
		AssociateTrailing = associateTrailing;
	}
	
	
}
