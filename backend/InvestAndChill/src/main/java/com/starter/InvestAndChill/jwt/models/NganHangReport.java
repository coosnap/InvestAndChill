package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class NganHangReport {
	@EmbeddedId
    private ReportKey id;
	
	//Perf1
	@Column(name = "b_p_14")
	private Double tongThuNhapHoatDong;
	@Column(name = "b_p_24")
	private Double coDongCuaCongTyMe;
	@Column(name = "b_i_6")
	private Double bienLaiRong;
	
	//perf2
	@Column(name = "b_i_7")
	private Double CPHoatDongTTNHD;
	@Column(name = "b_i_8")
	private Double CPDuPhongTTNHD;
	@Column(name = "b_i_9")
	private Double TongCPTTNHD;
	
	//perf3
	@Column(name = "b_p_3")
	private Double thuNhapLaiThuan;
	@Column(name = "b_p_6")
	private Double laiLoTHuanTuHoatDongDichVu;
	@Column(name = "b_i_5")
	private Double laiKhac;
	
	//perf4
	@Column(name = "b_i_20")
	private Double roe;
	@Column(name = "b_i_21")
	private Double roa;
	
	//bal1
	@Column(name = "b_i_1")
	private Double TGVaChoVayCacTCTDKhacTruocDuPhong;
	@Column(name = "b_b_13")
	private Double choVayKhachHang;
	@Column(name = "b_i_2")
	private Double chungKhoanTruocDP;
	@Column(name = "b_i_3")
	private Double cacTaiSanKhac;
	
	//bal2
	@Column(name = "b_b_52")
	private Double tienGuiVaVayCacToChucTinDung;
	@Column(name = "b_b_55")
	private Double tienGuiCuaKhachHang;
	@Column(name = "b_b_58")
	private Double phatHanhGiayToCoGia;
	@Column(name = "b_b_64")
	private Double vonChuSoHuu;
	@Column(name = "b_i_4")
	private Double noPhaiTraKhac;
	
	//bal3
	@Column(name = "b_i_35")
	private Double tinDungSVDauNam;
	@Column(name = "b_i_36")
	private Double huyDongSVDauNam;
	
	//Bal4
	@Column(name = "b_i_29")
	private Double chiPhiHuyDong;
	@Column(name = "b_i_30")
	private Double bienLaiThuan;
	@Column(name = "b_i_32")
	private Double tyLeCasa;
	
	public Double getChiPhiHuyDong() {
		return chiPhiHuyDong;
	}
	public void setChiPhiHuyDong(Double chiPhiHuyDong) {
		this.chiPhiHuyDong = chiPhiHuyDong;
	}
	public Double getBienLaiThuan() {
		return bienLaiThuan;
	}
	public void setBienLaiThuan(Double bienLaiThuan) {
		this.bienLaiThuan = bienLaiThuan;
	}
	public Double getTyLeCasa() {
		return tyLeCasa;
	}
	public void setTyLeCasa(Double tyLeCasa) {
		this.tyLeCasa = tyLeCasa;
	}
	public Double getTinDungSVDauNam() {
		return tinDungSVDauNam;
	}
	public void setTinDungSVDauNam(Double tinDungSVDauNam) {
		this.tinDungSVDauNam = tinDungSVDauNam;
	}
	public Double getHuyDongSVDauNam() {
		return huyDongSVDauNam;
	}
	public void setHuyDongSVDauNam(Double huyDongSVDauNam) {
		this.huyDongSVDauNam = huyDongSVDauNam;
	}
	public Double getTienGuiVaVayCacToChucTinDung() {
		return tienGuiVaVayCacToChucTinDung;
	}
	public void setTienGuiVaVayCacToChucTinDung(Double tienGuiVaVayCacToChucTinDung) {
		this.tienGuiVaVayCacToChucTinDung = tienGuiVaVayCacToChucTinDung;
	}
	public Double getTienGuiCuaKhachHang() {
		return tienGuiCuaKhachHang;
	}
	public void setTienGuiCuaKhachHang(Double tienGuiCuaKhachHang) {
		this.tienGuiCuaKhachHang = tienGuiCuaKhachHang;
	}
	public Double getPhatHanhGiayToCoGia() {
		return phatHanhGiayToCoGia;
	}
	public void setPhatHanhGiayToCoGia(Double phatHanhGiayToCoGia) {
		this.phatHanhGiayToCoGia = phatHanhGiayToCoGia;
	}
	public Double getVonChuSoHuu() {
		return vonChuSoHuu;
	}
	public void setVonChuSoHuu(Double vonChuSoHuu) {
		this.vonChuSoHuu = vonChuSoHuu;
	}
	public Double getNoPhaiTraKhac() {
		return noPhaiTraKhac;
	}
	public void setNoPhaiTraKhac(Double noPhaiTraKhac) {
		this.noPhaiTraKhac = noPhaiTraKhac;
	}
	public Double getTGVaChoVayCacTCTDKhacTruocDuPhong() {
		return TGVaChoVayCacTCTDKhacTruocDuPhong;
	}
	public void setTGVaChoVayCacTCTDKhacTruocDuPhong(Double tGVaChoVayCacTCTDKhacTruocDuPhong) {
		TGVaChoVayCacTCTDKhacTruocDuPhong = tGVaChoVayCacTCTDKhacTruocDuPhong;
	}
	public Double getChoVayKhachHang() {
		return choVayKhachHang;
	}
	public void setChoVayKhachHang(Double choVayKhachHang) {
		this.choVayKhachHang = choVayKhachHang;
	}
	public Double getChungKhoanTruocDP() {
		return chungKhoanTruocDP;
	}
	public void setChungKhoanTruocDP(Double chungKhoanTruocDP) {
		this.chungKhoanTruocDP = chungKhoanTruocDP;
	}
	public Double getCacTaiSanKhac() {
		return cacTaiSanKhac;
	}
	public void setCacTaiSanKhac(Double cacTaiSanKhac) {
		this.cacTaiSanKhac = cacTaiSanKhac;
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
	public Double getThuNhapLaiThuan() {
		return thuNhapLaiThuan;
	}
	public void setThuNhapLaiThuan(Double thuNhapLaiThuan) {
		this.thuNhapLaiThuan = thuNhapLaiThuan;
	}
	public Double getLaiLoTHuanTuHoatDongDichVu() {
		return laiLoTHuanTuHoatDongDichVu;
	}
	public void setLaiLoTHuanTuHoatDongDichVu(Double laiLoTHuanTuHoatDongDichVu) {
		this.laiLoTHuanTuHoatDongDichVu = laiLoTHuanTuHoatDongDichVu;
	}
	public Double getLaiKhac() {
		return laiKhac;
	}
	public void setLaiKhac(Double laiKhac) {
		this.laiKhac = laiKhac;
	}
	public Double getCPHoatDongTTNHD() {
		return CPHoatDongTTNHD;
	}
	public void setCPHoatDongTTNHD(Double cPHoatDongTTNHD) {
		CPHoatDongTTNHD = cPHoatDongTTNHD;
	}
	public Double getCPDuPhongTTNHD() {
		return CPDuPhongTTNHD;
	}
	public void setCPDuPhongTTNHD(Double cPDuPhongTTNHD) {
		CPDuPhongTTNHD = cPDuPhongTTNHD;
	}
	public Double getTongCPTTNHD() {
		return TongCPTTNHD;
	}
	public void setTongCPTTNHD(Double tongCPTTNHD) {
		TongCPTTNHD = tongCPTTNHD;
	}
	public ReportKey getId() {
		return id;
	}
	public void setId(ReportKey id) {
		this.id = id;
	}
	public Double getTongThuNhapHoatDong() {
		return tongThuNhapHoatDong;
	}
	public void setTongThuNhapHoatDong(Double tongThuNhapHoatDong) {
		this.tongThuNhapHoatDong = tongThuNhapHoatDong;
	}
	public Double getCoDongCuaCongTyMe() {
		return coDongCuaCongTyMe;
	}
	public void setCoDongCuaCongTyMe(Double coDongCuaCongTyMe) {
		this.coDongCuaCongTyMe = coDongCuaCongTyMe;
	}
	public Double getBienLaiRong() {
		return bienLaiRong;
	}
	public void setBienLaiRong(Double bienLaiRong) {
		this.bienLaiRong = bienLaiRong;
	}
	
}
