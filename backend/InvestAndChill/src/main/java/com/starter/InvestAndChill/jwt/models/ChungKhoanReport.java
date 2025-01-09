package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class ChungKhoanReport {
	@EmbeddedId
    private ReportKey id;
	
	//perf_1
	@Column(name = "c_p_21")
	private Double doanhThuThuanVeHoatDongKinhDoanh;
	@Column(name = "c_p_72")
	private Double loiNhuanSauThuePhanBoChoChuSoHuu;
	@Column(name = "c_i_22")
	private Double bienLaiGop;
	@Column(name = "c_i_23")
	private Double bienLaiRong;
	
	//perf_2
	@Column(name = "c_i_6")
	private Double roe;
	@Column(name = "c_i_7")
	private Double roa;
	@Column(name = "c_i_24")
	private Double roic;
	
	//perf_3
	@Column(name = "c_i_25")
	private Double loiNhuanCotLoi;
	@Column(name = "c_i_26")
	private Double loiNhuanTaiChinh;
	@Column(name = "c_p_63")
	private Double thuNhapKhacRong;
	
	//perf_4
	@Column(name = "c_i_1")
	private Double SalesTrailing;
	@Column(name = "c_i_28")
	private Double GPMTrailing;
	@Column(name = "c_i_29")
	private Double SGAMTrailing;
	@Column(name = "c_i_30")
	private Double EBITmTrailing;
	
	//perf_5
	@Column(name = "c_i_47")
	private Double AssetTurnover;
	@Column(name = "c_i_48")
	private Double Leverage;
	@Column(name = "c_i_49")
	private Double DEE;
	@Column(name = "c_i_46")
	private Double NImgTrailing;
	
	//Bal1
	@Column(name = "c_i_36")
	private Double vayVCSH;
	@Column(name = "c_i_37")
	private Double laiVay;
	
	//Bal2
	@Column(name = "c_b_3")
	private Double tienVaTaiSanTuongDuongTien;
	@Column(name = "c_b_6")
	private Double cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	@Column(name = "c_b_7")
	private Double cacKhoanDauTuNamGiuDenNgayDaoHan;
	@Column(name = "c_b_8")
	private Double cacKhoanChoVay;
	@Column(name = "c_b_9")
	private Double cacKhoanTaiChinhSanSangDeBan;
	@Column(name = "c_i_15")
	private Double taiSanKhac;
	
	//Bal3
	@Column(name = "c_i_16")
	private Double noVay;
	@Column(name = "c_i_17")
	private Double noChiemDung;
	@Column(name = "c_i_19")
	private Double vcshKhac;
	@Column(name = "c_b_146")
	private Double coPhieuPhoThongCoQuyenBieuQuyet;
	@Column(name = "c_b_158")
	private Double loiNhuanChuaPhanPhoi;
	
	//Bal4
	@Column(name = "c_p_2")
	private Double laiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo;
	@Column(name = "c_p_7")
	private Double laiTuCacKhoanChoVayVaPhaiThu;
	@Column(name = "c_p_10")
	private Double doanhThuNghiepVuMoiGioiChungKhoan;
	@Column(name = "c_p_6")
	private Double laiTuCacKhoanDauTuNamGiuDenNgayDaoHan;
	@Column(name = "c_p_8")
	private Double laiTuCacTaiSanTaiChinhSanSangDeBan;
	@Column(name = "c_p_11")
	private Double doanhThuNghiepVuBaoLanhPhatHanhChungKhoan;
	@Column(name = "c_i_50")
	private Double tongDoanhThuKhac;
	
	
	//Bal5
	@Column(name = "c_i_52")
	private Double GPFVTPL;
	@Column(name = "c_i_54")
	private Double GPCVMargin;
	@Column(name = "c_i_56")
	private Double GPMoiGioi;
	@Column(name = "c_i_53")
	private Double GPHTM;
	@Column(name = "c_i_55")
	private Double GPAFS;
	@Column(name = "c_i_57")
	private Double GPBaoLanhPhatHanh;
	@Column(name = "c_i_58")
	private Double GPKhac;
	
	//other1
	@Column(name = "c_b_205")
	private Double tienGuiCuaKhachHang;
	@Column(name = "c_f_158")
	private Double choVayKyQuy;

	
	
	public Double getTienGuiCuaKhachHang() {
		return tienGuiCuaKhachHang;
	}
	public void setTienGuiCuaKhachHang(Double tienGuiCuaKhachHang) {
		this.tienGuiCuaKhachHang = tienGuiCuaKhachHang;
	}
	public Double getChoVayKyQuy() {
		return choVayKyQuy;
	}
	public void setChoVayKyQuy(Double choVayKyQuy) {
		this.choVayKyQuy = choVayKyQuy;
	}
	public Double getGPFVTPL() {
		return GPFVTPL;
	}
	public void setGPFVTPL(Double gPFVTPL) {
		GPFVTPL = gPFVTPL;
	}
	public Double getGPCVMargin() {
		return GPCVMargin;
	}
	public void setGPCVMargin(Double gPCVMargin) {
		GPCVMargin = gPCVMargin;
	}
	public Double getGPMoiGioi() {
		return GPMoiGioi;
	}
	public void setGPMoiGioi(Double gPMoiGioi) {
		GPMoiGioi = gPMoiGioi;
	}
	public Double getGPHTM() {
		return GPHTM;
	}
	public void setGPHTM(Double gPHTM) {
		GPHTM = gPHTM;
	}
	public Double getGPAFS() {
		return GPAFS;
	}
	public void setGPAFS(Double gPAFS) {
		GPAFS = gPAFS;
	}
	public Double getGPBaoLanhPhatHanh() {
		return GPBaoLanhPhatHanh;
	}
	public void setGPBaoLanhPhatHanh(Double gPBaoLanhPhatHanh) {
		GPBaoLanhPhatHanh = gPBaoLanhPhatHanh;
	}
	public Double getGPKhac() {
		return GPKhac;
	}
	public void setGPKhac(Double gPKhac) {
		GPKhac = gPKhac;
	}
	public Double getLaiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo() {
		return laiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo;
	}
	public void setLaiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo(Double laiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo) {
		this.laiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo = laiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo;
	}
	public Double getLaiTuCacKhoanChoVayVaPhaiThu() {
		return laiTuCacKhoanChoVayVaPhaiThu;
	}
	public void setLaiTuCacKhoanChoVayVaPhaiThu(Double laiTuCacKhoanChoVayVaPhaiThu) {
		this.laiTuCacKhoanChoVayVaPhaiThu = laiTuCacKhoanChoVayVaPhaiThu;
	}
	public Double getDoanhThuNghiepVuMoiGioiChungKhoan() {
		return doanhThuNghiepVuMoiGioiChungKhoan;
	}
	public void setDoanhThuNghiepVuMoiGioiChungKhoan(Double doanhThuNghiepVuMoiGioiChungKhoan) {
		this.doanhThuNghiepVuMoiGioiChungKhoan = doanhThuNghiepVuMoiGioiChungKhoan;
	}
	public Double getLaiTuCacKhoanDauTuNamGiuDenNgayDaoHan() {
		return laiTuCacKhoanDauTuNamGiuDenNgayDaoHan;
	}
	public void setLaiTuCacKhoanDauTuNamGiuDenNgayDaoHan(Double laiTuCacKhoanDauTuNamGiuDenNgayDaoHan) {
		this.laiTuCacKhoanDauTuNamGiuDenNgayDaoHan = laiTuCacKhoanDauTuNamGiuDenNgayDaoHan;
	}
	public Double getLaiTuCacTaiSanTaiChinhSanSangDeBan() {
		return laiTuCacTaiSanTaiChinhSanSangDeBan;
	}
	public void setLaiTuCacTaiSanTaiChinhSanSangDeBan(Double laiTuCacTaiSanTaiChinhSanSangDeBan) {
		this.laiTuCacTaiSanTaiChinhSanSangDeBan = laiTuCacTaiSanTaiChinhSanSangDeBan;
	}
	public Double getDoanhThuNghiepVuBaoLanhPhatHanhChungKhoan() {
		return doanhThuNghiepVuBaoLanhPhatHanhChungKhoan;
	}
	public void setDoanhThuNghiepVuBaoLanhPhatHanhChungKhoan(Double doanhThuNghiepVuBaoLanhPhatHanhChungKhoan) {
		this.doanhThuNghiepVuBaoLanhPhatHanhChungKhoan = doanhThuNghiepVuBaoLanhPhatHanhChungKhoan;
	}
	public Double getTongDoanhThuKhac() {
		return tongDoanhThuKhac;
	}
	public void setTongDoanhThuKhac(Double tongDoanhThuKhac) {
		this.tongDoanhThuKhac = tongDoanhThuKhac;
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
	public Double getTienVaTaiSanTuongDuongTien() {
		return tienVaTaiSanTuongDuongTien;
	}
	public void setTienVaTaiSanTuongDuongTien(Double tienVaTaiSanTuongDuongTien) {
		this.tienVaTaiSanTuongDuongTien = tienVaTaiSanTuongDuongTien;
	}
	public Double getCacTaiSanTaiChinhThongQuaGhiNhanLaiLo() {
		return cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	}
	public void setCacTaiSanTaiChinhThongQuaGhiNhanLaiLo(Double cacTaiSanTaiChinhThongQuaGhiNhanLaiLo) {
		this.cacTaiSanTaiChinhThongQuaGhiNhanLaiLo = cacTaiSanTaiChinhThongQuaGhiNhanLaiLo;
	}
	public Double getCacKhoanDauTuNamGiuDenNgayDaoHan() {
		return cacKhoanDauTuNamGiuDenNgayDaoHan;
	}
	public void setCacKhoanDauTuNamGiuDenNgayDaoHan(Double cacKhoanDauTuNamGiuDenNgayDaoHan) {
		this.cacKhoanDauTuNamGiuDenNgayDaoHan = cacKhoanDauTuNamGiuDenNgayDaoHan;
	}
	public Double getCacKhoanChoVay() {
		return cacKhoanChoVay;
	}
	public void setCacKhoanChoVay(Double cacKhoanChoVay) {
		this.cacKhoanChoVay = cacKhoanChoVay;
	}
	public Double getCacKhoanTaiChinhSanSangDeBan() {
		return cacKhoanTaiChinhSanSangDeBan;
	}
	public void setCacKhoanTaiChinhSanSangDeBan(Double cacKhoanTaiChinhSanSangDeBan) {
		this.cacKhoanTaiChinhSanSangDeBan = cacKhoanTaiChinhSanSangDeBan;
	}
	public Double getTaiSanKhac() {
		return taiSanKhac;
	}
	public void setTaiSanKhac(Double taiSanKhac) {
		this.taiSanKhac = taiSanKhac;
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
	public Double getNImgTrailing() {
		return NImgTrailing;
	}
	public void setNImgTrailing(Double nImgTrailing) {
		NImgTrailing = nImgTrailing;
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
	public Double getThuNhapKhacRong() {
		return thuNhapKhacRong;
	}
	public void setThuNhapKhacRong(Double thuNhapKhacRong) {
		this.thuNhapKhacRong = thuNhapKhacRong;
	}
	public Double getRoe() {
		return roe;
	}
	public void setRoe(Double roe) {
		this.roe = roe;
	}
	public Double getRoa() {
		return roa;
	}
	public void setRoa(Double roa) {
		this.roa = roa;
	}
	public Double getRoic() {
		return roic;
	}
	public void setRoic(Double roic) {
		this.roic = roic;
	}
	public ReportKey getId() {
		return id;
	}
	public void setId(ReportKey id) {
		this.id = id;
	}
	public Double getDoanhThuThuanVeHoatDongKinhDoanh() {
		return doanhThuThuanVeHoatDongKinhDoanh;
	}
	public void setDoanhThuThuanVeHoatDongKinhDoanh(Double doanhThuThuanVeHoatDongKinhDoanh) {
		this.doanhThuThuanVeHoatDongKinhDoanh = doanhThuThuanVeHoatDongKinhDoanh;
	}
	public Double getLoiNhuanSauThuePhanBoChoChuSoHuu() {
		return loiNhuanSauThuePhanBoChoChuSoHuu;
	}
	public void setLoiNhuanSauThuePhanBoChoChuSoHuu(Double loiNhuanSauThuePhanBoChoChuSoHuu) {
		this.loiNhuanSauThuePhanBoChoChuSoHuu = loiNhuanSauThuePhanBoChoChuSoHuu;
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
}
