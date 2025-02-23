package com.starter.InvestAndChill.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.starter.InvestAndChill.pojo.FilterGiaTangCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterKhaiThacDuoiCongSuatDTO;

public class FilterKhaiThacDuoiCongSuatDTORowMapper implements RowMapper<FilterKhaiThacDuoiCongSuatDTO>{

	@Override
	public FilterKhaiThacDuoiCongSuatDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		FilterKhaiThacDuoiCongSuatDTO mapper = new FilterKhaiThacDuoiCongSuatDTO();
		mapper.setStockCode(rs.getString("stock_code"));
		mapper.setQuarter(rs.getString("quarter"));
		mapper.setYear(rs.getString("year"));
		mapper.setMarketcap(rs.getDouble("marketcap"));
		mapper.setRoe(rs.getDouble("roe"));
		mapper.setPe(rs.getDouble("pe"));
		mapper.setPb(rs.getDouble("pb"));
		mapper.setEvebitda(rs.getDouble("evebitda"));
		mapper.setDivyld(rs.getDouble("divyld"));
		mapper.setPi793(rs.getDouble("p_i_79_3"));
		return mapper;
	}

}
