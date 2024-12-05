package com.starter.InvestAndChill.jwt.payload.response.chungkhoan;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal2Response extends ReportReponse{
	
	public Integer getTienVaTaiSanTuongDuongTien() {
		return tienVaTaiSanTuongDuongTien;
	}
	public void setTienVaTaiSanTuongDuongTien(Integer tienVaTaiSanTuongDuongTien) {
		this.tienVaTaiSanTuongDuongTien = tienVaTaiSanTuongDuongTien;
	}
	public Integer getCacTaiSanTaiChinhThongQuaGhiNhanLaiLo() {
		return cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	}
	public void setCacTaiSanTaiChinhThongQuaGhiNhanLaiLo(Integer cacTaiSanTaiChinhThongQuaGhiNhanLaiLo) {
		this.cacTaiSanTaiChinhThongQuaGhiNhanLaiLo = cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	}
	public Integer getCacKhoanDauTuNamGiuDenNgayDaoHan() {
		return cacKhoanDauTuNamGiuDenNgayDaoHan;
	}
	public void setCacKhoanDauTuNamGiuDenNgayDaoHan(Integer cacKhoanDauTuNamGiuDenNgayDaoHan) {
		this.cacKhoanDauTuNamGiuDenNgayDaoHan = cacKhoanDauTuNamGiuDenNgayDaoHan;
	}
	public Integer getCacKhoanChoVay() {
		return cacKhoanChoVay;
	}
	public void setCacKhoanChoVay(Integer cacKhoanChoVay) {
		this.cacKhoanChoVay = cacKhoanChoVay;
	}
	public Integer getCacKhoanTaiChinhSanSangDeBan() {
		return cacKhoanTaiChinhSanSangDeBan;
	}
	public void setCacKhoanTaiChinhSanSangDeBan(Integer cacKhoanTaiChinhSanSangDeBan) {
		this.cacKhoanTaiChinhSanSangDeBan = cacKhoanTaiChinhSanSangDeBan;
	}
	public Integer getTaiSanKhac() {
		return taiSanKhac;
	}
	public void setTaiSanKhac(Integer taiSanKhac) {
		this.taiSanKhac = taiSanKhac;
	}
	private Integer tienVaTaiSanTuongDuongTien;
	private Integer cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	private Integer cacKhoanDauTuNamGiuDenNgayDaoHan;
	private Integer cacKhoanChoVay;
	private Integer cacKhoanTaiChinhSanSangDeBan;
	private Integer taiSanKhac;
}
