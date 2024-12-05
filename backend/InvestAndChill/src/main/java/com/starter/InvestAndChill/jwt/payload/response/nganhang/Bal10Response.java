package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal10Response extends ReportReponse{

	private Integer doanhNghiepNhaNuoc;
	public Integer getDoanhNghiepNhaNuoc() {
		return doanhNghiepNhaNuoc;
	}
	public void setDoanhNghiepNhaNuoc(Integer doanhNghiepNhaNuoc) {
		this.doanhNghiepNhaNuoc = doanhNghiepNhaNuoc;
	}
	public Integer getCongTyTNHHVaCoPhan() {
		return congTyTNHHVaCoPhan;
	}
	public void setCongTyTNHHVaCoPhan(Integer congTyTNHHVaCoPhan) {
		this.congTyTNHHVaCoPhan = congTyTNHHVaCoPhan;
	}
	public Integer getDoanhNghiepNuocNgoai() {
		return doanhNghiepNuocNgoai;
	}
	public void setDoanhNghiepNuocNgoai(Integer doanhNghiepNuocNgoai) {
		this.doanhNghiepNuocNgoai = doanhNghiepNuocNgoai;
	}
	public Integer getHopTacXaVaCongTyTuNhan() {
		return hopTacXaVaCongTyTuNhan;
	}
	public void setHopTacXaVaCongTyTuNhan(Integer hopTacXaVaCongTyTuNhan) {
		this.hopTacXaVaCongTyTuNhan = hopTacXaVaCongTyTuNhan;
	}
	public Integer getCaNhan() {
		return caNhan;
	}
	public void setCaNhan(Integer caNhan) {
		this.caNhan = caNhan;
	}
	public Integer getKhac() {
		return khac;
	}
	public void setKhac(Integer khac) {
		this.khac = khac;
	}
	private Integer congTyTNHHVaCoPhan;
	private Integer doanhNghiepNuocNgoai;
	private Integer hopTacXaVaCongTyTuNhan;
	private Integer caNhan;
	private Integer khac;

}
