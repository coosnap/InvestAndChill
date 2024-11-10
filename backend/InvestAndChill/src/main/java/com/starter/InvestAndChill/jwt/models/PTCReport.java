package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class PTCReport {
	public PTCReportKey getId() {
		return id;
	}

	public void setId(PTCReportKey id) {
		this.id = id;
	}

	@EmbeddedId
    private PTCReportKey id;
	
	@Column(name = "p_p_3")
	private String doanhSoThuan;
	@Column(name = "p_p_23")
	private String loiNhuanCuaCoDongCongTyMe;
	@Column(name = "p_i_22")
	private String bienLaiGop;
	@Column(name = "p_i_23")
	private String bienLaiRong;
	@Column(name = "p_i_6")
	private String roe;
	@Column(name = "p_i_24")
	private String roic;
	@Column(name = "p_i_25")
	private String loiNhuanCotLoi;
	@Column(name = "p_i_26")
	private String loiNhuanTaiChinh;
	@Column(name = "p_p_15")
	private String ThuNhapKhac;
	@Column(name = "p_p_9")
	private String LaiLoTuCongTyLienDoanh;
	@Column(name = "p_i_1")
	private String SalesTrailing;
	@Column(name = "p_i_28")
	private String GPMTrailing;
	@Column(name = "p_i_29")
	private String SGAMTrailing;
	@Column(name = "p_i_30")
	private String EBITmTrailing;
	@Column(name = "p_i_47")
	private String AssetTurnover;
	@Column(name = "p_i_48")
	private String Leverage;
	@Column(name = "p_i_49")
	private String DEE;
	@Column(name = "p_i_11")
	private String tienDTNGDaoHan;
	@Column(name = "p_i_12")
	private String phaiThu;
	@Column(name = "p_b_18")
	private String hangTonKhoRong;
	@Column(name = "p_b_36")
	private String taiSanCoDinh;
	@Column(name = "p_b_50")
	private String taiSanDoDangDaiHan;
	@Column(name = "p_b_47")
	private String giaTriRongTaiSanDauTu;
	@Column(name = "p_i_15")
	private String taiSanKhac;
	@Column(name = "p_i_16")
	private String noVay;
	@Column(name = "p_i_17")
	private String noChiemDung;
	@Column(name = "p_b_100")
	private String vonGop;
	@Column(name = "p_b_113")
	private String laiChuaPhanPhoi;
	@Column(name = "p_i_19")
	private String vcshKhac;
	@Column(name = "p_i_34")
	private String vayNganHanVCSH;
	@Column(name = "p_i_35")
	private String vayDaiHanVCSH;
	@Column(name = "p_i_36")
	private String vayVCSH;
	@Column(name = "p_i_37")
	private String laiVay;
	@Column(name = "p_b_38")
	private String nguyenGiaTSCDHuuHinh;
	@Column(name = "p_b_39")
	private String khauHaoLuyKeTSCDHuuHinh;
	@Column(name = "p_b_52")
	private String xayDungCoBanDoDang;
	@Column(name = "p_i_40")
	private String vongQuayHangTonKho;
	@Column(name = "p_i_41")
	private String vongQuayPhaiThu;
	@Column(name = "p_i_42")
	private String vongQuayPhaiTra;
	@Column(name = "p_i_33")
	private String netIncomeDANWC;
	@Column(name = "p_i_53")
	private String netIncomeDANWCCAPEX;
	@Column(name = "p_i_54")
	private String netIncomeDANWCRolling;
	@Column(name = "p_i_55")
	private String netIncomeDANWCCAPEXRolling;
	@Column(name = "p_c_21")
	private String luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh;
	@Column(name = "p_c_29")
	private String luuChuyenTienTeRongTuCacHoatDongDauTu;
	@Column(name = "p_c_37")
	private String luuChuyenTienTeTuHoatDongTaiChinh;
	@Column(name = "p_i_27")
	private String fcf;
	@Column(name = "p_b_70")
	private String nguoiMuaTraTienTruoc;
	@Column(name = "p_b_76")
	private String doanhThuChuaThucHienNganHan;
	@Column(name = "p_b_85")
	private String nguoiMuaTraTienTruocDaiHan;
	@Column(name = "p_b_89")
	private String doanhThuChuaThucHien;
	
	public String getNguoiMuaTraTienTruoc() {
		return nguoiMuaTraTienTruoc;
	}

	public void setNguoiMuaTraTienTruoc(String nguoiMuaTraTienTruoc) {
		this.nguoiMuaTraTienTruoc = nguoiMuaTraTienTruoc;
	}

	public String getDoanhThuChuaThucHienNganHan() {
		return doanhThuChuaThucHienNganHan;
	}

	public void setDoanhThuChuaThucHienNganHan(String doanhThuChuaThucHienNganHan) {
		this.doanhThuChuaThucHienNganHan = doanhThuChuaThucHienNganHan;
	}

	public String getNguoiMuaTraTienTruocDaiHan() {
		return nguoiMuaTraTienTruocDaiHan;
	}

	public void setNguoiMuaTraTienTruocDaiHan(String nguoiMuaTraTienTruocDaiHan) {
		this.nguoiMuaTraTienTruocDaiHan = nguoiMuaTraTienTruocDaiHan;
	}

	public String getDoanhThuChuaThucHien() {
		return doanhThuChuaThucHien;
	}

	public void setDoanhThuChuaThucHien(String doanhThuChuaThucHien) {
		this.doanhThuChuaThucHien = doanhThuChuaThucHien;
	}

	public String getLuuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh() {
		return luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh;
	}

	public void setLuuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh(
			String luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh) {
		this.luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh = luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh;
	}

	public String getLuuChuyenTienTeRongTuCacHoatDongDauTu() {
		return luuChuyenTienTeRongTuCacHoatDongDauTu;
	}

	public void setLuuChuyenTienTeRongTuCacHoatDongDauTu(String luuChuyenTienTeRongTuCacHoatDongDauTu) {
		this.luuChuyenTienTeRongTuCacHoatDongDauTu = luuChuyenTienTeRongTuCacHoatDongDauTu;
	}

	public String getLuuChuyenTienTeTuHoatDongTaiChinh() {
		return luuChuyenTienTeTuHoatDongTaiChinh;
	}

	public void setLuuChuyenTienTeTuHoatDongTaiChinh(String luuChuyenTienTeTuHoatDongTaiChinh) {
		this.luuChuyenTienTeTuHoatDongTaiChinh = luuChuyenTienTeTuHoatDongTaiChinh;
	}

	public String getFcf() {
		return fcf;
	}

	public void setFcf(String fcf) {
		this.fcf = fcf;
	}

	public String getNetIncomeDANWC() {
		return netIncomeDANWC;
	}

	public void setNetIncomeDANWC(String netIncomeDANWC) {
		this.netIncomeDANWC = netIncomeDANWC;
	}

	public String getNetIncomeDANWCCAPEX() {
		return netIncomeDANWCCAPEX;
	}

	public void setNetIncomeDANWCCAPEX(String netIncomeDANWCCAPEX) {
		this.netIncomeDANWCCAPEX = netIncomeDANWCCAPEX;
	}

	public String getNetIncomeDANWCRolling() {
		return netIncomeDANWCRolling;
	}

	public void setNetIncomeDANWCRolling(String netIncomeDANWCRolling) {
		this.netIncomeDANWCRolling = netIncomeDANWCRolling;
	}

	public String getNetIncomeDANWCCAPEXRolling() {
		return netIncomeDANWCCAPEXRolling;
	}

	public void setNetIncomeDANWCCAPEXRolling(String netIncomeDANWCCAPEXRolling) {
		this.netIncomeDANWCCAPEXRolling = netIncomeDANWCCAPEXRolling;
	}

	public String getVongQuayHangTonKho() {
		return vongQuayHangTonKho;
	}

	public void setVongQuayHangTonKho(String vongQuayHangTonKho) {
		this.vongQuayHangTonKho = vongQuayHangTonKho;
	}

	public String getVongQuayPhaiThu() {
		return vongQuayPhaiThu;
	}

	public void setVongQuayPhaiThu(String vongQuayPhaiThu) {
		this.vongQuayPhaiThu = vongQuayPhaiThu;
	}

	public String getVongQuayPhaiTra() {
		return vongQuayPhaiTra;
	}

	public void setVongQuayPhaiTra(String vongQuayPhaiTra) {
		this.vongQuayPhaiTra = vongQuayPhaiTra;
	}

	public String getNguyenGiaTSCDHuuHinh() {
		return nguyenGiaTSCDHuuHinh;
	}

	public void setNguyenGiaTSCDHuuHinh(String nguyenGiaTSCDHuuHinh) {
		this.nguyenGiaTSCDHuuHinh = nguyenGiaTSCDHuuHinh;
	}

	public String getKhauHaoLuyKeTSCDHuuHinh() {
		return khauHaoLuyKeTSCDHuuHinh;
	}

	public void setKhauHaoLuyKeTSCDHuuHinh(String khauHaoLuyKeTSCDHuuHinh) {
		this.khauHaoLuyKeTSCDHuuHinh = khauHaoLuyKeTSCDHuuHinh;
	}

	public String getXayDungCoBanDoDang() {
		return xayDungCoBanDoDang;
	}

	public void setXayDungCoBanDoDang(String xayDungCoBanDoDang) {
		this.xayDungCoBanDoDang = xayDungCoBanDoDang;
	}

	public String getVayNganHanVCSH() {
		return vayNganHanVCSH;
	}

	public void setVayNganHanVCSH(String vayNganHanVCSH) {
		this.vayNganHanVCSH = vayNganHanVCSH;
	}

	public String getVayDaiHanVCSH() {
		return vayDaiHanVCSH;
	}

	public void setVayDaiHanVCSH(String vayDaiHanVCSH) {
		this.vayDaiHanVCSH = vayDaiHanVCSH;
	}

	public String getVayVCSH() {
		return vayVCSH;
	}

	public void setVayVCSH(String vayVCSH) {
		this.vayVCSH = vayVCSH;
	}

	public String getLaiVay() {
		return laiVay;
	}

	public void setLaiVay(String laiVay) {
		this.laiVay = laiVay;
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

	public String getTienDTNGDaoHan() {
		return tienDTNGDaoHan;
	}

	public void setTienDTNGDaoHan(String tienDTNGDaoHan) {
		this.tienDTNGDaoHan = tienDTNGDaoHan;
	}

	public String getPhaiThu() {
		return phaiThu;
	}

	public void setPhaiThu(String phaiThu) {
		this.phaiThu = phaiThu;
	}

	public String getHangTonKhoRong() {
		return hangTonKhoRong;
	}

	public void setHangTonKhoRong(String hangTonKhoRong) {
		this.hangTonKhoRong = hangTonKhoRong;
	}

	public String getTaiSanCoDinh() {
		return taiSanCoDinh;
	}

	public void setTaiSanCoDinh(String taiSanCoDinh) {
		this.taiSanCoDinh = taiSanCoDinh;
	}

	public String getTaiSanDoDangDaiHan() {
		return taiSanDoDangDaiHan;
	}

	public void setTaiSanDoDangDaiHan(String taiSanDoDangDaiHan) {
		this.taiSanDoDangDaiHan = taiSanDoDangDaiHan;
	}

	public String getGiaTriRongTaiSanDauTu() {
		return giaTriRongTaiSanDauTu;
	}

	public void setGiaTriRongTaiSanDauTu(String giaTriRongTaiSanDauTu) {
		this.giaTriRongTaiSanDauTu = giaTriRongTaiSanDauTu;
	}

	public String getTaiSanKhac() {
		return taiSanKhac;
	}

	public void setTaiSanKhac(String taiSanKhac) {
		this.taiSanKhac = taiSanKhac;
	}

	public String getAssetTurnover() {
		return AssetTurnover;
	}

	public void setAssetTurnover(String assetTurnover) {
		AssetTurnover = assetTurnover;
	}

	public String getLeverage() {
		return Leverage;
	}

	public void setLeverage(String leverage) {
		Leverage = leverage;
	}

	public String getDEE() {
		return DEE;
	}

	public void setDEE(String dEE) {
		DEE = dEE;
	}

	public String getSalesTrailing() {
		return SalesTrailing;
	}

	public void setSalesTrailing(String salesTrailing) {
		SalesTrailing = salesTrailing;
	}

	public String getGPMTrailing() {
		return GPMTrailing;
	}

	public void setGPMTrailing(String gPMTrailing) {
		GPMTrailing = gPMTrailing;
	}

	public String getSGAMTrailing() {
		return SGAMTrailing;
	}

	public void setSGAMTrailing(String sGAMTrailing) {
		SGAMTrailing = sGAMTrailing;
	}

	public String getEBITmTrailing() {
		return EBITmTrailing;
	}

	public void setEBITmTrailing(String eBITmTrailing) {
		EBITmTrailing = eBITmTrailing;
	}

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

	public String getRoe() {
		return roe;
	}

	public void setRoe(String roe) {
		this.roe = roe;
	}

	public String getRoic() {
		return roic;
	}

	public void setRoic(String roic) {
		this.roic = roic;
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

	public String getDoanhSoThuan() {
		return doanhSoThuan;
	}

	public void setDoanhSoThuan(String doanhSoThuan) {
		this.doanhSoThuan = doanhSoThuan;
	}
}
