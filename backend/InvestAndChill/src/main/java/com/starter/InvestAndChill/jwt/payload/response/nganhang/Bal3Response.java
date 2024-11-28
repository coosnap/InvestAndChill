package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal3Response extends ReportReponse{
	private Double tinDungSVDauNam;
	private Double huyDongSVDauNam;
	public Double getTinDungSVDauNam() {
		return tinDungSVDauNam;
	}
	public void setTinDungSVDauNam(Double tinDungSVDauNam) {
		this.tinDungSVDauNam = tinDungSVDauNam;
	}
	public Double getHuyDongSVDauNam() {
		return huyDongSVDauNam;
	}
	public void setHuyDongSVDauNam(Double huyDongSVDauNam) {
		this.huyDongSVDauNam = huyDongSVDauNam;
	}
}
