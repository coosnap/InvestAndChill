package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal7Response extends ReportReponse{
	private Double duPhongRuiRoChoVayKhachHang;
	private Double duPhongBaoNoXau;
	private Double noXau;
	public Double getDuPhongRuiRoChoVayKhachHang() {
		return duPhongRuiRoChoVayKhachHang;
	}
	public void setDuPhongRuiRoChoVayKhachHang(Double duPhongRuiRoChoVayKhachHang) {
		this.duPhongRuiRoChoVayKhachHang = duPhongRuiRoChoVayKhachHang;
	}
	public Double getDuPhongBaoNoXau() {
		return duPhongBaoNoXau;
	}
	public void setDuPhongBaoNoXau(Double duPhongBaoNoXau) {
		this.duPhongBaoNoXau = duPhongBaoNoXau;
	}
	public Double getNoXau() {
		return noXau;
	}
	public void setNoXau(Double noXau) {
		this.noXau = noXau;
	}

}
