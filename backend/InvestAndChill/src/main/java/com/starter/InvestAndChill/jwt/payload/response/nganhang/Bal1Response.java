package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import javax.persistence.Column;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal1Response extends ReportReponse{

	private Double TGVaChoVayCacTCTDKhacTruocDuPhong;
	private Double choVayKhachHang;
	private Double chungKhoanTruocDP;
	private Double cacTaiSanKhac;
	public Double getTGVaChoVayCacTCTDKhacTruocDuPhong() {
		return TGVaChoVayCacTCTDKhacTruocDuPhong;
	}
	public void setTGVaChoVayCacTCTDKhacTruocDuPhong(Double tGVaChoVayCacTCTDKhacTruocDuPhong) {
		TGVaChoVayCacTCTDKhacTruocDuPhong = tGVaChoVayCacTCTDKhacTruocDuPhong;
	}
	public Double getChoVayKhachHang() {
		return choVayKhachHang;
	}
	public void setChoVayKhachHang(Double choVayKhachHang) {
		this.choVayKhachHang = choVayKhachHang;
	}
	public Double getChungKhoanTruocDP() {
		return chungKhoanTruocDP;
	}
	public void setChungKhoanTruocDP(Double chungKhoanTruocDP) {
		this.chungKhoanTruocDP = chungKhoanTruocDP;
	}
	public Double getCacTaiSanKhac() {
		return cacTaiSanKhac;
	}
	public void setCacTaiSanKhac(Double cacTaiSanKhac) {
		this.cacTaiSanKhac = cacTaiSanKhac;
	}
	

}
