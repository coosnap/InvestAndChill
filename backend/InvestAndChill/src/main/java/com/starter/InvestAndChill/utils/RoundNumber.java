package com.starter.InvestAndChill.utils;

public class RoundNumber {
	public static void main(String[] args) {
		double number = 0.56789;
		System.out.println(lamTronPhanTram(number));
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
	
}
