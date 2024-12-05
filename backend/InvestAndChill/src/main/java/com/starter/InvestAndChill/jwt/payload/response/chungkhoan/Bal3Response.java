package com.starter.InvestAndChill.jwt.payload.response.chungkhoan;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal3Response extends ReportReponse{
	
	public Integer getNoVay() {
		return noVay;
	}
	public void setNoVay(Integer noVay) {
		this.noVay = noVay;
	}
	public Integer getNoChiemDung() {
		return noChiemDung;
	}
	public void setNoChiemDung(Integer noChiemDung) {
		this.noChiemDung = noChiemDung;
	}
	public Integer getVcshKhac() {
		return vcshKhac;
	}
	public void setVcshKhac(Integer vcshKhac) {
		this.vcshKhac = vcshKhac;
	}
	public Integer getCoPhieuPhoThongCoQuyenBieuQuyet() {
		return coPhieuPhoThongCoQuyenBieuQuyet;
	}
	public void setCoPhieuPhoThongCoQuyenBieuQuyet(Integer coPhieuPhoThongCoQuyenBieuQuyet) {
		this.coPhieuPhoThongCoQuyenBieuQuyet = coPhieuPhoThongCoQuyenBieuQuyet;
	}
	public Integer getLoiNhuanChuaPhanPhoi() {
		return loiNhuanChuaPhanPhoi;
	}
	public void setLoiNhuanChuaPhanPhoi(Integer loiNhuanChuaPhanPhoi) {
		this.loiNhuanChuaPhanPhoi = loiNhuanChuaPhanPhoi;
	}
	private Integer noVay;
	private Integer noChiemDung;
	private Integer vcshKhac;
	private Integer coPhieuPhoThongCoQuyenBieuQuyet;
	private Integer loiNhuanChuaPhanPhoi;

}
