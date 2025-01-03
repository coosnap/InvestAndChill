package com.starter.InvestAndChill.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.NganHangReport;
import com.starter.InvestAndChill.jwt.models.ReportKey;

public interface NganHangRepository extends JpaRepository<NganHangReport, ReportKey>{
	@Query(value = "select b_i_20 from ngan_hang_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findRoe(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year);
	
	@Query(value = "select b_i_10 from ngan_hang_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findLoiNhuanRongTTM(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year);
	
	@Query(value = "select b_b_64 from ngan_hang_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findVonChuSoHuu(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year);

}
