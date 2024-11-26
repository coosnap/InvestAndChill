package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Cf4Response extends ReportReponse{

	private Double nguoiMuaTraTienTruoc;
	private Double doanhThuChuaThucHienNganHan;
	private Double nguoiMuaTraTienTruocDaiHan;
	private Double doanhThuChuaThucHien;
	public Double getNguoiMuaTraTienTruoc() {
		return nguoiMuaTraTienTruoc;
	}
	public void setNguoiMuaTraTienTruoc(Double nguoiMuaTraTienTruoc) {
		this.nguoiMuaTraTienTruoc = nguoiMuaTraTienTruoc;
	}
	public Double getDoanhThuChuaThucHienNganHan() {
		return doanhThuChuaThucHienNganHan;
	}
	public void setDoanhThuChuaThucHienNganHan(Double doanhThuChuaThucHienNganHan) {
		this.doanhThuChuaThucHienNganHan = doanhThuChuaThucHienNganHan;
	}
	public Double getNguoiMuaTraTienTruocDaiHan() {
		return nguoiMuaTraTienTruocDaiHan;
	}
	public void setNguoiMuaTraTienTruocDaiHan(Double nguoiMuaTraTienTruocDaiHan) {
		this.nguoiMuaTraTienTruocDaiHan = nguoiMuaTraTienTruocDaiHan;
	}
	public Double getDoanhThuChuaThucHien() {
		return doanhThuChuaThucHien;
	}
	public void setDoanhThuChuaThucHien(Double doanhThuChuaThucHien) {
		this.doanhThuChuaThucHien = doanhThuChuaThucHien;
	}
}
