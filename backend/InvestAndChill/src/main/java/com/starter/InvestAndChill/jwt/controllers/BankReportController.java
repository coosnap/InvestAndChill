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
	@GetMapping("/bal5/{stock}")
	public ResponseEntity<?> bal5(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal5Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal5Response response = new Bal5Response();
	                    response.setId(report.getId());
	                    response.setCacKhoanLaiPhiPhaiThu(report.getCacKhoanLaiPhiPhaiThu());
	                    response.setLaiPhiPhaiThuChoVayKhachHang(report.getLaiPhiPhaiThuChoVayKhachHang());
	                    response.setTaiSanCoKhac(report.getTaiSanCoKhac());
	                    response.setTSCoKhacTongTS(report.getTSCoKhacTongTS());
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
		list = listReport.stream()
	                .map(report -> {
	                	Bal6Response response = new Bal6Response();
	                    response.setId(report.getId());
	                    response.setNoCanLuuY(report.getNoCanLuuY());
	                    response.setNoN2ChoVayKhachHang(report.getNoN2ChoVayKhachHang());
	                    response.setNoXau(report.getNoXau());
	                    response.setTyLeNoXau(report.getTyLeNoXau());
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
		list = listReport.stream()
	                .map(report -> {
	                	Bal7Response response = new Bal7Response();
	                    response.setId(report.getId());
	                    response.setDuPhongBaoNoXau(report.getDuPhongBaoNoXau());
	                    response.setDuPhongRuiRoChoVayKhachHang(report.getDuPhongRuiRoChoVayKhachHang());
	                    response.setNoXau(report.getNoXau());
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
		list = listReport.stream()
	                .map(report -> {
	                	Bal8Response response = new Bal8Response();
	                    response.setId(report.getId());
	                    response.setNoN25VCSH(report.getNoN25VCSH());
	                    response.setVonChuSoHuu(report.getVonChuSoHuu());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal9/{stock}")
	public ResponseEntity<?> bal9(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal9Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal9Response response = new Bal9Response();
	                    response.setId(report.getId());
	                    response.setChoVayDaiHan(report.getChoVayDaiHan());
	                    response.setChoVayNganHan(report.getChoVayNganHan());
	                    response.setChoVayTrungHan(report.getChoVayTrungHan());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal10/{stock}")
	public ResponseEntity<?> bal10(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal10Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal10Response response = new Bal10Response();
	                    response.setId(report.getId());
	                    response.setCaNhan(report.getCaNhan());
	                    response.setCongTyTNHHVaCoPhan(report.getCongTyTNHHVaCoPhan());
	                    response.setDoanhNghiepNhaNuoc(report.getDoanhNghiepNhaNuoc());
	                    response.setDoanhNghiepNuocNgoai(report.getDoanhNghiepNuocNgoai());
	                    response.setHopTacXaVaCongTyTuNhan(report.getHopTacXaVaCongTyTuNhan());
	                    response.setKhac(report.getKhac());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal11/{stock}")
	public ResponseEntity<?> bal11(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal11Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal11Response response = new Bal11Response();
	                    response.setId(report.getId());
	                    response.setTienGuiChoNhungMucDichRiengBiet(report.getTienGuiChoNhungMucDichRiengBiet());
	                    response.setTienGuiCoKyHan(report.getTienGuiCoKyHan());
	                    response.setTienGuiKhongKyHan(report.getTienGuiKhongKyHan());
	                    response.setTienGuiKyQuy(report.getTienGuiKyQuy());
	                    response.setTienGuiTietKiem(report.getTienGuiTietKiem());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal12/{stock}")
	public ResponseEntity<?> bal12(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<NganHangReport> listReport = new ArrayList<NganHangReport>();
		List<Bal12Response> list;
	
		if ("year".equals(type)) {
			listReport =  nhNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal12Response response = new Bal12Response();
	                    response.setId(report.getId());
	                    response.setCaNhanTG(report.getCaNhanTG());
	                    response.setDoanhNghiepNhaNuocTG(report.getDoanhNghiepNhaNuocTG());
	                    response.setDoanhNghiepNuocNgoaiTG(report.getDoanhNghiepNuocNgoaiTG());
	                    response.setDoanhNghiepTuNhanTG(report.getDoanhNghiepTuNhanTG());
	                    response.setKhacTG(report.getKhacTG());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
}
