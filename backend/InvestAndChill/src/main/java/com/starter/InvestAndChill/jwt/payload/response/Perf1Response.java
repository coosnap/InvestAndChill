package com.starter.InvestAndChill.jwt.payload.response;

import com.starter.InvestAndChill.jwt.models.PTCReportKey;

public class Perf1Response extends ReportReponse {
	private String doanhSoThuan;
	private String loiNhuanCuaCoDongCongTyMe;
	private String bienLaiGop;
	private String bienLaiRong;
	
	public Perf1Response() {
	}
	
	public Perf1Response(PTCReportKey key, String doanhSoThuan, String loiNhuanCuaCoDongCongTyMe, String bienLaiGop, String bienLaiRong) {
		super(key);
		this.doanhSoThuan = doanhSoThuan;
		this.loiNhuanCuaCoDongCongTyMe = loiNhuanCuaCoDongCongTyMe;
		this.bienLaiGop = bienLaiGop;
		this.bienLaiRong = bienLaiRong;
	}

	public String getDoanhSoThuan() {
		return doanhSoThuan;
	}

	public void setDoanhSoThuan(String doanhSoThuan) {
		this.doanhSoThuan = doanhSoThuan;
	}

	public String getLoiNhuanCuaCoDongCongTyMe() {
		return loiNhuanCuaCoDongCongTyMe;
	}

	public void setLoiNhuanCuaCoDongCongTyMe(String loiNhuanCuaCoDongCongTyMe) {
		this.loiNhuanCuaCoDongCongTyMe = loiNhuanCuaCoDongCongTyMe;
	}

	public String getBienLaiGop() {
		return bienLaiGop;
	}

	public void setBienLaiGop(String bienLaiGop) {
		this.bienLaiGop = bienLaiGop;
	}

	public String getBienLaiRong() {
		return bienLaiRong;
	}

	public void setBienLaiRong(String bienLaiRong) {
		this.bienLaiRong = bienLaiRong;
	}
	
}
