package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal5Response extends ReportReponse{
	private String taiSanCoKhac;
	private String cacKhoanLaiPhiPhaiThu;
	private String TSCoKhacTongTS;
	private String laiPhiPhaiThuChoVayKhachHang;
	public String getTaiSanCoKhac() {
		return taiSanCoKhac;
	}
	public void setTaiSanCoKhac(String taiSanCoKhac) {
		this.taiSanCoKhac = taiSanCoKhac;
	}
	public String getCacKhoanLaiPhiPhaiThu() {
		return cacKhoanLaiPhiPhaiThu;
	}
	public void setCacKhoanLaiPhiPhaiThu(String cacKhoanLaiPhiPhaiThu) {
		this.cacKhoanLaiPhiPhaiThu = cacKhoanLaiPhiPhaiThu;
	}
	public String getTSCoKhacTongTS() {
		return TSCoKhacTongTS;
	}
	public void setTSCoKhacTongTS(String tSCoKhacTongTS) {
		TSCoKhacTongTS = tSCoKhacTongTS;
	}
	public String getLaiPhiPhaiThuChoVayKhachHang() {
		return laiPhiPhaiThuChoVayKhachHang;
	}
	public void setLaiPhiPhaiThuChoVayKhachHang(String laiPhiPhaiThuChoVayKhachHang) {
		this.laiPhiPhaiThuChoVayKhachHang = laiPhiPhaiThuChoVayKhachHang;
	}
}
