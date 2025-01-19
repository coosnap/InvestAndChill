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
        		+ "and ptcr.year ='2024' and ptcr.quarter ='3' \r\n"
        		+ "WHERE date = (SELECT MAX(date) FROM valuation) ");
        
        if ("pi791".equals(tangtruongdoanhthu)) {
   		 	sql.append(" and p_i_79_1 >= ").append(tangtruongdoanhthuMin);
   		 	sql.append(" and p_i_79_1 <= ").append(tangtruongdoanhthuMax);
   	 	} else if ("pi792".equals(tangtruongdoanhthu)) {
   	 		sql.append(" and p_i_79_2 >= ").append(tangtruongdoanhthuMin);
		 	sql.append(" and p_i_79_2 <= ").append(tangtruongdoanhthuMax);
   	 	} else if ("pi793".equals(tangtruongdoanhthu)) {
   	 		sql.append(" and p_i_79_3 >= ").append(tangtruongdoanhthuMin);
		 	sql.append(" and p_i_79_3 <= ").append(tangtruongdoanhthuMax);
   	 	}
        
        if (isChoosing(marketcapMin, marketcapMax)) {
        	sql.append(" and marketcap >= ").append(marketcapMin);
		 	sql.append(" and marketcap <= ").append(marketcapMax);
        }
        
        if (isChoosing(roeMin, roeMax)) {
        	sql.append(" and roe >= ").append(roeMin);
		 	sql.append(" and roe <= ").append(roeMax);
        }
        
        if (isChoosing(pi24Min, pi24Max)) {
        	sql.append(" and p_i_24 >= ").append(pi24Min);
		 	sql.append(" and p_i_24 <= ").append(pi24Max);
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
        	sql.append(" and divyld >= ").append(divyldMin);
		 	sql.append(" and divyld <= ").append(divyldMax);
        }
        
        if (isChoosing(netcashmcMin, netcashmcMax)) {
        	sql.append(" and netcashmc >= ").append(netcashmcMin);
		 	sql.append(" and netcashmc <= ").append(netcashmcMax);
        }
		
		return sql.toString();
	}
	
	
	public static boolean isChoosing(Double min, Double max) {
		if ((min != null) && (max != null)) 
			return true;
		else 
			return false;
	}

}
