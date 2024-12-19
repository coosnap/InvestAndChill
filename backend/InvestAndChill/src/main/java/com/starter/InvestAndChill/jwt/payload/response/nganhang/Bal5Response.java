package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal5Response extends ReportReponse{
	private Double taiSanCoKhac;
	private Double cacKhoanLaiPhiPhaiThu;
	private Double TSCoKhacTongTS;
	private Double laiPhiPhaiThuChoVayKhachHang;
	public Double getTaiSanCoKhac() {
		return taiSanCoKhac;
	}
	public void setTaiSanCoKhac(Double taiSanCoKhac) {
		this.taiSanCoKhac = taiSanCoKhac;
	}
	public Double getCacKhoanLaiPhiPhaiThu() {
		return cacKhoanLaiPhiPhaiThu;
	}
	public void setCacKhoanLaiPhiPhaiThu(Double cacKhoanLaiPhiPhaiThu) {
		this.cacKhoanLaiPhiPhaiThu = cacKhoanLaiPhiPhaiThu;
	}
	public Double getTSCoKhacTongTS() {
		return TSCoKhacTongTS;
	}
	public void setTSCoKhacTongTS(Double tSCoKhacTongTS) {
		TSCoKhacTongTS = tSCoKhacTongTS;
	}
	public Double getLaiPhiPhaiThuChoVayKhachHang() {
		return laiPhiPhaiThuChoVayKhachHang;
	}
	public void setLaiPhiPhaiThuChoVayKhachHang(Double laiPhiPhaiThuChoVayKhachHang) {
		this.laiPhiPhaiThuChoVayKhachHang = laiPhiPhaiThuChoVayKhachHang;
	}

}
