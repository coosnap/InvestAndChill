package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.models.ReportKey;
import com.starter.InvestAndChill.jwt.payload.response.MessageResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.GiaTangCongSuatResponse;
import com.starter.InvestAndChill.jwt.repository.FilterRepository;
import com.starter.InvestAndChill.pojo.FilterPhiTaiChinhDTO;
import com.starter.InvestAndChill.utils.CalculatorUtils;
import com.starter.InvestAndChill.utils.RoundNumber;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/filter")
public class FilterController {
	
	@Autowired
	FilterRepository filterRepository;
	
	@GetMapping("/giaTangCongSuat")
	public ResponseEntity<?> filterGiaTangCongSuat(@RequestParam(required = false,name = "sortType") String sortType,@RequestParam(required = false,name = "sortValue") String sortValue) {
		List<FilterPhiTaiChinhDTO> listfilter = new ArrayList<FilterPhiTaiChinhDTO>();
		
		listfilter =  filterRepository.findGiaTangCongSuat();
		
		if (listfilter.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is empty"), HttpStatus.OK);
		}
		List<GiaTangCongSuatResponse> list = new ArrayList<GiaTangCongSuatResponse>();
		for (int i=0;i< listfilter.size();i++) {
			FilterPhiTaiChinhDTO report = listfilter.get(i);
			GiaTangCongSuatResponse response = new GiaTangCongSuatResponse();
			response.setId(new ReportKey(report.getStockCode(),report.getQuarter(),report.getYear()));	
			response.setDivyld(RoundNumber.lamTron(report.getDivyld()));
			response.setEvebitda(RoundNumber.lamTronLan(report.getEvebitda()));
			response.setMarketcap(RoundNumber.lamTron(report.getMarketcap()));
			response.setPb(RoundNumber.lamTronLan(report.getPb()));
			response.setPe(RoundNumber.lamTronLan(report.getPe()));
			response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
			response.setPi77(RoundNumber.lamTron(report.getPi77()));
			response.setPi78(RoundNumber.lamTron(report.getPi78()));
			list.add(response);
		}
		List<GiaTangCongSuatResponse> sortedList = CalculatorUtils.filterSortValue(list, sortType, sortValue);
		
		
		
		
		return new ResponseEntity<>(sortedList, HttpStatus.OK);
	}

}
