package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.ChungKhoanReport;
import com.starter.InvestAndChill.jwt.models.ChungKhoanReportNam;
import com.starter.InvestAndChill.jwt.models.ReportKey;

public interface CKRepositoryNam extends JpaRepository<ChungKhoanReportNam, ReportKey> {
	@Query("select v from view_chung_khoan_nam v where stock_code =:stock_code order by year desc, quarter desc")
	List<ChungKhoanReport> findByStockForPerf(@Param("stock_code") String stock,Pageable pageable);
}
