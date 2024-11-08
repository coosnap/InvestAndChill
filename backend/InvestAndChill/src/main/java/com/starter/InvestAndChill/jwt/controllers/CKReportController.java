package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.models.CKReport;
import com.starter.InvestAndChill.jwt.models.CKReportKey;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/report/chungkhoan")
public class CKReportController {
//	@Autowired
//	CKRepository ckRepository;
//	
//	@GetMapping("/kqkd/{stock}")
//	public ResponseEntity<?> kqkd(@PathVariable String stock) {
//		List<CKReport> ckReports = new ArrayList<CKReport>();
//		try {
//			CKReportKey key = new CKReportKey(stock, "1", "2022");
//			Optional<CKReport> report = ckRepository.findById(key);
//			if (ckReports.isEmpty()) {
//				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//			}
//			return new ResponseEntity<>(report, HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
}
