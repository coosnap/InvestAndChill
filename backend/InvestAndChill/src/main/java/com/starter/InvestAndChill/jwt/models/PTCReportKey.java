package com.starter.InvestAndChill.jwt.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
@Embeddable
public class PTCReportKey implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column(name = "stock_code")
	private String stockCode;
	@Column(name = "quarter",nullable = true)
	private String quarter;
	@Column(name = "year")
	private String year;
	
	public PTCReportKey() {}
	
	public PTCReportKey(String stockCode, String quarter, String year) {
		this.stockCode = stockCode;
		this.quarter = quarter;
		this.year = year;
	}

	public String getStockCode() {
		return stockCode;
	}

	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}

	public String getQuarter() {
		return quarter;
	}

	public void setQuarter(String quarter) {
		this.quarter = quarter;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}
	
	 @Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (o == null || getClass() != o.getClass()) return false;

	        PTCReportKey that = (PTCReportKey) o;

	        if (!stockCode.equals(that.stockCode)) return false;
	        if (quarter != null ? !quarter.equals(that.quarter) : that.quarter != null) return false;
	        return year.equals(that.year);
	    }

	    @Override
	    public int hashCode() {
	        int result = stockCode.hashCode();
	        result = 31 * result + year.hashCode();
	        return result;
	    }

}
