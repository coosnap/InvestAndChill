package com.starter.InvestAndChill.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.starter.InvestAndChill.pojo.FilterTheoDoiPreSalesDTO;

public class FilterTheoDoiPreSalesDTORowMapper implements RowMapper<FilterTheoDoiPreSalesDTO>{

	@Override
	public FilterTheoDoiPreSalesDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		FilterTheoDoiPreSalesDTO mapper = new FilterTheoDoiPreSalesDTO();
		mapper.setStockCode(rs.getString("stock_code"));
		mapper.setQuarter(rs.getString("quarter"));
		mapper.setYear(rs.getString("year"));
		mapper.setMarketcap(rs.getDouble("marketcap"));
		mapper.setRoe(rs.getDouble("roe"));
		mapper.setPe(rs.getDouble("pe"));
		mapper.setPb(rs.getDouble("pb"));
		mapper.setEvebitda(rs.getDouble("evebitda"));
		mapper.setDivyld(rs.getDouble("divyld"));
		mapper.setPi75(rs.getDouble("p_i_75"));
		return mapper;
	}

}
