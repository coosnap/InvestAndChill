package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.models.PTCReport;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Bal1Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Bal2Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Bal3Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Bal4Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Bal5Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Bal6Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Cf1Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Cf2Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Cf3Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Cf4Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf1Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf2Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf3Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf4Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf5Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf6Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf7Response;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf8Response;
import com.starter.InvestAndChill.jwt.repository.PTCRepositoryNam;
import com.starter.InvestAndChill.jwt.repository.PTCRepositoryQuy;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/report/phitaichinh")
public class PTCReportController {
	
	@Autowired
	PTCRepositoryQuy ptcQuyRepository;
	Pageable pageableQuy = PageRequest.of(0, 21); 
	
	@Autowired
	PTCRepositoryNam ptcNamRepository;
	Pageable pageableNam = PageRequest.of(0, 10); 
	
	
	@GetMapping("/perf1/{stock}")
	public ResponseEntity<?> perf1(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		List<Perf1Response> list;
	
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                    Perf1Response response = new Perf1Response();
	                    response.setId(report.getId());
	                    response.setDoanhSoThuan(report.getDoanhSoThuan());
	                    response.setLoiNhuanCuaCoDongCongTyMe(report.getLoiNhuanCuaCoDongCongTyMe());
	                    response.setBienLaiGop(report.getBienLaiGop());
	                    response.setBienLaiRong(report.getBienLaiRong());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf2/{stock}")
	public ResponseEntity<?> perf2(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Perf2Response> list = listReport.stream()
                .map(report -> {
                    Perf2Response response = new Perf2Response();
                    response.setId(report.getId());
                    response.setLoiNhuanCotLoi(report.getLoiNhuanCotLoi());
                    response.setLoiNhuanTaiChinh(report.getLoiNhuanTaiChinh());
                    response.setThuNhapKhac(report.getThuNhapKhac());
                    response.setLaiLoTuCongTyLienDoanh(report.getLaiLoTuCongTyLienDoanh());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf3/{stock}")
	public ResponseEntity<?> perf3(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Perf3Response> list = listReport.stream()
                .map(report -> {
                    Perf3Response response = new Perf3Response();
                    response.setId(report.getId());
                    response.setSalesTrailing(report.getSalesTrailing());
                    response.setGPMTrailing(report.getGPMTrailing());
                    response.setSGAMTrailing(report.getSGAMTrailing());
                    response.setEBITmTrailing(report.getEBITmTrailing());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf4/{stock}")
	public ResponseEntity<?> perf4(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Perf4Response> list = listReport.stream()
                .map(report -> {
                    Perf4Response response = new Perf4Response();
                    response.setId(report.getId());
                    response.setEBITTrailing(report.getEBITTrailing());
                    response.setNetFinanceialTrailing(report.getNetFinanceialTrailing());
                    response.setNetFinancialAdjustTrailing(report.getNetFinancialAdjustTrailing());
                    response.setNImgTrailing(report.getNImgTrailing());
                    response.setEBITmTrailing(report.getEBITmTrailing());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf5/{stock}")
	public ResponseEntity<?> perf5(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Perf5Response> list = listReport.stream()
                .map(report -> {
                	Perf5Response response = new Perf5Response();
                    response.setId(report.getId());
                    response.setNITrailing(report.getNITrailing());
                    response.setAssociateTrailing(report.getAssociateTrailing());
                    response.setMinoritiesTrailing(report.getMinoritiesTrailing());
                    response.setNITrailingAdjust(report.getNITrailingAdjust());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf6/{stock}")
	public ResponseEntity<?> perf6(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Perf6Response> list = listReport.stream()
                .map(report -> {
                	Perf6Response response = new Perf6Response();
                    response.setId(report.getId());
                    response.setEBITDATrailing(report.getEBITDATrailing());
                    response.setEBITTrailing(report.getEBITTrailing());
                    response.setInterestExpenseTrailing(report.getInterestExpenseTrailing());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf7/{stock}")
	public ResponseEntity<?> perf7(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Perf7Response> list = listReport.stream()
                .map(report -> {
                	Perf7Response response = new Perf7Response();
                    response.setId(report.getId());
                    response.setRoe(report.getRoe());
                    response.setRoic(report.getRoic());
                    response.setLaiVay(report.getLaiVay());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf8/{stock}")
	public ResponseEntity<?> perf8(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Perf8Response> list = listReport.stream()
                .map(report -> {
                	Perf8Response response = new Perf8Response();
                    response.setId(report.getId());
                    response.setRoe(report.getRoe());
                    response.setAssetTurnover(report.getAssetTurnover());
                    response.setLeverage(report.getLeverage());
                    response.setNImgTrailing(report.getNImgTrailing());
                    response.setDEE(report.getDEE());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal1/{stock}")
	public ResponseEntity<?> bal1(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Bal1Response> list = listReport.stream()
                .map(report -> {
                	Bal1Response response = new Bal1Response();
                	response.setId(report.getId());
                    response.setTienDTNGDaoHan(report.getTienDTNGDaoHan());
                    response.setPhaiThu(report.getPhaiThu());
                    response.setHangTonKhoRong(report.getHangTonKhoRong());
                    response.setTaiSanCoDinh(report.getTaiSanCoDinh());
                    response.setTaiSanDoDangDaiHan(report.getTaiSanDoDangDaiHan());
                    response.setGiaTriRongTaiSanDauTu(report.getGiaTriRongTaiSanDauTu());
                    response.setTaiSanKhac(report.getTaiSanKhac());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal2/{stock}")
	public ResponseEntity<?> bal2(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Bal2Response> list = listReport.stream()
                .map(report -> {
                	Bal2Response response = new Bal2Response();
                	response.setId(report.getId());
                    response.setNoVay(report.getNoVay());
                    response.setNoChiemDung(report.getNoChiemDung());
                    response.setVonGop(report.getVonGop());
                    response.setLaiChuaPhanPhoi(report.getLaiChuaPhanPhoi());
                    response.setVcshKhac(report.getVcshKhac());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal3/{stock}")
	public ResponseEntity<?> bal3(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Bal3Response> list = listReport.stream()
                .map(report -> {
                	Bal3Response response = new Bal3Response();
                	response.setId(report.getId());
                    response.setDAPPE(report.getDAPPE());
                    response.setGrossPPE(report.getGrossPPE());
                    response.setXayDungCoBanDoDang(report.getXayDungCoBanDoDang());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal4/{stock}")
	public ResponseEntity<?> bal4(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Bal4Response> list = listReport.stream()
                .map(report -> {
                	Bal4Response response = new Bal4Response();
                	response.setId(report.getId());
                	response.setNetDebt(report.getNetDebt());
                	response.setWorkingcap(report.getWorkingcap());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal5/{stock}")
	public ResponseEntity<?> bal5(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Bal5Response> list = listReport.stream()
                .map(report -> {
                	Bal5Response response = new Bal5Response();
                	response.setId(report.getId());
                    response.setVongQuayHangTonKho(report.getVongQuayHangTonKho());
                    response.setVongQuayPhaiThu(report.getVongQuayPhaiThu());
                    response.setVongQuayPhaiTra(report.getVongQuayPhaiTra());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal6/{stock}")
	public ResponseEntity<?> bal6(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Bal6Response> list = listReport.stream()
                .map(report -> {
                	Bal6Response response = new Bal6Response();
                	response.setId(report.getId());
                    response.setLaiVay(report.getLaiVay());
                    response.setVayDaiHanVCSH(report.getVayDaiHanVCSH());
                    response.setVayNganHanVCSH(report.getVayNganHanVCSH());
                    response.setVayVCSH(report.getVayVCSH());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/cf1/{stock}")
	public ResponseEntity<?> cf1(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Cf1Response> list = listReport.stream()
                .map(report -> {
                	Cf1Response response = new Cf1Response();
                	response.setId(report.getId());
                	response.setLuuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh(report.getLuuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh());
                	response.setLuuChuyenTienTeRongTuCacHoatDongDauTu(report.getLuuChuyenTienTeRongTuCacHoatDongDauTu());
                	response.setLuuChuyenTienTeTuHoatDongTaiChinh(report.getLuuChuyenTienTeTuHoatDongTaiChinh());
                	response.setFcf(report.getFcf());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/cf2/{stock}")
	public ResponseEntity<?> cf2(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Cf2Response> list = listReport.stream()
                .map(report -> {
                	Cf2Response response = new Cf2Response();
                	response.setId(report.getId());
                    response.setNetIncomeDANWC(report.getNetIncomeDANWC());
                    response.setNetIncomeDANWCCAPEX(report.getNetIncomeDANWCCAPEX());
                    response.setNetIncomeDANWCCAPEXRolling(report.getNetIncomeDANWCCAPEXRolling());
                    response.setNetIncomeDANWCRolling(report.getNetIncomeDANWCRolling());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/cf3/{stock}")
	public ResponseEntity<?> cf3(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Cf3Response> list = listReport.stream()
                .map(report -> {
                	Cf3Response response = new Cf3Response();
                	response.setId(report.getId());
                    response.setDauTuNamGiuDenNgayDaoHan(report.getDauTuNamGiuDenNgayDaoHan());
                    response.setGiaTriThuanDauTuNganHan(report.getGiaTriThuanDauTuNganHan());
                    response.setNoVay(-report.getNoVay());
                    response.setTienLongTrongPhaiThuChoVay(report.getTienLongTrongPhaiThuChoVay());
                    response.setTienVaTuongDuongTien(report.getTienVaTuongDuongTien());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/cf4/{stock}")
	public ResponseEntity<?> cf4(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
		List<PTCReport> listReport = new ArrayList<PTCReport>();
		if ("year".equals(type)) {
			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		List<Cf4Response> list = listReport.stream()
                .map(report -> {
                	Cf4Response response = new Cf4Response();
                	response.setId(report.getId());
                    response.setDoanhThuChuaThucHien(report.getDoanhThuChuaThucHien());
                    response.setDoanhThuChuaThucHienNganHan(report.getDoanhThuChuaThucHienNganHan());
                    response.setNguoiMuaTraTienTruoc(report.getNguoiMuaTraTienTruoc());
                    response.setNguoiMuaTraTienTruocDaiHan(report.getNguoiMuaTraTienTruocDaiHan());
                    return response;
                })
                .collect(Collectors.toList());
		 return new ResponseEntity<>(list, HttpStatus.OK);
	}
//	
//	@GetMapping("/other1/{stock}")
//	public ResponseEntity<?> other1(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
//		List<PTCReport> listReport = new ArrayList<PTCReport>();
//		if ("year".equals(type)) {
//			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
//		} else {
//			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
//		}
//		List<Other1Response> list = listReport.stream()
//                .map(report -> {
//                	Other1Response response = new Other1Response();
//                	response.setId(report.getId());
//                    response.setNguoiMuaTraTienTruoc(report.getNguoiMuaTraTienTruoc());
//                    response.setDoanhThuChuaThucHienNganHan(report.getDoanhThuChuaThucHienNganHan());
//                    response.setNguoiMuaTraTienTruocDaiHan(report.getNguoiMuaTraTienTruocDaiHan());
//                    response.setDoanhThuChuaThucHien(report.getDoanhThuChuaThucHien());
//                    return response;
//                })
//                .collect(Collectors.toList());
//		 return new ResponseEntity<>(list, HttpStatus.OK);
//	}
//	
//	@GetMapping("/other2/{stock}")
//	public ResponseEntity<?> other2(@PathVariable String stock,@RequestParam(required = false,name = "type") String type) {
//		List<PTCReport> listReport = new ArrayList<PTCReport>();
//		if ("year".equals(type)) {
//			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
//		} else {
//			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
//		}
//		List<Other2Response> list = listReport.stream()
//                .map(report -> {
//                	Other2Response response = new Other2Response();
//                	response.setId(report.getId());
//                    response.setTienDTNGDaoHan(report.getTienDTNGDaoHan());
//                    response.setPhaiThu(report.getPhaiThu());
//                    response.setHangTonKhoRong(report.getHangTonKhoRong());
//                    response.setTaiSanCoDinh(report.getTaiSanCoDinh());
//                    response.setGiaTriRongTaiSanDauTu(report.getGiaTriRongTaiSanDauTu());
//                    response.setTaiSanDoDangDaiHan(report.getTaiSanDoDangDaiHan());
//                    return response;
//                })
//                .collect(Collectors.toList());
//		 return new ResponseEntity<>(list, HttpStatus.OK);
//	}
}
