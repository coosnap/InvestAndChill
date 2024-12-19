package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import javax.persistence.Column;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal12Response extends ReportReponse{

	private Double doanhNghiepNhaNuocTG;
	private Double doanhNghiepTuNhanTG;
	private Double doanhNghiepNuocNgoaiTG;
	private Double caNhanTG;
	private Double khacTG;
	public Double getDoanhNghiepNhaNuocTG() {
		return doanhNghiepNhaNuocTG;
	}
	public void setDoanhNghiepNhaNuocTG(Double doanhNghiepNhaNuocTG) {
		this.doanhNghiepNhaNuocTG = doanhNghiepNhaNuocTG;
	}
	public Double getDoanhNghiepTuNhanTG() {
		return doanhNghiepTuNhanTG;
	}
	public void setDoanhNghiepTuNhanTG(Double doanhNghiepTuNhanTG) {
		this.doanhNghiepTuNhanTG = doanhNghiepTuNhanTG;
	}
	public Double getDoanhNghiepNuocNgoaiTG() {
		return doanhNghiepNuocNgoaiTG;
	}
	public void setDoanhNghiepNuocNgoaiTG(Double doanhNghiepNuocNgoaiTG) {
		this.doanhNghiepNuocNgoaiTG = doanhNghiepNuocNgoaiTG;
	}
	public Double getCaNhanTG() {
		return caNhanTG;
	}
	public void setCaNhanTG(Double caNhanTG) {
		this.caNhanTG = caNhanTG;
	}
	public Double getKhacTG() {
		return khacTG;
	}
	public void setKhacTG(Double khacTG) {
		this.khacTG = khacTG;
	}

}
