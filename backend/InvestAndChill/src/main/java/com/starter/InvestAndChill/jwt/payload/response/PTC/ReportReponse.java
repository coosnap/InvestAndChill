package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.models.ReportKey;

public class ReportReponse {
	private ReportKey id;

	public ReportKey getId() {
		return id;
	}

	public void setId(ReportKey id) {
		this.id = id;
	}
	
	public ReportReponse() {
	}
	
	public ReportReponse(ReportKey key) {
		this.id = key;
	}
}
