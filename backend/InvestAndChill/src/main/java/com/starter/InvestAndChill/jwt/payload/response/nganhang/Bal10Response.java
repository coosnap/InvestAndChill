package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal10Response extends ReportReponse{

	private Double doanhNghiepNhaNuoc;
	public Double getDoanhNghiepNhaNuoc() {
		return doanhNghiepNhaNuoc;
	}
	public void setDoanhNghiepNhaNuoc(Double doanhNghiepNhaNuoc) {
		this.doanhNghiepNhaNuoc = doanhNghiepNhaNuoc;
	}
	public Double getCongTyTNHHVaCoPhan() {
		return congTyTNHHVaCoPhan;
	}
	public void setCongTyTNHHVaCoPhan(Double congTyTNHHVaCoPhan) {
		this.congTyTNHHVaCoPhan = congTyTNHHVaCoPhan;
	}
	public Double getDoanhNghiepNuocNgoai() {
		return doanhNghiepNuocNgoai;
	}
	public void setDoanhNghiepNuocNgoai(Double doanhNghiepNuocNgoai) {
		this.doanhNghiepNuocNgoai = doanhNghiepNuocNgoai;
	}
	public Double getHopTacXaVaCongTyTuNhan() {
		return hopTacXaVaCongTyTuNhan;
	}
	public void setHopTacXaVaCongTyTuNhan(Double hopTacXaVaCongTyTuNhan) {
		this.hopTacXaVaCongTyTuNhan = hopTacXaVaCongTyTuNhan;
	}
	public Double getCaNhan() {
		return caNhan;
	}
	public void setCaNhan(Double caNhan) {
		this.caNhan = caNhan;
	}
	public Double getKhac() {
		return khac;
	}
	public void setKhac(Double khac) {
		this.khac = khac;
	}
	private Double congTyTNHHVaCoPhan;
	private Double doanhNghiepNuocNgoai;
	private Double hopTacXaVaCongTyTuNhan;
	private Double caNhan;
	private Double khac;

}
