package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal4Response extends ReportReponse{
	
	private Double chiPhiHuyDong;
	private Double bienLaiThuan;
	private Double tyLeCasa;
	public Double getTyLeCasa() {
		return tyLeCasa;
	}
	public void setTyLeCasa(Double tyLeCasa) {
		this.tyLeCasa = tyLeCasa;
	}
	public Double getChiPhiHuyDong() {
		return chiPhiHuyDong;
	}
	public void setChiPhiHuyDong(Double chiPhiHuyDong) {
		this.chiPhiHuyDong = chiPhiHuyDong;
	}
	public Double getBienLaiThuan() {
		return bienLaiThuan;
	}
	public void setBienLaiThuan(Double bienLaiThuan) {
		this.bienLaiThuan = bienLaiThuan;
	}

}
