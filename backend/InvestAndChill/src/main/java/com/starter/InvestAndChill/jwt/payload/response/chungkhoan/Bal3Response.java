package com.starter.InvestAndChill.jwt.payload.response.chungkhoan;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal3Response extends ReportReponse{
	
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
	public String getVcshKhac() {
		return vcshKhac;
	}
	public void setVcshKhac(String vcshKhac) {
		this.vcshKhac = vcshKhac;
	}
	public String getCoPhieuPhoThongCoQuyenBieuQuyet() {
		return coPhieuPhoThongCoQuyenBieuQuyet;
	}
	public void setCoPhieuPhoThongCoQuyenBieuQuyet(String coPhieuPhoThongCoQuyenBieuQuyet) {
		this.coPhieuPhoThongCoQuyenBieuQuyet = coPhieuPhoThongCoQuyenBieuQuyet;
	}
	public String getLoiNhuanChuaPhanPhoi() {
		return loiNhuanChuaPhanPhoi;
	}
	public void setLoiNhuanChuaPhanPhoi(String loiNhuanChuaPhanPhoi) {
		this.loiNhuanChuaPhanPhoi = loiNhuanChuaPhanPhoi;
	}
	private String noVay;
	private String noChiemDung;
	private String vcshKhac;
	private String coPhieuPhoThongCoQuyenBieuQuyet;
	private String loiNhuanChuaPhanPhoi;

}
