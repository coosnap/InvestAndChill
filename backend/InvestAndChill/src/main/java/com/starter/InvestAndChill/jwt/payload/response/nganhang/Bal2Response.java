package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal2Response extends ReportReponse{
	
	private Double tienGuiVaVayCacToChucTinDung;
	private Double tienGuiCuaKhachHang;
	private Double phatHanhGiayToCoGia;
	private Double vonChuSoHuu;
	public Double getTienGuiVaVayCacToChucTinDung() {
		return tienGuiVaVayCacToChucTinDung;
	}
	public void setTienGuiVaVayCacToChucTinDung(Double tienGuiVaVayCacToChucTinDung) {
		this.tienGuiVaVayCacToChucTinDung = tienGuiVaVayCacToChucTinDung;
	}
	public Double getTienGuiCuaKhachHang() {
		return tienGuiCuaKhachHang;
	}
	public void setTienGuiCuaKhachHang(Double tienGuiCuaKhachHang) {
		this.tienGuiCuaKhachHang = tienGuiCuaKhachHang;
	}
	public Double getPhatHanhGiayToCoGia() {
		return phatHanhGiayToCoGia;
	}
	public void setPhatHanhGiayToCoGia(Double phatHanhGiayToCoGia) {
		this.phatHanhGiayToCoGia = phatHanhGiayToCoGia;
	}
	public Double getVonChuSoHuu() {
		return vonChuSoHuu;
	}
	public void setVonChuSoHuu(Double vonChuSoHuu) {
		this.vonChuSoHuu = vonChuSoHuu;
	}
	public Double getNoPhaiTraKhac() {
		return noPhaiTraKhac;
	}
	public void setNoPhaiTraKhac(Double noPhaiTraKhac) {
		this.noPhaiTraKhac = noPhaiTraKhac;
	}
	private Double noPhaiTraKhac;

}
