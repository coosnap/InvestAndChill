package com.starter.InvestAndChill.jwt.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.starter.InvestAndChill.jwt.models.ReportKey;
import com.starter.InvestAndChill.jwt.payload.response.MessageResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.BoLocResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.ChungKhoanSoSanhChiSo1Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.ChungKhoanSoSanhChiSo2Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.ChungKhoanSoSanhChiSo3Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.ChungKhoanSoSanhChiSo4Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.ChungKhoanSoSanhChiSo5Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.ChungKhoanSoSanhChiSoResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.GiaTangCongSuatResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.KhaiThacDuoiCongSuatResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoComp10Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoComp1Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoComp2Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoComp3Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoComp4Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoComp5Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoComp6Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoComp7Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoComp8Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoComp9Response;
import com.starter.InvestAndChill.jwt.payload.response.filter.NganHangSoSanhChiSoResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.NoNhieuSomChiTraResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.TheoDoiPreSalesResponse;
import com.starter.InvestAndChill.jwt.payload.response.filter.XuLyKhauHaoNangResponse;
import com.starter.InvestAndChill.jwt.repository.BoLocRepository;
import com.starter.InvestAndChill.jwt.repository.FilterRepository;
import com.starter.InvestAndChill.pojo.BoLocDTO;
import com.starter.InvestAndChill.pojo.ChungKhoanSoSanhChiSoDTO;
import com.starter.InvestAndChill.pojo.FilterGiaTangCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterKhaiThacDuoiCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterNoNhieuSomChiTraDTO;
import com.starter.InvestAndChill.pojo.FilterPhiTaiChinhDTO;
import com.starter.InvestAndChill.pojo.FilterTheoDoiPreSalesDTO;
import com.starter.InvestAndChill.pojo.FilterXuLyKhauHaoNangDTO;
import com.starter.InvestAndChill.pojo.MinMaxDTO;
import com.starter.InvestAndChill.pojo.NganHangSoSanhChiSoDTO;
import com.starter.InvestAndChill.utils.CalculatorUtils;
import com.starter.InvestAndChill.utils.Constants;
import com.starter.InvestAndChill.utils.FilterCaculationUtils;
import com.starter.InvestAndChill.utils.RoundNumber;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/filter")
public class FilterController {
	
	@Autowired
	FilterRepository filterRepository;
	
	@Autowired
	BoLocRepository boLocRepository;
	
	@GetMapping("/giaTangCongSuat")
	public ResponseEntity<?> filterGiaTangCongSuat(@RequestParam(required = false,name = "sortType") String sortType,@RequestParam(required = false,name = "sortValue") String sortValue,
			@RequestParam(required = false,name = "quarter") String quarter,@RequestParam(required = false,name = "year") String year) {
		List<FilterGiaTangCongSuatDTO> listfilter = new ArrayList<FilterGiaTangCongSuatDTO>();
		if ((quarter != null) && (year != null) && (!quarter.isBlank()) && (!year.isBlank())) {
			listfilter =  filterRepository.findGiaTangCongSuat(year, quarter);
		} else {
			listfilter =  filterRepository.findGiaTangCongSuat(Constants.currentYear, Constants.currentQuarter);
		}
		
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
	public ResponseEntity<?> filterTheoDoiPreSales(@RequestParam(required = false,name = "sortType") String sortType,@RequestParam(required = false,name = "sortValue") String sortValue,
			@RequestParam(required = false,name = "quarter") String quarter,@RequestParam(required = false,name = "year") String year) {
		List<FilterTheoDoiPreSalesDTO> listfilter = new ArrayList<FilterTheoDoiPreSalesDTO>();
		
		if ((quarter != null) && (year != null) && (!quarter.isBlank()) && (!year.isBlank())) {
			listfilter =  filterRepository.findTheoDoiPreSales(year, quarter);
		} else {
			listfilter =  filterRepository.findTheoDoiPreSales(Constants.currentYear, Constants.currentQuarter);
		}
		
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
	public ResponseEntity<?> filterNoNhieuNhungSomChiTra(@RequestParam(required = false,name = "sortType") String sortType,@RequestParam(required = false,name = "sortValue") String sortValue,
			@RequestParam(required = false,name = "quarter") String quarter,@RequestParam(required = false,name = "year") String year) {
		List<FilterNoNhieuSomChiTraDTO> listfilter = new ArrayList<FilterNoNhieuSomChiTraDTO>();
		
		if ((quarter != null) && (year != null) && (!quarter.isBlank()) && (!year.isBlank())) {
			listfilter =  filterRepository.findNoNhieuSomChiTra(year, quarter);
		} else {
			listfilter =  filterRepository.findNoNhieuSomChiTra(Constants.currentYear, Constants.currentQuarter);
		}
		
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
	public ResponseEntity<?> filterxuLyKhauHaoNang(@RequestParam(required = false,name = "sortType") String sortType,@RequestParam(required = false,name = "sortValue") String sortValue,
			@RequestParam(required = false,name = "quarter") String quarter,@RequestParam(required = false,name = "year") String year) {
		List<FilterXuLyKhauHaoNangDTO> listfilter = new ArrayList<FilterXuLyKhauHaoNangDTO>();
		
		if ((quarter != null) && (year != null) && (!quarter.isBlank()) && (!year.isBlank())) {
			listfilter =  filterRepository.findXuLyKhauHaoNang(year, quarter);
		} else {
			listfilter =  filterRepository.findXuLyKhauHaoNang(Constants.currentYear, Constants.currentQuarter);
		}
		
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
	
	
	@GetMapping("/khaiThacDuoiCongSuat")
	public ResponseEntity<?> filterKhaiThacDuoiCongSuat(@RequestParam(required = false,name = "sortType") String sortType,@RequestParam(required = false,name = "sortValue") String sortValue,
			@RequestParam(required = false,name = "quarter") String quarter,@RequestParam(required = false,name = "year") String year) {
		List<FilterKhaiThacDuoiCongSuatDTO> listfilter = new ArrayList<FilterKhaiThacDuoiCongSuatDTO>();
		
		String currentYear = Constants.currentYear;
		String currentQuarter = Constants.currentQuarter;
		
		if ((quarter != null) && (year != null) && (!quarter.isBlank()) && (!year.isBlank())) {
			currentYear = year;
			currentQuarter = quarter;
		}
		
		
		Map<Integer, Integer> map1 = FilterCaculationUtils.tinhQuyGanNhat(currentYear, currentQuarter, 1);
		Map.Entry<Integer, Integer> firstEntry1 = map1.entrySet().iterator().next();
		
		Map<Integer, Integer> map2 = FilterCaculationUtils.tinhQuyGanNhat(currentYear, currentQuarter, 2);
		Map.Entry<Integer, Integer> firstEntry2 = map2.entrySet().iterator().next();
		
		Map<Integer, Integer> map3 = FilterCaculationUtils.tinhQuyGanNhat(currentYear, currentQuarter, 3);
		Map.Entry<Integer, Integer> firstEntry3 = map3.entrySet().iterator().next();
		
		Map<Integer, Integer> map4 = FilterCaculationUtils.tinhQuyGanNhat(currentYear, currentQuarter, 4);
		Map.Entry<Integer, Integer> firstEntry4 = map4.entrySet().iterator().next();
		listfilter =  filterRepository.findKhaiThacDuoiCongSuat(firstEntry1.getKey().toString(), firstEntry1.getValue().toString(),
				firstEntry2.getKey().toString(), firstEntry2.getValue().toString(),
				firstEntry3.getKey().toString(), firstEntry3.getValue().toString(),
				firstEntry4.getKey().toString(), firstEntry4.getValue().toString());
		
		if (listfilter.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is empty"), HttpStatus.OK);
		}
		
		listfilter = CalculatorUtils.filterSortValue(listfilter, sortType, sortValue);
		
		List<KhaiThacDuoiCongSuatResponse> list = new ArrayList<KhaiThacDuoiCongSuatResponse>();
		for (int i=0;i< listfilter.size();i++) {
			FilterKhaiThacDuoiCongSuatDTO report = listfilter.get(i);
			KhaiThacDuoiCongSuatResponse response = new KhaiThacDuoiCongSuatResponse();
			response.setId(new ReportKey(report.getStockCode(),currentQuarter,currentYear));	
			response.setDivyld(RoundNumber.lamTron(report.getDivyld()));
			response.setEvebitda(RoundNumber.lamTronLan(report.getEvebitda()));
			response.setMarketcap(RoundNumber.lamTron(report.getMarketcap()));
			response.setPb(RoundNumber.lamTronLan(report.getPb()));
			response.setPe(RoundNumber.lamTronLan(report.getPe()));
			response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
			response.setPi793(RoundNumber.lamTron(report.getPi793()));
			list.add(response);
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@PostMapping("/boLoc")
	public ResponseEntity<?> filterBoLoc(@RequestBody Map<String, Object> payload, @RequestParam(required = false,name = "sortType") String sortType,@RequestParam(required = false,name = "sortValue") String sortValue){
		  List<BoLocDTO> listfilter = new ArrayList<BoLocDTO>();
		  listfilter =  boLocRepository.boLoc(payload);
			
		if (listfilter.isEmpty()) {
			return new ResponseEntity<>(new MessageResponse("Data is empty"), HttpStatus.OK);
		}
		
		listfilter = CalculatorUtils.filterSortBoLoc(listfilter, sortType, sortValue);
		
		List<BoLocResponse> list = new ArrayList<BoLocResponse>();
		for (int i=0;i< listfilter.size();i++) {
			BoLocDTO report = listfilter.get(i);
			BoLocResponse response = new BoLocResponse();
			response.setStockCode(report.getStockCode());
			response.setDivyld(RoundNumber.lamTronPhanTram(report.getDivyld()));
			response.setEvebitda(RoundNumber.lamTronLan(report.getEvebitda()));
			response.setMarketcap(RoundNumber.lamTron(report.getMarketcap()));
			response.setPb(RoundNumber.lamTronLan(report.getPb()));
			response.setPe(RoundNumber.lamTronLan(report.getPe()));
			response.setRoe(RoundNumber.lamTronPhanTram(report.getRoe()));
			response.setPi791(RoundNumber.lamTronPhanTram(report.getPi791()));
			response.setPi792(RoundNumber.lamTronPhanTram(report.getPi792()));
			response.setPi793(RoundNumber.lamTronPhanTram(report.getPi793()));
			response.setRoic(RoundNumber.lamTronPhanTram(report.getRoic()));
			response.setNetcashmc(RoundNumber.lamTronPhanTram(report.getNetcashmc()));
			list.add(response);
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/getMinMax")
	public ResponseEntity<?> filterGetMinMax(){
		MinMaxDTO minMaxDTO = new MinMaxDTO();
		minMaxDTO = boLocRepository.getMinMax();
		
		minMaxDTO.setDivyldMax(RoundNumber.lamTronPhanTram(minMaxDTO.getDivyldMax()));
		minMaxDTO.setDivyldMin(RoundNumber.lamTronPhanTram(minMaxDTO.getDivyldMin()));
		minMaxDTO.setEvebitdaMax(RoundNumber.lamTronLan(minMaxDTO.getEvebitdaMax()));
		minMaxDTO.setEvebitdaMin(RoundNumber.lamTronLan(minMaxDTO.getEvebitdaMin()));
		minMaxDTO.setMarketcapMax(RoundNumber.lamTron(minMaxDTO.getMarketcapMax()));
		minMaxDTO.setMarketcapMin(RoundNumber.lamTron(minMaxDTO.getMarketcapMin()));
		
		minMaxDTO.setNetcashmcMax(RoundNumber.lamTronPhanTram(minMaxDTO.getNetcashmcMax()));
		minMaxDTO.setNetcashmcMin(RoundNumber.lamTronPhanTram(minMaxDTO.getNetcashmcMin()));
		minMaxDTO.setPbMax(RoundNumber.lamTronLan(minMaxDTO.getPbMax()));
		minMaxDTO.setPbMin(RoundNumber.lamTronLan(minMaxDTO.getPbMin()));
		minMaxDTO.setPeMax(RoundNumber.lamTronLan(minMaxDTO.getPeMax()));
		minMaxDTO.setPeMin(RoundNumber.lamTronLan(minMaxDTO.getPeMin()));
		
		minMaxDTO.setPi24Max(RoundNumber.lamTronPhanTram(minMaxDTO.getPi24Max()));
		minMaxDTO.setPi24Min(RoundNumber.lamTronPhanTram(minMaxDTO.getPi24Min()));
		minMaxDTO.setPi791Max(RoundNumber.lamTronPhanTram(minMaxDTO.getPi791Max()));
		minMaxDTO.setPi791Min(RoundNumber.lamTronPhanTram(minMaxDTO.getPi791Min()));
		minMaxDTO.setPi792Max(RoundNumber.lamTronPhanTram(minMaxDTO.getPi792Max()));
		minMaxDTO.setPi792Min(RoundNumber.lamTronPhanTram(minMaxDTO.getPi792Min()));
		minMaxDTO.setPi793Max(RoundNumber.lamTronPhanTram(minMaxDTO.getPi793Max()));
		minMaxDTO.setPi793Min(RoundNumber.lamTronPhanTram(minMaxDTO.getPi793Min()));
		
		minMaxDTO.setRoeMax(RoundNumber.lamTronPhanTram(minMaxDTO.getRoeMax()));
		minMaxDTO.setRoeMin(RoundNumber.lamTronPhanTram(minMaxDTO.getRoeMin()));
		
		
		
		
		return new ResponseEntity<>(minMaxDTO, HttpStatus.OK);
	}
	
	@GetMapping("/chungkhoan/list")
	public ResponseEntity<?> listChungKhoan(){
		List<String> list = new ArrayList<String>();
		list = boLocRepository.listChungKhoan();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	
	@PostMapping("/chungkhoan/sosanhchiso")
	public ResponseEntity<?> chungKhoanSoSanhChiSo(@RequestBody List<String> stringList, @RequestParam(required = false,name = "chart") String chart){
		List<ChungKhoanSoSanhChiSoDTO> listCkSoSanhChiSoDTO = new ArrayList<ChungKhoanSoSanhChiSoDTO>();
		listCkSoSanhChiSoDTO = boLocRepository.chungKhoanSoSanhChiSo(stringList);
		
		int arrayLength = stringList.size()*5 + (stringList.size()-1);
		String[] arrayChungKhoan = new String[arrayLength];
		Double[] arrayValueci6 = new Double[arrayLength];
		Double[] arrayValueci7 = new Double[arrayLength];
		Double[] arrayValuecb142 = new Double[arrayLength];
		Double[] arrayValuecf159 = new Double[arrayLength];
		Double[] arrayValuecb205 = new Double[arrayLength];
		
		int n = 0; // chay cheo mang array
		int k = 1; // chay theo chi so dola
		int m = 1; // chay theo chi so arrayBank vd ACB1, ACB2
		for (int j=0 ; j< listCkSoSanhChiSoDTO.size();j++) {
			
			if ((j>0) && (!listCkSoSanhChiSoDTO.get(j).getStockCode().equals(listCkSoSanhChiSoDTO.get(j-1).getStockCode()))) {
				arrayChungKhoan[n] = "$" + k;
				k++;
				arrayValueci6[n] = null;
				arrayValueci7[n] = null;
				arrayValuecb142[n] = null;
				arrayValuecf159[n] = null;
				arrayValuecb205[n] = null;
				n++;
				m =1;
				arrayChungKhoan[n] = listCkSoSanhChiSoDTO.get(j).getStockCode() + "- Q" + listCkSoSanhChiSoDTO.get(j).getQuarter() + " - " + listCkSoSanhChiSoDTO.get(j).getYear();				
				arrayValueci6[n] =  RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getCi6());
				arrayValueci7[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getCi7());
				arrayValuecb142[n] = RoundNumber.lamTron(listCkSoSanhChiSoDTO.get(j).getCb142());
				arrayValuecf159[n] = RoundNumber.lamTron(listCkSoSanhChiSoDTO.get(j).getCf159());
				arrayValuecb205[n] = RoundNumber.lamTron(listCkSoSanhChiSoDTO.get(j).getCb205());
				
			} else {
				arrayChungKhoan[n] = listCkSoSanhChiSoDTO.get(j).getStockCode() + "- Q" + listCkSoSanhChiSoDTO.get(j).getQuarter() + " - " + listCkSoSanhChiSoDTO.get(j).getYear();		
				arrayValueci6[n] =  RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getCi6());
				arrayValueci7[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getCi7());
				arrayValuecb142[n] = RoundNumber.lamTron(listCkSoSanhChiSoDTO.get(j).getCb142());
				arrayValuecf159[n] = RoundNumber.lamTron(listCkSoSanhChiSoDTO.get(j).getCf159());
				arrayValuecb205[n] = RoundNumber.lamTron(listCkSoSanhChiSoDTO.get(j).getCb205());
			}
				
			
			n++;
			m++;
		}
		
		if ("comp1".equals(chart)) {
			ChungKhoanSoSanhChiSo1Response response = new ChungKhoanSoSanhChiSo1Response(); 
			response.setArrayChungKhoan(arrayChungKhoan);
			response.setCi6(arrayValueci6);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp2".equals(chart)) {
			ChungKhoanSoSanhChiSo2Response response = new ChungKhoanSoSanhChiSo2Response(); 
			response.setArrayChungKhoan(arrayChungKhoan);
			response.setCi7(arrayValueci7);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp3".equals(chart)) {
			ChungKhoanSoSanhChiSo3Response response = new ChungKhoanSoSanhChiSo3Response(); 
			response.setArrayChungKhoan(arrayChungKhoan);
			response.setCb142(arrayValuecb142);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp4".equals(chart)) {
			ChungKhoanSoSanhChiSo4Response response = new ChungKhoanSoSanhChiSo4Response(); 
			response.setArrayChungKhoan(arrayChungKhoan);
			response.setCf159(arrayValuecf159);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp5".equals(chart)) {
			ChungKhoanSoSanhChiSo5Response response = new ChungKhoanSoSanhChiSo5Response(); 
			response.setArrayChungKhoan(arrayChungKhoan);
			response.setCb205(arrayValuecb205);
			return new ResponseEntity<>(response, HttpStatus.OK);
		}
		
		
		return new ResponseEntity<>("Vui long nhap chart name", HttpStatus.OK);
		
		
		
	}
	
	@GetMapping("/nganhang/list")
	public ResponseEntity<?> listNganHang(){
		List<String> list = new ArrayList<String>();
		list = boLocRepository.listNganHang();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@PostMapping("/nganhang/sosanhchiso")
	public ResponseEntity<?> nganHangSoSanhChiSo(@RequestBody List<String> stringList, @RequestParam(required = false,name = "chart") String chart){
		List<NganHangSoSanhChiSoDTO> listCkSoSanhChiSoDTO = new ArrayList<NganHangSoSanhChiSoDTO>();
		listCkSoSanhChiSoDTO = boLocRepository.nganHangSoSanhChiSo(stringList);
		
		
		
		int arrayLength = stringList.size()*5 + (stringList.size()-1);
		String[] arrayBank = new String[arrayLength];
		Double[] arrayValuebi7 = new Double[arrayLength];
		Double[] arrayValuebi8 = new Double[arrayLength];
		Double[] arrayValuebi9 = new Double[arrayLength];
		Double[] arrayValuebi35 = new Double[arrayLength];
		Double[] arrayValuebi22 = new Double[arrayLength];
		Double[] arrayValuebi23 = new Double[arrayLength];
		Double[] arrayValuebi24 = new Double[arrayLength];
		Double[] arrayValuebi26 = new Double[arrayLength];
		Double[] arrayValuebi30 = new Double[arrayLength];
		Double[] arrayValuebi29 = new Double[arrayLength];
		Double[] arrayValuebi32 = new Double[arrayLength];
		Double[] arrayValuebi20 = new Double[arrayLength];
		Double[] arrayValuebi21 = new Double[arrayLength];
		Double[] arrayValuebi27 = new Double[arrayLength];
		Double[] arrayValuebi25 = new Double[arrayLength];
		
		
		int n = 0; // chay cheo mang array
		int k = 1; // chay theo chi so dola
		int m = 1; // chay theo chi so arrayBank vd ACB1, ACB2
		for (int j=0 ; j< listCkSoSanhChiSoDTO.size();j++) {
			
			if ((j>0) && (!listCkSoSanhChiSoDTO.get(j).getStockCode().equals(listCkSoSanhChiSoDTO.get(j-1).getStockCode()))) {
				arrayBank[n] = "$" + k;
				k++;
				arrayValuebi7[n] = null;
				arrayValuebi8[n] = null;
				arrayValuebi9[n] = null;
				arrayValuebi35[n] = null;
				arrayValuebi22[n] = null;
				arrayValuebi23[n] = null;
				arrayValuebi24[n] = null;
				arrayValuebi26[n] = null;
				arrayValuebi30[n] = null;
				arrayValuebi29[n] = null;
				arrayValuebi32[n] = null;
				arrayValuebi20[n] = null;
				arrayValuebi21[n] = null;
				arrayValuebi27[n] = null;
				arrayValuebi25[n] = null;
				n++;
				m =1;
				//arrayBank[n] = listCkSoSanhChiSoDTO.get(j).getStockCode() + m;
				arrayBank[n] = listCkSoSanhChiSoDTO.get(j).getStockCode() + "- Q" + listCkSoSanhChiSoDTO.get(j).getQuarter() + " - " + listCkSoSanhChiSoDTO.get(j).getYear();				
				arrayValuebi7[n] =  RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi7());
				arrayValuebi8[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi8());
				arrayValuebi9[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi9());
				arrayValuebi35[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi35());
				arrayValuebi22[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi22());
				arrayValuebi23[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi23());
				arrayValuebi24[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi24());
				arrayValuebi26[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi26());
				arrayValuebi30[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi30());
				arrayValuebi29[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi29());
				arrayValuebi32[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi32());
				arrayValuebi20[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi20());
				arrayValuebi21[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi21());
				arrayValuebi27[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi27());
				arrayValuebi25[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi25());
			} else {
				//arrayBank[n] = listCkSoSanhChiSoDTO.get(j).getStockCode() + m;
				arrayBank[n] = listCkSoSanhChiSoDTO.get(j).getStockCode() + "- Q" + listCkSoSanhChiSoDTO.get(j).getQuarter() + " - " + listCkSoSanhChiSoDTO.get(j).getYear();		
				arrayValuebi7[n] =  RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi7());
				arrayValuebi8[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi8());
				arrayValuebi9[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi9());
				arrayValuebi35[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi35());
				arrayValuebi22[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi22());
				arrayValuebi23[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi23());
				arrayValuebi24[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi24());
				arrayValuebi26[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi26());
				arrayValuebi30[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi30());
				arrayValuebi29[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi29());
				arrayValuebi32[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi32());
				arrayValuebi20[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi20());
				arrayValuebi21[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi21());
				arrayValuebi27[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi27());
				arrayValuebi25[n] = RoundNumber.lamTronPhanTram(listCkSoSanhChiSoDTO.get(j).getBi25());
			}
				
			
			n++;
			m++;
		}
		if ("comp1".equals(chart)) {
			NganHangSoSanhChiSoComp1Response response = new NganHangSoSanhChiSoComp1Response(); 
			response.setArrayBank(arrayBank);
			response.setBi7(arrayValuebi7);
			response.setBi8(arrayValuebi8);
			response.setBi9(arrayValuebi9);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp2".equals(chart)) {
			NganHangSoSanhChiSoComp2Response response = new NganHangSoSanhChiSoComp2Response(); 
			response.setArrayBank(arrayBank);
			response.setBi35(arrayValuebi35);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp3".equals(chart)) {
			NganHangSoSanhChiSoComp3Response response = new NganHangSoSanhChiSoComp3Response(); 
			response.setArrayBank(arrayBank);
			response.setBi22(arrayValuebi22);
			response.setBi23(arrayValuebi23);
			response.setBi24(arrayValuebi24);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp4".equals(chart)) {
			NganHangSoSanhChiSoComp4Response response = new NganHangSoSanhChiSoComp4Response(); 
			response.setArrayBank(arrayBank);
			response.setBi26(arrayValuebi26);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp5".equals(chart)) {
			NganHangSoSanhChiSoComp5Response response = new NganHangSoSanhChiSoComp5Response(); 
			response.setArrayBank(arrayBank);
			response.setBi30(arrayValuebi30);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp6".equals(chart)) {
			NganHangSoSanhChiSoComp6Response response = new NganHangSoSanhChiSoComp6Response(); 
			response.setArrayBank(arrayBank);
			response.setBi29(arrayValuebi29);
			response.setBi32(arrayValuebi32);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp7".equals(chart)) {
			NganHangSoSanhChiSoComp7Response response = new NganHangSoSanhChiSoComp7Response(); 
			response.setArrayBank(arrayBank);
			response.setBi20(arrayValuebi20);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp8".equals(chart)) {
			NganHangSoSanhChiSoComp8Response response = new NganHangSoSanhChiSoComp8Response(); 
			response.setArrayBank(arrayBank);
			response.setBi21(arrayValuebi21);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp9".equals(chart)) {
			NganHangSoSanhChiSoComp9Response response = new NganHangSoSanhChiSoComp9Response(); 
			response.setArrayBank(arrayBank);
			response.setBi27(arrayValuebi27);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else if ("comp10".equals(chart)) {
			NganHangSoSanhChiSoComp10Response response = new NganHangSoSanhChiSoComp10Response(); 
			response.setArrayBank(arrayBank);
			response.setBi25(arrayValuebi25);
			return new ResponseEntity<>(response, HttpStatus.OK);
		}
		
		
		
		
		return new ResponseEntity<>("Vui long nhap chart name", HttpStatus.OK);
	}
}
