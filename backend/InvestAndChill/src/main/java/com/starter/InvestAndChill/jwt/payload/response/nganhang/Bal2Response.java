package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal2Response extends ReportReponse{
	
	private Integer tienGuiVaVayCacToChucTinDung;
	private Integer tienGuiCuaKhachHang;
	private Integer phatHanhGiayToCoGia;
	private Integer vonChuSoHuu;
	public Integer getTienGuiVaVayCacToChucTinDung() {
		return tienGuiVaVayCacToChucTinDung;
	}
	public void setTienGuiVaVayCacToChucTinDung(Integer tienGuiVaVayCacToChucTinDung) {
		this.tienGuiVaVayCacToChucTinDung = tienGuiVaVayCacToChucTinDung;
	}
	public Integer getTienGuiCuaKhachHang() {
		return tienGuiCuaKhachHang;
	}
	public void setTienGuiCuaKhachHang(Integer tienGuiCuaKhachHang) {
		this.tienGuiCuaKhachHang = tienGuiCuaKhachHang;
	}
	public Integer getPhatHanhGiayToCoGia() {
		return phatHanhGiayToCoGia;
	}
	public void setPhatHanhGiayToCoGia(Integer phatHanhGiayToCoGia) {
		this.phatHanhGiayToCoGia = phatHanhGiayToCoGia;
	}
	public Integer getVonChuSoHuu() {
		return vonChuSoHuu;
	}
	public void setVonChuSoHuu(Integer vonChuSoHuu) {
		this.vonChuSoHuu = vonChuSoHuu;
	}
	public Integer getNoPhaiTraKhac() {
		return noPhaiTraKhac;
	}
	public void setNoPhaiTraKhac(Integer noPhaiTraKhac) {
		this.noPhaiTraKhac = noPhaiTraKhac;
	}
	private Integer noPhaiTraKhac;

}
