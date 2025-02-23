package com.starter.InvestAndChill.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class FilterCaculationUtils {
	public static void main(String[] args) {
		List<String> list = new ArrayList<String>();
		list.add("VND");
		list.add("SSI");
		System.out.print(buildQuerySoSanhChiSoChungKhoan(list));
    }
	
	public static Map<Integer, Integer> tinhQuyGanNhat(String namHienTai,String quyHienTai, int khoangCach) {
		Integer quy = Integer.valueOf(quyHienTai);
		Integer nam = Integer.valueOf(namHienTai);
		
		for (int i=0;i<khoangCach;i++) {
			quy = quy - 1;
			if (quy == 0) {
				nam = nam-1;
				quy = 4;
			}
		}
		Map<Integer, Integer> map = new HashMap<>();
		map.put(nam, quy);
		
		return map;
		
	}
	
	public static String buildQueryBoLoc(Map<String, Object> payload,String orderQuery) {
		String tangtruongdoanhthu = (String )payload.get("tangtruongdoanhthu");
		  
		  Double tangtruongdoanhthuMin = Optional.ofNullable((String)payload.get("tangtruongdoanhthuMin")).map(Double::valueOf).orElse(null); 
		  Double tangtruongdoanhthuMax = Optional.ofNullable((String)payload.get("tangtruongdoanhthuMax")).map(Double::valueOf).orElse(null);
		  Double marketcapMin = Optional.ofNullable((String)payload.get("marketcapMin")).map(Double::valueOf).orElse(null);
		  Double marketcapMax = Optional.ofNullable((String)payload.get("marketcapMax")).map(Double::valueOf).orElse(null);
		  Double roeMin = Optional.ofNullable((String)payload.get("roeMin")).map(Double::valueOf).orElse(null);
		  Double roeMax = Optional.ofNullable((String)payload.get("roeMax")).map(Double::valueOf).orElse(null);
		  Double pi24Min = Optional.ofNullable((String)payload.get("pi24Min")).map(Double::valueOf).orElse(null);
		  Double pi24Max = Optional.ofNullable((String)payload.get("pi24Max")).map(Double::valueOf).orElse(null);
		  Double peMin = Optional.ofNullable((String)payload.get("peMin")).map(Double::valueOf).orElse(null);
		  Double peMax = Optional.ofNullable((String)payload.get("peMax")).map(Double::valueOf).orElse(null);
		  Double pbMin = Optional.ofNullable((String)payload.get("pbMin")).map(Double::valueOf).orElse(null);
		  Double pbMax = Optional.ofNullable((String)payload.get("pbMax")).map(Double::valueOf).orElse(null);
		  Double evebitdaMin = Optional.ofNullable((String)payload.get("evebitdaMin")).map(Double::valueOf).orElse(null);
		  Double evebitdaMax = Optional.ofNullable((String)payload.get("evebitdaMax")).map(Double::valueOf).orElse(null);
		  Double divyldMin = Optional.ofNullable((String)payload.get("divyldMin")).map(Double::valueOf).orElse(null);
		  Double divyldMax = Optional.ofNullable((String)payload.get("divyldMax")).map(Double::valueOf).orElse(null);
		  Double netcashmcMin = Optional.ofNullable((String)payload.get("netcashmcMin")).map(Double::valueOf).orElse(null);
		  Double netcashmcMax = Optional.ofNullable((String)payload.get("netcashmcMax")).map(Double::valueOf).orElse(null);
		
		
        StringBuilder sql = new StringBuilder("SELECT v.stock_code, p_i_79_1, p_i_79_2, p_i_79_3, marketcap, p_i_6 as roe, p_i_24 as roic, pe, pb, evebitda, divyld, netcashmc\r\n"
        		+ "FROM valuation v left join phi_tai_chinh_report ptcr on ptcr.stock_code  = v.stock_code\r\n"
        		+ "and ptcr.year ='"+ Constants.currentYear +"' and ptcr.quarter ='"+ Constants.currentQuarter +"' \r\n"
        		+ "WHERE date = (SELECT MAX(date) FROM valuation) ");
        
        if ("pi791".equals(tangtruongdoanhthu)) {
   		 	sql.append(" and p_i_79_1 >= ").append(tangtruongdoanhthuMin / 100);
   		 	sql.append(" and p_i_79_1 <= ").append(tangtruongdoanhthuMax / 100);
   	 	} else if ("pi792".equals(tangtruongdoanhthu)) {
   	 		sql.append(" and p_i_79_2 >= ").append(tangtruongdoanhthuMin / 100);
		 	sql.append(" and p_i_79_2 <= ").append(tangtruongdoanhthuMax / 100);
   	 	} else if ("pi793".equals(tangtruongdoanhthu)) {
   	 		sql.append(" and p_i_79_3 >= ").append(tangtruongdoanhthuMin / 100);
		 	sql.append(" and p_i_79_3 <= ").append(tangtruongdoanhthuMax / 100);
   	 	}
        
        if (isChoosing(marketcapMin, marketcapMax)) {
        	sql.append(" and marketcap >= ").append(marketcapMin);
		 	sql.append(" and marketcap <= ").append(marketcapMax);
        }
        
        if (isChoosing(roeMin, roeMax)) {
        	sql.append(" and p_i_6 >= ").append(roeMin / 100);
		 	sql.append(" and p_i_6 <= ").append(roeMax / 100);
        }
        
        if (isChoosing(pi24Min, pi24Max)) {
        	sql.append(" and p_i_24 >= ").append(pi24Min / 100);
		 	sql.append(" and p_i_24 <= ").append(pi24Max / 100);
        }
        
        if (isChoosing(peMin, peMax)) {
        	sql.append(" and pe >= ").append(peMin);
		 	sql.append(" and pe <= ").append(peMax);
        }
        
        if (isChoosing(pbMin, pbMax)) {
        	sql.append(" and pb >= ").append(pbMin);
		 	sql.append(" and pb <= ").append(pbMax);
        }
        
        if (isChoosing(evebitdaMin, evebitdaMax)) {
        	sql.append(" and evebitda >= ").append(evebitdaMin);
		 	sql.append(" and evebitda <= ").append(evebitdaMax);
        }
        
        if (isChoosing(divyldMin, divyldMax)) {
        	sql.append(" and divyld >= ").append(divyldMin / 100);
		 	sql.append(" and divyld <= ").append(divyldMax / 100);
        }
        
        if (isChoosing(netcashmcMin, netcashmcMax)) {
        	sql.append(" and netcashmc >= ").append(netcashmcMin / 100);
		 	sql.append(" and netcashmc <= ").append(netcashmcMax / 100);
        }
        
        if (!orderQuery.isEmpty()) {
        	sql.append(orderQuery);
        }
		
		return sql.toString();
	}
	
	
	public static boolean isChoosing(Double min, Double max) {
		if ((min != null) && (max != null)) 
			return true;
		else 
			return false;
	}
	
	public static String buildQueryMinMax() {
		 StringBuilder sql = new StringBuilder("select min(p_i_79_1) as pi791min, max(p_i_79_1) as pi791max, \r\n"
		 		+ "	min(p_i_79_2) as pi792min, max(p_i_79_2) as pi792max,\r\n"
		 		+ "	min(p_i_79_3) as pi793min, max(p_i_79_3) as pi793max,\r\n"
		 		+ "	min(marketcap) as marketcapmin, max(marketcap) as marketcapmax,\r\n"
		 		+ "	min(p_i_6) as roemin, max(p_i_6) as roemax,\r\n"
		 		+ "	min(p_i_24) as pi24min, max(p_i_24) as pi24max,\r\n"
		 		+ "	min(pe) as pemin, max(pe) as pemax,\r\n"
		 		+ "	min(pb) as pbmin, max(pb) as pbmax,\r\n"
		 		+ "	min(evebitda) as evebitdamin, max(evebitda) as evebitdamax,\r\n"
		 		+ "	min(divyld) as divyldmin, max(divyld) as divyldmax,\r\n"
		 		+ "	min(netcashmc) as netcashmcmin, max(netcashmc) as netcashmcmax\r\n"
		 		+ "FROM valuation v left join phi_tai_chinh_report ptcr on ptcr.stock_code  = v.stock_code\r\n"
		 		+ "and ptcr.year ='"+ Constants.currentYear +"' and ptcr.quarter ='"+ Constants.currentQuarter +"' \r\n"
		 		+ "WHERE date = (SELECT MAX(date) FROM valuation)");
		 return sql.toString();
	}
	
	public static String buildQuerySoSanhChiSoChungKhoan(List<String> listChungKhoan) {
		String listckStr = "";
		for (int i=0; i< listChungKhoan.size(); i++) {
			listckStr += "stock_code = '";
			listckStr += listChungKhoan.get(i);
			listckStr += "' or ";
		}
		if (listckStr.trim().endsWith("or")) {
			listckStr = listckStr.substring(0, listckStr.lastIndexOf("or")).trim();
		}
		
		Map<Integer, Integer> map1 = FilterCaculationUtils.tinhQuyGanNhat(Constants.currentYear, Constants.currentQuarter, 1);
		Map.Entry<Integer, Integer> firstEntry1 = map1.entrySet().iterator().next();
		
		Map<Integer, Integer> map2 = FilterCaculationUtils.tinhQuyGanNhat(Constants.currentYear, Constants.currentQuarter, 2);
		Map.Entry<Integer, Integer> firstEntry2 = map2.entrySet().iterator().next();
		
		Map<Integer, Integer> map3 = FilterCaculationUtils.tinhQuyGanNhat(Constants.currentYear, Constants.currentQuarter, 3);
		Map.Entry<Integer, Integer> firstEntry3 = map3.entrySet().iterator().next();
		
		Map<Integer, Integer> map4 = FilterCaculationUtils.tinhQuyGanNhat(Constants.currentYear, Constants.currentQuarter, 4);
		Map.Entry<Integer, Integer> firstEntry4 = map4.entrySet().iterator().next();
		
		StringBuilder sql = new StringBuilder("SELECT stock_code, quarter, year, c_i_6, c_i_7, c_b_142, c_f_159, c_b_205\r\n"
				+ "FROM chung_khoan_report\r\n"
				+ "WHERE ("+listckStr+")\r\n"
				+ "	and ( (year ='"+ Constants.currentYear +"' and quarter ='"+Constants.currentQuarter+"') or (year ='"+ firstEntry1.getKey().toString() +"' and quarter ='"+firstEntry1.getValue().toString()+"') or\r\n"
				+ "	 (year ='"+firstEntry2.getKey().toString()+"' and quarter ='"+ firstEntry2.getValue().toString() +"') or (year ='"+ firstEntry3.getKey().toString() +"' and quarter ='"+ firstEntry3.getValue().toString() +"') or (year ='"+firstEntry4.getKey().toString()+"' and quarter ='"+ firstEntry4.getValue().toString() +"')  )\r\n"
				+ "order by stock_code , year asc, quarter asc");
		 return sql.toString();
		
	}
	
	public static String buildQuerySoSanhChiSoNganHang(List<String> listNganHang) {
		String listckStr = "";
		for (int i=0; i< listNganHang.size(); i++) {
			listckStr += "stock_code = '";
			listckStr += listNganHang.get(i);
			listckStr += "' or ";
		}
		if (listckStr.trim().endsWith("or")) {
			listckStr = listckStr.substring(0, listckStr.lastIndexOf("or")).trim();
		}
		
		Map<Integer, Integer> map1 = FilterCaculationUtils.tinhQuyGanNhat(Constants.currentYear, Constants.currentQuarter, 1);
		Map.Entry<Integer, Integer> firstEntry1 = map1.entrySet().iterator().next();
		
		Map<Integer, Integer> map2 = FilterCaculationUtils.tinhQuyGanNhat(Constants.currentYear, Constants.currentQuarter, 2);
		Map.Entry<Integer, Integer> firstEntry2 = map2.entrySet().iterator().next();
		
		Map<Integer, Integer> map3 = FilterCaculationUtils.tinhQuyGanNhat(Constants.currentYear, Constants.currentQuarter, 3);
		Map.Entry<Integer, Integer> firstEntry3 = map3.entrySet().iterator().next();
		
		Map<Integer, Integer> map4 = FilterCaculationUtils.tinhQuyGanNhat(Constants.currentYear, Constants.currentQuarter, 4);
		Map.Entry<Integer, Integer> firstEntry4 = map4.entrySet().iterator().next();
		
		StringBuilder sql = new StringBuilder("select stock_code, quarter, year,b_i_7, b_i_8, b_i_9, b_i_35, b_i_22, b_i_23, b_i_24, b_i_26, b_i_30, b_i_29, b_i_32, b_i_20, b_i_21, b_i_27, b_i_25\r\n"
				+ "FROM ngan_hang_report nhr \r\n"
				+ "WHERE ("+listckStr+")\r\n"
				+ "	and ( (year ='"+ Constants.currentYear +"' and quarter ='"+Constants.currentQuarter+"') or (year ='"+ firstEntry1.getKey().toString() +"' and quarter ='"+firstEntry1.getValue().toString()+"') or\r\n"
				+ "	 (year ='"+firstEntry2.getKey().toString()+"' and quarter ='"+ firstEntry2.getValue().toString() +"') or (year ='"+ firstEntry3.getKey().toString() +"' and quarter ='"+ firstEntry3.getValue().toString() +"') or (year ='"+firstEntry4.getKey().toString()+"' and quarter ='"+ firstEntry4.getValue().toString() +"')  )\r\n"
				+ "order by stock_code , year asc, quarter asc");
		 return sql.toString();
		
	}

}
