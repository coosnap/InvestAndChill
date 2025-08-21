-- lay valuation ngay cuoi cung cua quy vd: ngay 31/03/2025 ( cuoi quy 1) cua toan bo ma co phieu
-- quy cuoi cung dang hien hanh thi lay gia tri ngay moi nhat co du lieu
CREATE MATERIALIZED VIEW view_valuation AS

WITH ranked_data_ptc AS ( 
	SELECT stock_code, date, quarter, year, ev, marketcap, evebitda, pe, pb,  ps, divyld,
			ROW_NUMBER() OVER ( PARTITION BY stock_code, year, quarter  ORDER BY date DESC   ) AS row_num
	FROM valuation 
	where stock_code in (select distinct stock_code from phi_tai_chinh_report ptcr)
),
ranked_ptc_report AS (
SELECT r.*,ptc.p_i_6 as roe, 
ptc.p_i_1 as salettm, ptc.p_i_3 as nittm, ptc.p_i_56 as ebitdattm, 
NULL::double precision as loinhuanrong,
ptc.p_i_20 as vonchusohuu,
ptc.p_i_77,
ptc.p_i_78,
ptc.p_i_75,
ptc.p_i_68,
ptc.p_i_69,
ptc.p_i_70,
ptc.p_i_73,
ptc.p_i_79_3,
ptc.p_i_24,
ptc.p_i_117,
ptc.p_i_118,
ptc.p_i_119,
ss.company_name
FROM ranked_data_ptc r 
	left JOIN phi_tai_chinh_report ptc 
		on r.stock_code = ptc.stock_code and r.quarter = ptc.quarter and r.year = ptc.year 
	LEFT JOIN stocksymbol ss
		ON ss.symbol = r.stock_code
WHERE row_num = 1
ORDER BY year DESC, quarter DESC, date DESC ),

ranked_data_bank AS ( 
	SELECT stock_code, date, quarter, year, ev, marketcap, evebitda, pe, pb,  ps, divyld,
			ROW_NUMBER() OVER ( PARTITION BY stock_code, year, quarter  ORDER BY date DESC   ) AS row_num
	FROM valuation 
	where stock_code in (select distinct stock_code from ngan_hang_report br)
),
ranked_bank_report AS (
select r.*, br.b_i_20 as roe,
NULL::double precision as salettm, NULL::double precision as nittm, NULL::double precision as ebitdattm, 
br.b_i_10 as loinhuanrong, 
br.b_i_19 as vonchusohuu,
NULL::double precision as p_i_77,
NULL::double precision as p_i_78,
NULL::double precision as p_i_75,
NULL::double precision as p_i_68,
NULL::double precision as p_i_69,
NULL::double precision as p_i_70,
NULL::double precision as p_i_73,
NULL::double precision as p_i_79_3,
NULL::double precision as p_i_24,
NULL::double precision as p_i_117,
NULL::double precision as p_i_118,
NULL::double precision as p_i_119,
ss.company_name
FROM ranked_data_bank r left JOIN ngan_hang_report br
on r.stock_code = br.stock_code and r.quarter = br.quarter
and r.year = br.year 
LEFT JOIN stocksymbol ss
		ON ss.symbol = r.stock_code
WHERE row_num = 1
ORDER BY year DESC, quarter DESC, date DESC ),
-- chung khoan
ranked_data_chungkhoan AS ( 
	SELECT stock_code, date, quarter, year, ev, marketcap, evebitda, pe, pb,  ps, divyld,
			ROW_NUMBER() OVER ( PARTITION BY stock_code, year, quarter  ORDER BY date DESC   ) AS row_num
	FROM valuation 
	where stock_code in (select distinct stock_code from chung_khoan_report ckr)
),
ranked_chungkhoan_report AS (
select r.*, ckr.c_i_6 as roe,
NULL::double precision as salettm, NULL::double precision as nittm, NULL::double precision as ebitdattm, 
ckr.c_i_3 as loinhuanrong, 
ckr.c_i_20 as vonchusohuu,
NULL::double precision as p_i_77,
NULL::double precision as p_i_78,
NULL::double precision as p_i_75,
NULL::double precision as p_i_68,
NULL::double precision as p_i_69,
NULL::double precision as p_i_70,
NULL::double precision as p_i_73,
NULL::double precision as p_i_79_3,
NULL::double precision as p_i_24,
NULL::double precision as p_i_117,
NULL::double precision as p_i_118,
NULL::double precision as p_i_119,
ss.company_name
FROM ranked_data_chungkhoan r left JOIN chung_khoan_report ckr
on r.stock_code = ckr.stock_code and r.quarter = ckr.quarter
and r.year = ckr.year 
LEFT JOIN stocksymbol ss
		ON ss.symbol = r.stock_code
WHERE row_num = 1
ORDER BY year DESC, quarter DESC, date DESC )

	select *
	from ranked_ptc_report
	union all
	select *
	from ranked_bank_report
	union all
	select *
	from ranked_chungkhoan_report