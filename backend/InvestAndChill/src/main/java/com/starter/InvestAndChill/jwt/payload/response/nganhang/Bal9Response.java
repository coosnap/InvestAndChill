package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal9Response extends ReportReponse{

	private Double choVayNganHan;
	private Double choVayTrungHan;
	public Double getChoVayNganHan() {
		return choVayNganHan;
	}
	public void setChoVayNganHan(Double choVayNganHan) {
		this.choVayNganHan = choVayNganHan;
	}
	public Double getChoVayTrungHan() {
		return choVayTrungHan;
	}
	public void setChoVayTrungHan(Double choVayTrungHan) {
		this.choVayTrungHan = choVayTrungHan;
	}
	public Double getChoVayDaiHan() {
		return choVayDaiHan;
	}
	public void setChoVayDaiHan(Double choVayDaiHan) {
		this.choVayDaiHan = choVayDaiHan;
	}
	private Double choVayDaiHan;

}
