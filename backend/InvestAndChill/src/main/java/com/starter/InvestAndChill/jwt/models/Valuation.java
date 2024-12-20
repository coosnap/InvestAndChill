package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(	name = "valuation")
public class Valuation {
	
	@EmbeddedId
    private ValuationKey id;

	public ValuationKey getId() {
		return id;
	}

	public void setId(ValuationKey id) {
		this.id = id;
	}
	@Column(name = "nittm")
	private Double nittm;
	@Column(name = "salettm")
	private Double salettm;
	@Column(name = "marketcap")
	private Double marketcap;
	@Column(name = "capital")
	private Double capital;

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

	public Double getMarketcap() {
		return marketcap;
	}

	public void setMarketcap(Double marketcap) {
		this.marketcap = marketcap;
	}

	public Double getCapital() {
		return capital;
	}

	public void setCapital(Double capital) {
		this.capital = capital;
	}
}
