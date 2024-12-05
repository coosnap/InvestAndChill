package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal7Response extends ReportReponse{
	private Integer duPhongRuiRoChoVayKhachHang;
	private Integer duPhongBaoNoXau;
	private Integer noXau;
	public Integer getDuPhongRuiRoChoVayKhachHang() {
		return duPhongRuiRoChoVayKhachHang;
	}
	public void setDuPhongRuiRoChoVayKhachHang(Integer duPhongRuiRoChoVayKhachHang) {
		this.duPhongRuiRoChoVayKhachHang = duPhongRuiRoChoVayKhachHang;
	}
	public Integer getDuPhongBaoNoXau() {
		return duPhongBaoNoXau;
	}
	public void setDuPhongBaoNoXau(Integer duPhongBaoNoXau) {
		this.duPhongBaoNoXau = duPhongBaoNoXau;
	}
	public Integer getNoXau() {
		return noXau;
	}
	public void setNoXau(Integer noXau) {
		this.noXau = noXau;
	}

}
