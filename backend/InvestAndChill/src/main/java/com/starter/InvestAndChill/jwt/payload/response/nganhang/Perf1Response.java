package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf1Response extends ReportReponse{
	private Integer tongThuNhapHoatDong;
	private Integer coDongCuaCongTyMe;
	public Integer getTongThuNhapHoatDong() {
		return tongThuNhapHoatDong;
	}
	public void setTongThuNhapHoatDong(Integer tongThuNhapHoatDong) {
		this.tongThuNhapHoatDong = tongThuNhapHoatDong;
	}
	public Integer getCoDongCuaCongTyMe() {
		return coDongCuaCongTyMe;
	}
	public void setCoDongCuaCongTyMe(Integer coDongCuaCongTyMe) {
		this.coDongCuaCongTyMe = coDongCuaCongTyMe;
	}
	public Integer getBienLaiRong() {
		return bienLaiRong;
	}
	public void setBienLaiRong(Integer bienLaiRong) {
		this.bienLaiRong = bienLaiRong;
	}
	private Integer bienLaiRong;
}
