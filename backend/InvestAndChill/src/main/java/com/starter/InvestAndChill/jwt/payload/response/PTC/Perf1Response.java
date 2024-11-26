package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf1Response extends ReportReponse {
	private Double doanhSoThuan;
	private Double loiNhuanCuaCoDongCongTyMe;
	private Double bienLaiGop;
	private Double bienLaiRong;

	public Double getDoanhSoThuan() {
		return doanhSoThuan;
	}

	public void setDoanhSoThuan(Double doanhSoThuan) {
		this.doanhSoThuan = doanhSoThuan;
	}

	public Double getLoiNhuanCuaCoDongCongTyMe() {
		return loiNhuanCuaCoDongCongTyMe;
	}

	public void setLoiNhuanCuaCoDongCongTyMe(Double loiNhuanCuaCoDongCongTyMe) {
		this.loiNhuanCuaCoDongCongTyMe = loiNhuanCuaCoDongCongTyMe;
	}

	public Double getBienLaiGop() {
		return bienLaiGop;
	}

	public void setBienLaiGop(Double bienLaiGop) {
		this.bienLaiGop = bienLaiGop;
	}

	public Double getBienLaiRong() {
		return bienLaiRong;
	}

	public void setBienLaiRong(Double bienLaiRong) {
		this.bienLaiRong = bienLaiRong;
	}
	
}
