package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.ValuationKey;
import com.starter.InvestAndChill.jwt.models.ValuationPTC;

public interface ValuationPTCRepository extends JpaRepository<ValuationPTC, ValuationKey>{
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
		            r.*,ptc.p_i_6 as roe, ptc.p_i_1 as salettm, ptc.p_i_3 as nittm, ptc.p_i_56 as ebitdattm, ptc.p_b_98 as capital
		        FROM
		            ranked_data r, phi_tai_chinh_report ptc
		        WHERE
		            row_num = 1 
		            and r.stock_code = ptc.stock_code 
		            and r.quarter = ptc.quarter
		            and r.year = ptc.year
		        ORDER BY
		            year DESC, quarter DESC, date DESC
		        """, nativeQuery = true)
		    List<ValuationPTC> findTopRankedDataByStockCodeWithPTC(@Param("stockCode") String stockCode,Pageable pageable);

}
