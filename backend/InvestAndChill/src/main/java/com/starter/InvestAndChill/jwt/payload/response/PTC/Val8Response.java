package com.starter.InvestAndChill.jwt.payload.response.PTC;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val8Response extends ValuationResponse{
	private Double vonChuSoHuuTruLoiIchCDTS;
	private Double marketcap;
	
	public Double getVonChuSoHuuTruLoiIchCDTS() {
		return vonChuSoHuuTruLoiIchCDTS;
	}
	public void setVonChuSoHuuTruLoiIchCDTS(Double vonChuSoHuuTruLoiIchCDTS) {
		this.vonChuSoHuuTruLoiIchCDTS = vonChuSoHuuTruLoiIchCDTS;
	}
	public Double getMarketcap() {
		return marketcap;
	}
	public void setMarketcap(Double marketcap) {
		this.marketcap = marketcap;
	}
	
}
