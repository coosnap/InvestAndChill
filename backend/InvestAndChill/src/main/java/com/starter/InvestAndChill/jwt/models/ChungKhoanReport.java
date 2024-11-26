package com.starter.InvestAndChill.jwt.models;

import javax.persistence.EmbeddedId;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class ChungKhoanReport {
	@EmbeddedId
    private ReportKey id;
}
