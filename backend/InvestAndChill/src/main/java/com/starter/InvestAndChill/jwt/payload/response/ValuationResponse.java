package com.starter.InvestAndChill.jwt.payload.response;

import com.starter.InvestAndChill.jwt.models.ValuationKey;

public class ValuationResponse {
	private String title;
	private ValuationKey id;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public ValuationKey getId() {
		return id;
	}
	public void setId(ValuationKey id) {
		this.id = id;
	}
}
