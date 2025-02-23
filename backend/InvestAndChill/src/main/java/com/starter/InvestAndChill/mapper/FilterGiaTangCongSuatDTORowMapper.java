package com.starter.InvestAndChill.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.starter.InvestAndChill.pojo.FilterGiaTangCongSuatDTO;

public class FilterGiaTangCongSuatDTORowMapper implements RowMapper<FilterGiaTangCongSuatDTO>{
	
	@Override
	public FilterGiaTangCongSuatDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		FilterGiaTangCongSuatDTO mapper = new FilterGiaTangCongSuatDTO();
		mapper.setStockCode(rs.getString("stock_code"));
		mapper.setQuarter(rs.getString("quarter"));
		mapper.setYear(rs.getString("year"));
		mapper.setMarketcap(rs.getDouble("marketcap"));
		mapper.setRoe(rs.getDouble("roe"));
		mapper.setPe(rs.getDouble("pe"));
		mapper.setPb(rs.getDouble("pb"));
		mapper.setEvebitda(rs.getDouble("evebitda"));
		mapper.setDivyld(rs.getDouble("divyld"));
		mapper.setPi77(rs.getDouble("p_i_77"));
		mapper.setPi78(rs.getDouble("p_i_78"));
		return mapper;
	}
}
