package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.Valuation;
import com.starter.InvestAndChill.jwt.models.ValuationKey;

public interface ValuationRepository extends JpaRepository<Valuation, ValuationKey>{
	
	 @Query(value = """
		        WITH ranked_data AS (
		            SELECT
		                stock_code,   
		                date,            
		                quarter,        
		                year,
		                marketcap,
		                nittm,
		                salettm,
		                capital,
		                ROW_NUMBER() OVER (
		                    PARTITION BY stock_code, year, quarter
		                    ORDER BY date DESC                                 
		                ) AS row_num
		            FROM
		                valuation
		            WHERE
		                stock_code = :stockCode
		        )
		        SELECT
		            *
		        FROM
		            ranked_data
		        WHERE
		            row_num = 1 
		        ORDER BY
		            year DESC, quarter DESC, date DESC
		        """, nativeQuery = true)
		    List<Valuation> findTopRankedDataByStockCode(@Param("stockCode") String stockCode,Pageable pageable);
}
