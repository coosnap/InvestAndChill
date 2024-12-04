package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal4Response extends ReportReponse{
	private Integer NetDebt;
	private Integer Workingcap;
	public Integer getNetDebt() {
		return NetDebt;
	}
	public void setNetDebt(Integer netDebt) {
		NetDebt = netDebt;
	}
	public Integer getWorkingcap() {
		return Workingcap;
	}
	public void setWorkingcap(Integer workingcap) {
		Workingcap = workingcap;
	}
	
	
}
