package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val4Response extends ValuationResponse{
	private Double vonChuSoHuu;
	private Double vonHoa;
	public Double getVonChuSoHuu() {
		return vonChuSoHuu;
	}
	public void setVonChuSoHuu(Double vonChuSoHuu) {
		this.vonChuSoHuu = vonChuSoHuu;
	}
	public Double getVonHoa() {
		return vonHoa;
	}
	public void setVonHoa(Double vonHoa) {
		this.vonHoa = vonHoa;
	}
	
}
