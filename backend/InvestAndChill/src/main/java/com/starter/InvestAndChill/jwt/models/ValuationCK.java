package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "valuation")
public class ValuationCK extends Valuation{
	@Column(name = "roe")
	private Double roe;
	
	@Column(name = "loinhuanrong")
	private Double loiNhuanRongTTM;
	
	@Column(name = "vonchusohuu")
	private Double vonChuSoHuu;

	public Double getLoiNhuanRongTTM() {
		return loiNhuanRongTTM;
	}

	public void setLoiNhuanRongTTM(Double loiNhuanRongTTM) {
		this.loiNhuanRongTTM = loiNhuanRongTTM;
	}

	public Double getVonChuSoHuu() {
		return vonChuSoHuu;
	}

	public void setVonChuSoHuu(Double vonChuSoHuu) {
		this.vonChuSoHuu = vonChuSoHuu;
	}

	public Double getRoe() {
		return roe;
	}

	public void setRoe(Double roe) {
		this.roe = roe;
	}
}
