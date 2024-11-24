package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.models.PTCReport;
import com.starter.InvestAndChill.jwt.payload.response.PTC.Perf1Response;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/report/nganhang")
public class BankReportController {
	
	
//	@GetMapping("/perf1/{stock}")
//	public ResponseEntity<?> perf1(@PathVariable String stock, @RequestParam(required = false,name = "type") String type) {
//		List<PTCReport> listReport = new ArrayList<PTCReport>();
//		List<Perf1Response> list;
//	
//		if ("year".equals(type)) {
//			listReport =  ptcNamRepository.findByStockForPerf(stock,pageableNam);
//		} else {
//			listReport =	ptcQuyRepository.findByStockForPerf(stock,pageableQuy);
//		}
//		list = listReport.stream()
//	                .map(report -> {
//	                    Perf1Response response = new Perf1Response();
//	                    response.setId(report.getId());
//	                    response.setDoanhSoThuan(report.getDoanhSoThuan());
//	                    response.setLoiNhuanCuaCoDongCongTyMe(report.getLoiNhuanCuaCoDongCongTyMe());
//	                    response.setBienLaiGop(report.getBienLaiGop());
//	                    response.setBienLaiRong(report.getBienLaiRong());
//	                    return response;
//	                })
//	                .collect(Collectors.toList());
//			
//		return new ResponseEntity<>(list, HttpStatus.OK);
//	}
}
