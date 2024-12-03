package com.starter.InvestAndChill.jwt.payload.response.chungkhoan;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal2Response extends ReportReponse{
	
	public String getTienVaTaiSanTuongDuongTien() {
		return tienVaTaiSanTuongDuongTien;
	}
	public void setTienVaTaiSanTuongDuongTien(String tienVaTaiSanTuongDuongTien) {
		this.tienVaTaiSanTuongDuongTien = tienVaTaiSanTuongDuongTien;
	}
	public String getCacTaiSanTaiChinhThongQuaGhiNhanLaiLo() {
		return cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	}
	public void setCacTaiSanTaiChinhThongQuaGhiNhanLaiLo(String cacTaiSanTaiChinhThongQuaGhiNhanLaiLo) {
		this.cacTaiSanTaiChinhThongQuaGhiNhanLaiLo = cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	}
	public String getCacKhoanDauTuNamGiuDenNgayDaoHan() {
		return cacKhoanDauTuNamGiuDenNgayDaoHan;
	}
	public void setCacKhoanDauTuNamGiuDenNgayDaoHan(String cacKhoanDauTuNamGiuDenNgayDaoHan) {
		this.cacKhoanDauTuNamGiuDenNgayDaoHan = cacKhoanDauTuNamGiuDenNgayDaoHan;
	}
	public String getCacKhoanChoVay() {
		return cacKhoanChoVay;
	}
	public void setCacKhoanChoVay(String cacKhoanChoVay) {
		this.cacKhoanChoVay = cacKhoanChoVay;
	}
	public String getCacKhoanTaiChinhSanSangDeBan() {
		return cacKhoanTaiChinhSanSangDeBan;
	}
	public void setCacKhoanTaiChinhSanSangDeBan(String cacKhoanTaiChinhSanSangDeBan) {
		this.cacKhoanTaiChinhSanSangDeBan = cacKhoanTaiChinhSanSangDeBan;
	}
	public String getTaiSanKhac() {
		return taiSanKhac;
	}
	public void setTaiSanKhac(String taiSanKhac) {
		this.taiSanKhac = taiSanKhac;
	}
	private String tienVaTaiSanTuongDuongTien;
	private String cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	private String cacKhoanDauTuNamGiuDenNgayDaoHan;
	private String cacKhoanChoVay;
	private String cacKhoanTaiChinhSanSangDeBan;
	private String taiSanKhac;
}
