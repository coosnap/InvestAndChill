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
	
	//Bal5
	@Column(name = "b_b_42")
	private Double taiSanCoKhac;
	@Column(name = "b_b_44")
	private Double cacKhoanLaiPhiPhaiThu;
	@Column(name = "b_i_27")
	private Double TSCoKhacTongTS;
	@Column(name = "b_i_25")
	private Double laiPhiPhaiThuChoVayKhachHang;
	
	//Bal6
	@Column(name = "b_f_67")
	private Double noCanLuuY;
	@Column(name = "b_i_12")
	private Double noXau;
	@Column(name = "b_i_22")
	private Double noN2ChoVayKhachHang;
	@Column(name = "b_i_23")
	private Double tyLeNoXau;
	
	//Bal7
	@Column(name = "b_b_14")
	private Double duPhongRuiRoChoVayKhachHang;
	@Column(name = "b_i_24")
	private Double duPhongBaoNoXau;
	
	//Bal8
	@Column(name = "b_i_26")
	private Double noN25VCSH;
	
	//bal9
	@Column(name = "b_f_72")
	private Double choVayNganHan;
	@Column(name = "b_f_73")
	private Double choVayTrungHan;
	@Column(name = "b_f_74")
	private Double choVayDaiHan;
	
	//bal10
	@Column(name = "b_f_85")
	private Double doanhNghiepNhaNuoc;
	@Column(name = "b_f_86")
	private Double congTyTNHHVaCoPhan;
	@Column(name = "b_f_87")
	private Double doanhNghiepNuocNgoai;
	@Column(name = "b_f_88")
	private Double hopTacXaVaCongTyTuNhan;
	@Column(name = "b_f_89")
	private Double caNhan;
	@Column(name = "b_f_90")
	private Double khac;
	
	//Bal11
	@Column(name = "b_f_121")
	private Double tienGuiKhongKyHan;
	@Column(name = "b_f_122")
	private Double tienGuiCoKyHan;
	@Column(name = "b_f_123")
	private Double tienGuiTietKiem;
	@Column(name = "b_f_124")
	private Double tienGuiKyQuy;
	@Column(name = "b_f_125")
	private Double tienGuiChoNhungMucDichRiengBiet;
	
	//Bal12
	@Column(name = "b_f_130")
	private Double doanhNghiepNhaNuocTG;
	@Column(name = "b_f_131")
	private Double doanhNghiepTuNhanTG;
	@Column(name = "b_f_132")
	private Double doanhNghiepNuocNgoaiTG;
	@Column(name = "b_f_133")
	private Double caNhanTG;
	@Column(name = "b_f_134")
	private Double khacTG;
	
	public Double getDoanhNghiepNhaNuocTG() {
		return doanhNghiepNhaNuocTG;
	}
	public void setDoanhNghiepNhaNuocTG(Double doanhNghiepNhaNuocTG) {
		this.doanhNghiepNhaNuocTG = doanhNghiepNhaNuocTG;
	}
	public Double getDoanhNghiepTuNhanTG() {
		return doanhNghiepTuNhanTG;
	}
	public void setDoanhNghiepTuNhanTG(Double doanhNghiepTuNhanTG) {
		this.doanhNghiepTuNhanTG = doanhNghiepTuNhanTG;
	}
	public Double getDoanhNghiepNuocNgoaiTG() {
		return doanhNghiepNuocNgoaiTG;
	}
	public void setDoanhNghiepNuocNgoaiTG(Double doanhNghiepNuocNgoaiTG) {
		this.doanhNghiepNuocNgoaiTG = doanhNghiepNuocNgoaiTG;
	}
	public Double getCaNhanTG() {
		return caNhanTG;
	}
	public void setCaNhanTG(Double caNhanTG) {
		this.caNhanTG = caNhanTG;
	}
	public Double getKhacTG() {
		return khacTG;
	}
	public void setKhacTG(Double khacTG) {
		this.khacTG = khacTG;
	}
	public Double getTienGuiKhongKyHan() {
		return tienGuiKhongKyHan;
	}
	public void setTienGuiKhongKyHan(Double tienGuiKhongKyHan) {
		this.tienGuiKhongKyHan = tienGuiKhongKyHan;
	}
	public Double getTienGuiCoKyHan() {
		return tienGuiCoKyHan;
	}
	public void setTienGuiCoKyHan(Double tienGuiCoKyHan) {
		this.tienGuiCoKyHan = tienGuiCoKyHan;
	}
	public Double getTienGuiTietKiem() {
		return tienGuiTietKiem;
	}
	public void setTienGuiTietKiem(Double tienGuiTietKiem) {
		this.tienGuiTietKiem = tienGuiTietKiem;
	}
	public Double getTienGuiKyQuy() {
		return tienGuiKyQuy;
	}
	public void setTienGuiKyQuy(Double tienGuiKyQuy) {
		this.tienGuiKyQuy = tienGuiKyQuy;
	}
	public Double getTienGuiChoNhungMucDichRiengBiet() {
		return tienGuiChoNhungMucDichRiengBiet;
	}
	public void setTienGuiChoNhungMucDichRiengBiet(Double tienGuiChoNhungMucDichRiengBiet) {
		this.tienGuiChoNhungMucDichRiengBiet = tienGuiChoNhungMucDichRiengBiet;
	}
	public Double getDoanhNghiepNhaNuoc() {
		return doanhNghiepNhaNuoc;
	}
	public void setDoanhNghiepNhaNuoc(Double doanhNghiepNhaNuoc) {
		this.doanhNghiepNhaNuoc = doanhNghiepNhaNuoc;
	}
	public Double getCongTyTNHHVaCoPhan() {
		return congTyTNHHVaCoPhan;
	}
	public void setCongTyTNHHVaCoPhan(Double congTyTNHHVaCoPhan) {
		this.congTyTNHHVaCoPhan = congTyTNHHVaCoPhan;
	}
	public Double getDoanhNghiepNuocNgoai() {
		return doanhNghiepNuocNgoai;
	}
	public void setDoanhNghiepNuocNgoai(Double doanhNghiepNuocNgoai) {
		this.doanhNghiepNuocNgoai = doanhNghiepNuocNgoai;
	}
	public Double getHopTacXaVaCongTyTuNhan() {
		return hopTacXaVaCongTyTuNhan;
	}
	public void setHopTacXaVaCongTyTuNhan(Double hopTacXaVaCongTyTuNhan) {
		this.hopTacXaVaCongTyTuNhan = hopTacXaVaCongTyTuNhan;
	}
	public Double getCaNhan() {
		return caNhan;
	}
	public void setCaNhan(Double caNhan) {
		this.caNhan = caNhan;
	}
	public Double getKhac() {
		return khac;
	}
	public void setKhac(Double khac) {
		this.khac = khac;
	}
	public Double getChoVayNganHan() {
		return choVayNganHan;
	}
	public void setChoVayNganHan(Double choVayNganHan) {
		this.choVayNganHan = choVayNganHan;
	}
	public Double getChoVayTrungHan() {
		return choVayTrungHan;
	}
	public void setChoVayTrungHan(Double choVayTrungHan) {
		this.choVayTrungHan = choVayTrungHan;
	}
	public Double getChoVayDaiHan() {
		return choVayDaiHan;
	}
	public void setChoVayDaiHan(Double choVayDaiHan) {
		this.choVayDaiHan = choVayDaiHan;
	}
	public Double getNoN25VCSH() {
		return noN25VCSH;
	}
	public void setNoN25VCSH(Double noN25VCSH) {
		this.noN25VCSH = noN25VCSH;
	}
	public Double getDuPhongRuiRoChoVayKhachHang() {
		return duPhongRuiRoChoVayKhachHang;
	}
	public void setDuPhongRuiRoChoVayKhachHang(Double duPhongRuiRoChoVayKhachHang) {
		this.duPhongRuiRoChoVayKhachHang = duPhongRuiRoChoVayKhachHang;
	}
	public Double getDuPhongBaoNoXau() {
		return duPhongBaoNoXau;
	}
	public void setDuPhongBaoNoXau(Double duPhongBaoNoXau) {
		this.duPhongBaoNoXau = duPhongBaoNoXau;
	}
	
	public Double getNoCanLuuY() {
		return noCanLuuY;
	}
	public void setNoCanLuuY(Double noCanLuuY) {
		this.noCanLuuY = noCanLuuY;
	}
	public Double getNoXau() {
		return noXau;
	}
	public void setNoXau(Double noXau) {
		this.noXau = noXau;
	}
	public Double getNoN2ChoVayKhachHang() {
		return noN2ChoVayKhachHang;
	}
	public void setNoN2ChoVayKhachHang(Double noN2ChoVayKhachHang) {
		this.noN2ChoVayKhachHang = noN2ChoVayKhachHang;
	}
	public Double getTyLeNoXau() {
		return tyLeNoXau;
	}
	public void setTyLeNoXau(Double tyLeNoXau) {
		this.tyLeNoXau = tyLeNoXau;
	}
	public Double getTaiSanCoKhac() {
		return taiSanCoKhac;
	}
	public void setTaiSanCoKhac(Double taiSanCoKhac) {
		this.taiSanCoKhac = taiSanCoKhac;
	}
	public Double getCacKhoanLaiPhiPhaiThu() {
		return cacKhoanLaiPhiPhaiThu;
	}
	public void setCacKhoanLaiPhiPhaiThu(Double cacKhoanLaiPhiPhaiThu) {
		this.cacKhoanLaiPhiPhaiThu = cacKhoanLaiPhiPhaiThu;
	}
	public Double getTSCoKhacTongTS() {
		return TSCoKhacTongTS;
	}
	public void setTSCoKhacTongTS(Double tSCoKhacTongTS) {
		TSCoKhacTongTS = tSCoKhacTongTS;
	}
	public Double getLaiPhiPhaiThuChoVayKhachHang() {
		return laiPhiPhaiThuChoVayKhachHang;
	}
	public void setLaiPhiPhaiThuChoVayKhachHang(Double laiPhiPhaiThuChoVayKhachHang) {
		this.laiPhiPhaiThuChoVayKhachHang = laiPhiPhaiThuChoVayKhachHang;
	}
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
