package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Cf1Response extends ReportReponse{

	private Integer luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh;
	private Integer luuChuyenTienTeRongTuCacHoatDongDauTu;
	private Integer luuChuyenTienTeTuHoatDongTaiChinh;
	private Integer fcf;
	public Integer getLuuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh() {
		return luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh;
	}
	public void setLuuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh(
			Integer luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh) {
		this.luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh = luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh;
	}
	public Integer getLuuChuyenTienTeRongTuCacHoatDongDauTu() {
		return luuChuyenTienTeRongTuCacHoatDongDauTu;
	}
	public void setLuuChuyenTienTeRongTuCacHoatDongDauTu(Integer luuChuyenTienTeRongTuCacHoatDongDauTu) {
		this.luuChuyenTienTeRongTuCacHoatDongDauTu = luuChuyenTienTeRongTuCacHoatDongDauTu;
	}
	public Integer getLuuChuyenTienTeTuHoatDongTaiChinh() {
		return luuChuyenTienTeTuHoatDongTaiChinh;
	}
	public void setLuuChuyenTienTeTuHoatDongTaiChinh(Integer luuChuyenTienTeTuHoatDongTaiChinh) {
		this.luuChuyenTienTeTuHoatDongTaiChinh = luuChuyenTienTeTuHoatDongTaiChinh;
	}
	public Integer getFcf() {
		return fcf;
	}
	public void setFcf(Integer fcf) {
		this.fcf = fcf;
	}
	

}
