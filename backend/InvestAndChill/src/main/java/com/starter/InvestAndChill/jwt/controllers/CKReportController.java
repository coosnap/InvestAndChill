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
import com.starter.InvestAndChill.jwt.models.ChungKhoanReport;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf1Response;
import com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Bal2Response;
import com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Bal3Response;
import com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Bal4Response;
import com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Bal5Response;
import com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Perf2Response;
import com.starter.InvestAndChill.jwt.repository.CKRepositoryNam;
import com.starter.InvestAndChill.jwt.repository.CKRepositoryQuy;
import com.starter.InvestAndChill.utils.CalculatorUtils;
import com.starter.InvestAndChill.utils.Constants;
import com.starter.InvestAndChill.utils.RoundNumber;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/report/chungkhoan")
public class CKReportController {
	
	@Autowired
	CKRepositoryQuy ckQuyRepository;
	Pageable pageableQuy = PageRequest.of(0, 21); 
	Pageable pageableToanQuy = PageRequest.of(0, 40); 
	
	@Autowired
	CKRepositoryNam ckNamRepository;
	Pageable pageableNam = PageRequest.of(0, 10); 
	
	@GetMapping("/perf1/{stock}")
	public ResponseEntity<?> perf1(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Perf1Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                    Perf1Response response = new Perf1Response();
	                    response.setId(report.getId());
	                    response.setTitle(Constants.ChungKhoan_perf1);
	                    response.setDoanhSoThuan(RoundNumber.lamTron(report.getDoanhThuThuanVeHoatDongKinhDoanh()));
	                    response.setLoiNhuanCuaCoDongCongTyMe(RoundNumber.lamTron(report.getLoiNhuanSauThuePhanBoChoChuSoHuu()));
	                    response.setBienLaiGop(RoundNumber.lamTronPhanTram(report.getBienLaiGop()));
	                    response.setBienLaiRong(RoundNumber.lamTronPhanTram(report.getBienLaiRong()));
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
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                    Perf2Response response = new Perf2Response();
	                    response.setId(report.getId());
	                    response.setTitle(Constants.ChungKhoan_perf2);
	                    response.setRoa(RoundNumber.lamTronPhanTram(report.getRoa()));
	                    response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
	                    response.setRoic(RoundNumber.lamTronPhanTram(report.getRoic()));
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
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	com.starter.InvestAndChill.jwt.payload.response.PTC.Perf2Response response = new com.starter.InvestAndChill.jwt.payload.response.PTC.Perf2Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.ChungKhoan_perf3);
	                    response.setLoiNhuanCotLoi(RoundNumber.lamTron(report.getLoiNhuanCotLoi()));
	                    response.setLoiNhuanTaiChinh(RoundNumber.lamTron(report.getLoiNhuanTaiChinh()));
	                    response.setThuNhapKhac(RoundNumber.lamTron(report.getThuNhapKhacRong()));
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
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	com.starter.InvestAndChill.jwt.payload.response.PTC.Perf3Response response = new com.starter.InvestAndChill.jwt.payload.response.PTC.Perf3Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.ChungKhoan_perf4);
	                    response.setEBITmTrailing(RoundNumber.lamTronPhanTram(report.getEBITmTrailing()));
	                    response.setGPMTrailing(RoundNumber.lamTronPhanTram(report.getGPMTrailing()));
	                    response.setSalesTrailing(RoundNumber.lamTron(report.getSalesTrailing()));
	                    response.setSGAMTrailing(RoundNumber.lamTronPhanTram(report.getSGAMTrailing()));
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
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableToanQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	com.starter.InvestAndChill.jwt.payload.response.PTC.Perf8Response response = new com.starter.InvestAndChill.jwt.payload.response.PTC.Perf8Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.ChungKhoan_perf5);
	                    response.setAssetTurnover(RoundNumber.lamTronLan(report.getAssetTurnover()));
	                    response.setDEE(RoundNumber.lamTronLan(report.getDEE()));
	                    response.setLeverage(RoundNumber.lamTronLan(report.getLeverage()));
	                    response.setNImgTrailing(RoundNumber.lamTronPhanTram(report.getNImgTrailing()));
	                    response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
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
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	com.starter.InvestAndChill.jwt.payload.response.PTC.Bal6Response response = new com.starter.InvestAndChill.jwt.payload.response.PTC.Bal6Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.ChungKhoan_bal1);
	                    response.setLaiVay(RoundNumber.lamTronPhanTram(report.getLaiVay()));
	                    response.setVayVCSH(RoundNumber.lamTronPhanTram(report.getVayVCSH()));
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal2/{stock}")
	public ResponseEntity<?> bal2(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Bal2Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal2Response response = new Bal2Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.ChungKhoan_bal2);
	                    response.setCacKhoanChoVay(RoundNumber.lamTron(report.getCacKhoanChoVay()));
	                    response.setCacKhoanDauTuNamGiuDenNgayDaoHan(RoundNumber.lamTron(report.getCacKhoanDauTuNamGiuDenNgayDaoHan()));
	                    response.setCacKhoanTaiChinhSanSangDeBan(RoundNumber.lamTron(report.getCacKhoanTaiChinhSanSangDeBan()));
	                    response.setCacTaiSanTaiChinhThongQuaGhiNhanLaiLo(RoundNumber.lamTron(report.getCacTaiSanTaiChinhThongQuaGhiNhanLaiLo()));
	                    response.setTaiSanKhac(RoundNumber.lamTron(report.getTaiSanKhac()));
	                    response.setTienVaTaiSanTuongDuongTien(RoundNumber.lamTron(report.getTienVaTaiSanTuongDuongTien()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);
	                    	
	                    	response.setCacKhoanChoVay(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getCacKhoanChoVay(),total)));
		                    response.setCacKhoanDauTuNamGiuDenNgayDaoHan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getCacKhoanDauTuNamGiuDenNgayDaoHan(),total)));
		                    response.setCacKhoanTaiChinhSanSangDeBan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getCacKhoanTaiChinhSanSangDeBan(),total)));
		                    response.setCacTaiSanTaiChinhThongQuaGhiNhanLaiLo(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getCacTaiSanTaiChinhThongQuaGhiNhanLaiLo(),total)));
		                    response.setTaiSanKhac(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTaiSanKhac(),total)));
		                    response.setTienVaTaiSanTuongDuongTien(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTienVaTaiSanTuongDuongTien(),total)));
	                    	
	                    }
	                    
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal3/{stock}")
	public ResponseEntity<?> bal3(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Bal3Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal3Response response = new Bal3Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.ChungKhoan_bal3);
	                    response.setCoPhieuPhoThongCoQuyenBieuQuyet(RoundNumber.lamTron(report.getCoPhieuPhoThongCoQuyenBieuQuyet()));
	                    response.setLoiNhuanChuaPhanPhoi(RoundNumber.lamTron(report.getLoiNhuanChuaPhanPhoi()));
	                    response.setNoChiemDung(RoundNumber.lamTron(report.getNoChiemDung()));
	                    response.setNoVay(RoundNumber.lamTron(report.getNoVay()));
	                    response.setVcshKhac(RoundNumber.lamTron(report.getVcshKhac()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);
	                    	
	                    	response.setCoPhieuPhoThongCoQuyenBieuQuyet(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getCoPhieuPhoThongCoQuyenBieuQuyet(),total)));
		                    response.setLoiNhuanChuaPhanPhoi(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getLoiNhuanChuaPhanPhoi(),total)));
		                    response.setNoChiemDung(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getNoChiemDung(),total)));
		                    response.setNoVay(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getNoVay(),total)));
		                    response.setVcshKhac(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getVcshKhac(),total)));
	                    	
	                    }
	                    
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal4/{stock}")
	public ResponseEntity<?> bal4(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Bal4Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal4Response response = new Bal4Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.ChungKhoan_bal4);
	                    response.setDoanhThuNghiepVuBaoLanhPhatHanhChungKhoan(RoundNumber.lamTron(report.getDoanhThuNghiepVuBaoLanhPhatHanhChungKhoan()));
	                    response.setDoanhThuNghiepVuMoiGioiChungKhoan(RoundNumber.lamTron(report.getDoanhThuNghiepVuMoiGioiChungKhoan()));
	                    response.setLaiTuCacKhoanChoVayVaPhaiThu(RoundNumber.lamTron(report.getLaiTuCacKhoanChoVayVaPhaiThu()));
	                    response.setLaiTuCacKhoanDauTuNamGiuDenNgayDaoHan(RoundNumber.lamTron(report.getLaiTuCacKhoanDauTuNamGiuDenNgayDaoHan()));
	                    response.setLaiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo(RoundNumber.lamTron(report.getLaiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo()));
	                    response.setLaiTuCacTaiSanTaiChinhSanSangDeBan(RoundNumber.lamTron(report.getLaiTuCacTaiSanTaiChinhSanSangDeBan()));
	                    response.setTongDoanhThuKhac(RoundNumber.lamTron(report.getTongDoanhThuKhac()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);
	                    	
	                    	response.setDoanhThuNghiepVuBaoLanhPhatHanhChungKhoan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getDoanhThuNghiepVuBaoLanhPhatHanhChungKhoan(),total)));
		                    response.setDoanhThuNghiepVuMoiGioiChungKhoan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getDoanhThuNghiepVuMoiGioiChungKhoan(),total)));
		                    response.setLaiTuCacKhoanChoVayVaPhaiThu(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getLaiTuCacKhoanChoVayVaPhaiThu(),total)));
		                    response.setLaiTuCacKhoanDauTuNamGiuDenNgayDaoHan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getLaiTuCacKhoanDauTuNamGiuDenNgayDaoHan(),total)));
		                    response.setLaiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getLaiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo(),total)));
		                    response.setLaiTuCacTaiSanTaiChinhSanSangDeBan(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getLaiTuCacTaiSanTaiChinhSanSangDeBan(),total)));
		                    response.setTongDoanhThuKhac(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getTongDoanhThuKhac(),total)));
	                    	
	                    }
	                    
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/bal5/{stock}")
	public ResponseEntity<?> bal5(@PathVariable String stock, @RequestParam(required = false,name = "type") String type,@RequestParam(required = false,name = "chart") String chart) {
		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
		List<Bal5Response> list;
	
		if ("year".equals(type)) {
			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
		} else {
			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
		}
		Collections.reverse(listReport);
		list = listReport.stream()
	                .map(report -> {
	                	Bal5Response response = new Bal5Response();
	                	response.setId(report.getId());
	                	response.setTitle(Constants.ChungKhoan_bal5);
	                    response.setGPAFS(RoundNumber.lamTron(report.getGPAFS()));
	                    response.setGPBaoLanhPhatHanh(RoundNumber.lamTron(report.getGPBaoLanhPhatHanh()));
	                    response.setGPCVMargin(RoundNumber.lamTron(report.getGPCVMargin()));
	                    response.setGPFVTPL(RoundNumber.lamTron(report.getGPFVTPL()));
	                    response.setGPHTM(RoundNumber.lamTron(report.getGPHTM()));
	                    response.setGPKhac(RoundNumber.lamTron(report.getGPKhac()));
	                    response.setGPMoiGioi(RoundNumber.lamTron(report.getGPMoiGioi()));
	                    
	                    if ("area".equals(chart)) {
	                    	Double total = CalculatorUtils.calculateTotal(response);

		                    response.setGPAFS(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getGPAFS(),total)));
		                    response.setGPBaoLanhPhatHanh(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getGPBaoLanhPhatHanh(),total)));
		                    response.setGPCVMargin(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getGPCVMargin(),total)));
		                    response.setGPFVTPL(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getGPFVTPL(),total)));
		                    response.setGPHTM(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getGPHTM(),total)));
		                    response.setGPKhac(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getGPKhac(),total)));
		                    response.setGPMoiGioi(RoundNumber.lamTronPhanTram(RoundNumber.tinhPhanTram(report.getGPMoiGioi(),total)));
	                    	
	                    }
	                    
	                    return response;
	                })
	                .collect(Collectors.toList());
			
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
//	@GetMapping("/val1/{stock}")
//	public ResponseEntity<?> val1(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
//		List<ChungKhoanReport> listReport = new ArrayList<ChungKhoanReport>();
//		List<com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Val1Response> list;
//	
//		if ("year".equals(type)) {
//			listReport =  ckNamRepository.findByStockForPerf(stock,pageableNam);
//		} else {
//			listReport =	ckQuyRepository.findByStockForPerf(stock,pageableQuy);
//		}
//		Collections.reverse(listReport);
//		list = listReport.stream()
//	                .map(report -> {
//	                	com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Val1Response response = new com.starter.InvestAndChill.jwt.payload.response.chungkhoan.Val1Response();
//	                	response.setId(report.getId());
//	                	response.setTitle(Constants.ChungKhoan_bal1);
//	                    response.setLaiVay(RoundNumber.lamTronPhanTram(report.getLaiVay()));
//	                    response.setVayVCSH(RoundNumber.lamTronPhanTram(report.getVayVCSH()));
//	                    return response;
//	                })
//	                .collect(Collectors.toList());
//			
//		return new ResponseEntity<>(list, HttpStatus.OK);
//	}

}
