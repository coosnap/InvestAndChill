package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.Collections;
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
import com.starter.InvestAndChill.utils.CalculatorUtils;
import com.starter.InvestAndChill.utils.Constants;
import com.starter.InvestAndChill.utils.RoundNumber;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/report/phitaichinh")
public class PTCReportController {
	
	@Autowired
	PTCRepositoryQuy ptcQuyRepository;
	Pageable pageableQuy = PageRequest.of(0, 21); 
	Pageable pageableToanQuy = PageRequest.of(0, 40); 
	
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
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                    Perf1Response response = new Perf1Response();
	                    response.setId(report.getId());
	                    response.setTitle(Constants.PTC_perf1);
	                    response.setDoanhSoThuan(RoundNumber.lamTron(report.getDoanhSoThuan()));
	                    response.setLoiNhuanCuaCoDongCongTyMe(RoundNumber.lamTron(report.getLoiNhuanCuaCoDongCongTyMe()));
	                    response.setBienLaiGop(RoundNumber.lamTronPhanTram(report.getBienLaiGop()));
	                    response.setBienLaiRong(RoundNumber.lamTronPhanTram(report.getBienLaiRong()));
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
		Collections.reverse(listReport);
		List<Perf2Response> list = listReport.stream()
                .map(report -> {
                    Perf2Response response = new Perf2Response();
                    response.setId(report.getId());
                    response.setTitle(Constants.PTC_perf2);
                    response.setLoiNhuanCotLoi(RoundNumber.lamTron(report.getLoiNhuanCotLoi()));
                    response.setLoiNhuanTaiChinh(RoundNumber.lamTron(report.getLoiNhuanTaiChinh()));
                    response.setThuNhapKhac(RoundNumber.lamTron(report.getThuNhapKhac()));
                    response.setLaiLoTuCongTyLienDoanh(RoundNumber.lamTron(report.getLaiLoTuCongTyLienDoanh()));
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
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		Collections.reverse(listReport);
		List<Perf3Response> list = listReport.stream()
                .map(report -> {
                    Perf3Response response = new Perf3Response();
                    response.setId(report.getId());
                    response.setTitle(Constants.PTC_perf3);
                    response.setSalesTrailing(RoundNumber.lamTron(report.getSalesTrailing()));
                    response.setGPMTrailing(RoundNumber.lamTronPhanTram(report.getGPMTrailing()));
                    response.setSGAMTrailing(RoundNumber.lamTronPhanTram(report.getSGAMTrailing()));
                    response.setEBITmTrailing(RoundNumber.lamTronPhanTram(report.getEBITmTrailing()));
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
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		Collections.reverse(listReport);
		List<Perf4Response> list = listReport.stream()
                .map(report -> {
                    Perf4Response response = new Perf4Response();
                    response.setId(report.getId());
                    response.setTitle(Constants.PTC_perf4);
                    response.setEBITTrailing(RoundNumber.lamTron(report.getEBITTrailing()));
                    response.setNetFinanceialTrailing(RoundNumber.lamTron(report.getNetFinanceialTrailing()));
                    response.setNetFinancialAdjustTrailing(RoundNumber.lamTron(report.getNetFinancialAdjustTrailing()));
                    response.setNImgTrailing(RoundNumber.lamTronPhanTram(report.getNImgTrailing()));
                    response.setEBITmTrailing(RoundNumber.lamTronPhanTram(report.getEBITmTrailing()));
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
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		Collections.reverse(listReport);
		List<Perf5Response> list = listReport.stream()
                .map(report -> {
                	Perf5Response response = new Perf5Response();
                    response.setId(report.getId());
                    response.setTitle(Constants.PTC_perf5);
                    response.setNITrailing(RoundNumber.lamTron(report.getNITrailing()));
                    response.setAssociateTrailing(RoundNumber.lamTron(report.getAssociateTrailing()));
                    response.setMinoritiesTrailing(RoundNumber.lamTron(report.getMinoritiesTrailing()));
                    response.setNITrailingAdjust(RoundNumber.lamTron(report.getNITrailingAdjust()));
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
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		Collections.reverse(listReport);
		List<Perf6Response> list = listReport.stream()
                .map(report -> {
                	Perf6Response response = new Perf6Response();
                    response.setId(report.getId());
                    response.setTitle(Constants.PTC_perf6);
                    response.setEBITDATrailing(RoundNumber.lamTron(report.getEBITDATrailing()));
                    response.setEBITTrailing(RoundNumber.lamTron(report.getEBITTrailing()));
                    response.setInterestExpenseTrailing(RoundNumber.lamTron(report.getInterestExpenseTrailing()));
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
		Collections.reverse(listReport);
		List<Perf7Response> list = listReport.stream()
                .map(report -> {
                	Perf7Response response = new Perf7Response();
                    response.setId(report.getId());
                    response.setTitle(Constants.PTC_perf7);
                    response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
                    response.setRoic(RoundNumber.lamTronPhanTram(report.getRoic()));
                    response.setLaiVay(RoundNumber.lamTronPhanTram(report.getLaiVay()));
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
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		Collections.reverse(listReport);
		List<Perf8Response> list = listReport.stream()
                .map(report -> {
                	Perf8Response response = new Perf8Response();
                    response.setId(report.getId());
                    response.setTitle(Constants.PTC_perf8);
                    response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
                    response.setAssetTurnover(RoundNumber.lamTronLan(report.getAssetTurnover()));
                    response.setLeverage(RoundNumber.lamTronLan(report.getLeverage()));
                    response.setNImgTrailing(RoundNumber.lamTronPhanTram(report.getNImgTrailing()));
                    response.setDEE(RoundNumber.lamTronLan(report.getDEE()));
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
		Collections.reverse(listReport);
		List<Bal1Response> list = listReport.stream()
                .map(report -> {
                	Bal1Response response = new Bal1Response();
                	response.setId(report.getId());
                	response.setTitle(Constants.PTC_bal1);
                    response.setTienDTNGDaoHan(RoundNumber.lamTron(report.getTienDTNGDaoHan()));
                    response.setPhaiThu(RoundNumber.lamTron(report.getPhaiThu()));
                    response.setHangTonKhoRong(RoundNumber.lamTron(report.getHangTonKhoRong()));
                    response.setTaiSanCoDinh(RoundNumber.lamTron(report.getTaiSanCoDinh()));
                    response.setTaiSanDoDangDaiHan(RoundNumber.lamTron(report.getTaiSanDoDangDaiHan()));
                    response.setGiaTriRongTaiSanDauTu(RoundNumber.lamTron(report.getGiaTriRongTaiSanDauTu()));
                    response.setTaiSanKhac(RoundNumber.lamTron(report.getTaiSanKhac()));
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
		Collections.reverse(listReport);
		List<Bal2Response> list = listReport.stream()
                .map(report -> {
                	Bal2Response response = new Bal2Response();
                	response.setId(report.getId());
                	response.setTitle(Constants.PTC_bal2);
                    response.setNoVay(RoundNumber.lamTron(report.getNoVay()));
                    response.setNoChiemDung(RoundNumber.lamTron(report.getNoChiemDung()));
                    response.setVonGop(RoundNumber.lamTron(report.getVonGop()));
                    response.setLaiChuaPhanPhoi(RoundNumber.lamTron(report.getLaiChuaPhanPhoi()));
                    response.setVcshKhac(RoundNumber.lamTron(report.getVcshKhac()));
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
		Collections.reverse(listReport);
		List<Bal3Response> list = listReport.stream()
                .map(report -> {
                	Bal3Response response = new Bal3Response();
                	response.setId(report.getId());
                	response.setTitle(Constants.PTC_bal3);
                    response.setDAPPE(RoundNumber.lamTron(report.getDAPPE()));
                    response.setGrossPPE(RoundNumber.lamTron(report.getGrossPPE()));
                    response.setXayDungCoBanDoDang(RoundNumber.lamTron(report.getXayDungCoBanDoDang()));
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
		Collections.reverse(listReport);
		List<Bal4Response> list = listReport.stream()
                .map(report -> {
                	Bal4Response response = new Bal4Response();
                	response.setId(report.getId());
                	response.setTitle(Constants.PTC_bal4);
                	response.setNetDebt(RoundNumber.lamTron(report.getNetDebt()));
                	response.setWorkingcap(RoundNumber.lamTron(report.getWorkingcap()));
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
			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		Collections.reverse(listReport);
		List<Bal5Response> list = listReport.stream()
                .map(report -> {
                	Bal5Response response = new Bal5Response();
                	response.setId(report.getId());
                	response.setTitle(Constants.PTC_bal5);
                    response.setVongQuayHangTonKho(RoundNumber.lamTronLan(report.getVongQuayHangTonKho()));
                    response.setVongQuayPhaiThu(RoundNumber.lamTronLan(report.getVongQuayPhaiThu()));
                    response.setVongQuayPhaiTra(RoundNumber.lamTronLan(report.getVongQuayPhaiTra()));
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
		Collections.reverse(listReport);
		List<Bal6Response> list = listReport.stream()
                .map(report -> {
                	Bal6Response response = new Bal6Response();
                	response.setId(report.getId());
                	response.setTitle(Constants.PTC_bal6);
                    response.setLaiVay(RoundNumber.lamTronPhanTram(report.getLaiVay()));
                    response.setVayDaiHanVCSH(RoundNumber.lamTronPhanTram(report.getVayDaiHanVCSH()));
                    response.setVayNganHanVCSH(RoundNumber.lamTronPhanTram(report.getVayNganHanVCSH()));
                    response.setVayVCSH(RoundNumber.lamTronPhanTram(report.getVayVCSH()));
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
		Collections.reverse(listReport);
		List<Cf1Response> list = listReport.stream()
                .map(report -> {
                	Cf1Response response = new Cf1Response();
                	response.setId(report.getId());
                	response.setTitle(Constants.PTC_cf1);
                	response.setLuuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh(RoundNumber.lamTron(report.getLuuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh()));
                	response.setLuuChuyenTienTeRongTuCacHoatDongDauTu(RoundNumber.lamTron(report.getLuuChuyenTienTeRongTuCacHoatDongDauTu()));
                	response.setLuuChuyenTienTeTuHoatDongTaiChinh(RoundNumber.lamTron(report.getLuuChuyenTienTeTuHoatDongTaiChinh()));
                	response.setFcf(RoundNumber.lamTron(report.getFcf()));
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
		Collections.reverse(listReport);
		CalculatorUtils.calculatePI54(listReport);
		CalculatorUtils.calculatePI55(listReport);
		List<Cf2Response> list = listReport.stream()
                .map(report -> {
                	Cf2Response response = new Cf2Response();
                	response.setId(report.getId());
                	response.setTitle(Constants.PTC_cf2);
                    response.setNetIncomeDANWC(RoundNumber.lamTron(report.getNetIncomeDANWC()));
                    response.setNetIncomeDANWCCAPEX(RoundNumber.lamTron(report.getNetIncomeDANWCCAPEX()));
                    response.setNetIncomeDANWCCAPEXRolling(RoundNumber.lamTron(report.getNetIncomeDANWCCAPEXRolling()));
                    response.setNetIncomeDANWCRolling(RoundNumber.lamTron(report.getNetIncomeDANWCRolling()));
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
		Collections.reverse(listReport);
		List<Cf3Response> list = listReport.stream()
                .map(report -> {
                	Cf3Response response = new Cf3Response();
                	response.setId(report.getId());
                	response.setTitle(Constants.PTC_cf3);
                    response.setDauTuNamGiuDenNgayDaoHan(RoundNumber.lamTron(report.getDauTuNamGiuDenNgayDaoHan()));
                    response.setGiaTriThuanDauTuNganHan(RoundNumber.lamTron(report.getGiaTriThuanDauTuNganHan()));
                    response.setNoVay(RoundNumber.lamTron(-report.getNoVay()));
                    response.setTienLongTrongPhaiThuChoVay(RoundNumber.lamTron(report.getTienLongTrongPhaiThuChoVay()));
                    response.setTienVaTuongDuongTien(RoundNumber.lamTron(report.getTienVaTuongDuongTien()));
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
		Collections.reverse(listReport);
		List<Cf4Response> list = listReport.stream()
                .map(report -> {
                	Cf4Response response = new Cf4Response();
                	response.setId(report.getId());
                	response.setTitle(Constants.PTC_cf4);
                    response.setDoanhThuChuaThucHien(RoundNumber.lamTron(report.getDoanhThuChuaThucHien()));
                    response.setDoanhThuChuaThucHienNganHan(RoundNumber.lamTron(report.getDoanhThuChuaThucHienNganHan()));
                    response.setNguoiMuaTraTienTruoc(RoundNumber.lamTron(report.getNguoiMuaTraTienTruoc()));
                    response.setNguoiMuaTraTienTruocDaiHan(RoundNumber.lamTron(report.getNguoiMuaTraTienTruocDaiHan()));
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
