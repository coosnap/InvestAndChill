package com.starter.InvestAndChill.jwt.models;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.NamedNativeQuery;
import javax.persistence.SqlResultSetMapping;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.starter.InvestAndChill.pojo.ValuationBankingDTO;
import com.starter.InvestAndChill.pojo.ValuationChungKhoanDTO;
import com.starter.InvestAndChill.pojo.ValuationPhiTaiChinhDTO;

import javax.persistence.ColumnResult;
import javax.persistence.ConstructorResult;

@Entity
@NamedNativeQuery(
    name = "user.findByName",
    query = "WITH ranked_data AS (\r\n"
    		+ "		            SELECT\r\n"
    		+ "		                stock_code,   \r\n"
    		+ "		                date,            \r\n"
    		+ "		                quarter,        \r\n"
    		+ "		                year,\r\n"
    		+ "		                marketcap,\r\n"
    		+ "		                evebitda,\r\n"
    		+ "		                pe,\r\n"
    		+ "		                pb,\r\n"
    		+ "		                ps,\r\n"
    		+ "		                ROW_NUMBER() OVER (\r\n"
    		+ "		                    PARTITION BY stock_code, year, quarter\r\n"
    		+ "		                    ORDER BY date DESC                                 \r\n"
    		+ "		                ) AS row_num\r\n"
    		+ "		            FROM\r\n"
    		+ "		                valuation\r\n"
    		+ "		            WHERE\r\n"
    		+ "		                stock_code = :stockCode\r\n"
    		+ "		        )\r\n"
    		+ "		        SELECT\r\n"
    		+ "		        r.*,ptc.p_i_6 as roe, ptc.p_i_1 as salettm, ptc.p_i_3 as nittm, ptc.p_i_56 as ebitdattm, ptc.p_b_98 as capital \r\n"
    		+ "		        FROM\r\n"
    		+ "		            ranked_data r LEFT JOIN phi_tai_chinh_report ptc\r\n"
    		+ "		            on r.stock_code = ptc.stock_code\r\n"
    		+ "		            and r.quarter = ptc.quarter\r\n"
    		+ "		            and r.year = ptc.year\r\n"
    		+ "		        WHERE\r\n"
    		+ "		            row_num = 1 \r\n"
    		+ "\r\n"
    		+ "		        ORDER BY\r\n"
    		+ "		            year DESC, quarter DESC, date DESC",
    resultSetMapping = "UserDTOMapping"
)

@NamedNativeQuery(
	    name = "user.findByBanking",
	    query = "WITH ranked_data AS (\r\n"
	    		+ "         SELECT\r\n"
	    		+ "             stock_code,   \r\n"
	    		+ "             date,            \r\n"
	    		+ "             quarter,        \r\n"
	    		+ "             year,\r\n"
	    		+ "             marketcap,\r\n"
	    		+ "             evebitda,\r\n"
	    		+ "             pe,\r\n"
	    		+ "             pb,\r\n"
	    		+ "             ps,\r\n"
	    		+ "             ROW_NUMBER() OVER (\r\n"
	    		+ "                 PARTITION BY stock_code, year, quarter\r\n"
	    		+ "                 ORDER BY date DESC                                 \r\n"
	    		+ "             ) AS row_num\r\n"
	    		+ "         FROM\r\n"
	    		+ "             valuation\r\n"
	    		+ "         WHERE\r\n"
	    		+ "             stock_code = :stockCode\r\n"
	    		+ "     )\r\n"
	    		+ "     SELECT\r\n"
	    		+ "         r.*, nhr.b_i_20 as roe, nhr.b_i_10 as loinhuanrong, nhr.b_b_64 as vonchusohuu\r\n"
	    		+ "     FROM\r\n"
	    		+ "         ranked_data r LEFT JOIN ngan_hang_report nhr \r\n"
	    		+ "         on r.stock_code = nhr.stock_code\r\n"
	    		+ "         and r.quarter = nhr.quarter\r\n"
	    		+ "         and r.year = nhr.year\r\n"
	    		+ "     WHERE\r\n"
	    		+ "         row_num = 1 \r\n"
	    		+ "         \r\n"
	    		+ "     ORDER BY\r\n"
	    		+ "         year DESC, quarter DESC, date DESC",
	    resultSetMapping = "bankingDTOMapping"
	)

@NamedNativeQuery(
	    name = "user.findByChungKhoan",
	    query = "		        WITH ranked_data AS (\r\n"
	    		+ "         SELECT\r\n"
	    		+ "             stock_code,   \r\n"
	    		+ "             date,            \r\n"
	    		+ "             quarter,        \r\n"
	    		+ "             year,\r\n"
	    		+ "             marketcap,\r\n"
	    		+ "             evebitda,\r\n"
	    		+ "             pe,\r\n"
	    		+ "             pb,\r\n"
	    		+ "             ps,\r\n"
	    		+ "             ROW_NUMBER() OVER (\r\n"
	    		+ "                 PARTITION BY stock_code, year, quarter\r\n"
	    		+ "                 ORDER BY date DESC                                 \r\n"
	    		+ "             ) AS row_num\r\n"
	    		+ "         FROM\r\n"
	    		+ "             valuation\r\n"
	    		+ "         WHERE\r\n"
	    		+ "             stock_code = :stockCode\r\n"
	    		+ "     )\r\n"
	    		+ "     SELECT\r\n"
	    		+ "         r.*, ckr.c_i_6 as roe, ckr.c_i_3 as loinhuanrong, ckr.c_b_142 as vonchusohuu\r\n"
	    		+ "     FROM\r\n"
	    		+ "         ranked_data r LEFT JOIN chung_khoan_report ckr \r\n"
	    		+ "         on r.stock_code = ckr.stock_code\r\n"
	    		+ "         and r.quarter = ckr.quarter\r\n"
	    		+ "         and r.year = ckr.year\r\n"
	    		+ "     WHERE\r\n"
	    		+ "         row_num = 1 \r\n"
	    		+ "        \r\n"
	    		+ "     ORDER BY\r\n"
	    		+ "         year DESC, quarter DESC, date DESC",
	    resultSetMapping = "chungKhoanDTOMapping"
	)


@SqlResultSetMapping(
    name = "UserDTOMapping",
    classes = @ConstructorResult(
        targetClass = ValuationPhiTaiChinhDTO.class,
        columns = {
            @ColumnResult(name = "stock_code", type = String.class),
            @ColumnResult(name = "quarter", type = String.class),
            @ColumnResult(name = "year", type = String.class),
            @ColumnResult(name = "date", type = LocalDateTime.class),
            @ColumnResult(name = "marketcap", type = Double.class),
            @ColumnResult(name = "pe", type = Double.class),
            @ColumnResult(name = "evebitda", type = Double.class),
            @ColumnResult(name = "pb", type = Double.class),
            @ColumnResult(name = "ps", type = Double.class),
            @ColumnResult(name = "roe", type = Double.class),
            @ColumnResult(name = "salettm", type = Double.class),
            @ColumnResult(name = "nittm", type = Double.class),
            @ColumnResult(name = "ebitdattm", type = Double.class),
            @ColumnResult(name = "capital", type = Double.class)
        }
    )
)

@SqlResultSetMapping(
	    name = "bankingDTOMapping",
	    classes = @ConstructorResult(
	        targetClass = ValuationBankingDTO.class,
	        columns = {
	            @ColumnResult(name = "stock_code", type = String.class),
	            @ColumnResult(name = "quarter", type = String.class),
	            @ColumnResult(name = "year", type = String.class),
	            @ColumnResult(name = "date", type = LocalDateTime.class),
	            @ColumnResult(name = "marketcap", type = Double.class),
	            @ColumnResult(name = "pe", type = Double.class),
	            @ColumnResult(name = "evebitda", type = Double.class),
	            @ColumnResult(name = "pb", type = Double.class),
	            @ColumnResult(name = "ps", type = Double.class),
	            @ColumnResult(name = "roe", type = Double.class),
	            @ColumnResult(name = "loinhuanrong", type = Double.class),
	            @ColumnResult(name = "vonchusohuu", type = Double.class)
	        }
	    )
	)

@SqlResultSetMapping(
	    name = "chungKhoanDTOMapping",
	    classes = @ConstructorResult(
	        targetClass = ValuationChungKhoanDTO.class,
	        columns = {
	            @ColumnResult(name = "stock_code", type = String.class),
	            @ColumnResult(name = "quarter", type = String.class),
	            @ColumnResult(name = "year", type = String.class),
	            @ColumnResult(name = "date", type = LocalDateTime.class),
	            @ColumnResult(name = "marketcap", type = Double.class),
	            @ColumnResult(name = "pe", type = Double.class),
	            @ColumnResult(name = "evebitda", type = Double.class),
	            @ColumnResult(name = "pb", type = Double.class),
	            @ColumnResult(name = "ps", type = Double.class),
	            @ColumnResult(name = "roe", type = Double.class),
	            @ColumnResult(name = "loinhuanrong", type = Double.class),
	            @ColumnResult(name = "vonchusohuu", type = Double.class)
	        }
	    )
	)


@Table(name = "valuation")
public class Valuation {
	
	@EmbeddedId
    private ValuationKey id;

	public ValuationKey getId() {
		return id;
	}

	public void setId(ValuationKey id) {
		this.id = id;
	}
	
	@Column(name = "marketcap")
	private Double marketcap;
	
	
	//VAL1
	@Column(name = "pe")
	private Double pe;
	@Column(name = "evebitda")
	private Double evebitda;
	@Transient
	private Double peMedian;
	@Transient
	private Double evebitdaMedian;
	
	
	@Column(name = "pb")
	private Double pb;
	@Transient
	private Double pbMedian;
	
	//val4
	@Column(name = "ps")
	private Double ps;
	@Transient
	private Double psMedian;
	
	

	public Double getPs() {
		return ps;
	}

	public void setPs(Double ps) {
		this.ps = ps;
	}

	public Double getPsMedian() {
		return psMedian;
	}

	public void setPsMedian(Double psMedian) {
		this.psMedian = psMedian;
	}

	public Double getPbMedian() {
		return pbMedian;
	}

	public void setPbMedian(Double pbMedian) {
		this.pbMedian = pbMedian;
	}

	public Double getPb() {
		return pb;
	}

	public void setPb(Double pb) {
		this.pb = pb;
	}

	public Double getPeMedian() {
		return peMedian;
	}

	public void setPeMedian(Double peMedian) {
		this.peMedian = peMedian;
	}

	public Double getEvebitdaMedian() {
		return evebitdaMedian;
	}

	public void setEvebitdaMedian(Double evebitdaMedian) {
		this.evebitdaMedian = evebitdaMedian;
	}

	public Double getPe() {
		return pe;
	}

	public void setPe(Double pe) {
		this.pe = pe;
	}

	public Double getEvebitda() {
		return evebitda;
	}

	public void setEvebitda(Double evebitda) {
		this.evebitda = evebitda;
	}

	

	public Double getMarketcap() {
		return marketcap;
	}

	public void setMarketcap(Double marketcap) {
		this.marketcap = marketcap;
	}
}
