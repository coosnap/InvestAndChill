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
		            *
		        FROM
		            ranked_data
		        WHERE
		            row_num = 1 
		        ORDER BY
		            year DESC, quarter DESC, date DESC
		        """, nativeQuery = true)
		    List<Valuation> findTopRankedDataByStockCode(@Param("stockCode") String stockCode,Pageable pageable);
	 
	 
	 
	 
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
		    List<Valuation> findTopRankedDataByStockCodeWithPTC(@Param("stockCode") String stockCode,Pageable pageable);
	 
	 
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
		            r.*, nhr.b_i_20 as roe, nhr.b_i_10 as loiNhuanRongTTM, nhr.b_b_64 as vonChuSoHuu
		        FROM
		            ranked_data r, ngan_hang_report nhr
		        WHERE
		            row_num = 1 
		            and r.stock_code = nhr.stock_code 
		            and r.quarter = nhr.quarter
		            and r.year = nhr.year
		        ORDER BY
		            year DESC, quarter DESC, date DESC
		        """, nativeQuery = true)
		    List<Valuation> findTopRankedDataByStockCodeWithBanking(@Param("stockCode") String stockCode,Pageable pageable);
	 
	 
	 
	 
}
