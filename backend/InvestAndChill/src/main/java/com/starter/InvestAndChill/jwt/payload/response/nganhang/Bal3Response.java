package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal3Response extends ReportReponse{
	private Integer tinDungSVDauNam;
	private Integer huyDongSVDauNam;
	public Integer getTinDungSVDauNam() {
		return tinDungSVDauNam;
	}
	public void setTinDungSVDauNam(Integer tinDungSVDauNam) {
		this.tinDungSVDauNam = tinDungSVDauNam;
	}
	public Integer getHuyDongSVDauNam() {
		return huyDongSVDauNam;
	}
	public void setHuyDongSVDauNam(Integer huyDongSVDauNam) {
		this.huyDongSVDauNam = huyDongSVDauNam;
	}
}
