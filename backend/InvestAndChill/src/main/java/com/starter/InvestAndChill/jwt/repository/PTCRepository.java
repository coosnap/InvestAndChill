package com.starter.InvestAndChill.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.PTCReport;
import com.starter.InvestAndChill.jwt.models.ReportKey;

public interface PTCRepository extends JpaRepository<PTCReport, ReportKey>{
	@Query(value = "select p_i_6 from phi_tai_chinh_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findRoe(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year); 
	
	@Query(value = "select p_i_1 from phi_tai_chinh_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findSalesTrailing(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year);
	
	@Query(value = "select p_i_3 from phi_tai_chinh_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findNlTrailing(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year);
	
	@Query(value = "select p_i_56 from phi_tai_chinh_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findEBITDATrailing(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year);
	
	@Query(value = "select p_b_98 from phi_tai_chinh_report v where stock_code =:stock_code and quarter=:quarter and year=:year ",nativeQuery = true)
	Double findVonChuSoHuu(@Param("stock_code") String stock, @Param("quarter") String quarter, @Param("year") String year);
}
