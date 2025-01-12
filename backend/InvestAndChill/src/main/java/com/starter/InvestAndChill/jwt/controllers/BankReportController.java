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

import com.starter.InvestAndChill.jwt.models.NganHangReport;
import com.starter.InvestAndChill.jwt.models.ValuationKey;
import com.starter.InvestAndChill.jwt.payload.response.MessageResponse;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal10Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal11Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal12Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal1Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal2Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal3Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal4Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal5Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal6Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal7Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal8Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal9Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Perf1Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Perf2Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Perf3Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Perf4Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Val1Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Val2Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Val3Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Val4Response;
import com.starter.InvestAndChill.jwt.repository.NganHangRepositoryNam;
import com.starter.InvestAndChill.jwt.repository.NganHangRepositoryQuy;
import com.starter.InvestAndChill.jwt.repository.ValuationBankingRepository;
import com.starter.InvestAndChill.pojo.ValuationBankingDTO;
import com.starter.InvestAndChill.utils.CalculatorUtils;
import com.starter.InvestAndChill.utils.Constants;
import com.starter.InvestAndChill.utils.RoundNumber;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/report/nganhang")
public class BankReportController {
	@Autowired
	NganHangRepositoryQuy nhQuyRepository;
	Pageable pageableQuy = PageRequest.of(0, 21); 
	
	@Autowired
	NganHangRepositoryNam nhNamRepository;
	Pageable pageableNam = PageRequest.of(0, 10); 

	
	@Autowired
	ValuationBankingRepository valuationBankingRepository;
	
	Pageable pageableValuation = PageRequest.of(0, 41); 
	
	@GetMapping("/perf1/{stock}")
	public ResponseEntity<?> perf1(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Perf1Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                    Perf1Response response = new Perf1Response();
	                    response.setId(report.getId());
	                    response.setTitle(Constants.NganHang_perf1);
	                    response.setBienLaiRong(RoundNumber.lamTron(report.getBienLaiRong()));
	                    response.setCoDongCuaCongTyMe(RoundNumber.lamTron(report.getCoDongCuaCongTyMe()));
	                    response.setTongThuNhapHoatDong(RoundNumber.lamTron(report.getTongThuNhapHoatDong()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf2/{stock}")
	public ResponseEntity<?> perf2(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Perf2Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                    Perf2Response response = new Perf2Response();
	                    response.setId(report.getId());
	                    response.setTitle(Constants.NganHang_perf2);
	                    response.setCPDuPhongTTNHD(RoundNumber.lamTronPhanTram(report.getCPDuPhongTTNHD()));
	                    response.setCPHoatDongTTNHD(RoundNumber.lamTronPhanTram(report.getCPHoatDongTTNHD()));
	                    response.setTongCPTTNHD(RoundNumber.lamTronPhanTram(report.getTongCPTTNHD()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf3/{stock}")
	public ResponseEntity<?> perf3(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Perf3Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                    Perf3Response response = new Perf3Response();
	                    response.setId(report.getId());
	                    response.setTitle(Constants.NganHang_perf3);
	                    response.setLaiKhac(RoundNumber.lamTron(report.getLaiKhac()));
	                    response.setLaiLoTHuanTuHoatDongDichVu(RoundNumber.lamTron(report.getLaiLoTHuanTuHoatDongDichVu()));
	                    response.setThuNhapLaiThuan(RoundNumber.lamTron(report.getThuNhapLaiThuan()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);
	                    	
	                    	response.setLaiKhac(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getLaiKhac(), total)));
		                    response.setLaiLoTHuanTuHoatDongDichVu(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getLaiLoTHuanTuHoatDongDichVu(),total)));
		                    response.setThuNhapLaiThuan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getThuNhapLaiThuan(), total)));
	                    	
	                    }
	                    
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf4/{stock}")
	public ResponseEntity<?> perf4(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Perf4Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Perf4Response response = new Perf4Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_perf4);
	                    response.setRoa(RoundNumber.lamTronPhanTram(report.getRoa()));
	                    response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal1/{stock}")
	public ResponseEntity<?> bal1(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal1Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal1Response response = new Bal1Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal1);
	                    response.setCacTaiSanKhac(RoundNumber.lamTron(report.getCacTaiSanKhac()));
	                    response.setChoVayKhachHang(RoundNumber.lamTron(report.getChoVayKhachHang()));
	                    response.setChungKhoanTruocDP(RoundNumber.lamTron(report.getChungKhoanTruocDP()));
	                    response.setTGVaChoVayCacTCTDKhacTruocDuPhong(RoundNumber.lamTron(report.getTGVaChoVayCacTCTDKhacTruocDuPhong()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);
	                    	
	                    	response.setCacTaiSanKhac(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getCacTaiSanKhac(),total)));
	 	                    response.setChoVayKhachHang(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getChoVayKhachHang() ,total)));
	 	                    response.setChungKhoanTruocDP(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getChungKhoanTruocDP() ,total)));
	 	                    response.setTGVaChoVayCacTCTDKhacTruocDuPhong(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTGVaChoVayCacTCTDKhacTruocDuPhong() ,total)));
	                    	
	                    }
	                    
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal2/{stock}")
	public ResponseEntity<?> bal2(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal2Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal2Response response = new Bal2Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal2);
	                    response.setNoPhaiTraKhac(RoundNumber.lamTron(report.getNoPhaiTraKhac()));
	                    response.setPhatHanhGiayToCoGia(RoundNumber.lamTron(report.getPhatHanhGiayToCoGia()));
	                    response.setTienGuiCuaKhachHang(RoundNumber.lamTron(report.getTienGuiCuaKhachHang()));
	                    response.setTienGuiVaVayCacToChucTinDung(RoundNumber.lamTron(report.getTienGuiVaVayCacToChucTinDung()));
	                    response.setVonChuSoHuu(RoundNumber.lamTron(report.getVonChuSoHuu()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);
	                    	
	                    	response.setNoPhaiTraKhac(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getNoPhaiTraKhac() ,total)));
		                    response.setPhatHanhGiayToCoGia(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getPhatHanhGiayToCoGia(),total)));
		                    response.setTienGuiCuaKhachHang(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTienGuiCuaKhachHang(),total)));
		                    response.setTienGuiVaVayCacToChucTinDung(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTienGuiVaVayCacToChucTinDung(),total)));
		                    response.setVonChuSoHuu(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getVonChuSoHuu(),total)));
	                    	
	                    }
	                    
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal3/{stock}")
	public ResponseEntity<?> bal3(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal3Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal3Response response = new Bal3Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal3);
	                    response.setHuyDongSVDauNam(RoundNumber.lamTronPhanTram(report.getHuyDongSVDauNam()));
	                    response.setTinDungSVDauNam(RoundNumber.lamTronPhanTram(report.getTinDungSVDauNam()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal4/{stock}")
	public ResponseEntity<?> bal4(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal4Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal4Response response = new Bal4Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal4);
	                    response.setBienLaiThuan(RoundNumber.lamTronPhanTram(report.getBienLaiThuan()));
	                    response.setChiPhiHuyDong(RoundNumber.lamTronPhanTram(report.getChiPhiHuyDong()));
	                    response.setTyLeCasa(RoundNumber.lamTronPhanTram(report.getTyLeCasa()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	@GetMapping("/bal5/{stock}")
	public ResponseEntity<?> bal5(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal5Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal5Response response = new Bal5Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal5);
	                    response.setCacKhoanLaiPhiPhaiThu(RoundNumber.lamTron(report.getCacKhoanLaiPhiPhaiThu()));
	                    response.setLaiPhiPhaiThuChoVayKhachHang(RoundNumber.lamTronPhanTram(report.getLaiPhiPhaiThuChoVayKhachHang()));
	                    response.setTaiSanCoKhac(RoundNumber.lamTron(report.getTaiSanCoKhac()));
	                    response.setTSCoKhacTongTS(RoundNumber.lamTronPhanTram(report.getTSCoKhacTongTS()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal6/{stock}")
	public ResponseEntity<?> bal6(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal6Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal6Response response = new Bal6Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal6);
	                    response.setNoCanLuuY(RoundNumber.lamTron(report.getNoCanLuuY()));
	                    response.setNoN2ChoVayKhachHang(RoundNumber.lamTronPhanTram(report.getNoN2ChoVayKhachHang()));
	                    response.setNoXau(RoundNumber.lamTron(report.getNoXau()));
	                    response.setTyLeNoXau(RoundNumber.lamTronPhanTram(report.getTyLeNoXau()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal7/{stock}")
	public ResponseEntity<?> bal7(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal7Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal7Response response = new Bal7Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal7);
	                    response.setDuPhongBaoNoXau(RoundNumber.lamTronPhanTram(report.getDuPhongBaoNoXau()));
	                    response.setDuPhongRuiRoChoVayKhachHang(RoundNumber.lamTron(-report.getDuPhongRuiRoChoVayKhachHang()));
	                    response.setNoXau(RoundNumber.lamTron(report.getNoXau()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal8/{stock}")
	public ResponseEntity<?> bal8(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal8Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal8Response response = new Bal8Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal8);
	                    response.setNoN25VCSH(RoundNumber.lamTronPhanTram(report.getNoN25VCSH()));
	                    response.setVonChuSoHuu(RoundNumber.lamTron(report.getVonChuSoHuu()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal9/{stock}")
	public ResponseEntity<?> bal9(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal9Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal9Response response = new Bal9Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal9);
	                    response.setChoVayDaiHan(RoundNumber.lamTron(report.getChoVayDaiHan()));                                                       
	                    response.setChoVayNganHan(RoundNumber.lamTron(report.getChoVayNganHan()));
	                    response.setChoVayTrungHan(RoundNumber.lamTron(report.getChoVayTrungHan()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);
	
	                    	response.setChoVayDaiHan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getChoVayDaiHan(),total)));
		                    response.setChoVayNganHan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getChoVayNganHan(),total)));
		                    response.setChoVayTrungHan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getChoVayTrungHan(),total)));
	                    	
	                    }
	                    
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal10/{stock}")
	public ResponseEntity<?> bal10(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal10Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal10Response response = new Bal10Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal10);
	                    response.setCaNhan(RoundNumber.lamTron(report.getCaNhan()));
	                    response.setCongTyTNHHVaCoPhan(RoundNumber.lamTron(report.getCongTyTNHHVaCoPhan()));
	                    response.setDoanhNghiepNhaNuoc(RoundNumber.lamTron(report.getDoanhNghiepNhaNuoc()));
	                    response.setDoanhNghiepNuocNgoai(RoundNumber.lamTron(report.getDoanhNghiepNuocNgoai()));
	                    response.setHopTacXaVaCongTyTuNhan(RoundNumber.lamTron(report.getHopTacXaVaCongTyTuNhan()));
	                    response.setKhac(RoundNumber.lamTron(report.getKhac()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);
	                    	
	                    	response.setCaNhan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getCaNhan(),total)));
		                    response.setCongTyTNHHVaCoPhan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getCongTyTNHHVaCoPhan(),total)));
		                    response.setDoanhNghiepNhaNuoc(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getDoanhNghiepNhaNuoc(),total)));
		                    response.setDoanhNghiepNuocNgoai(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getDoanhNghiepNuocNgoai(),total)));
		                    response.setHopTacXaVaCongTyTuNhan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getHopTacXaVaCongTyTuNhan(),total)));
		                    response.setKhac(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getKhac(),total)));
	                    	
	                    }
	                    
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal11/{stock}")
	public ResponseEntity<?> bal11(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal11Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal11Response response = new Bal11Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal11);
	                    response.setTienGuiChoNhungMucDichRiengBiet(RoundNumber.lamTron(report.getTienGuiChoNhungMucDichRiengBiet()));
	                    response.setTienGuiCoKyHan(RoundNumber.lamTron(report.getTienGuiCoKyHan()));
	                    response.setTienGuiKhongKyHan(RoundNumber.lamTron(report.getTienGuiKhongKyHan()));
	                    response.setTienGuiKyQuy(RoundNumber.lamTron(report.getTienGuiKyQuy()));
	                    response.setTienGuiTietKiem(RoundNumber.lamTron(report.getTienGuiTietKiem()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);
	                    	
	                    	response.setTienGuiChoNhungMucDichRiengBiet(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTienGuiChoNhungMucDichRiengBiet(),total)));
		                    response.setTienGuiCoKyHan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTienGuiCoKyHan(),total)));
		                    response.setTienGuiKhongKyHan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTienGuiKhongKyHan(),total)));
		                    response.setTienGuiKyQuy(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTienGuiKyQuy(),total)));
		                    response.setTienGuiTietKiem(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTienGuiTietKiem(),total)));
	                    	
	                    }
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal12/{stock}")
	public ResponseEntity<?> bal12(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal12Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal12Response response = new Bal12Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.NganHang_bal12);
	                    response.setCaNhanTG(RoundNumber.lamTron(report.getCaNhanTG()));
	                    response.setDoanhNghiepNhaNuocTG(RoundNumber.lamTron(report.getDoanhNghiepNhaNuocTG()));
	                    response.setDoanhNghiepNuocNgoaiTG(RoundNumber.lamTron(report.getDoanhNghiepNuocNgoaiTG()));
	                    response.setDoanhNghiepTuNhanTG(RoundNumber.lamTron(report.getDoanhNghiepTuNhanTG()));
	                    response.setKhacTG(RoundNumber.lamTron(report.getKhacTG()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);
	                    	
	                    	response.setCaNhanTG(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getCaNhanTG(),total)));
		                    response.setDoanhNghiepNhaNuocTG(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getDoanhNghiepNhaNuocTG(),total)));
		                    response.setDoanhNghiepNuocNgoaiTG(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getDoanhNghiepNuocNgoaiTG(),total)));
		                    response.setDoanhNghiepTuNhanTG(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getDoanhNghiepTuNhanTG(),total)));
		                    response.setKhacTG(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getKhacTG(),total)));
	                    	
	                    }
	                    
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/val1/{stock}")
	public ResponseEntity<?> val1(@PathVariable String stock) {
		List<ValuationBankingDTO> listValuation = new ArrayList<ValuationBankingDTO>();
		
		listValuation =  valuationBankingRepository.findTopRankedDataByStockCodeWithBanking(stock, pageableValuation);

		if (listValuation.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is not available"), HttpStatus.OK);
		}
		
		Collections.reverse(listValuation);
		CalculatorUtils.calculateMedianForOne(listValuation,"PB");
		List<Val1Response> list = new ArrayList<Val1Response>();
		for (int i=0;i< listValuation.size();i++) {
			ValuationBankingDTO report = listValuation.get(i);
			Val1Response response = new Val1Response();
			response.setId(new ValuationKey(report.getStockCode(),report.getQuarter(),report.getYear(),report.getDate()));
			response.setTitle(Constants.NganHang_val1);
			
			response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
			response.setPb(RoundNumber.lamTronLan(report.getPb()));
			response.setPbMedian(RoundNumber.lamTronLan(report.getPbMedian()));
			list.add(response);
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	} 
	
	@GetMapping("/val2/{stock}")
	public ResponseEntity<?> val2(@PathVariable String stock) {
		List<ValuationBankingDTO> listValuation = new ArrayList<ValuationBankingDTO>();
		
		listValuation =  valuationBankingRepository.findTopRankedDataByStockCodeWithBanking(stock, pageableValuation);

		if (listValuation.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is not available"), HttpStatus.OK);
		}
		
		Collections.reverse(listValuation);
		CalculatorUtils.calculateMedianForOne(listValuation,"PE");
		List<Val2Response> list = new ArrayList<Val2Response>();
		for (int i=0;i< listValuation.size();i++) {
			ValuationBankingDTO report = listValuation.get(i);
			Val2Response response = new Val2Response();
			response.setId(new ValuationKey(report.getStockCode(),report.getQuarter(),report.getYear(),report.getDate()));
			response.setTitle(Constants.NganHang_val2);
		
			response.setPe(RoundNumber.lamTronLan(report.getPe()));
			response.setPeMedian(RoundNumber.lamTronLan(report.getPeMedian()));
			list.add(response);
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	} 
	
	@GetMapping("/val3/{stock}")
	public ResponseEntity<?> val3(@PathVariable String stock) {
		List<ValuationBankingDTO> listValuation = new ArrayList<ValuationBankingDTO>();
		
		listValuation =  valuationBankingRepository.findTopRankedDataByStockCodeWithBanking(stock, pageableValuation);

		if (listValuation.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is not available"), HttpStatus.OK);
		}
		
		Collections.reverse(listValuation);

		List<Val3Response> list = new ArrayList<Val3Response>();
		for (int i=0;i< listValuation.size();i++) {
			ValuationBankingDTO report = listValuation.get(i);
			Val3Response response = new Val3Response();
			response.setId(new ValuationKey(report.getStockCode(),report.getQuarter(),report.getYear(),report.getDate()));
			response.setTitle(Constants.NganHang_val3);
		
			response.setLoiNhuanRongTTM(RoundNumber.lamTron(report.getLoiNhuanRong()));
			response.setVonHoa(RoundNumber.lamTron(report.getMarketcap()));
			list.add(response);
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	} 
	
	@GetMapping("/val4/{stock}")
	public ResponseEntity<?> val4(@PathVariable String stock) {
		List<ValuationBankingDTO> listValuation = new ArrayList<ValuationBankingDTO>();
		
		listValuation =  valuationBankingRepository.findTopRankedDataByStockCodeWithBanking(stock, pageableValuation);

		if (listValuation.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is not available"), HttpStatus.OK);
		}
		
		Collections.reverse(listValuation);

		List<Val4Response> list = new ArrayList<Val4Response>();
		for (int i=0;i< listValuation.size();i++) {
			ValuationBankingDTO report = listValuation.get(i);
			Val4Response response = new Val4Response();
			response.setId(new ValuationKey(report.getStockCode(),report.getQuarter(),report.getYear(),report.getDate()));
			response.setTitle(Constants.NganHang_val4);
		
			response.setVonChuSoHuu(RoundNumber.lamTron(report.getVonChuSoHuu()));
			response.setVonHoa(RoundNumber.lamTron(report.getMarketcap()));
			list.add(response);
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	} 
}
