package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.MappedSuperclass;

import org.hibernate.annotations.Formula;

@MappedSuperclass
public class PTCReport {
	public Double getGrossPPE() {
		return GrossPPE;
	}

	public void setGrossPPE(Double grossPPE) {
		GrossPPE = grossPPE;
	}

	public Double getDAPPE() {
		return DAPPE;
	}

	public void setDAPPE(Double dAPPE) {
		DAPPE = dAPPE;
	}

	public ReportKey getId() {
		return id;
	}

	public void setId(ReportKey id) {
		this.id = id;
	}

	@EmbeddedId
    private ReportKey id;
	//Perf1
	@Column(name = "p_p_3")
	private Double doanhSoThuan;
	@Column(name = "p_p_23")
	private Double loiNhuanCuaCoDongCongTyMe;
	@Column(name = "p_i_22")
	private Double bienLaiGop;
	@Column(name = "p_i_23")
	private Double bienLaiRong;
	
	//Perf2
	@Column(name = "p_i_25")
	private Double loiNhuanCotLoi;
	@Column(name = "p_i_26")
	private Double loiNhuanTaiChinh;
	@Column(name = "p_p_15")
	private Double ThuNhapKhac;
	@Column(name = "p_p_9")
	private Double LaiLoTuCongTyLienDoanh;
	
	//Perf3
	@Column(name = "p_i_1")
	private Double SalesTrailing;
	@Column(name = "p_i_28")
	private Double GPMTrailing;
	@Column(name = "p_i_29")
	private Double SGAMTrailing;
	@Column(name = "p_i_30")
	private Double EBITmTrailing;
	
	//Perf4
	@Column(name = "p_i_5")
	private Double EBITTrailing;
	@Column(name = "p_i_58")
	private Double NetFinanceialTrailing;
	@Column(name = "p_i_67")
	private Double NetFinancialAdjustTrailing;
	@Column(name = "p_i_46")
	private Double NImgTrailing;
	
	//Perf5
	@Column(name = "p_i_3")
	private Double NITrailing;
	@Column(name = "p_i_65")
	private Double NITrailingAdjust;
	@Column(name = "p_i_59")
	private Double MinoritiesTrailing;
	@Column(name = "p_i_60")
	private Double AssociateTrailing;
	
	//Perf6
	@Column(name = "p_i_56")
	private Double EBITDATrailing;
	@Column(name = "p_i_61")
	private Double InterestExpenseTrailing;
	
	
	//Perf7
	@Column(name = "p_i_6")
	private Double roe;
	@Column(name = "p_i_24")
	private Double roic;
	@Column(name = "p_i_37")
	private Double laiVay;
	
	//Perf8
	@Column(name = "p_i_47")
	private Double AssetTurnover;
	@Column(name = "p_i_48")
	private Double Leverage;
	@Column(name = "p_i_49")
	private Double DEE;
	
	
	//Bal1
	@Column(name = "p_i_11")
	private Double tienDTNGDaoHan;
	@Column(name = "p_i_12")
	private Double phaiThu;
	@Column(name = "p_b_18")
	private Double hangTonKhoRong;
	@Column(name = "p_b_36")
	private Double taiSanCoDinh;
	@Column(name = "p_b_50")
	private Double taiSanDoDangDaiHan;
	@Column(name = "p_b_47")
	private Double giaTriRongTaiSanDauTu;
	@Column(name = "p_i_15")
	private Double taiSanKhac;
	
	//Bal2
	@Column(name = "p_b_100")
	private Double vonGop;
	@Column(name = "p_b_113")
	private Double laiChuaPhanPhoi;
	@Column(name = "p_i_19")
	private Double vcshKhac;
	@Column(name = "p_i_16")
	private Double noVay;
	@Column(name = "p_i_17")
	private Double noChiemDung;
	
	//Bal3
	@Column(name = "p_i_62")
	private Double GrossPPE;
	@Column(name = "p_i_63")
	private Double DAPPE;
	@Column(name = "p_b_52")
	private Double xayDungCoBanDoDang;
	
	//Bal4
	@Column(name = "p_i_8")
	private Double NetDebt;
	@Column(name = "p_i_31")
	private Double Workingcap;
	
	//Bal5
	@Column(name = "p_i_40")
	private Double vongQuayHangTonKho;
	@Column(name = "p_i_41")
	private Double vongQuayPhaiThu;
	@Column(name = "p_i_42")
	private Double vongQuayPhaiTra;
	
	//Bal6
	@Column(name = "p_i_34")
	private Double vayNganHanVCSH;
	@Column(name = "p_i_35")
	private Double vayDaiHanVCSH;
	@Column(name = "p_i_36")
	private Double vayVCSH;
	
	//Cf1
	@Formula("COALESCE(p_c_21, p_c_49)")
	private Double luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh;
	@Formula("COALESCE(p_c_29, p_c_57)")
	private Double luuChuyenTienTeRongTuCacHoatDongDauTu;
	@Formula("COALESCE(p_c_37, p_c_65)")
	private Double luuChuyenTienTeTuHoatDongTaiChinh;
	@Column(name = "p_i_27")
	private Double fcf;
	
	//Cf2
	@Column(name = "p_i_33")
	private Double netIncomeDANWC;
	@Column(name = "p_i_53")
	private Double netIncomeDANWCCAPEX;
//	@Column(name = "p_i_54")
//	private Double netIncomeDANWCRolling;
//	@Column(name = "p_i_55")
//	private Double netIncomeDANWCCAPEXRolling;
	
	//Cf3
	@Column(name = "p_b_5")
	private Double giaTriThuanDauTuNganHan;
	@Column(name = "p_b_2")
	private Double tienVaTuongDuongTien;
	@Column(name = "p_b_58")
	private Double dauTuNamGiuDenNgayDaoHan;
	@Column(name = "p_m_1")
	private Double tienLongTrongPhaiThuChoVay;
	
	//cf4
	@Column(name = "p_b_70")
	private Double nguoiMuaTraTienTruoc;
	@Column(name = "p_b_76")
	private Double doanhThuChuaThucHienNganHan;
	@Column(name = "p_b_85")
	private Double nguoiMuaTraTienTruocDaiHan;
	@Column(name = "p_b_89")
	private Double doanhThuChuaThucHien;
	
	public Double getGiaTriThuanDauTuNganHan() {
		return giaTriThuanDauTuNganHan;
	}

	public void setGiaTriThuanDauTuNganHan(Double giaTriThuanDauTuNganHan) {
		this.giaTriThuanDauTuNganHan = giaTriThuanDauTuNganHan;
	}

	public Double getTienVaTuongDuongTien() {
		return tienVaTuongDuongTien;
	}

	public void setTienVaTuongDuongTien(Double tienVaTuongDuongTien) {
		this.tienVaTuongDuongTien = tienVaTuongDuongTien;
	}

	public Double getDauTuNamGiuDenNgayDaoHan() {
		return dauTuNamGiuDenNgayDaoHan;
	}

	public void setDauTuNamGiuDenNgayDaoHan(Double dauTuNamGiuDenNgayDaoHan) {
		this.dauTuNamGiuDenNgayDaoHan = dauTuNamGiuDenNgayDaoHan;
	}

	public Double getTienLongTrongPhaiThuChoVay() {
		return tienLongTrongPhaiThuChoVay;
	}

	public void setTienLongTrongPhaiThuChoVay(Double tienLongTrongPhaiThuChoVay) {
		this.tienLongTrongPhaiThuChoVay = tienLongTrongPhaiThuChoVay;
	}

	public Double getNetDebt() {
		return NetDebt;
	}

	public void setNetDebt(Double netDebt) {
		NetDebt = netDebt;
	}

	public Double getWorkingcap() {
		return Workingcap;
	}

	public void setWorkingcap(Double workingcap) {
		Workingcap = workingcap;
	}

	public Double getEBITDATrailing() {
		return EBITDATrailing;
	}

	public void setEBITDATrailing(Double eBITDATrailing) {
		EBITDATrailing = eBITDATrailing;
	}

	public Double getInterestExpenseTrailing() {
		return InterestExpenseTrailing;
	}

	public void setInterestExpenseTrailing(Double interestExpenseTrailing) {
		InterestExpenseTrailing = interestExpenseTrailing;
	}

	public Double getNITrailing() {
		return NITrailing;
	}

	public void setNITrailing(Double nITrailing) {
		NITrailing = nITrailing;
	}

	public Double getNITrailingAdjust() {
		return NITrailingAdjust;
	}

	public void setNITrailingAdjust(Double nITrailingAdjust) {
		NITrailingAdjust = nITrailingAdjust;
	}

	public Double getMinoritiesTrailing() {
		return MinoritiesTrailing;
	}

	public void setMinoritiesTrailing(Double minoritiesTrailing) {
		MinoritiesTrailing = minoritiesTrailing;
	}

	public Double getAssociateTrailing() {
		return AssociateTrailing;
	}

	public void setAssociateTrailing(Double associateTrailing) {
		AssociateTrailing = associateTrailing;
	}

	public Double getEBITTrailing() {
		return EBITTrailing;
	}

	public void setEBITTrailing(Double eBITTrailing) {
		EBITTrailing = eBITTrailing;
	}

	public Double getNetFinanceialTrailing() {
		return NetFinanceialTrailing;
	}

	public void setNetFinanceialTrailing(Double netFinanceialTrailing) {
		NetFinanceialTrailing = netFinanceialTrailing;
	}

	public Double getNetFinancialAdjustTrailing() {
		return NetFinancialAdjustTrailing;
	}

	public void setNetFinancialAdjustTrailing(Double netFinancialAdjustTrailing) {
		NetFinancialAdjustTrailing = netFinancialAdjustTrailing;
	}

	public Double getNImgTrailing() {
		return NImgTrailing;
	}

	public void setNImgTrailing(Double nImgTrailing) {
		NImgTrailing = nImgTrailing;
	}

	public Double getDoanhSoThuan() {
		return doanhSoThuan;
	}

	public void setDoanhSoThuan(Double doanhSoThuan) {
		this.doanhSoThuan = doanhSoThuan;
	}

	public Double getLoiNhuanCuaCoDongCongTyMe() {
		return loiNhuanCuaCoDongCongTyMe;
	}

	public void setLoiNhuanCuaCoDongCongTyMe(Double loiNhuanCuaCoDongCongTyMe) {
		this.loiNhuanCuaCoDongCongTyMe = loiNhuanCuaCoDongCongTyMe;
	}

	public Double getBienLaiGop() {
		return bienLaiGop;
	}

	public void setBienLaiGop(Double bienLaiGop) {
		this.bienLaiGop = bienLaiGop;
	}

	public Double getBienLaiRong() {
		return bienLaiRong;
	}

	public void setBienLaiRong(Double bienLaiRong) {
		this.bienLaiRong = bienLaiRong;
	}

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

	public Double getRoe() {
		return roe;
	}

	public void setRoe(Double roe) {
		this.roe = roe;
	}

	public Double getRoic() {
		return roic;
	}

	public void setRoic(Double roic) {
		this.roic = roic;
	}

	public Double getSalesTrailing() {
		return SalesTrailing;
	}

	public void setSalesTrailing(Double salesTrailing) {
		SalesTrailing = salesTrailing;
	}

	public Double getGPMTrailing() {
		return GPMTrailing;
	}

	public void setGPMTrailing(Double gPMTrailing) {
		GPMTrailing = gPMTrailing;
	}

	public Double getSGAMTrailing() {
		return SGAMTrailing;
	}

	public void setSGAMTrailing(Double sGAMTrailing) {
		SGAMTrailing = sGAMTrailing;
	}

	public Double getEBITmTrailing() {
		return EBITmTrailing;
	}

	public void setEBITmTrailing(Double eBITmTrailing) {
		EBITmTrailing = eBITmTrailing;
	}

	public Double getAssetTurnover() {
		return AssetTurnover;
	}

	public void setAssetTurnover(Double assetTurnover) {
		AssetTurnover = assetTurnover;
	}

	public Double getLeverage() {
		return Leverage;
	}

	public void setLeverage(Double leverage) {
		Leverage = leverage;
	}

	public Double getDEE() {
		return DEE;
	}

	public void setDEE(Double dEE) {
		DEE = dEE;
	}

	public Double getTienDTNGDaoHan() {
		return tienDTNGDaoHan;
	}

	public void setTienDTNGDaoHan(Double tienDTNGDaoHan) {
		this.tienDTNGDaoHan = tienDTNGDaoHan;
	}

	public Double getPhaiThu() {
		return phaiThu;
	}

	public void setPhaiThu(Double phaiThu) {
		this.phaiThu = phaiThu;
	}

	public Double getHangTonKhoRong() {
		return hangTonKhoRong;
	}

	public void setHangTonKhoRong(Double hangTonKhoRong) {
		this.hangTonKhoRong = hangTonKhoRong;
	}

	public Double getTaiSanCoDinh() {
		return taiSanCoDinh;
	}

	public void setTaiSanCoDinh(Double taiSanCoDinh) {
		this.taiSanCoDinh = taiSanCoDinh;
	}

	public Double getTaiSanDoDangDaiHan() {
		return taiSanDoDangDaiHan;
	}

	public void setTaiSanDoDangDaiHan(Double taiSanDoDangDaiHan) {
		this.taiSanDoDangDaiHan = taiSanDoDangDaiHan;
	}

	public Double getGiaTriRongTaiSanDauTu() {
		return giaTriRongTaiSanDauTu;
	}

	public void setGiaTriRongTaiSanDauTu(Double giaTriRongTaiSanDauTu) {
		this.giaTriRongTaiSanDauTu = giaTriRongTaiSanDauTu;
	}

	public Double getTaiSanKhac() {
		return taiSanKhac;
	}

	public void setTaiSanKhac(Double taiSanKhac) {
		this.taiSanKhac = taiSanKhac;
	}

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

	public Double getVonGop() {
		return vonGop;
	}

	public void setVonGop(Double vonGop) {
		this.vonGop = vonGop;
	}

	public Double getLaiChuaPhanPhoi() {
		return laiChuaPhanPhoi;
	}

	public void setLaiChuaPhanPhoi(Double laiChuaPhanPhoi) {
		this.laiChuaPhanPhoi = laiChuaPhanPhoi;
	}

	public Double getVcshKhac() {
		return vcshKhac;
	}

	public void setVcshKhac(Double vcshKhac) {
		this.vcshKhac = vcshKhac;
	}

	public Double getVayNganHanVCSH() {
		return vayNganHanVCSH;
	}

	public void setVayNganHanVCSH(Double vayNganHanVCSH) {
		this.vayNganHanVCSH = vayNganHanVCSH;
	}

	public Double getVayDaiHanVCSH() {
		return vayDaiHanVCSH;
	}

	public void setVayDaiHanVCSH(Double vayDaiHanVCSH) {
		this.vayDaiHanVCSH = vayDaiHanVCSH;
	}

	public Double getVayVCSH() {
		return vayVCSH;
	}

	public void setVayVCSH(Double vayVCSH) {
		this.vayVCSH = vayVCSH;
	}

	public Double getLaiVay() {
		return laiVay;
	}

	public void setLaiVay(Double laiVay) {
		this.laiVay = laiVay;
	}


	public Double getXayDungCoBanDoDang() {
		return xayDungCoBanDoDang;
	}

	public void setXayDungCoBanDoDang(Double xayDungCoBanDoDang) {
		this.xayDungCoBanDoDang = xayDungCoBanDoDang;
	}

	public Double getVongQuayHangTonKho() {
		return vongQuayHangTonKho;
	}

	public void setVongQuayHangTonKho(Double vongQuayHangTonKho) {
		this.vongQuayHangTonKho = vongQuayHangTonKho;
	}

	public Double getVongQuayPhaiThu() {
		return vongQuayPhaiThu;
	}

	public void setVongQuayPhaiThu(Double vongQuayPhaiThu) {
		this.vongQuayPhaiThu = vongQuayPhaiThu;
	}

	public Double getVongQuayPhaiTra() {
		return vongQuayPhaiTra;
	}

	public void setVongQuayPhaiTra(Double vongQuayPhaiTra) {
		this.vongQuayPhaiTra = vongQuayPhaiTra;
	}

	public Double getNetIncomeDANWC() {
		return netIncomeDANWC;
	}

	public void setNetIncomeDANWC(Double netIncomeDANWC) {
		this.netIncomeDANWC = netIncomeDANWC;
	}

	public Double getNetIncomeDANWCCAPEX() {
		return netIncomeDANWCCAPEX;
	}

	public void setNetIncomeDANWCCAPEX(Double netIncomeDANWCCAPEX) {
		this.netIncomeDANWCCAPEX = netIncomeDANWCCAPEX;
	}

//	public Double getNetIncomeDANWCRolling() {
//		return netIncomeDANWCRolling;
//	}
//
//	public void setNetIncomeDANWCRolling(Double netIncomeDANWCRolling) {
//		this.netIncomeDANWCRolling = netIncomeDANWCRolling;
//	}
//
//	public Double getNetIncomeDANWCCAPEXRolling() {
//		return netIncomeDANWCCAPEXRolling;
//	}
//
//	public void setNetIncomeDANWCCAPEXRolling(Double netIncomeDANWCCAPEXRolling) {
//		this.netIncomeDANWCCAPEXRolling = netIncomeDANWCCAPEXRolling;
//	}

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

	public Double getNguoiMuaTraTienTruoc() {
		return nguoiMuaTraTienTruoc;
	}

	public void setNguoiMuaTraTienTruoc(Double nguoiMuaTraTienTruoc) {
		this.nguoiMuaTraTienTruoc = nguoiMuaTraTienTruoc;
	}

	public Double getDoanhThuChuaThucHienNganHan() {
		return doanhThuChuaThucHienNganHan;
	}

	public void setDoanhThuChuaThucHienNganHan(Double doanhThuChuaThucHienNganHan) {
		this.doanhThuChuaThucHienNganHan = doanhThuChuaThucHienNganHan;
	}

	public Double getNguoiMuaTraTienTruocDaiHan() {
		return nguoiMuaTraTienTruocDaiHan;
	}

	public void setNguoiMuaTraTienTruocDaiHan(Double nguoiMuaTraTienTruocDaiHan) {
		this.nguoiMuaTraTienTruocDaiHan = nguoiMuaTraTienTruocDaiHan;
	}

	public Double getDoanhThuChuaThucHien() {
		return doanhThuChuaThucHien;
	}

	public void setDoanhThuChuaThucHien(Double doanhThuChuaThucHien) {
		this.doanhThuChuaThucHien = doanhThuChuaThucHien;
	}

	
	
	
}
