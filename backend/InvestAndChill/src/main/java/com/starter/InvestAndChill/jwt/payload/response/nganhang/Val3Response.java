package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ValuationResponse;

public class Val3Response extends ValuationResponse{
	private Double loiNhuanRongTTM;
	private Double vonHoa;
	public Double getLoiNhuanRongTTM() {
		return loiNhuanRongTTM;
	}
	public void setLoiNhuanRongTTM(Double loiNhuanRongTTM) {
		this.loiNhuanRongTTM = loiNhuanRongTTM;
	}
	public Double getVonHoa() {
		return vonHoa;
	}
	public void setVonHoa(Double vonHoa) {
		this.vonHoa = vonHoa;
	}
}
