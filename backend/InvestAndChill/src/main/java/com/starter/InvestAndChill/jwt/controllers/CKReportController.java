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
import com.starter.InvestAndChill.jwt.models.ChungKhoanReport;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf1Response;
import com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Bal2Response;
import com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Bal3Response;
import com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Bal4Response;
import com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Bal5Response;
import com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Perf2Response;
import com.starter.InvestAndChill.jwt.repository.CKRepositoryNam;
import com.starter.InvestAndChill.jwt.repository.CKRepositoryQuy;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/report/chungkhoan")
public class CKReportController {
	
	@Autowired
	CKRepositoryQuy ckQuyRepository;
	Pageable pageableQuy = PageRequest.of(0, 21); 
	
	@Autowired
	CKRepositoryNam ckNamRepository;
	Pageable pageableNam = PageRequest.of(0, 10); 
	
	/*@GetMapping("/perf1/{stock}")
	public ResponseEntity<?> perf1(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Perf1Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                    Perf1Response response = new Perf1Response();
	                    response.setId(report.getId());
	                    response.setDoanhSoThuan(report.getDoanhThuThuanVeHoatDongKinhDoanh());
	                    response.setLoiNhuanCuaCoDongCongTyMe(report.getLoiNhuanSauThuePhanBoChoChuSoHuu());
	                    response.setBienLaiGop(report.getBienLaiGop());
	                    response.setBienLaiRong(report.getBienLaiRong());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf2/{stock}")
	public ResponseEntity<?> perf2(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Perf2Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                    Perf2Response response = new Perf2Response();
	                    response.setId(report.getId());
	                    response.setRoa(report.getRoa());
	                    response.setRoe(report.getRoe());
	                    response.setRoic(report.getRoic());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf3/{stock}")
	public ResponseEntity<?> perf3(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<com.starter.InvestAndChill.jwt.payload.response.PTC.Perf2Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	com.starter.InvestAndChill.jwt.payload.response.PTC.Perf2Response response = new com.starter.InvestAndChill.jwt.payload.response.PTC.Perf2Response();
	                    response.setId(report.getId());
	                    response.setLoiNhuanCotLoi(report.getLoiNhuanCotLoi());
	                    response.setLoiNhuanTaiChinh(report.getLoiNhuanTaiChinh());
	                    response.setThuNhapKhac(report.getThuNhapKhacRong());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf4/{stock}")
	public ResponseEntity<?> perf4(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<com.starter.InvestAndChill.jwt.payload.response.PTC.Perf3Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	com.starter.InvestAndChill.jwt.payload.response.PTC.Perf3Response response = new com.starter.InvestAndChill.jwt.payload.response.PTC.Perf3Response();
	                    response.setId(report.getId());
	                    response.setEBITmTrailing(report.getEBITmTrailing());
	                    response.setGPMTrailing(report.getGPMTrailing());
	                    response.setSalesTrailing(report.getSalesTrailing());
	                    response.setSGAMTrailing(report.getSGAMTrailing());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/perf5/{stock}")
	public ResponseEntity<?> perf5(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<com.starter.InvestAndChill.jwt.payload.response.PTC.Perf8Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	com.starter.InvestAndChill.jwt.payload.response.PTC.Perf8Response response = new com.starter.InvestAndChill.jwt.payload.response.PTC.Perf8Response();
	                    response.setId(report.getId());
	                    response.setAssetTurnover(report.getAssetTurnover());
	                    response.setDEE(report.getDEE());
	                    response.setLeverage(report.getLeverage());
	                    response.setNImgTrailing(report.getNImgTrailing());
	                    response.setRoe(report.getRoe());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal1/{stock}")
	public ResponseEntity<?> bal1(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<com.starter.InvestAndChill.jwt.payload.response.PTC.Bal6Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	com.starter.InvestAndChill.jwt.payload.response.PTC.Bal6Response response = new com.starter.InvestAndChill.jwt.payload.response.PTC.Bal6Response();
	                    response.setId(report.getId());
	                    response.setLaiVay(report.getLaiVay());
	                    response.setVayVCSH(report.getVayVCSH());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal2/{stock}")
	public ResponseEntity<?> bal2(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Bal2Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal2Response response = new Bal2Response();
	                    response.setId(report.getId());
	                    response.setCacKhoanChoVay(report.getCacKhoanChoVay());
	                    response.setCacKhoanDauTuNamGiuDenNgayDaoHan(report.getCacKhoanDauTuNamGiuDenNgayDaoHan());
	                    response.setCacKhoanTaiChinhSanSangDeBan(report.getCacKhoanTaiChinhSanSangDeBan());
	                    response.setCacTaiSanTaiChinhThongQuaGhiNhanLaiLo(report.getCacTaiSanTaiChinhThongQuaGhiNhanLaiLo());
	                    response.setTaiSanKhac(report.getTaiSanKhac());
	                    response.setTienVaTaiSanTuongDuongTien(report.getTienVaTaiSanTuongDuongTien());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal3/{stock}")
	public ResponseEntity<?> bal3(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Bal3Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal3Response response = new Bal3Response();
	                    response.setId(report.getId());
	                    response.setCoPhieuPhoThongCoQuyenBieuQuyet(report.getCoPhieuPhoThongCoQuyenBieuQuyet());
	                    response.setLoiNhuanChuaPhanPhoi(report.getLoiNhuanChuaPhanPhoi());
	                    response.setNoChiemDung(report.getNoChiemDung());
	                    response.setNoVay(report.getNoVay());
	                    response.setVcshKhac(report.getVcshKhac());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal4/{stock}")
	public ResponseEntity<?> bal4(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Bal4Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal4Response response = new Bal4Response();
	                    response.setId(report.getId());
	                    response.setDoanhThuNghiepVuBaoLanhPhatHanhChungKhoan(report.getDoanhThuNghiepVuBaoLanhPhatHanhChungKhoan());
	                    response.setDoanhThuNghiepVuMoiGioiChungKhoan(report.getDoanhThuNghiepVuMoiGioiChungKhoan());
	                    response.setLaiTuCacKhoanChoVayVaPhaiThu(report.getLaiTuCacKhoanChoVayVaPhaiThu());
	                    response.setLaiTuCacKhoanDauTuNamGiuDenNgayDaoHan(report.getLaiTuCacKhoanDauTuNamGiuDenNgayDaoHan());
	                    response.setLaiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo(report.getLaiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo());
	                    response.setLaiTuCacTaiSanTaiChinhSanSangDeBan(report.getLaiTuCacTaiSanTaiChinhSanSangDeBan());
	                    response.setTongDoanhThuKhac(report.getTongDoanhThuKhac());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal5/{stock}")
	public ResponseEntity<?> bal5(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Bal5Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		list = listReport.stream()
	                .map(report -> {
	                	Bal5Response response = new Bal5Response();
	                    response.setId(report.getId());
	                    response.setGPAFS(report.getGPAFS());
	                    response.setGPBaoLanhPhatHanh(report.getGPBaoLanhPhatHanh());
	                    response.setGPCVMargin(report.getGPCVMargin());
	                    response.setGPFVTPL(report.getGPFVTPL());
	                    response.setGPHTM(report.getGPHTM());
	                    response.setGPKhac(report.getGPKhac());
	                    response.setGPMoiGioi(report.getGPMoiGioi());
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}*/

}
