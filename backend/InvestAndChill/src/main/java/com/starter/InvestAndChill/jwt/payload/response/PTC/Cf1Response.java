package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Cf1Response extends ReportReponse{

	private Double luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh;
	private Double luuChuyenTienTeRongTuCacHoatDongDauTu;
	private Double luuChuyenTienTeTuHoatDongTaiChinh;
	private Double fcf;
	public Double getLuuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh() {
		return luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh;
	}
	public void setLuuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh(
			Double luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh) {
		this.luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh = luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh;
	}
	public Double getLuuChuyenTienTeRongTuCacHoatDongDauTu() {
		return luuChuyenTienTeRongTuCacHoatDongDauTu;
	}
	public void setLuuChuyenTienTeRongTuCacHoatDongDauTu(Double luuChuyenTienTeRongTuCacHoatDongDauTu) {
		this.luuChuyenTienTeRongTuCacHoatDongDauTu = luuChuyenTienTeRongTuCacHoatDongDauTu;
	}
	public Double getLuuChuyenTienTeTuHoatDongTaiChinh() {
		return luuChuyenTienTeTuHoatDongTaiChinh;
	}
	public void setLuuChuyenTienTeTuHoatDongTaiChinh(Double luuChuyenTienTeTuHoatDongTaiChinh) {
		this.luuChuyenTienTeTuHoatDongTaiChinh = luuChuyenTienTeTuHoatDongTaiChinh;
	}
	public Double getFcf() {
		return fcf;
	}
	public void setFcf(Double fcf) {
		this.fcf = fcf;
	}

}
