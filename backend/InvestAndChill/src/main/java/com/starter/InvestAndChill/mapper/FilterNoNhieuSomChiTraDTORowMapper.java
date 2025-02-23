package com.starter.InvestAndChill.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.starter.InvestAndChill.pojo.FilterNoNhieuSomChiTraDTO;

public class FilterNoNhieuSomChiTraDTORowMapper implements RowMapper<FilterNoNhieuSomChiTraDTO>{

	@Override
	public FilterNoNhieuSomChiTraDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		FilterNoNhieuSomChiTraDTO mapper = new FilterNoNhieuSomChiTraDTO();
		mapper.setStockCode(rs.getString("stock_code"));
		mapper.setQuarter(rs.getString("quarter"));
		mapper.setYear(rs.getString("year"));
		mapper.setMarketcap(rs.getDouble("marketcap"));
		mapper.setRoe(rs.getDouble("roe"));
		mapper.setPe(rs.getDouble("pe"));
		mapper.setPb(rs.getDouble("pb"));
		mapper.setEvebitda(rs.getDouble("evebitda"));
		mapper.setDivyld(rs.getDouble("divyld"));
		mapper.setPi68(rs.getDouble("p_i_68"));
		mapper.setPi69(rs.getDouble("p_i_69"));
		return mapper;
	}

}
