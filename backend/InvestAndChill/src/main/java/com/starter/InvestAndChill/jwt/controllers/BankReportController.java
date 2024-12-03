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
import com.starter.InvestAndChill.jwt.repository.NganHangRepositoryNam;
import com.starter.InvestAndChill.jwt.repository.NganHangRepositoryQuy;
import com.starter.InvestAndChill.utils.RoundNumber;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/report/nganhang")
public class BankReportController {
	@Autowired
	NganHangRepositoryQuy nhQuyRepository;
	Pageable pageableQuy = PageRequest.of(0, 21);
	Pageable pageableToanQuy = PageRequest.of(0, 40);
	
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
	                    response.setBienLaiRong(RoundNumber.lamTron(report.getBienLaiRong()));
	                    response.setCoDongCuaCongTyMe(RoundNumber.lamTron(report.getCoDongCuaCongTyMe()));
	                    response.setBienLaiRong(RoundNumber.lamTron(report.getBienLaiRong()));
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
	                    response.setCPDuPhongTTNHD(RoundNumber.lamTron(report.getCPDuPhongTTNHD()));
	                    response.setCPHoatDongTTNHD(RoundNumber.lamTron(report.getCPHoatDongTTNHD()));
	                    response.setTongCPTTNHD(RoundNumber.lamTron(report.getTongCPTTNHD()));
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
	                    response.setLaiKhac(RoundNumber.lamTron(report.getLaiKhac()));
	                    response.setLaiLoTHuanTuHoatDongDichVu(RoundNumber.lamTron(report.getLaiLoTHuanTuHoatDongDichVu()));
	                    response.setThuNhapLaiThuan(RoundNumber.lamTron(report.getThuNhapLaiThuan()));
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
	                    response.setRoa(RoundNumber.lamTron(report.getRoa()));
	                    response.setRoe(RoundNumber.lamTron(report.getRoe()));
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
	                    response.setCacTaiSanKhac(RoundNumber.lamTron(report.getCacTaiSanKhac()));
	                    response.setChoVayKhachHang(RoundNumber.lamTron(report.getChoVayKhachHang()));
	                    response.setChungKhoanTruocDP(RoundNumber.lamTron(report.getChungKhoanTruocDP()));
	                    response.setTGVaChoVayCacTCTDKhacTruocDuPhong(RoundNumber.lamTron(report.getTGVaChoVayCacTCTDKhacTruocDuPhong()));
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
	                    response.setNoPhaiTraKhac(RoundNumber.lamTron(report.getNoPhaiTraKhac()));
	                    response.setPhatHanhGiayToCoGia(RoundNumber.lamTron(report.getPhatHanhGiayToCoGia()));
	                    response.setTienGuiCuaKhachHang(RoundNumber.lamTron(report.getTienGuiCuaKhachHang()));
	                    response.setTienGuiVaVayCacToChucTinDung(RoundNumber.lamTron(report.getTienGuiVaVayCacToChucTinDung()));
	                    response.setVonChuSoHuu(RoundNumber.lamTron(report.getVonChuSoHuu()));
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
	                    response.setHuyDongSVDauNam(RoundNumber.lamTron(report.getHuyDongSVDauNam()));
	                    response.setTinDungSVDauNam(RoundNumber.lamTron(report.getTinDungSVDauNam()));
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
	                    response.setBienLaiThuan(RoundNumber.lamTron(report.getBienLaiThuan()));
	                    response.setChiPhiHuyDong(RoundNumber.lamTron(report.getChiPhiHuyDong()));
	                    response.setTyLeCasa(RoundNumber.lamTron(report.getTyLeCasa()));
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
	                    response.setCacKhoanLaiPhiPhaiThu(RoundNumber.lamTron(report.getCacKhoanLaiPhiPhaiThu()));
	                    response.setLaiPhiPhaiThuChoVayKhachHang(RoundNumber.lamTron(report.getLaiPhiPhaiThuChoVayKhachHang()));
	                    response.setTaiSanCoKhac(RoundNumber.lamTron(report.getTaiSanCoKhac()));
	                    response.setTSCoKhacTongTS(RoundNumber.lamTron(report.getTSCoKhacTongTS()));
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
	                    response.setNoCanLuuY(RoundNumber.lamTron(report.getNoCanLuuY()));
	                    response.setNoN2ChoVayKhachHang(RoundNumber.lamTron(report.getNoN2ChoVayKhachHang()));
	                    response.setNoXau(RoundNumber.lamTron(report.getNoXau()));
	                    response.setTyLeNoXau(RoundNumber.lamTron(report.getTyLeNoXau()));
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
	                    response.setDuPhongBaoNoXau(RoundNumber.lamTron(report.getDuPhongBaoNoXau()));
	                    response.setDuPhongRuiRoChoVayKhachHang(RoundNumber.lamTron(report.getDuPhongRuiRoChoVayKhachHang()));
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
		list = listReport.stream()
	                .map(report -> {
	                	Bal8Response response = new Bal8Response();
	                	response.setId(report.getId());
	                    response.setNoN25VCSH(RoundNumber.lamTron(report.getNoN25VCSH()));
	                    response.setVonChuSoHuu(RoundNumber.lamTron(report.getVonChuSoHuu()));
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
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal9Response response = new Bal9Response();
	                	response.setId(report.getId());
	                    response.setChoVayDaiHan(RoundNumber.lamTron(report.getChoVayDaiHan()));
	                    response.setChoVayNganHan(RoundNumber.lamTron(report.getChoVayNganHan()));
	                    response.setChoVayTrungHan(RoundNumber.lamTron(report.getChoVayTrungHan()));
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
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal10Response response = new Bal10Response();
	                	response.setId(report.getId());
	                    response.setCaNhan(RoundNumber.lamTron(report.getCaNhan()));
	                    response.setCongTyTNHHVaCoPhan(RoundNumber.lamTron(report.getCongTyTNHHVaCoPhan()));
	                    response.setDoanhNghiepNhaNuoc(RoundNumber.lamTron(report.getDoanhNghiepNhaNuoc()));
	                    response.setDoanhNghiepNuocNgoai(RoundNumber.lamTron(report.getDoanhNghiepNuocNgoai()));
	                    response.setHopTacXaVaCongTyTuNhan(RoundNumber.lamTron(report.getHopTacXaVaCongTyTuNhan()));
	                    response.setKhac(RoundNumber.lamTron(report.getKhac()));
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
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal11Response response = new Bal11Response();
	                	response.setId(report.getId());
	                    response.setTienGuiChoNhungMucDichRiengBiet(RoundNumber.lamTron(report.getTienGuiChoNhungMucDichRiengBiet()));
	                    response.setTienGuiCoKyHan(RoundNumber.lamTron(report.getTienGuiCoKyHan()));
	                    response.setTienGuiKhongKyHan(RoundNumber.lamTron(report.getTienGuiKhongKyHan()));
	                    response.setTienGuiKyQuy(RoundNumber.lamTron(report.getTienGuiKyQuy()));
	                    response.setTienGuiTietKiem(RoundNumber.lamTron(report.getTienGuiTietKiem()));
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
			listReport =	nhQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal12Response response = new Bal12Response();
	                	response.setId(report.getId());
	                    response.setCaNhanTG(RoundNumber.lamTron(report.getCaNhanTG()));
	                    response.setDoanhNghiepNhaNuocTG(RoundNumber.lamTron(report.getDoanhNghiepNhaNuocTG()));
	                    response.setDoanhNghiepNuocNgoaiTG(RoundNumber.lamTron(report.getDoanhNghiepNuocNgoaiTG()));
	                    response.setDoanhNghiepTuNhanTG(RoundNumber.lamTron(report.getDoanhNghiepTuNhanTG()));
	                    response.setKhacTG(RoundNumber.lamTron(report.getKhacTG()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
}
