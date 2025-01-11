package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
@Entity
@Table(name = "valuation")
public class ValuationPTC extends Valuation{
	
	@Column(name = "capital")
	private Double capital;
	
	@Column(name = "nittm")
	private Double nittm;
	
	@Column(name = "salettm")
	private Double salettm;
	
	public Double getCapital() {
		return capital;
	}

	public void setCapital(Double capital) {
		this.capital = capital;
	}

	public Double getNittm() {
		return nittm;
	}

	public void setNittm(Double nittm) {
		this.nittm = nittm;
	}

	public Double getSalettm() {
		return salettm;
	}

	public void setSalettm(Double salettm) {
		this.salettm = salettm;
	}

	public Double getEbitdattm() {
		return ebitdattm;
	}

	public void setEbitdattm(Double ebitdattm) {
		this.ebitdattm = ebitdattm;
	}

	public Double getRoe() {
		return roe;
	}

	public void setRoe(Double roe) {
		this.roe = roe;
	}

	@Column(name = "ebitdattm")
	private Double ebitdattm;
		
	@Column(name = "roe")
	private Double roe;

}
