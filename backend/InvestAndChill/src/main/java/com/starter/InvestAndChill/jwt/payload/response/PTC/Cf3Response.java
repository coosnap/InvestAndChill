package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Cf3Response extends ReportReponse{
	private Double noVay;
	private Double giaTriThuanDauTuNganHan;
	private Double tienVaTuongDuongTien;
	private Double dauTuNamGiuDenNgayDaoHan;
	private Double tienLongTrongPhaiThuChoVay;
	private Double NetDebt;
	public Double getNetDebt() {
		return NetDebt;
	}
	public void setNetDebt(Double netDebt) {
		NetDebt = netDebt;
	}
	public Double getNoVay() {
		return noVay;
	}
	public void setNoVay(Double noVay) {
		this.noVay = noVay;
	}
	public Double getGiaTriThuanDauTuNganHan() {
		return giaTriThuanDauTuNganHan;
	}
	public void setGiaTriThuanDauTuNganHan(Double giaTriThuanDauTuNganHan) {
		this.giaTriThuanDauTuNganHan = giaTriThuanDauTuNganHan;
	}
	public Double getTienVaTuongDuongTien() {
		return tienVaTuongDuongTien;
	}
	public void setTienVaTuongDuongTien(Double tienVaTuongDuongTien) {
		this.tienVaTuongDuongTien = tienVaTuongDuongTien;
	}
	public Double getDauTuNamGiuDenNgayDaoHan() {
		return dauTuNamGiuDenNgayDaoHan;
	}
	public void setDauTuNamGiuDenNgayDaoHan(Double dauTuNamGiuDenNgayDaoHan) {
		this.dauTuNamGiuDenNgayDaoHan = dauTuNamGiuDenNgayDaoHan;
	}
	public Double getTienLongTrongPhaiThuChoVay() {
		return tienLongTrongPhaiThuChoVay;
	}
	public void setTienLongTrongPhaiThuChoVay(Double tienLongTrongPhaiThuChoVay) {
		this.tienLongTrongPhaiThuChoVay = tienLongTrongPhaiThuChoVay;
	}
	

}
