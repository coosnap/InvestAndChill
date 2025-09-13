CREATE MATERIALIZED VIEW view_inc_portfolio AS

WITH inc_port_list AS (
  SELECT symbol AS stock_code, sector_inc, sector2_inc
  FROM stocksymbol
  WHERE note = '1'
),

-- Base: mỗi bảng lấy ngày mới nhất RIÊNG
base AS (
  SELECT
    i.stock_code, i.sector_inc, i.sector2_inc,

    v.date  AS val_date, v.mos, v.pe, v.pb, v.marketcap,
    ac.date AS ac_date, ac.close, ac.ltm, ac.ytd,
    iv.date AS incv_date, iv.inc_val
  FROM inc_port_list i
  LEFT JOIN LATERAL (
    SELECT date, mos, pe, pb, marketcap
    FROM valuation v2
    WHERE v2.stock_code = i.stock_code
    ORDER BY date DESC
    LIMIT 1
  ) v ON TRUE
  LEFT JOIN LATERAL (
    SELECT date, close, ltm, ytd
    FROM ami_close a
    WHERE a.stock_code = i.stock_code
    ORDER BY date DESC
    LIMIT 1
  ) ac ON TRUE
  LEFT JOIN LATERAL (
    SELECT date, inc_val
    FROM inc_valuation iv2
    WHERE iv2.stock_code = i.stock_code
    ORDER BY date DESC
    LIMIT 1
  ) iv ON TRUE
),

-- ROE: lấy từ đúng bảng mà mã thuộc (1 mã chỉ nằm ở 1 nhánh)
roe AS (
  SELECT i.stock_code, r.year, r.quarter, r.p_i_6::numeric AS roe, 'phi_tai_chinh' AS roe_src
  FROM inc_port_list i
  JOIN LATERAL (
    SELECT year, quarter, p_i_6
    FROM phi_tai_chinh_report r
    WHERE r.stock_code = i.stock_code AND p_i_6 IS NOT NULL
    ORDER BY year DESC, quarter DESC
    LIMIT 1
  ) r ON TRUE

  UNION ALL
  SELECT i.stock_code, r.year, r.quarter, r.b_i_20::numeric AS roe, 'ngan_hang' AS roe_src
  FROM inc_port_list i
  JOIN LATERAL (
    SELECT year, quarter, b_i_20
    FROM ngan_hang_report r
    WHERE r.stock_code = i.stock_code AND b_i_20 IS NOT NULL
    ORDER BY year DESC, quarter DESC
    LIMIT 1
  ) r ON TRUE

  UNION ALL
  SELECT i.stock_code, r.year, r.quarter, r.c_i_6::numeric AS roe, 'chung_khoan' AS roe_src
  FROM inc_port_list i
  JOIN LATERAL (
    SELECT year, quarter, c_i_6
    FROM chung_khoan_report r
    WHERE r.stock_code = i.stock_code AND c_i_6 IS NOT NULL
    ORDER BY year DESC, quarter DESC
    LIMIT 1
  ) r ON TRUE
)

SELECT
     b.stock_code, b.sector_inc, b.sector2_inc, b.incv_date, b.inc_val
	,b.val_date, b.mos, b.pe, b.pb, r.roe, r.year AS roe_year, r.quarter AS roe_quarter, r.roe_src, b.marketcap
  	,b.ac_date, b.close, b.ltm, b.ytd
FROM base b
LEFT JOIN roe r USING (stock_code)
ORDER BY b.stock_code;
