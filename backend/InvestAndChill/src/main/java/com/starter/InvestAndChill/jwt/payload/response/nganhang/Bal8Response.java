package com.starter.InvestAndChill.jwt.payload.response.nganhang;

import com.starter.InvestAndChill.jwt.payload.response.ReportReponse;

public class Bal8Response extends ReportReponse{
	private Integer noN25VCSH;
	private Integer vonChuSoHuu;
	public Integer getNoN25VCSH() {
		return noN25VCSH;
	}
	public void setNoN25VCSH(Integer noN25VCSH) {
		this.noN25VCSH = noN25VCSH;
	}
	public Integer getVonChuSoHuu() {
		return vonChuSoHuu;
	}
	public void setVonChuSoHuu(Integer vonChuSoHuu) {
		this.vonChuSoHuu = vonChuSoHuu;
	}
}
