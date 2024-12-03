package com.starter.InvestAndChill.utils;

import java.text.DecimalFormat;

public class RoundNumber {
	public static void main(String[] args) {
        Double number = 0.65;

        // Định dạng số với dấu phân cách phần nghìn và làm tròn
        DecimalFormat formatter = new DecimalFormat("#");
        String test;
        // In ra số đã được định dạng
        try {
        	test = formatter.format(number*100);
        } catch (Exception e) {
			test = null;
		}
        //return test;
        System.out.println(test);
    }
	
	public static String lamTron(Double tyDong) {
		DecimalFormat formatter = new DecimalFormat("#");
		String value;
		try {
			value = formatter.format(tyDong);
		} catch (Exception e) {
			value = null;
		}
		return value;
	}
	
	public static String lamTronPhanTram(Double tyDong) {
		DecimalFormat formatter = new DecimalFormat("#");
		String value;
		try {
			value = formatter.format(tyDong*100);
		} catch (Exception e) {
			value = null;
		}
		return value;
	}
	
	public static String lamTronLan(Double tyDong) {
		DecimalFormat formatter = new DecimalFormat("#,###.#");
		String value;
		try {
			value = formatter.format(tyDong);
		} catch (Exception e) {
			value = null;
		}
		return value;
	}
	
}
