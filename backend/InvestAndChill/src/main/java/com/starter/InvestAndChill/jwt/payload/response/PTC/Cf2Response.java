package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Cf2Response extends ReportReponse{

	private String netIncomeDANWC;
	private String netIncomeDANWCCAPEX;
	private String netIncomeDANWCRolling;
	private String netIncomeDANWCCAPEXRolling;
	public String getNetIncomeDANWC() {
		return netIncomeDANWC;
	}
	public void setNetIncomeDANWC(String netIncomeDANWC) {
		this.netIncomeDANWC = netIncomeDANWC;
	}
	public String getNetIncomeDANWCCAPEX() {
		return netIncomeDANWCCAPEX;
	}
	public void setNetIncomeDANWCCAPEX(String netIncomeDANWCCAPEX) {
		this.netIncomeDANWCCAPEX = netIncomeDANWCCAPEX;
	}
	public String getNetIncomeDANWCRolling() {
		return netIncomeDANWCRolling;
	}
	public void setNetIncomeDANWCRolling(String netIncomeDANWCRolling) {
		this.netIncomeDANWCRolling = netIncomeDANWCRolling;
	}
	public String getNetIncomeDANWCCAPEXRolling() {
		return netIncomeDANWCCAPEXRolling;
	}
	public void setNetIncomeDANWCCAPEXRolling(String netIncomeDANWCCAPEXRolling) {
		this.netIncomeDANWCCAPEXRolling = netIncomeDANWCCAPEXRolling;
	}
	
	
}
