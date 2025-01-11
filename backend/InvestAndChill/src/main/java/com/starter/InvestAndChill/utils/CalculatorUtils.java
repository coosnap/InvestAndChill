package com.starter.InvestAndChill.utils;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.starter.InvestAndChill.jwt.models.PTCReport;
import com.starter.InvestAndChill.jwt.models.Valuation;

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
	
	public static void main(String[] args) {
		ArrayList<Integer> numbers = new ArrayList<>();
		for (int i = 1; i <= 10; i++) {
            numbers.add(i);
        }
		
		System.out.println("Danh sách ban đầu: " + numbers);
		 int n = 5;
		 if (n > numbers.size()) {
	            System.out.println("Không thể lấy nhiều hơn số phần tử có trong danh sách.");
	        } else {
	            // Lấy n phần tử từ đầu danh sách
	            List<Integer> subList = numbers.subList(0, 1);
	            System.out.println("Danh sách con với " + n + " phần tử đầu tiên: " + subList);
	        }
	}
	
	
	
	public static void calculateMedianForOne(List<? extends Valuation> listValuation,String type) {
		List<Double> listMedian = initListFull(listValuation, type);
		
//		for (int i=0;i<listMedian.size();i++) {
//			if (listMedian.get(i) == null) {
//				return;
//			}
//		}
		
		Collections.sort(listMedian);
		Double trungVi;
		int size = listMedian.size();
		
		if (size % 2 == 1) {
			trungVi = listMedian.get(size / 2);
		} else {
			Double middle1 = listMedian.get(size / 2 - 1);
			Double middle2 = listMedian.get(size / 2);
			trungVi = (middle1 + middle2) / 2.0;
		}
		
		for (int i=0; i < listValuation.size() ; i++) {
			if (type.equalsIgnoreCase("PE")) {
				listValuation.get(i).setPeMedian(trungVi);
			} else if (type.equalsIgnoreCase("evebitda")) {
				listValuation.get(i).setEvebitdaMedian(trungVi);
			} else if (type.equalsIgnoreCase("PB")) {
				listValuation.get(i).setPbMedian(trungVi);
			} else if (type.equalsIgnoreCase("PS")) {
				listValuation.get(i).setPsMedian(trungVi);
			}
		}		
	}
	
	public static List<Double> initListFull(List<? extends Valuation> listValuation,String type) {
		List<Double> list = new ArrayList<Double>();
		for (int i = 0; i < listValuation.size(); i++) {
			
			
			if (type.equalsIgnoreCase("PE") && (listValuation.get(i).getPe() != null)) {
				list.add(listValuation.get(i).getPe());
			} else if (type.equalsIgnoreCase("evebitda") && (listValuation.get(i).getEvebitda() != null)) {
				list.add(listValuation.get(i).getEvebitda());
			} else if (type.equalsIgnoreCase("PB") && (listValuation.get(i).getPb() != null)) {
				list.add(listValuation.get(i).getPb());
			} else if (type.equalsIgnoreCase("PS") && (listValuation.get(i).getPs() != null) ) {
				list.add(listValuation.get(i).getPs());
			}
			
			
			
		}
		return list;
	}
	
	public static Double calculateTotal(Object obj) {
		Double total = 0.0;
		boolean isTotalNegav = true;
		
		if (obj == null) {
            System.out.println("Object is null.");
            return null;
        }
		
		isTotalNegav = checkTotalNegative(obj);
		//System.out.println(isTotalNegav);
		
		Class<?> clazz = obj.getClass();
		Field[] fields = clazz.getDeclaredFields();
		for (Field field : fields) {
            field.setAccessible(true);
            try {
            	 if ("title".equals(field.getName())) {
                 	continue;
                 }
                Object value = field.get(obj);
                Double valueDouble = 0.0;
                try {
                    valueDouble = (Double)value;
                    if (valueDouble == null) {
                    	valueDouble = 0.0;
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Không thể chuyển đổi chuỗi thành Double.");
                }
                
                
               
                
                if (isTotalNegav) {
                	total += valueDouble;
                } else {
                	if (valueDouble > 0) {
                		total += valueDouble;
                	}
                }

                
            } catch (IllegalAccessException e) {
                System.out.println("Cannot access field: " + field.getName());
            }
        }
		return total;
		
        
	}
	
	
	public static boolean checkTotalNegative(Object obj) {
		boolean isTotalNegav = true;
		Class<?> clazz = obj.getClass();
		Field[] fields = clazz.getDeclaredFields();
		 for (Field field : fields) {
	            field.setAccessible(true);
	            try {
	                Object value = field.get(obj);
	                //System.out.println("Field: " + field.getName() + ", Value: " + value);
	                
	                if (!"title".equals(field.getName()) && (value != null) && ((Double)value > 0)) {
	                	return false;
	                }
	                
	            } catch (IllegalAccessException e) {
	                System.out.println("Cannot access field: " + field.getName());
	            }
	        }
		 return isTotalNegav;
		
	}
	
	
}
