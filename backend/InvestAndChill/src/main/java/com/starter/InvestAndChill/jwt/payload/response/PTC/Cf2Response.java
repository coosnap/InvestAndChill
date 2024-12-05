package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Cf2Response extends ReportReponse{

	private Integer netIncomeDANWC;
	public Integer getNetIncomeDANWC() {
		return netIncomeDANWC;
	}
	public void setNetIncomeDANWC(Integer netIncomeDANWC) {
		this.netIncomeDANWC = netIncomeDANWC;
	}
	public Integer getNetIncomeDANWCCAPEX() {
		return netIncomeDANWCCAPEX;
	}
	public void setNetIncomeDANWCCAPEX(Integer netIncomeDANWCCAPEX) {
		this.netIncomeDANWCCAPEX = netIncomeDANWCCAPEX;
	}
	public Integer getNetIncomeDANWCRolling() {
		return netIncomeDANWCRolling;
	}
	public void setNetIncomeDANWCRolling(Integer netIncomeDANWCRolling) {
		this.netIncomeDANWCRolling = netIncomeDANWCRolling;
	}
	public Integer getNetIncomeDANWCCAPEXRolling() {
		return netIncomeDANWCCAPEXRolling;
	}
	public void setNetIncomeDANWCCAPEXRolling(Integer netIncomeDANWCCAPEXRolling) {
		this.netIncomeDANWCCAPEXRolling = netIncomeDANWCCAPEXRolling;
	}
	private Integer netIncomeDANWCCAPEX;
	private Integer netIncomeDANWCRolling;
	private Integer netIncomeDANWCCAPEXRolling;
}
