package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf2Response extends ReportReponse{

	private Integer CPHoatDongTTNHD;
	private Integer CPDuPhongTTNHD;
	public Integer getCPHoatDongTTNHD() {
		return CPHoatDongTTNHD;
	}
	public void setCPHoatDongTTNHD(Integer cPHoatDongTTNHD) {
		CPHoatDongTTNHD = cPHoatDongTTNHD;
	}
	public Integer getCPDuPhongTTNHD() {
		return CPDuPhongTTNHD;
	}
	public void setCPDuPhongTTNHD(Integer cPDuPhongTTNHD) {
		CPDuPhongTTNHD = cPDuPhongTTNHD;
	}
	public Integer getTongCPTTNHD() {
		return TongCPTTNHD;
	}
	public void setTongCPTTNHD(Integer tongCPTTNHD) {
		TongCPTTNHD = tongCPTTNHD;
	}
	private Integer TongCPTTNHD;

}
