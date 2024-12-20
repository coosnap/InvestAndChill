package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.Valuation;
import com.starter.InvestAndChill.jwt.models.ValuationKey;

public interface ValuationRepository extends JpaRepository<Valuation, ValuationKey>{
/*	@Query(" WITH ranked_data AS (\r\n"
			+ "    SELECT\r\n"
			+ "        stock_code,   \r\n"
			+ "        date,            \r\n"
			+ "        quarter,        \r\n"
			+ "        year,\r\n"
			+ "         marketcap,\r\n"
			+ "         nittm,\r\n"
			+ "         salettm,\r\n"
			+ "         capital,\r\n"
			+ "        ROW_NUMBER() OVER (\r\n"
			+ "            PARTITION BY stock_code, year, quarter,DATE_PART('month', date)  \r\n"
			+ "            ORDER BY date DESC                                 \r\n"
			+ "        ) AS row_num\r\n"
			+ "    FROM\r\n"
			+ "        valuation\r\n"
			+ "     where stock_code =:stock_code \r\n"
			+ ")\r\n"
			+ "SELECT\r\n"
			+ "    *\r\n"
			+ "FROM\r\n"
			+ "    ranked_data\r\n"
			+ "WHERE\r\n"
			+ "    row_num = 1 \r\n"
			+ " order by year desc, quarter desc, date desc")
	List<Valuation> findByStockForPerf(@Param("stock_code") String stock,Pageable pageable); */
	
	
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
		                    PARTITION BY stock_code, year, quarter, DATE_PART('month', date)  
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
