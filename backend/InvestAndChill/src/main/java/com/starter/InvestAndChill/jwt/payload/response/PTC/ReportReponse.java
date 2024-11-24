package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.models.PTCReportKey;

public class ReportReponse {
	private PTCReportKey id;

	public PTCReportKey getId() {
		return id;
	}

	public void setId(PTCReportKey id) {
		this.id = id;
	}
	
	public ReportReponse() {
	}
	
	public ReportReponse(PTCReportKey key) {
		this.id = key;
	}
}
