package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import javax.persistence.Column;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal1Response extends ReportReponse{

	private Integer TGVaChoVayCacTCTDKhacTruocDuPhong;
	private Integer choVayKhachHang;
	private Integer chungKhoanTruocDP;
	private Integer cacTaiSanKhac;
	public Integer getTGVaChoVayCacTCTDKhacTruocDuPhong() {
		return TGVaChoVayCacTCTDKhacTruocDuPhong;
	}
	public void setTGVaChoVayCacTCTDKhacTruocDuPhong(Integer tGVaChoVayCacTCTDKhacTruocDuPhong) {
		TGVaChoVayCacTCTDKhacTruocDuPhong = tGVaChoVayCacTCTDKhacTruocDuPhong;
	}
	public Integer getChoVayKhachHang() {
		return choVayKhachHang;
	}
	public void setChoVayKhachHang(Integer choVayKhachHang) {
		this.choVayKhachHang = choVayKhachHang;
	}
	public Integer getChungKhoanTruocDP() {
		return chungKhoanTruocDP;
	}
	public void setChungKhoanTruocDP(Integer chungKhoanTruocDP) {
		this.chungKhoanTruocDP = chungKhoanTruocDP;
	}
	public Integer getCacTaiSanKhac() {
		return cacTaiSanKhac;
	}
	public void setCacTaiSanKhac(Integer cacTaiSanKhac) {
		this.cacTaiSanKhac = cacTaiSanKhac;
	}
	

}
