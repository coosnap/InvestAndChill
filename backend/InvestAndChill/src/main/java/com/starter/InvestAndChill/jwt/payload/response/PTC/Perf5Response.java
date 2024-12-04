package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf5Response extends ReportReponse{
	
	private Integer NITrailing;
	private Integer NITrailingAdjust;	
	private Integer MinoritiesTrailing;
	private Integer AssociateTrailing;
	public Integer getNITrailing() {
		return NITrailing;
	}
	public void setNITrailing(Integer nITrailing) {
		NITrailing = nITrailing;
	}
	public Integer getNITrailingAdjust() {
		return NITrailingAdjust;
	}
	public void setNITrailingAdjust(Integer nITrailingAdjust) {
		NITrailingAdjust = nITrailingAdjust;
	}
	public Integer getMinoritiesTrailing() {
		return MinoritiesTrailing;
	}
	public void setMinoritiesTrailing(Integer minoritiesTrailing) {
		MinoritiesTrailing = minoritiesTrailing;
	}
	public Integer getAssociateTrailing() {
		return AssociateTrailing;
	}
	public void setAssociateTrailing(Integer associateTrailing) {
		AssociateTrailing = associateTrailing;
	}
	
	
	
	
}
