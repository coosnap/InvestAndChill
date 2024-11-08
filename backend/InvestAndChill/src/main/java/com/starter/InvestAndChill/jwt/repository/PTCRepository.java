package com.starter.InvestAndChill.jwt.repository;


import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.PTCReport;
import com.starter.InvestAndChill.jwt.models.PTCReportKey;

public interface PTCRepository extends JpaRepository<PTCReport, PTCReportKey> {
	@Query("select v from view_phi_tai_chinh_quy v where stock_code =:stock_code order by year desc, quarter desc")
	List<PTCReport> findByStockForPerf(@Param("stock_code") String stock,Pageable pageable);

}
