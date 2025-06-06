package com.starter.InvestAndChill.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.starter.InvestAndChill.pojo.FilterXuLyKhauHaoNangDTO;

public class FilterXuLyKhauHaoNangDTORowMapper implements RowMapper<FilterXuLyKhauHaoNangDTO>{

	@Override
	public FilterXuLyKhauHaoNangDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		FilterXuLyKhauHaoNangDTO mapper = new FilterXuLyKhauHaoNangDTO();
		mapper.setStockCode(rs.getString("stock_code"));
		mapper.setQuarter(rs.getString("quarter"));
		mapper.setYear(rs.getString("year"));
		mapper.setMarketcap(rs.getDouble("marketcap"));
		mapper.setRoe(rs.getDouble("roe"));
		mapper.setPe(rs.getDouble("pe"));
		mapper.setPb(rs.getDouble("pb"));
		mapper.setEvebitda(rs.getDouble("evebitda"));
		mapper.setDivyld(rs.getDouble("divyld"));
		mapper.setPi70(rs.getDouble("p_i_70"));
		mapper.setPi73(rs.getDouble("p_i_73"));
		return mapper;
	}

}
