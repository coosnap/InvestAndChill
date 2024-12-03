package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Perf2Response extends ReportReponse{
	private String loiNhuanCotLoi;
	private String loiNhuanTaiChinh;
	private String ThuNhapKhac;
	private String LaiLoTuCongTyLienDoanh;
	public String getLoiNhuanCotLoi() {
		return loiNhuanCotLoi;
	}
	public void setLoiNhuanCotLoi(String loiNhuanCotLoi) {
		this.loiNhuanCotLoi = loiNhuanCotLoi;
	}
	public String getLoiNhuanTaiChinh() {
		return loiNhuanTaiChinh;
	}
	public void setLoiNhuanTaiChinh(String loiNhuanTaiChinh) {
		this.loiNhuanTaiChinh = loiNhuanTaiChinh;
	}
	public String getThuNhapKhac() {
		return ThuNhapKhac;
	}
	public void setThuNhapKhac(String thuNhapKhac) {
		ThuNhapKhac = thuNhapKhac;
	}
	public String getLaiLoTuCongTyLienDoanh() {
		return LaiLoTuCongTyLienDoanh;
	}
	public void setLaiLoTuCongTyLienDoanh(String laiLoTuCongTyLienDoanh) {
		LaiLoTuCongTyLienDoanh = laiLoTuCongTyLienDoanh;
	}
	
}
