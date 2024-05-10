package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(	name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String name;
	
	@Column
	private String description;
	
	
	@Column(precision=8, scale=2,name="commitment_time") 
	private float commitmentTime;
	
	@Column(precision=15, scale=2,name="minimum_budget") 
	private float minimumBudget;
	
	@Column(precision=8, scale=2,name="profit_rate_commitment") 
	private float profitRateCommitment;
	
	@Column(precision=8, scale=2,name="acount_fee_for_website") 
	private float acountFeeForWebsite;
	
	@Column
	private String bonus;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getCommitmentTime() {
		return commitmentTime;
	}

	public void setCommitmentTime(float commitmentTime) {
		this.commitmentTime = commitmentTime;
	}

	public float getMinimumBudget() {
		return minimumBudget;
	}

	public void setMinimumBudget(float minimumBudget) {
		this.minimumBudget = minimumBudget;
	}

	public float getProfitRateCommitment() {
		return profitRateCommitment;
	}

	public void setProfitRateCommitment(float profitRateCommitment) {
		this.profitRateCommitment = profitRateCommitment;
	}

	public float getAcountFeeForWebsite() {
		return acountFeeForWebsite;
	}

	public void setAcountFeeForWebsite(float acountFeeForWebsite) {
		this.acountFeeForWebsite = acountFeeForWebsite;
	}

	public String getBonus() {
		return bonus;
	}

	public void setBonus(String bonus) {
		this.bonus = bonus;
	}

	public float getNavFee() {
		return navFee;
	}

	public void setNavFee(float navFee) {
		this.navFee = navFee;
	}

	@Column(precision=8, scale=2) 
	private float navFee;
	
	public Product() {
		
	}

	public Product(Long id, String name, String description, float commitmentTime, float minimumBudget,
			float profitRateCommitment, float acountFeeForWebsite, String bonus, float navFee) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.commitmentTime = commitmentTime;
		this.minimumBudget = minimumBudget;
		this.profitRateCommitment = profitRateCommitment;
		this.acountFeeForWebsite = acountFeeForWebsite;
		this.bonus = bonus;
		this.navFee = navFee;
	}
	

}
