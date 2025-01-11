package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.ValuationBanking;
import com.starter.InvestAndChill.jwt.models.ValuationKey;
public interface ValuationBankingRepository extends JpaRepository<ValuationBanking, ValuationKey>{
	
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
         r.*, nhr.b_i_20 as roe, nhr.b_i_10 as loinhuanrong, nhr.b_b_64 as vonchusohuu
     FROM
         ranked_data r LEFT JOIN ngan_hang_report nhr 
         on r.stock_code = nhr.stock_code
         and r.quarter = nhr.quarter
         and r.year = nhr.year
     WHERE
         row_num = 1 
         
     ORDER BY
         year DESC, quarter DESC, date DESC
     """, nativeQuery = true)
 List<ValuationBanking> findTopRankedDataByStockCodeWithBanking(@Param("stockCode") String stockCode,Pageable pageable);

}
