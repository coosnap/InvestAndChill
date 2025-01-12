package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.Valuation;
import com.starter.InvestAndChill.jwt.models.ValuationKey;
import com.starter.InvestAndChill.pojo.ValuationPhiTaiChinhDTO;

public interface ValuationPTCRepository extends JpaRepository<Valuation, ValuationKey>{
	
			@Query(name = "user.findByName", nativeQuery = true)
		    List<ValuationPhiTaiChinhDTO> findTopRankedDataByStockCodeWithPTC(@Param("stockCode") String stockCode,Pageable pageable);

}
