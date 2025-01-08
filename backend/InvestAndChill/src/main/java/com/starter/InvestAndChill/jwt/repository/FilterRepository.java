package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.ChungKhoanReport;
import com.starter.InvestAndChill.jwt.models.PTCCalculationKey;
import com.starter.InvestAndChill.jwt.models.PhiTaiChinhCalculation;

public interface FilterRepository extends JpaRepository<PhiTaiChinhCalculation, PTCCalculationKey>{
	@Query("select v from view_chung_khoan_nam v where stock_code =:stock_code order by year desc, quarter desc")
	List<PhiTaiChinhCalculation> findByStockForPerf(@Param("stock_code") String stock,Pageable pageable);
}
