package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal9Response extends ReportReponse{

	private Integer choVayNganHan;
	private Integer choVayTrungHan;
	public Integer getChoVayNganHan() {
		return choVayNganHan;
	}
	public void setChoVayNganHan(Integer choVayNganHan) {
		this.choVayNganHan = choVayNganHan;
	}
	public Integer getChoVayTrungHan() {
		return choVayTrungHan;
	}
	public void setChoVayTrungHan(Integer choVayTrungHan) {
		this.choVayTrungHan = choVayTrungHan;
	}
	public Integer getChoVayDaiHan() {
		return choVayDaiHan;
	}
	public void setChoVayDaiHan(Integer choVayDaiHan) {
		this.choVayDaiHan = choVayDaiHan;
	}
	private Integer choVayDaiHan;

}
