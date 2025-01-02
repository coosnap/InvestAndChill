package com.starter.InvestAndChill.utils;

public class RoundNumber {
	public static void main(String[] args) {
		Double number = null;
		System.out.println(lamTronPhanTram(number/100));
    }
	
	public static Double lamTron(Double tyDong) {
		if (tyDong == null)
			return null;
		double rounded = Math.round(tyDong * 10.0) / 10.0; // Làm tròn đến 1 chữ số thập phân
		return rounded;
	}
	
	public static Double lamTronPhanTram(Double tyDong) {
		if (tyDong == null)
			return null;
		double rounded = Math.round(tyDong * 100 * 10.0) / 10.0; // Làm tròn đến 1 chữ số thập phân
		return rounded;
	}
	
	public static Double lamTronLan(Double tyDong) {
		if (tyDong == null)
			return null;
		double rounded = Math.round(tyDong * 100.0) / 100.0; // Làm tròn đến 2 chữ số thập phân
		return rounded;
	}
	
	public static Double tinhPhanTram(Double sochia, Double tong) {
		if ((sochia == null) || (tong == null)) 
			return null;
		else 
			return sochia/tong;
	}
	
}
