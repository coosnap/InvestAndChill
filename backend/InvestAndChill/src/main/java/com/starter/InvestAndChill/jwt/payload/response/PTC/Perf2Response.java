package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf2Response extends ReportReponse{
	private Integer loiNhuanCotLoi;
	private Integer loiNhuanTaiChinh;
	private Integer ThuNhapKhac;
	private Integer LaiLoTuCongTyLienDoanh;
	public Integer getLoiNhuanCotLoi() {
		return loiNhuanCotLoi;
	}
	public void setLoiNhuanCotLoi(Integer loiNhuanCotLoi) {
		this.loiNhuanCotLoi = loiNhuanCotLoi;
	}
	public Integer getLoiNhuanTaiChinh() {
		return loiNhuanTaiChinh;
	}
	public void setLoiNhuanTaiChinh(Integer loiNhuanTaiChinh) {
		this.loiNhuanTaiChinh = loiNhuanTaiChinh;
	}
	public Integer getThuNhapKhac() {
		return ThuNhapKhac;
	}
	public void setThuNhapKhac(Integer thuNhapKhac) {
		ThuNhapKhac = thuNhapKhac;
	}
	public Integer getLaiLoTuCongTyLienDoanh() {
		return LaiLoTuCongTyLienDoanh;
	}
	public void setLaiLoTuCongTyLienDoanh(Integer laiLoTuCongTyLienDoanh) {
		LaiLoTuCongTyLienDoanh = laiLoTuCongTyLienDoanh;
	}
	
}
