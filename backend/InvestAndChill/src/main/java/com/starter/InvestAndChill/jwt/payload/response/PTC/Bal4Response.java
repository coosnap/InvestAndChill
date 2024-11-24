package com.starter.InvestAndChill.jwt.payload.response.PTC;

public class Bal4Response extends ReportReponse{
	private Double NetDebt;
	private Double Workingcap;
	public Double getNetDebt() {
		return NetDebt;
	}
	public void setNetDebt(Double netDebt) {
		NetDebt = netDebt;
	}
	public Double getWorkingcap() {
		return Workingcap;
	}
	public void setWorkingcap(Double workingcap) {
		Workingcap = workingcap;
	}
	
}
