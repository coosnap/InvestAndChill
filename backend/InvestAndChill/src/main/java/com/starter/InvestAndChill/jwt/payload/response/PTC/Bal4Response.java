package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal4Response extends ReportReponse{
	private String NetDebt;
	private String Workingcap;
	public String getNetDebt() {
		return NetDebt;
	}
	public void setNetDebt(String netDebt) {
		NetDebt = netDebt;
	}
	public String getWorkingcap() {
		return Workingcap;
	}
	public void setWorkingcap(String workingcap) {
		Workingcap = workingcap;
	}
	
	
}
