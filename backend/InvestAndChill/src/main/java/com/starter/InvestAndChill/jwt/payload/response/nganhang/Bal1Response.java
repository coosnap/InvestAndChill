package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import javax.persistence.Column;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal1Response extends ReportReponse{

	private String TGVaChoVayCacTCTDKhacTruocDuPhong;
	private String choVayKhachHang;
	private String chungKhoanTruocDP;
	private String cacTaiSanKhac;
	public String getTGVaChoVayCacTCTDKhacTruocDuPhong() {
		return TGVaChoVayCacTCTDKhacTruocDuPhong;
	}
	public void setTGVaChoVayCacTCTDKhacTruocDuPhong(String tGVaChoVayCacTCTDKhacTruocDuPhong) {
		TGVaChoVayCacTCTDKhacTruocDuPhong = tGVaChoVayCacTCTDKhacTruocDuPhong;
	}
	public String getChoVayKhachHang() {
		return choVayKhachHang;
	}
	public void setChoVayKhachHang(String choVayKhachHang) {
		this.choVayKhachHang = choVayKhachHang;
	}
	public String getChungKhoanTruocDP() {
		return chungKhoanTruocDP;
	}
	public void setChungKhoanTruocDP(String chungKhoanTruocDP) {
		this.chungKhoanTruocDP = chungKhoanTruocDP;
	}
	public String getCacTaiSanKhac() {
		return cacTaiSanKhac;
	}
	public void setCacTaiSanKhac(String cacTaiSanKhac) {
		this.cacTaiSanKhac = cacTaiSanKhac;
	}
	
	
	

}
