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
