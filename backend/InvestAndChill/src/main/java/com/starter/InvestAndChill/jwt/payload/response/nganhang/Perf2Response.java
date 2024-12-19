package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf2Response extends ReportReponse{

	private Double CPHoatDongTTNHD;
	private Double CPDuPhongTTNHD;
	public Double getCPHoatDongTTNHD() {
		return CPHoatDongTTNHD;
	}
	public void setCPHoatDongTTNHD(Double cPHoatDongTTNHD) {
		CPHoatDongTTNHD = cPHoatDongTTNHD;
	}
	public Double getCPDuPhongTTNHD() {
		return CPDuPhongTTNHD;
	}
	public void setCPDuPhongTTNHD(Double cPDuPhongTTNHD) {
		CPDuPhongTTNHD = cPDuPhongTTNHD;
	}
	public Double getTongCPTTNHD() {
		return TongCPTTNHD;
	}
	public void setTongCPTTNHD(Double tongCPTTNHD) {
		TongCPTTNHD = tongCPTTNHD;
	}
	private Double TongCPTTNHD;

}
