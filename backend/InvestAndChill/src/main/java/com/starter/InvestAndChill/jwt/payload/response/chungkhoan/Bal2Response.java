package com.starter.InvestAndChill.jwt.payload.response.chungkhoan;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal2Response extends ReportReponse{
	
	public Double getTienVaTaiSanTuongDuongTien() {
		return tienVaTaiSanTuongDuongTien;
	}
	public void setTienVaTaiSanTuongDuongTien(Double tienVaTaiSanTuongDuongTien) {
		this.tienVaTaiSanTuongDuongTien = tienVaTaiSanTuongDuongTien;
	}
	public Double getCacTaiSanTaiChinhThongQuaGhiNhanLaiLo() {
		return cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	}
	public void setCacTaiSanTaiChinhThongQuaGhiNhanLaiLo(Double cacTaiSanTaiChinhThongQuaGhiNhanLaiLo) {
		this.cacTaiSanTaiChinhThongQuaGhiNhanLaiLo = cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	}
	public Double getCacKhoanDauTuNamGiuDenNgayDaoHan() {
		return cacKhoanDauTuNamGiuDenNgayDaoHan;
	}
	public void setCacKhoanDauTuNamGiuDenNgayDaoHan(Double cacKhoanDauTuNamGiuDenNgayDaoHan) {
		this.cacKhoanDauTuNamGiuDenNgayDaoHan = cacKhoanDauTuNamGiuDenNgayDaoHan;
	}
	public Double getCacKhoanChoVay() {
		return cacKhoanChoVay;
	}
	public void setCacKhoanChoVay(Double cacKhoanChoVay) {
		this.cacKhoanChoVay = cacKhoanChoVay;
	}
	public Double getCacKhoanTaiChinhSanSangDeBan() {
		return cacKhoanTaiChinhSanSangDeBan;
	}
	public void setCacKhoanTaiChinhSanSangDeBan(Double cacKhoanTaiChinhSanSangDeBan) {
		this.cacKhoanTaiChinhSanSangDeBan = cacKhoanTaiChinhSanSangDeBan;
	}
	public Double getTaiSanKhac() {
		return taiSanKhac;
	}
	public void setTaiSanKhac(Double taiSanKhac) {
		this.taiSanKhac = taiSanKhac;
	}
	private Double tienVaTaiSanTuongDuongTien;
	private Double cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	private Double cacKhoanDauTuNamGiuDenNgayDaoHan;
	private Double cacKhoanChoVay;
	private Double cacKhoanTaiChinhSanSangDeBan;
	private Double taiSanKhac;
}
