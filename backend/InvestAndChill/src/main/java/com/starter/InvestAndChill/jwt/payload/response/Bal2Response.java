package com.starter.InvestAndChill.jwt.payload.response;

public class Bal2Response extends ReportReponse{
	private String noVay;
	private String noChiemDung;
	private String vonGop;
	private String laiChuaPhanPhoi;
	private String vcshKhac;
	
	public Bal2Response() {
		
	}

	public String getNoVay() {
		return noVay;
	}

	public void setNoVay(String noVay) {
		this.noVay = noVay;
	}

	public String getNoChiemDung() {
		return noChiemDung;
	}

	public void setNoChiemDung(String noChiemDung) {
		this.noChiemDung = noChiemDung;
	}

	public String getVonGop() {
		return vonGop;
	}

	public void setVonGop(String vonGop) {
		this.vonGop = vonGop;
	}

	public String getLaiChuaPhanPhoi() {
		return laiChuaPhanPhoi;
	}

	public void setLaiChuaPhanPhoi(String laiChuaPhanPhoi) {
		this.laiChuaPhanPhoi = laiChuaPhanPhoi;
	}

	public String getVcshKhac() {
		return vcshKhac;
	}

	public void setVcshKhac(String vcshKhac) {
		this.vcshKhac = vcshKhac;
	}
}
