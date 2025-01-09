package com.starter.InvestAndChill.jwt.payload.response.chungkhoan;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Other1Response extends ReportReponse{
	private Double tienGuiCuaKhachHang;
	private Double choVayKyQuy;
	public Double getTienGuiCuaKhachHang() {
		return tienGuiCuaKhachHang;
	}
	public void setTienGuiCuaKhachHang(Double tienGuiCuaKhachHang) {
		this.tienGuiCuaKhachHang = tienGuiCuaKhachHang;
	}
	public Double getChoVayKyQuy() {
		return choVayKyQuy;
	}
	public void setChoVayKyQuy(Double choVayKyQuy) {
		this.choVayKyQuy = choVayKyQuy;
	}
}
