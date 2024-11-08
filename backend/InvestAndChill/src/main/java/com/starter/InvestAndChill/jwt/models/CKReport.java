package com.starter.InvestAndChill.jwt.models;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity(name = "chung_khoan_report")
public class CKReport {
	@EmbeddedId
    private CKReportKey id;
	public CKReportKey getId() {
		return id;
	}
	public void setId(CKReportKey id) {
		this.id = id;
	}
	@Column(name = "ck_199")
	private String doanhThuThuan;
	
	public String getDoanhThuThuan() {
		return doanhThuThuan;
	}
	public void setDoanhThuThuan(String doanhThuThuan) {
		this.doanhThuThuan = doanhThuThuan;
	}
}
