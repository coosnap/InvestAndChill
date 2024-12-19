package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal8Response extends ReportReponse{
	private Double noN25VCSH;
	private Double vonChuSoHuu;
	public Double getNoN25VCSH() {
		return noN25VCSH;
	}
	public void setNoN25VCSH(Double noN25VCSH) {
		this.noN25VCSH = noN25VCSH;
	}
	public Double getVonChuSoHuu() {
		return vonChuSoHuu;
	}
	public void setVonChuSoHuu(Double vonChuSoHuu) {
		this.vonChuSoHuu = vonChuSoHuu;
	}
}
