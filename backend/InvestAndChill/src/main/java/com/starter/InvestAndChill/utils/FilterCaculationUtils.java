package com.starter.InvestAndChill.utils;

import java.util.HashMap;
import java.util.Map;

public class FilterCaculationUtils {
	public static void main(String[] args) {

		tinhQuyGanNhat("3","2023",10);
    }
	
	public static Map<Integer, Integer> tinhQuyGanNhat(String quyHienTai, String namHienTai, int khoangCach) {
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
		map.put(quy, nam);
		
		return map;
		
	}
	
	public static String buildQueryBoLoc(Map<String, Object> payload) {
		String tangtruongdoanhthu = (String )payload.get("tangtruongdoanhthu");
		  Double tangtruongdoanhthuMin = (Double )payload.get("tangtruongdoanhthuMin");
		  Double tangtruongdoanhthuMax = (Double )payload.get("tangtruongdoanhthuMax");
		  Double marketcapMin = (Double )payload.get("marketcapMin");
		  Double marketcapMax = (Double )payload.get("marketcapMax");
		  Double roeMin = (Double )payload.get("roeMin");
		  Double roeMax = (Double )payload.get("roeMax");
		  Double pi24Min = (Double )payload.get("pi24Min");
		  Double pi24Max = (Double )payload.get("pi24Max");
		  Double peMin = (Double )payload.get("peMin");
		  Double peMax = (Double )payload.get("peMax");
		  Double pbMin = (Double )payload.get("pbMin");
		  Double pbMax = (Double )payload.get("pbMax");
		  Double evebitdaMin = (Double )payload.get("evebitdaMin");
		  Double evebitdaMax = (Double )payload.get("evebitdaMax");
		  Double divyldMin = (Double )payload.get("divyldMin");
		  Double divyldMax = (Double )payload.get("divyldMax");
		  Double netcashmcMin = (Double )payload.get("netcashmcMin");
		  Double netcashmcMax = (Double )payload.get("netcashmcMax");
		
		
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
        	sql.append(" and roe >= ").append(roeMin / 100);
		 	sql.append(" and roe <= ").append(roeMax / 100);
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

}
