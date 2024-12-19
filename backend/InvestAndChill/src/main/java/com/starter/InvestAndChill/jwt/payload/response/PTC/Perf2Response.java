package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf2Response extends ReportReponse{
	private Double loiNhuanCotLoi;
	private Double loiNhuanTaiChinh;
	private Double ThuNhapKhac;
	private Double LaiLoTuCongTyLienDoanh;
	public Double getLoiNhuanCotLoi() {
		return loiNhuanCotLoi;
	}
	public void setLoiNhuanCotLoi(Double loiNhuanCotLoi) {
		this.loiNhuanCotLoi = loiNhuanCotLoi;
	}
	public Double getLoiNhuanTaiChinh() {
		return loiNhuanTaiChinh;
	}
	public void setLoiNhuanTaiChinh(Double loiNhuanTaiChinh) {
		this.loiNhuanTaiChinh = loiNhuanTaiChinh;
	}
	public Double getThuNhapKhac() {
		return ThuNhapKhac;
	}
	public void setThuNhapKhac(Double thuNhapKhac) {
		ThuNhapKhac = thuNhapKhac;
	}
	public Double getLaiLoTuCongTyLienDoanh() {
		return LaiLoTuCongTyLienDoanh;
	}
	public void setLaiLoTuCongTyLienDoanh(Double laiLoTuCongTyLienDoanh) {
		LaiLoTuCongTyLienDoanh = laiLoTuCongTyLienDoanh;
	}
	
}
