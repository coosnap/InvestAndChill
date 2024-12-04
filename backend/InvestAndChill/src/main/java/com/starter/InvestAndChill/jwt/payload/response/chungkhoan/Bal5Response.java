package com.starter.InvestAndChill.jwt.payload.response.chungkhoan;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal5Response extends ReportReponse{
	public Double getGPFVTPL() {
		return GPFVTPL;
	}
	public void setGPFVTPL(Double gPFVTPL) {
		GPFVTPL = gPFVTPL;
	}
	public Double getGPCVMargin() {
		return GPCVMargin;
	}
	public void setGPCVMargin(Double gPCVMargin) {
		GPCVMargin = gPCVMargin;
	}
	public Double getGPMoiGioi() {
		return GPMoiGioi;
	}
	public void setGPMoiGioi(Double gPMoiGioi) {
		GPMoiGioi = gPMoiGioi;
	}
	public Double getGPHTM() {
		return GPHTM;
	}
	public void setGPHTM(Double gPHTM) {
		GPHTM = gPHTM;
	}
	public Double getGPAFS() {
		return GPAFS;
	}
	public void setGPAFS(Double gPAFS) {
		GPAFS = gPAFS;
	}
	public Double getGPBaoLanhPhatHanh() {
		return GPBaoLanhPhatHanh;
	}
	public void setGPBaoLanhPhatHanh(Double gPBaoLanhPhatHanh) {
		GPBaoLanhPhatHanh = gPBaoLanhPhatHanh;
	}
	public Double getGPKhac() {
		return GPKhac;
	}
	public void setGPKhac(Double gPKhac) {
		GPKhac = gPKhac;
	}
	private Double GPFVTPL;
	private Double GPCVMargin;
	private Double GPMoiGioi;
	private Double GPHTM;
	private Double GPAFS;
	private Double GPBaoLanhPhatHanh;
	private Double GPKhac;
}
