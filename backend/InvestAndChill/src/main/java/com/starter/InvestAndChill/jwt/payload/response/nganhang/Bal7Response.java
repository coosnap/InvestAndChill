package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal7Response extends ReportReponse{
	private String duPhongRuiRoChoVayKhachHang;
	private String duPhongBaoNoXau;
	private String noXau;
	public String getDuPhongRuiRoChoVayKhachHang() {
		return duPhongRuiRoChoVayKhachHang;
	}
	public void setDuPhongRuiRoChoVayKhachHang(String duPhongRuiRoChoVayKhachHang) {
		this.duPhongRuiRoChoVayKhachHang = duPhongRuiRoChoVayKhachHang;
	}
	public String getDuPhongBaoNoXau() {
		return duPhongBaoNoXau;
	}
	public void setDuPhongBaoNoXau(String duPhongBaoNoXau) {
		this.duPhongBaoNoXau = duPhongBaoNoXau;
	}
	public String getNoXau() {
		return noXau;
	}
	public void setNoXau(String noXau) {
		this.noXau = noXau;
	}
	

}
