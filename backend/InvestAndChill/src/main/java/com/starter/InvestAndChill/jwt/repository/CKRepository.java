package com.starter.InvestAndChill.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.ChungKhoanReport;
import com.starter.InvestAndChill.jwt.models.ReportKey;

public interface CKRepository extends JpaRepository<ChungKhoanReport, ReportKey>{
	@Query(value = "select c_i_6 from chung_khoan_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findRoe(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year);
	
	@Query(value = "select c_i_3 from chung_khoan_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findLoiNhuanRongTTM(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year);
	
	@Query(value = "select c_b_142 from chung_khoan_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findVonChuSoHuu(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year);
}
