package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf1Response extends ReportReponse{
	private Double tongThuNhapHoatDong;
	private Double coDongCuaCongTyMe;
	public Double getTongThuNhapHoatDong() {
		return tongThuNhapHoatDong;
	}
	public void setTongThuNhapHoatDong(Double tongThuNhapHoatDong) {
		this.tongThuNhapHoatDong = tongThuNhapHoatDong;
	}
	public Double getCoDongCuaCongTyMe() {
		return coDongCuaCongTyMe;
	}
	public void setCoDongCuaCongTyMe(Double coDongCuaCongTyMe) {
		this.coDongCuaCongTyMe = coDongCuaCongTyMe;
	}
	public Double getBienLaiRong() {
		return bienLaiRong;
	}
	public void setBienLaiRong(Double bienLaiRong) {
		this.bienLaiRong = bienLaiRong;
	}
	private Double bienLaiRong;
}
