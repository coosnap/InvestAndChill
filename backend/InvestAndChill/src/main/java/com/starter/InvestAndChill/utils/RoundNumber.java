package com.starter.InvestAndChill.utils;

import java.text.DecimalFormat;

public class RoundNumber {
	public static void main(String[] args) {
        double number = 12.89123;

        // Định dạng số với dấu phân cách phần nghìn và làm tròn
        DecimalFormat formatter = new DecimalFormat("#,###.#");
        
        // In ra số đã được định dạng
        System.out.println(formatter.format(number));
    }
	
	public static String lamTron(Double tyDong) {
		DecimalFormat formatter = new DecimalFormat("#,###");
		return formatter.format(tyDong);
	}
	
	public static String lamTronLan(Double tyDong) {
		DecimalFormat formatter = new DecimalFormat("#,###.#");
		return formatter.format(tyDong);
	}
	
}
