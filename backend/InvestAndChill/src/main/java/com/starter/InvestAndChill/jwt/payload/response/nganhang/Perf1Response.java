package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf1Response extends ReportReponse{
	private String tongThuNhapHoatDong;
	private String coDongCuaCongTyMe;
	private String bienLaiRong;
	public String getTongThuNhapHoatDong() {
		return tongThuNhapHoatDong;
	}
	public void setTongThuNhapHoatDong(String tongThuNhapHoatDong) {
		this.tongThuNhapHoatDong = tongThuNhapHoatDong;
	}
	public String getCoDongCuaCongTyMe() {
		return coDongCuaCongTyMe;
	}
	public void setCoDongCuaCongTyMe(String coDongCuaCongTyMe) {
		this.coDongCuaCongTyMe = coDongCuaCongTyMe;
	}
	public String getBienLaiRong() {
		return bienLaiRong;
	}
	public void setBienLaiRong(String bienLaiRong) {
		this.bienLaiRong = bienLaiRong;
	}
	
	
	
}
