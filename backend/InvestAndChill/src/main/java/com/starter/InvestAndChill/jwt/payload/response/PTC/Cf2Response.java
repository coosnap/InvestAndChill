package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Cf2Response extends ReportReponse{

	private Double netIncomeDANWC;
	public Double getNetIncomeDANWC() {
		return netIncomeDANWC;
	}
	public void setNetIncomeDANWC(Double netIncomeDANWC) {
		this.netIncomeDANWC = netIncomeDANWC;
	}
	public Double getNetIncomeDANWCCAPEX() {
		return netIncomeDANWCCAPEX;
	}
	public void setNetIncomeDANWCCAPEX(Double netIncomeDANWCCAPEX) {
		this.netIncomeDANWCCAPEX = netIncomeDANWCCAPEX;
	}
	public Double getNetIncomeDANWCRolling() {
		return netIncomeDANWCRolling;
	}
	public void setNetIncomeDANWCRolling(Double netIncomeDANWCRolling) {
		this.netIncomeDANWCRolling = netIncomeDANWCRolling;
	}
	public Double getNetIncomeDANWCCAPEXRolling() {
		return netIncomeDANWCCAPEXRolling;
	}
	public void setNetIncomeDANWCCAPEXRolling(Double netIncomeDANWCCAPEXRolling) {
		this.netIncomeDANWCCAPEXRolling = netIncomeDANWCCAPEXRolling;
	}
	private Double netIncomeDANWCCAPEX;
	private Double netIncomeDANWCRolling;
	private Double netIncomeDANWCCAPEXRolling;
}
