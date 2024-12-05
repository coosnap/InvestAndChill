package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal5Response extends ReportReponse{
	private Integer taiSanCoKhac;
	private Integer cacKhoanLaiPhiPhaiThu;
	private Integer TSCoKhacTongTS;
	private Integer laiPhiPhaiThuChoVayKhachHang;
	public Integer getTaiSanCoKhac() {
		return taiSanCoKhac;
	}
	public void setTaiSanCoKhac(Integer taiSanCoKhac) {
		this.taiSanCoKhac = taiSanCoKhac;
	}
	public Integer getCacKhoanLaiPhiPhaiThu() {
		return cacKhoanLaiPhiPhaiThu;
	}
	public void setCacKhoanLaiPhiPhaiThu(Integer cacKhoanLaiPhiPhaiThu) {
		this.cacKhoanLaiPhiPhaiThu = cacKhoanLaiPhiPhaiThu;
	}
	public Integer getTSCoKhacTongTS() {
		return TSCoKhacTongTS;
	}
	public void setTSCoKhacTongTS(Integer tSCoKhacTongTS) {
		TSCoKhacTongTS = tSCoKhacTongTS;
	}
	public Integer getLaiPhiPhaiThuChoVayKhachHang() {
		return laiPhiPhaiThuChoVayKhachHang;
	}
	public void setLaiPhiPhaiThuChoVayKhachHang(Integer laiPhiPhaiThuChoVayKhachHang) {
		this.laiPhiPhaiThuChoVayKhachHang = laiPhiPhaiThuChoVayKhachHang;
	}

}
