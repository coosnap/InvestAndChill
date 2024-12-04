package com.starter.InvestAndChill.utils;

public class RoundNumber {
	public static void main(String[] args) {
		double number = 5.6789;
		System.out.println(lamTronLan(number));
    }
	
	public static Integer lamTron(Double tyDong) {
		if (tyDong == null)
			return null;
		long rounded = Math.round(tyDong);
		Integer integerValue = (int) rounded; 
		return integerValue;
	}
	
	public static Integer lamTronPhanTram(Double tyDong) {
		if (tyDong == null)
			return null;
		long rounded = Math.round(tyDong*100);
		Integer integerValue = (int) rounded; 
		return integerValue;
	}
	
	public static Double lamTronLan(Double tyDong) {
		if (tyDong == null)
			return null;
		double rounded = Math.round(tyDong * 10.0) / 10.0;  // Làm tròn đến 1 chữ số thập phân
		return rounded;
	}
	
}
