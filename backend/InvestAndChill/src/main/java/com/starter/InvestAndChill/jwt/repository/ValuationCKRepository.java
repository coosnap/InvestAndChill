package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.Valuation;
import com.starter.InvestAndChill.jwt.models.ValuationCK;
import com.starter.InvestAndChill.jwt.models.ValuationKey;

public interface ValuationCKRepository extends JpaRepository<ValuationCK, ValuationKey>{
	
	 @Query(value = """
		        WITH ranked_data AS (
         SELECT
             stock_code,   
             date,            
             quarter,        
             year,
             marketcap,
             evebitda,
             pe,
             pb,
             ps,
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
         r.*, ckr.c_i_6 as roe, ckr.c_i_3 as loinhuanrong, ckr.c_b_142 as vonchusohuu
     FROM
         ranked_data r, chung_khoan_report ckr
     WHERE
         row_num = 1 
         and r.stock_code = ckr.stock_code 
         and r.quarter = ckr.quarter
         and r.year = ckr.year
     ORDER BY
         year DESC, quarter DESC, date DESC
		        """, nativeQuery = true)
		    List<ValuationCK> findTopRankedDataByStockCodeCK(@Param("stockCode") String stockCode,Pageable pageable);
	 
	 
	 
	 
	 
	 
	 

	 
	 
	 
	 
}
