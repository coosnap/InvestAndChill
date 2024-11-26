package com.starter.InvestAndChill.jwt.repository;


import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.PTCReport;
import com.starter.InvestAndChill.jwt.models.ReportKey;
import com.starter.InvestAndChill.jwt.models.PTCReportQuy;


public interface PTCRepositoryQuy extends JpaRepository<PTCReportQuy, ReportKey> {
	@Query("select v from view_phi_tai_chinh_quy_test v where stock_code =:stock_code order by year desc, quarter desc")
	List<PTCReport> findByStockForPerf(@Param("stock_code") String stock,Pageable pageable);

}
