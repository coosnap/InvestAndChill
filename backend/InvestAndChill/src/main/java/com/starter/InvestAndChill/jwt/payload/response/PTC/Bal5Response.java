package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal5Response extends ReportReponse{
	private String vongQuayHangTonKho;
	private String vongQuayPhaiThu;
	private String vongQuayPhaiTra;
	public String getVongQuayHangTonKho() {
		return vongQuayHangTonKho;
	}
	public void setVongQuayHangTonKho(String vongQuayHangTonKho) {
		this.vongQuayHangTonKho = vongQuayHangTonKho;
	}
	public String getVongQuayPhaiThu() {
		return vongQuayPhaiThu;
	}
	public void setVongQuayPhaiThu(String vongQuayPhaiThu) {
		this.vongQuayPhaiThu = vongQuayPhaiThu;
	}
	public String getVongQuayPhaiTra() {
		return vongQuayPhaiTra;
	}
	public void setVongQuayPhaiTra(String vongQuayPhaiTra) {
		this.vongQuayPhaiTra = vongQuayPhaiTra;
	}
	
}
