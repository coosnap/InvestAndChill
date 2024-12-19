package com.starter.InvestAndChill.jwt.payload.response.chungkhoan;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal3Response extends ReportReponse{
	
	public Double getNoVay() {
		return noVay;
	}
	public void setNoVay(Double noVay) {
		this.noVay = noVay;
	}
	public Double getNoChiemDung() {
		return noChiemDung;
	}
	public void setNoChiemDung(Double noChiemDung) {
		this.noChiemDung = noChiemDung;
	}
	public Double getVcshKhac() {
		return vcshKhac;
	}
	public void setVcshKhac(Double vcshKhac) {
		this.vcshKhac = vcshKhac;
	}
	public Double getCoPhieuPhoThongCoQuyenBieuQuyet() {
		return coPhieuPhoThongCoQuyenBieuQuyet;
	}
	public void setCoPhieuPhoThongCoQuyenBieuQuyet(Double coPhieuPhoThongCoQuyenBieuQuyet) {
		this.coPhieuPhoThongCoQuyenBieuQuyet = coPhieuPhoThongCoQuyenBieuQuyet;
	}
	public Double getLoiNhuanChuaPhanPhoi() {
		return loiNhuanChuaPhanPhoi;
	}
	public void setLoiNhuanChuaPhanPhoi(Double loiNhuanChuaPhanPhoi) {
		this.loiNhuanChuaPhanPhoi = loiNhuanChuaPhanPhoi;
	}
	private Double noVay;
	private Double noChiemDung;
	private Double vcshKhac;
	private Double coPhieuPhoThongCoQuyenBieuQuyet;
	private Double loiNhuanChuaPhanPhoi;

}
