package com.starter.InvestAndChill.utils;

import java.util.List;

import com.starter.InvestAndChill.jwt.models.PTCReport;

public class CalculatorUtils {
	public static void calculatePI54(List<PTCReport> listReport) {
		if (!listReport.isEmpty()) {
		
		
			for (int i = 0; i < listReport.size(); i++) {
				if (listReport.get(i).getNetIncomeDANWC() == null) {
					listReport.get(i).setNetIncomeDANWC(0.0);
				}
				
			    if (i==0) {
			    	listReport.get(0).setNetIncomeDANWCRolling(listReport.get(0).getNetIncomeDANWC());
			    } else {
			    	listReport.get(i).setNetIncomeDANWCRolling(listReport.get(i).getNetIncomeDANWC() + listReport.get(i-1).getNetIncomeDANWCRolling());
			    }
			}
			
			
		}
	}
	
	public static void calculatePI55(List<PTCReport> listReport) {
		if (!listReport.isEmpty()) {
		
		
			for (int i = 0; i < listReport.size(); i++) {
				if (listReport.get(i).getNetIncomeDANWCCAPEX() == null) {
					listReport.get(i).setNetIncomeDANWCCAPEX(0.0);
				}
				
			    if (i==0) {
			    	listReport.get(0).setNetIncomeDANWCCAPEXRolling(listReport.get(0).getNetIncomeDANWCCAPEX());
			    } else {
			    	listReport.get(i).setNetIncomeDANWCCAPEXRolling(listReport.get(i).getNetIncomeDANWCCAPEX() + listReport.get(i-1).getNetIncomeDANWCCAPEXRolling());
			    }
			}
			
			
		}
	}
	
}
