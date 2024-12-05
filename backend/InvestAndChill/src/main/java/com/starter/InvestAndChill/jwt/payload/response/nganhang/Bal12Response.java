package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import javax.persistence.Column;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal12Response extends ReportReponse{

	private Integer doanhNghiepNhaNuocTG;
	private Integer doanhNghiepTuNhanTG;
	private Integer doanhNghiepNuocNgoaiTG;
	private Integer caNhanTG;
	private Integer khacTG;
	public Integer getDoanhNghiepNhaNuocTG() {
		return doanhNghiepNhaNuocTG;
	}
	public void setDoanhNghiepNhaNuocTG(Integer doanhNghiepNhaNuocTG) {
		this.doanhNghiepNhaNuocTG = doanhNghiepNhaNuocTG;
	}
	public Integer getDoanhNghiepTuNhanTG() {
		return doanhNghiepTuNhanTG;
	}
	public void setDoanhNghiepTuNhanTG(Integer doanhNghiepTuNhanTG) {
		this.doanhNghiepTuNhanTG = doanhNghiepTuNhanTG;
	}
	public Integer getDoanhNghiepNuocNgoaiTG() {
		return doanhNghiepNuocNgoaiTG;
	}
	public void setDoanhNghiepNuocNgoaiTG(Integer doanhNghiepNuocNgoaiTG) {
		this.doanhNghiepNuocNgoaiTG = doanhNghiepNuocNgoaiTG;
	}
	public Integer getCaNhanTG() {
		return caNhanTG;
	}
	public void setCaNhanTG(Integer caNhanTG) {
		this.caNhanTG = caNhanTG;
	}
	public Integer getKhacTG() {
		return khacTG;
	}
	public void setKhacTG(Integer khacTG) {
		this.khacTG = khacTG;
	}

}
