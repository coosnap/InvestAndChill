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

import com.starter.InvestAndChill.jwt.models.NganHangReport;
import com.starter.InvestAndChill.jwt.models.PTCReport;

import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal1Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal2Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal3Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Bal4Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Perf1Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Perf2Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Perf3Response;
import com.starter.InvestAndChill.jwt.payload.response.nganhang.Perf4Response;
import com.starter.InvestAndChill.jwt.repository.CKRepositoryNam;
import com.starter.InvestAndChill.jwt.repository.CKRepositoryQuy;
import com.starter.InvestAndChill.jwt.repository.NganHangRepositoryNam;
import com.starter.InvestAndChill.jwt.repository.NganHangRepositoryQuy;

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
	
	@GetMapping("/perf1/{stock}")
	public ResponseEntity<?> perf1(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Perf1Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                    Perf1Response response = new Perf1Response();
	                    response.setId(report.getId());
	                    response.setBienLaiRong(report.getBienLaiRong());
	                    response.setCoDongCuaCongTyMe(report.getCoDongCuaCongTyMe());
	                    response.setBienLaiRong(report.getBienLaiRong());
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
		list = listReport.stream()
	                .map(report -> {
	                    Perf2Response response = new Perf2Response();
	                    response.setId(report.getId());
	                    response.setCPDuPhongTTNHD(report.getCPDuPhongTTNHD());
	                    response.setCPHoatDongTTNHD(report.getCPHoatDongTTNHD());
	                    response.setTongCPTTNHD(report.getTongCPTTNHD());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf3/{stock}")
	public ResponseEntity<?> perf3(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Perf3Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                    Perf3Response response = new Perf3Response();
	                    response.setId(report.getId());
	                    response.setLaiKhac(report.getLaiKhac());
	                    response.setLaiLoTHuanTuHoatDongDichVu(report.getLaiLoTHuanTuHoatDongDichVu());
	                    response.setThuNhapLaiThuan(report.getThuNhapLaiThuan());
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
		list = listReport.stream()
	                .map(report -> {
	                	Perf4Response response = new Perf4Response();
	                    response.setId(report.getId());
	                    response.setRoa(report.getRoa());
	                    response.setRoe(report.getRoe());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal1/{stock}")
	public ResponseEntity<?> bal1(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal1Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal1Response response = new Bal1Response();
	                    response.setId(report.getId());
	                    response.setCacTaiSanKhac(report.getCacTaiSanKhac());
	                    response.setChoVayKhachHang(report.getChoVayKhachHang());
	                    response.setChungKhoanTruocDP(report.getChungKhoanTruocDP());
	                    response.setTGVaChoVayCacTCTDKhacTruocDuPhong(report.getTGVaChoVayCacTCTDKhacTruocDuPhong());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal2/{stock}")
	public ResponseEntity<?> bal2(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal2Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal2Response response = new Bal2Response();
	                    response.setId(report.getId());
	                    response.setNoPhaiTraKhac(report.getNoPhaiTraKhac());
	                    response.setPhatHanhGiayToCoGia(report.getPhatHanhGiayToCoGia());
	                    response.setTienGuiCuaKhachHang(report.getTienGuiCuaKhachHang());
	                    response.setTienGuiVaVayCacToChucTinDung(report.getTienGuiVaVayCacToChucTinDung());
	                    response.setVonChuSoHuu(report.getVonChuSoHuu());
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
		list = listReport.stream()
	                .map(report -> {
	                	Bal3Response response = new Bal3Response();
	                    response.setId(report.getId());
	                    response.setHuyDongSVDauNam(report.getHuyDongSVDauNam());
	                    response.setTinDungSVDauNam(report.getTinDungSVDauNam());
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
		list = listReport.stream()
	                .map(report -> {
	                	Bal4Response response = new Bal4Response();
	                    response.setId(report.getId());
	                    response.setBienLaiThuan(report.getBienLaiThuan());
	                    response.setChiPhiHuyDong(report.getChiPhiHuyDong());
	                    response.setTyLeCasa(report.getTyLeCasa());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
}
