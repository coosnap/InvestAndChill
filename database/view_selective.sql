CREATE MATERIALIZED VIEW view_selective AS
--lay 4 quy gan nhat
WITH sorted_quarters AS (
		SELECT year, quarter
		FROM sector_data
		WHERE year IS NOT NULL AND quarter IS NOT NULL
		GROUP BY year, quarter
		ORDER BY year desc, quarter desc
		LIMIT 4
),
--Noi Year-quarter ( ki)
labeled_quarters AS (
    SELECT 
        year, quarter,
        'q' || ROW_NUMBER() OVER (ORDER BY year, quarter) AS q_label
    FROM sorted_quarters
),
-- chuyen thanh bang ngang
pivot_data AS (
    SELECT 
        sd.sector_inc,
        lq.q_label,
        sd.s_nryoy,
        sd.s_cpexg,
        sd.s_expgm
    FROM sector_data sd
    JOIN labeled_quarters lq
        ON sd.year = lq.year AND sd.quarter = lq.quarter
),
-- chuyen thanh bang ngang
row_sector_data as (
	SELECT 
	    sector_inc,
	    -- s_expgm theo quý
	    MAX(s_expgm) FILTER (WHERE q_label = 'q1') AS s_expgm__3,
	    MAX(s_expgm) FILTER (WHERE q_label = 'q2') AS s_expgm__2,
	    MAX(s_expgm) FILTER (WHERE q_label = 'q3') AS s_expgm__1,
	    MAX(s_expgm) FILTER (WHERE q_label = 'q4') AS s_expgm_q0,
	    -- s_nryoy theo quý
	    MAX(s_nryoy) FILTER (WHERE q_label = 'q1') AS s_nryoy__3,
	    MAX(s_nryoy) FILTER (WHERE q_label = 'q2') AS s_nryoy__2,
	    MAX(s_nryoy) FILTER (WHERE q_label = 'q3') AS s_nryoy__1,
	    MAX(s_nryoy) FILTER (WHERE q_label = 'q4') AS s_nryoy_q0,
	    -- s_cpexg theo quý
	    MAX(s_cpexg) FILTER (WHERE q_label = 'q1') AS s_cpexg__3,
	    MAX(s_cpexg) FILTER (WHERE q_label = 'q2') AS s_cpexg__2,
	    MAX(s_cpexg) FILTER (WHERE q_label = 'q3') AS s_cpexg__1,
	    MAX(s_cpexg) FILTER (WHERE q_label = 'q4') AS s_cpexg_q0
	    
	FROM pivot_data
	GROUP BY sector_inc
),
monitor_list AS (
SELECT symbol AS stock_code, s.sector2_inc, rsd.*
FROM stocksymbol s
left join row_sector_data rsd 
on s.sector_inc = rsd.sector_inc 
WHERE s.selection = 1
order by s.symbol
),
-- lấy định giá mới nhất cho mỗi mã
ranked_valuation AS (
    SELECT DISTINCT ON (v.stock_code)
        m.*, v.date, v.marketcap, v.pe, v.pb, v.evebitda, v.divyld, v.netcashmc
    FROM valuation v
    JOIN monitor_list m ON m.stock_code = v.stock_code
    ORDER BY v.stock_code, v.date DESC 
),
-- Xác định 2 quý gần nhất có dữ liệu
latest_quarters AS (
    SELECT DISTINCT year, quarter
    FROM phi_tai_chinh_report
    WHERE quarter IS NOT NULL AND year IS NOT NULL
    ORDER BY year DESC, quarter DESC
    LIMIT 2
),

-- Lấy dữ liệu phi tài chính mới nhất trong 2 quý gần nhất cho mỗi stock_code
ranked_ptc_report AS (
    SELECT DISTINCT ON (p.stock_code)
        p.stock_code,
        p.year || '-Q' || p.quarter AS year_quarter,
        p.p_i_1 as dt12m,
        p.p_i_3 as lr12m,
        p.p_m_6 as lrm12m,
        p.p_p_3 as dt,
        p.p_i_85 as dt12myoy,
        p.p_i_86 as dtytdyoy,
        p.p_i_79_1 AS dtyoy,
        p.p_p_23 as lr,
        p.p_i_87 as lr12myoy,
        p.p_i_88 as lrytdyoy,
        p.p_i_84   AS lnyoy,
        p.p_i_22 as blg,
        p.p_i_23 as blr,
        p.p_i_89 as nd_e,
        p.p_i_6    AS roe,
        p.p_i_90 as roe3y,
        p.p_i_83 as roeadj,
        p.p_i_91 as roe3yadj,
        p.p_i_24   AS roic
    FROM phi_tai_chinh_report p
    JOIN latest_quarters lq
      ON p.year = lq.year AND p.quarter = lq.quarter
    JOIN monitor_list m
      ON m.stock_code = p.stock_code
    WHERE p.quarter IS NOT NULL AND p.year IS NOT NULL
    ORDER BY p.stock_code, p.year DESC, p.quarter DESC
),

-- Lấy dữ liệu ngân hàng mới nhất trong 2 quý gần nhất cho mỗi stock_code
ranked_bank_report AS (
    SELECT DISTINCT ON (b.stock_code)
        b.stock_code,
        b.year || '-Q' || b.quarter AS year_quarter,
        b.b_i_39 as s12m,
        b.b_i_10 as i12m,
        b.b_m_6 as im12m,
        b.b_p_3 as dt,
        b.b_i_85 as s12myoy,
        b.b_i_86 as sytdyoy,
        b.b_i_37 AS dtyoy,
        b.b_p_24 as lr,
        b.b_i_87 as lr12myoy,
        b.b_i_88 as lrytdyoy,
        b.b_i_38 AS lnyoy,
        b.b_i_40 as blg,
        b.b_i_6 as blr, 
        NULL::numeric AS nd_e,
        b.b_i_20 AS roe,
        b.b_i_90 as roe3y,
        NULL::numeric as roeadj,
        NULL::numeric as roe3yadj,
        NULL::numeric AS roic
    FROM ngan_hang_report b
    JOIN latest_quarters lq
      ON b.year = lq.year AND b.quarter = lq.quarter
    JOIN monitor_list m
      ON m.stock_code = b.stock_code
    WHERE b.quarter IS NOT NULL AND b.year IS NOT NULL
    ORDER BY b.stock_code, b.year DESC, b.quarter DESC
),

-- Lấy dữ liệu chứng khoán mới nhất trong 2 quý gần nhất cho mỗi stock_code
ranked_ck_report AS (
    SELECT DISTINCT ON (c.stock_code)
        c.stock_code,
        c.year || '-Q' || c.quarter AS year_quarter,
        c.c_i_1 as s12m,
        c.c_i_3 as i12m,
        c.c_m_6 as im12m,
        c.c_p_21 as dt,
        c.c_i_85 as s12myoy,
        c.c_i_86 as sytdyoy,
        c.c_i_59 AS dtyoy,
        c.c_p_72 as lr,
        c.c_i_87 as lr12myoy,
        c.c_i_88 as lrytdyoy,
        c.c_i_60 AS lnyoy,
        c.c_i_22 as blg,
        c.c_i_23 as blr,
        NULL::numeric AS nd_e,
        c.c_i_6  AS roe,
        c.c_i_90 as roe3y,
        NULL::numeric as roeadj,
        NULL::numeric as roe3yadj,
        NULL::numeric AS roic
    FROM chung_khoan_report c
    JOIN latest_quarters lq
      ON c.year = lq.year AND c.quarter = lq.quarter
    JOIN monitor_list m
      ON m.stock_code = c.stock_code
    WHERE c.quarter IS NOT NULL AND c.year IS NOT NULL
    ORDER BY c.stock_code, c.year DESC, c.quarter DESC
),

-- UNION 3 bảng chỉ số tài chính (phi tài chính, ngân hàng, chứng khoán)
union_chisotaichinh AS (
    SELECT * FROM ranked_ptc_report
    UNION ALL
    SELECT * FROM ranked_bank_report
    UNION ALL
    SELECT * FROM ranked_ck_report
),
semi_result as ( 
-- Kết quả cuối
SELECT 
    v.stock_code, v.sector_inc, v.sector2_inc,
    v.s_expgm__3, v.s_expgm__2, v.s_expgm__1, v.s_expgm_q0,
    v.s_nryoy__3, v.s_nryoy__2, v.s_nryoy__1, v.s_nryoy_q0,
    v.s_cpexg__3, v.s_cpexg__2, v.s_cpexg__1, v.s_cpexg_q0,
    uc.year_quarter, uc.dt12m, uc.lr12m, uc.lrm12m, 
    uc.dt, dt12myoy, dtytdyoy, uc.dtyoy, 
    uc.lr, uc.lr12myoy, lrytdyoy, uc.lnyoy, 
    uc.blg, uc.blr,
    uc.nd_e, uc.roe, uc.roe3y, uc.roeadj, uc.roe3yadj, uc.roic,
    v.date, 
    v.pe, v.pb, v.evebitda, v.divyld, v.netcashmc, v.marketcap
FROM union_chisotaichinh AS uc
LEFT JOIN ranked_valuation AS v
  ON uc.stock_code = v.stock_code
)
select sr.*, ac.close, ac.ltm, ac.ytd, ss.company_name
from semi_result as sr 
left join ami_close ac
	on sr.stock_code = ac.stock_code and sr.date = ac.date
LEFT JOIN stocksymbol ss
    ON sr.stock_code = ss.symbol
ORDER BY sr.sector_inc, sr.year_quarter, sr.dtyoy
;
