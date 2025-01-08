package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity(name = "phitaichinh_calculation")
public class PhiTaiChinhCalculation {
	
	@EmbeddedId
    private PTCCalculationKey id;
	
	@Column(name = "p_i_77")
	private Double pi77;
	
	@Column(name = "p_i_78")
	private Double pi78;
	
	public PTCCalculationKey getId() {
		return id;
	}

	public void setId(PTCCalculationKey id) {
		this.id = id;
	}

	public Double getPi77() {
		return pi77;
	}

	public void setPi77(Double pi77) {
		this.pi77 = pi77;
	}

	public Double getPi78() {
		return pi78;
	}

	public void setPi78(Double pi78) {
		this.pi78 = pi78;
	}

	

}
