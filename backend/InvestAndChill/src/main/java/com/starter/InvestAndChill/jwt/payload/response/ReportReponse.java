package com.starter.InvestAndChill.jwt.payload.response;

import com.starter.InvestAndChill.jwt.models.ReportKey;

public class ReportReponse {
	
	private String title;
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

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
