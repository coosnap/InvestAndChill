package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal4Response extends ReportReponse{
	
	private Integer chiPhiHuyDong;
	private Integer bienLaiThuan;
	private Integer tyLeCasa;
	public Integer getTyLeCasa() {
		return tyLeCasa;
	}
	public void setTyLeCasa(Integer tyLeCasa) {
		this.tyLeCasa = tyLeCasa;
	}
	public Integer getChiPhiHuyDong() {
		return chiPhiHuyDong;
	}
	public void setChiPhiHuyDong(Integer chiPhiHuyDong) {
		this.chiPhiHuyDong = chiPhiHuyDong;
	}
	public Integer getBienLaiThuan() {
		return bienLaiThuan;
	}
	public void setBienLaiThuan(Integer bienLaiThuan) {
		this.bienLaiThuan = bienLaiThuan;
	}

}
