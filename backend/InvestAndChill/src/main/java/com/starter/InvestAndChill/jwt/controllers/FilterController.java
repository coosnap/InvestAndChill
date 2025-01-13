package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.List;

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
import com.starter.InvestAndChill.jwt.payload.response.filter.NoNhieuSomChiTraResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.TheoDoiPreSalesResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.XuLyKhauHaoNangResponse;
import com.starter.InvestAndChill.jwt.repository.FilterRepository;
import com.starter.InvestAndChill.pojo.FilterGiaTangCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterNoNhieuSomChiTraDTO;
import com.starter.InvestAndChill.pojo.FilterPhiTaiChinhDTO;
import com.starter.InvestAndChill.pojo.FilterTheoDoiPreSalesDTO;
import com.starter.InvestAndChill.pojo.FilterXuLyKhauHaoNangDTO;
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
		List<FilterGiaTangCongSuatDTO> listfilter = new ArrayList<FilterGiaTangCongSuatDTO>();
		
		listfilter =  filterRepository.findGiaTangCongSuat();
		
		if (listfilter.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is empty"), HttpStatus.OK);
		}
		
		listfilter = CalculatorUtils.filterSortValue(listfilter, sortType, sortValue);
		
		
		List<GiaTangCongSuatResponse> list = new ArrayList<GiaTangCongSuatResponse>();
		for (int i=0;i< listfilter.size();i++) {
			FilterGiaTangCongSuatDTO report = listfilter.get(i);
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
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/theoDoiPreSales")
	public ResponseEntity<?> filterTheoDoiPreSales(@RequestParam(required = false,name = "sortType") String sortType,@RequestParam(required = false,name = "sortValue") String sortValue) {
		List<FilterTheoDoiPreSalesDTO> listfilter = new ArrayList<FilterTheoDoiPreSalesDTO>();
		
		listfilter =  filterRepository.findTheoDoiPreSales();
		
		if (listfilter.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is empty"), HttpStatus.OK);
		}
		
		listfilter = CalculatorUtils.filterSortValue(listfilter, sortType, sortValue);
		
		
		List<TheoDoiPreSalesResponse> list = new ArrayList<TheoDoiPreSalesResponse>();
		for (int i=0;i< listfilter.size();i++) {
			FilterTheoDoiPreSalesDTO report = listfilter.get(i);
			TheoDoiPreSalesResponse response = new TheoDoiPreSalesResponse();
			response.setId(new ReportKey(report.getStockCode(),report.getQuarter(),report.getYear()));	
			response.setDivyld(RoundNumber.lamTron(report.getDivyld()));
			response.setEvebitda(RoundNumber.lamTronLan(report.getEvebitda()));
			response.setMarketcap(RoundNumber.lamTron(report.getMarketcap()));
			response.setPb(RoundNumber.lamTronLan(report.getPb()));
			response.setPe(RoundNumber.lamTronLan(report.getPe()));
			response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
			response.setPi75(RoundNumber.lamTron(report.getPi75()));
			list.add(response);
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/noNhieuNhungSomChiTra")
	public ResponseEntity<?> filterNoNhieuNhungSomChiTra(@RequestParam(required = false,name = "sortType") String sortType,@RequestParam(required = false,name = "sortValue") String sortValue) {
		List<FilterNoNhieuSomChiTraDTO> listfilter = new ArrayList<FilterNoNhieuSomChiTraDTO>();
		
		listfilter =  filterRepository.findNoNhieuSomChiTra();
		
		if (listfilter.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is empty"), HttpStatus.OK);
		}
		
		listfilter = CalculatorUtils.filterSortValue(listfilter, sortType, sortValue);
		
		
		List<NoNhieuSomChiTraResponse> list = new ArrayList<NoNhieuSomChiTraResponse>();
		for (int i=0;i< listfilter.size();i++) {
			FilterNoNhieuSomChiTraDTO report = listfilter.get(i);
			NoNhieuSomChiTraResponse response = new NoNhieuSomChiTraResponse();
			response.setId(new ReportKey(report.getStockCode(),report.getQuarter(),report.getYear()));	
			response.setDivyld(RoundNumber.lamTron(report.getDivyld()));
			response.setEvebitda(RoundNumber.lamTronLan(report.getEvebitda()));
			response.setMarketcap(RoundNumber.lamTron(report.getMarketcap()));
			response.setPb(RoundNumber.lamTronLan(report.getPb()));
			response.setPe(RoundNumber.lamTronLan(report.getPe()));
			response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
			response.setPi68(RoundNumber.lamTron(report.getPi68()));
			response.setPi69(RoundNumber.lamTron(report.getPi69()));
			list.add(response);
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	
	@GetMapping("/xuLyKhauHaoNang")
	public ResponseEntity<?> filterxuLyKhauHaoNang(@RequestParam(required = false,name = "sortType") String sortType,@RequestParam(required = false,name = "sortValue") String sortValue) {
		List<FilterXuLyKhauHaoNangDTO> listfilter = new ArrayList<FilterXuLyKhauHaoNangDTO>();
		
		listfilter =  filterRepository.findXuLyKhauHaoNang();
		
		if (listfilter.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is empty"), HttpStatus.OK);
		}
		
		listfilter = CalculatorUtils.filterSortValue(listfilter, sortType, sortValue);
		
		
		List<XuLyKhauHaoNangResponse> list = new ArrayList<XuLyKhauHaoNangResponse>();
		for (int i=0;i< listfilter.size();i++) {
			FilterXuLyKhauHaoNangDTO report = listfilter.get(i);
			XuLyKhauHaoNangResponse response = new XuLyKhauHaoNangResponse();
			response.setId(new ReportKey(report.getStockCode(),report.getQuarter(),report.getYear()));	
			response.setDivyld(RoundNumber.lamTron(report.getDivyld()));
			response.setEvebitda(RoundNumber.lamTronLan(report.getEvebitda()));
			response.setMarketcap(RoundNumber.lamTron(report.getMarketcap()));
			response.setPb(RoundNumber.lamTronLan(report.getPb()));
			response.setPe(RoundNumber.lamTronLan(report.getPe()));
			response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
			response.setPi70(RoundNumber.lamTron(report.getPi70()));
			response.setPi73(RoundNumber.lamTron(report.getPi73()));
			list.add(response);
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

}
