package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

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
	
	//VAL1
	@Column(name = "pe")
	private Double pe;
	@Column(name = "evebitda")
	private Double evebitda;
	@Transient
	private Double peMedian;
	@Transient
	private Double evebitdaMedian;
	
	//val2
	@Column(name = "roe")
	private Double roe;
	@Column(name = "pb")
	private Double pb;
	@Transient
	private Double pbMedian;
	
	//val4
	@Column(name = "ps")
	private Double ps;
	@Transient
	private Double psMedian;
	
	//val7
	@Column(name = "ebitdattm")
	private Double ebitdattm;
	
	public Double getEbitdattm() {
		return ebitdattm;
	}

	public void setEbitdattm(Double ebitdattm) {
		this.ebitdattm = ebitdattm;
	}

	public Double getPs() {
		return ps;
	}

	public void setPs(Double ps) {
		this.ps = ps;
	}

	public Double getPsMedian() {
		return psMedian;
	}

	public void setPsMedian(Double psMedian) {
		this.psMedian = psMedian;
	}

	public Double getPbMedian() {
		return pbMedian;
	}

	public void setPbMedian(Double pbMedian) {
		this.pbMedian = pbMedian;
	}

	public Double getRoe() {
		return roe;
	}

	public void setRoe(Double roe) {
		this.roe = roe;
	}

	public Double getPb() {
		return pb;
	}

	public void setPb(Double pb) {
		this.pb = pb;
	}

	public Double getPeMedian() {
		return peMedian;
	}

	public void setPeMedian(Double peMedian) {
		this.peMedian = peMedian;
	}

	public Double getEvebitdaMedian() {
		return evebitdaMedian;
	}

	public void setEvebitdaMedian(Double evebitdaMedian) {
		this.evebitdaMedian = evebitdaMedian;
	}

	public Double getPe() {
		return pe;
	}

	public void setPe(Double pe) {
		this.pe = pe;
	}

	public Double getEvebitda() {
		return evebitda;
	}

	public void setEvebitda(Double evebitda) {
		this.evebitda = evebitda;
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
