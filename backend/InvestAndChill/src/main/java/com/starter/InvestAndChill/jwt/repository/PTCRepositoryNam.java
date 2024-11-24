package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.PTCReport;
import com.starter.InvestAndChill.jwt.models.PTCReportKey;
import com.starter.InvestAndChill.jwt.models.PTCReportNam;

public interface PTCRepositoryNam extends JpaRepository<PTCReportNam, PTCReportKey>{
	@Query("select t from view_phi_tai_chinh_nam_test t where stock_code =:stock_code order by year desc")
	List<PTCReport> findByStockForPerf(@Param("stock_code") String stock,Pageable pageable);
}
