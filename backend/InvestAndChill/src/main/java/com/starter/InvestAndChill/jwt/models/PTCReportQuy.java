package com.starter.InvestAndChill.jwt.models;

import javax.persistence.ColumnResult;
import javax.persistence.ConstructorResult;
import javax.persistence.Entity;
import javax.persistence.NamedNativeQuery;
import javax.persistence.SqlResultSetMapping;

import com.starter.InvestAndChill.pojo.BoLocDTO;
import com.starter.InvestAndChill.pojo.ChungKhoanSoSanhChiSoDTO;
import com.starter.InvestAndChill.pojo.FilterGiaTangCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterKhaiThacDuoiCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterNoNhieuSomChiTraDTO;
import com.starter.InvestAndChill.pojo.FilterPhiTaiChinhDTO;
import com.starter.InvestAndChill.pojo.FilterTheoDoiPreSalesDTO;
import com.starter.InvestAndChill.pojo.FilterXuLyKhauHaoNangDTO;
import com.starter.InvestAndChill.pojo.MinMaxDTO;
import com.starter.InvestAndChill.pojo.NganHangSoSanhChiSoDTO;

@Entity(name = "view_phi_tai_chinh_quy")
@NamedNativeQuery(
	    name = "filter.giaTangCongSuat",
	    query = "WITH RankedData AS (\r\n"
	    		+ "    SELECT stock_code, quarter, year, date, marketcap,pe,pb,evebitda,divyld,\r\n"
	    		+ "           ROW_NUMBER() OVER (PARTITION BY stock_code ORDER BY date DESC) AS rn\r\n"
	    		+ "    FROM valuation \r\n"
	    		+ "    WHERE quarter = :quarter AND year = :year \r\n"
	    		+ ")\r\n"
	    		+ "SELECT RankedData.stock_code, RankedData.quarter, RankedData.year, ptcr.p_i_6 as roe,marketcap,pe,pb,evebitda,divyld,ptcr.p_i_77, p_i_78\r\n"
	    		+ "FROM RankedData\r\n"
	    		+ "INNER JOIN phi_tai_chinh_report ptcr \r\n"
	    		+ "	on ptcr.stock_code = RankedData.stock_code \r\n"
	    		+ "	and ptcr.quarter = RankedData.quarter \r\n"
	    		+ "	and ptcr.year = RankedData.year \r\n"
	    		+ "WHERE rn = 1 AND p_i_77 > 0.05 AND p_i_78 > 0.05 \r\n"
	    		+ "ORDER BY stock_code",
	    resultSetMapping = "giaTangCongSuat"
	)
@SqlResultSetMapping(
	    name = "giaTangCongSuat",
	    classes = @ConstructorResult(
	        targetClass = FilterGiaTangCongSuatDTO.class,
	        columns = {
	            @ColumnResult(name = "stock_code", type = String.class),
	            @ColumnResult(name = "quarter", type = String.class),
	            @ColumnResult(name = "year", type = String.class),	            
	            @ColumnResult(name = "marketcap", type = Double.class),
	            @ColumnResult(name = "roe", type = Double.class),
	            @ColumnResult(name = "pe", type = Double.class),
	            @ColumnResult(name = "pb", type = Double.class),
	            @ColumnResult(name = "evebitda", type = Double.class),
	            @ColumnResult(name = "divyld", type = Double.class),            
	            @ColumnResult(name = "p_i_77", type = Double.class),
	            @ColumnResult(name = "p_i_78", type = Double.class)
	        }
	    )
	)


@NamedNativeQuery(
	    name = "filter.theoDoiPreSales",		
		query = "WITH RankedData AS (\r\n"
				+ "    SELECT stock_code, quarter, year, date, marketcap,pe,pb,evebitda,divyld,\r\n"
				+ "           ROW_NUMBER() OVER (PARTITION BY stock_code ORDER BY date DESC) AS rn\r\n"
				+ "    FROM valuation \r\n"
				+ "    WHERE quarter = :quarter AND year = :year \r\n"
				+ ")\r\n"
				+ "SELECT RankedData.stock_code, RankedData.quarter, RankedData.year, ptcr.p_i_6 as roe, marketcap,pe,pb,evebitda,divyld,ptcr.p_i_75\r\n"
				+ "FROM RankedData\r\n"
				+ "INNER JOIN phi_tai_chinh_report ptcr \r\n"
				+ "	on ptcr.stock_code = RankedData.stock_code \r\n"
				+ "	and ptcr.quarter = RankedData.quarter \r\n"
				+ "	and ptcr.year = RankedData.year \r\n"
				+ "WHERE rn = 1 AND p_i_75 > 0.25\r\n"
				+ "ORDER BY stock_code",
	    resultSetMapping = "theoDoiPreSales"
	)
@SqlResultSetMapping(
	    name = "theoDoiPreSales",
	    classes = @ConstructorResult(
	        targetClass = FilterTheoDoiPreSalesDTO.class,
	        columns = {
	            @ColumnResult(name = "stock_code", type = String.class),
	            @ColumnResult(name = "quarter", type = String.class),
	            @ColumnResult(name = "year", type = String.class),	            
	            @ColumnResult(name = "marketcap", type = Double.class),
	            @ColumnResult(name = "roe", type = Double.class),
	            @ColumnResult(name = "pe", type = Double.class),
	            @ColumnResult(name = "pb", type = Double.class),
	            @ColumnResult(name = "evebitda", type = Double.class),
	            @ColumnResult(name = "divyld", type = Double.class),            
	            @ColumnResult(name = "p_i_75", type = Double.class)
	        }
	    )
	)

@NamedNativeQuery(
	    name = "filter.noNhieuSomChiTra",
	    query = "WITH RankedData AS (\r\n"
	    		+ "    SELECT stock_code, quarter, year, date, marketcap,pe,pb,evebitda,divyld,\r\n"
	    		+ "           ROW_NUMBER() OVER (PARTITION BY stock_code ORDER BY date DESC) AS rn\r\n"
	    		+ "    FROM valuation \r\n"
	    		+ "    WHERE quarter = :quarter AND year = :year  \r\n"
	    		+ ")\r\n"
	    		+ "SELECT RankedData.stock_code, RankedData.quarter, RankedData.year, ptcr.p_i_6 as roe, marketcap,pe,pb,evebitda,divyld,ptcr.p_i_68,ptcr.p_i_69\r\n"
	    		+ "FROM RankedData\r\n"
	    		+ "INNER JOIN phi_tai_chinh_report ptcr \r\n"
	    		+ "	on ptcr.stock_code = RankedData.stock_code \r\n"
	    		+ "	and ptcr.quarter = RankedData.quarter \r\n"
	    		+ "	and ptcr.year = RankedData.year \r\n"
	    		+ "WHERE rn = 1 AND p_i_68 > 0.5 and p_i_69 <= 5\r\n"
	    		+ "ORDER BY stock_code",
	    resultSetMapping = "noNhieuSomChiTra"
	)

@SqlResultSetMapping(
	    name = "noNhieuSomChiTra",
	    classes = @ConstructorResult(
	        targetClass = FilterNoNhieuSomChiTraDTO.class,
	        columns = {
	            @ColumnResult(name = "stock_code", type = String.class),
	            @ColumnResult(name = "quarter", type = String.class),
	            @ColumnResult(name = "year", type = String.class),	            
	            @ColumnResult(name = "marketcap", type = Double.class),
	            @ColumnResult(name = "roe", type = Double.class),
	            @ColumnResult(name = "pe", type = Double.class),
	            @ColumnResult(name = "pb", type = Double.class),
	            @ColumnResult(name = "evebitda", type = Double.class),
	            @ColumnResult(name = "divyld", type = Double.class),            
	            @ColumnResult(name = "p_i_68", type = Double.class),
	            @ColumnResult(name = "p_i_69", type = Double.class),
	        }
	    )
	)

@NamedNativeQuery(
	    name = "filter.xuLyKhauHaoNang",
	    query = "WITH RankedData AS (\r\n"
	    		+ "    SELECT stock_code, quarter, year, date, marketcap,pe,pb,evebitda,divyld,\r\n"
	    		+ "           ROW_NUMBER() OVER (PARTITION BY stock_code ORDER BY date DESC) AS rn\r\n"
	    		+ "    FROM valuation \r\n"
	    		+ "    WHERE quarter = :quarter AND year = :year \r\n"
	    		+ ")\r\n"
	    		+ "SELECT RankedData.stock_code, RankedData.quarter, RankedData.year, ptcr.p_i_6 as roe, marketcap,pe,pb,evebitda,divyld,ptcr.p_i_70,ptcr.p_i_73\r\n"
	    		+ "FROM RankedData\r\n"
	    		+ "INNER JOIN phi_tai_chinh_report ptcr \r\n"
	    		+ "	on ptcr.stock_code = RankedData.stock_code \r\n"
	    		+ "	and ptcr.quarter = RankedData.quarter \r\n"
	    		+ "	and ptcr.year = RankedData.year \r\n"
	    		+ "WHERE rn = 1 AND p_i_70 > 0.5 and p_i_73 <= 3\r\n"
	    		+ "ORDER BY stock_code",
	    resultSetMapping = "xuLyKhauHaoNang"
	)

@SqlResultSetMapping(
	    name = "xuLyKhauHaoNang",
	    classes = @ConstructorResult(
	        targetClass = FilterXuLyKhauHaoNangDTO.class,
	        columns = {
	            @ColumnResult(name = "stock_code", type = String.class),
	            @ColumnResult(name = "quarter", type = String.class),
	            @ColumnResult(name = "year", type = String.class),	            
	            @ColumnResult(name = "marketcap", type = Double.class),
	            @ColumnResult(name = "roe", type = Double.class),
	            @ColumnResult(name = "pe", type = Double.class),
	            @ColumnResult(name = "pb", type = Double.class),
	            @ColumnResult(name = "evebitda", type = Double.class),
	            @ColumnResult(name = "divyld", type = Double.class),            
	            @ColumnResult(name = "p_i_70", type = Double.class),
	            @ColumnResult(name = "p_i_73", type = Double.class),
	        }
	    )
	)

@NamedNativeQuery(
	    name = "filter.khaiThacDuoiCongSuat",
		query = "WITH RankedData AS (\r\n"
				+ "    SELECT stock_code, quarter, year, date, marketcap,pe,pb,evebitda,divyld,\r\n"
				+ "           ROW_NUMBER() OVER (PARTITION BY stock_code ORDER BY date DESC) AS rn\r\n"
				+ "    FROM valuation \r\n"
				+ "where \r\n"
	    		+ "( ( year =:yearm1 and quarter =:quarterm1) or (year =:yearm2 and quarter =:quarterm2 ) or\r\n"
	    		+ "( year =:yearm3 and quarter =:quarterm3) or ( year =:yearm4 and quarter =:quarterm4) )\r\n"
				+ ")\r\n"
				+ "SELECT RankedData.stock_code, RankedData.quarter, RankedData.year, ptcr.p_i_6 as roe, marketcap,pe,pb,evebitda,divyld,ptcr.p_i_79_3\r\n"
				+ "FROM RankedData\r\n"
				+ "INNER JOIN phi_tai_chinh_report ptcr \r\n"
				+ "	on ptcr.stock_code = RankedData.stock_code \r\n"
				+ "	and ptcr.quarter = RankedData.quarter \r\n"
				+ "	and ptcr.year = RankedData.year \r\n"
				+ "WHERE rn = 1 AND p_i_77 > 0.05 AND p_i_78 > 0.05 \r\n"
				+ "ORDER BY stock_code",
	    resultSetMapping = "khaiThacDuoiCongSuat"
	)

@SqlResultSetMapping(
	    name = "khaiThacDuoiCongSuat",
	    classes = @ConstructorResult(
	        targetClass = FilterKhaiThacDuoiCongSuatDTO.class,
	        columns = {
	            @ColumnResult(name = "stock_code", type = String.class),
	            @ColumnResult(name = "quarter", type = String.class),
	            @ColumnResult(name = "year", type = String.class),	            
	            @ColumnResult(name = "marketcap", type = Double.class),
	            @ColumnResult(name = "roe", type = Double.class),
	            @ColumnResult(name = "pe", type = Double.class),
	            @ColumnResult(name = "pb", type = Double.class),
	            @ColumnResult(name = "evebitda", type = Double.class),
	            @ColumnResult(name = "divyld", type = Double.class),            
	            @ColumnResult(name = "p_i_79_3", type = Double.class)
	        }
	    )
	)

@SqlResultSetMapping(
	    name = "boloc",
	    classes = @ConstructorResult(
	        targetClass = BoLocDTO.class,
	        columns = {
	        	@ColumnResult(name = "stock_code", type = String.class),
	            @ColumnResult(name = "p_i_79_1", type = Double.class),
	            @ColumnResult(name = "p_i_79_2", type = Double.class),
	            @ColumnResult(name = "p_i_79_3", type = Double.class),	            
	            @ColumnResult(name = "marketcap", type = Double.class),
	            @ColumnResult(name = "roe", type = Double.class),
	            @ColumnResult(name = "roic", type = Double.class),
	            @ColumnResult(name = "pe", type = Double.class),
	            @ColumnResult(name = "pb", type = Double.class),
	            @ColumnResult(name = "evebitda", type = Double.class),            
	            @ColumnResult(name = "divyld", type = Double.class),
	            @ColumnResult(name = "netcashmc", type = Double.class)
	        }
	    )
	)

@SqlResultSetMapping(
	    name = "getminmax",
	    classes = @ConstructorResult(
	        targetClass = MinMaxDTO.class,
	        columns = {        		
	        	@ColumnResult(name = "pi791Min", type = Double.class),
	            @ColumnResult(name = "pi791Max", type = Double.class),
	            @ColumnResult(name = "pi792Min", type = Double.class),
	            @ColumnResult(name = "pi792Max", type = Double.class),	            
	            @ColumnResult(name = "pi793Min", type = Double.class),
	            @ColumnResult(name = "pi793Max", type = Double.class),
	            @ColumnResult(name = "marketcapMin", type = Double.class),
	            @ColumnResult(name = "marketcapMax", type = Double.class),
	            @ColumnResult(name = "roeMin", type = Double.class),
	            @ColumnResult(name = "roeMax", type = Double.class),            
	            @ColumnResult(name = "pi24Min", type = Double.class),
	            @ColumnResult(name = "pi24Max", type = Double.class),           
	            @ColumnResult(name = "peMin", type = Double.class),
	            @ColumnResult(name = "peMax", type = Double.class),	            
	            @ColumnResult(name = "pbMin", type = Double.class),
	            @ColumnResult(name = "pbMax", type = Double.class),
	            @ColumnResult(name = "evebitdaMin", type = Double.class),
	            @ColumnResult(name = "evebitdaMax", type = Double.class),
	            @ColumnResult(name = "divyldMin", type = Double.class),
	            @ColumnResult(name = "divyldMax", type = Double.class),            
	            @ColumnResult(name = "netcashmcMin", type = Double.class),
	            @ColumnResult(name = "netcashmcMax", type = Double.class)
	        }
	    )
	)

@SqlResultSetMapping(
	    name = "chungkhoan.sosanhchiso",
	    classes = @ConstructorResult(
	        targetClass = ChungKhoanSoSanhChiSoDTO.class,
	        columns = {        		
	        	@ColumnResult(name = "stock_code", type = String.class),
	            @ColumnResult(name = "quarter", type = String.class),
	            @ColumnResult(name = "year", type = String.class),
	            @ColumnResult(name = "c_i_6", type = Double.class),	            
	            @ColumnResult(name = "c_i_7", type = Double.class),
	            @ColumnResult(name = "c_b_142", type = Double.class),
	            @ColumnResult(name = "c_f_159", type = Double.class),
	            @ColumnResult(name = "c_b_205", type = Double.class)
	        }
	    )
	)


@SqlResultSetMapping(
	    name = "nganhang.sosanhchiso",
	    classes = @ConstructorResult(
	        targetClass = NganHangSoSanhChiSoDTO.class,
	        columns = {        		
	        	@ColumnResult(name = "stock_code", type = String.class),
	            @ColumnResult(name = "quarter", type = String.class),
	            @ColumnResult(name = "year", type = String.class),
	            @ColumnResult(name = "b_i_7", type = Double.class),	            
	            @ColumnResult(name = "b_i_8", type = Double.class),
	            @ColumnResult(name = "b_i_9", type = Double.class),
	            @ColumnResult(name = "b_i_35", type = Double.class),
	            @ColumnResult(name = "b_i_22", type = Double.class),
	            @ColumnResult(name = "b_i_23", type = Double.class),
	            @ColumnResult(name = "b_i_24", type = Double.class),
	            @ColumnResult(name = "b_i_26", type = Double.class),
	            @ColumnResult(name = "b_i_30", type = Double.class),
	            @ColumnResult(name = "b_i_29", type = Double.class),
	            @ColumnResult(name = "b_i_32", type = Double.class),
	            @ColumnResult(name = "b_i_20", type = Double.class),
	            @ColumnResult(name = "b_i_21", type = Double.class),
	            @ColumnResult(name = "b_i_27", type = Double.class),
	            @ColumnResult(name = "b_i_25", type = Double.class)
	        }
	    )
	)

public class PTCReportQuy extends PTCReport {

}
