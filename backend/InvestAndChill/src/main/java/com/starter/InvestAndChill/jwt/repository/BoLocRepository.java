package com.starter.InvestAndChill.jwt.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.starter.InvestAndChill.mapper.FilterGiaTangCongSuatDTORowMapper;
import com.starter.InvestAndChill.mapper.FilterTheoDoiPreSalesDTORowMapper;
import com.starter.InvestAndChill.mapper.FilterNoNhieuSomChiTraDTORowMapper;
import com.starter.InvestAndChill.mapper.FilterXuLyKhauHaoNangDTORowMapper;
import com.starter.InvestAndChill.mapper.FilterKhaiThacDuoiCongSuatDTORowMapper;
import com.starter.InvestAndChill.pojo.BoLocDTO;
import com.starter.InvestAndChill.pojo.ChungKhoanSoSanhChiSoDTO;
import com.starter.InvestAndChill.pojo.FilterGiaTangCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterKhaiThacDuoiCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterNoNhieuSomChiTraDTO;
import com.starter.InvestAndChill.pojo.FilterTheoDoiPreSalesDTO;
import com.starter.InvestAndChill.pojo.FilterXuLyKhauHaoNangDTO;
import com.starter.InvestAndChill.pojo.MinMaxDTO;
import com.starter.InvestAndChill.pojo.NganHangSoSanhChiSoDTO;
import com.starter.InvestAndChill.utils.FilterCaculationUtils;
import com.starter.InvestAndChill.utils.QueryLoader;

@Repository
public class BoLocRepository {
	@PersistenceContext
	private EntityManager entityManager;
	
	@Autowired
    private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	
	private QueryLoader queryLoader = new QueryLoader();

	public List<BoLocDTO> boLoc(Map<String, Object> payload,String orderQuery) {
		String sql = FilterCaculationUtils.buildQueryBoLoc(payload,orderQuery);
		Query query = entityManager.createNativeQuery(sql, "boloc");
		List<BoLocDTO> list = query.getResultList();
		return list;
	}

	public MinMaxDTO getMinMax() {
		String sql = FilterCaculationUtils.buildQueryMinMax();
		Query query = entityManager.createNativeQuery(sql, "getminmax");
		MinMaxDTO result = (MinMaxDTO) query.getSingleResult();
		return result;
	}

	public List<ChungKhoanSoSanhChiSoDTO> chungKhoanSoSanhChiSo(List<String> listChungKhoan) {
		String sql = FilterCaculationUtils.buildQuerySoSanhChiSoChungKhoan(listChungKhoan);
		Query query = entityManager.createNativeQuery(sql, "chungkhoan.sosanhchiso");
		List<ChungKhoanSoSanhChiSoDTO> list = query.getResultList();
		List<ChungKhoanSoSanhChiSoDTO> sortList = new ArrayList<ChungKhoanSoSanhChiSoDTO>();
		for (int i=0; i< listChungKhoan.size();i++) {
			for (int j=0;j<list.size();j++) {
				if (list.get(j).getStockCode().equals(listChungKhoan.get(i))) {
					sortList.add(list.get(j));
				}
			}
		}
		
		return sortList;
	}
	
	public List<NganHangSoSanhChiSoDTO> nganHangSoSanhChiSo(List<String> listNganHang) {
		String sql = FilterCaculationUtils.buildQuerySoSanhChiSoNganHang(listNganHang);
		Query query = entityManager.createNativeQuery(sql, "nganhang.sosanhchiso");
		List<NganHangSoSanhChiSoDTO> list = query.getResultList();
		List<NganHangSoSanhChiSoDTO> sortList = new ArrayList<NganHangSoSanhChiSoDTO>();
		for (int i=0; i< listNganHang.size();i++) {
			for (int j=0;j<list.size();j++) {
				if (list.get(j).getStockCode().equals(listNganHang.get(i))) {
					sortList.add(list.get(j));
				}
			}
		}
		
		return sortList;
	}
	
	public List<String> listChungKhoan() {
		String sql = "SELECT DISTINCT stock_code FROM chung_khoan_report";
		Query query = entityManager.createNativeQuery(sql);
		List<String> list = query.getResultList();
		return list;
	}
	
	public List<String> listNganHang() {
		String sql = "SELECT DISTINCT stock_code FROM ngan_hang_report";
		Query query = entityManager.createNativeQuery(sql);
		List<String> list = query.getResultList();
		return list;
	}
	
	public List<FilterGiaTangCongSuatDTO> findGiaTangCongSuat(String year,String quarter,String orderQuery) {
		String sql = queryLoader.getQuery("giaTangCongSuat");
		if (!orderQuery.isEmpty()) {
			sql += orderQuery;
		}
		Map<String, Object> params = new HashMap<>();
        params.put("quarter", quarter);
        params.put("year", year);
		return namedParameterJdbcTemplate.query(sql, params, new FilterGiaTangCongSuatDTORowMapper());
	}
	
	public List<FilterTheoDoiPreSalesDTO> findTheoDoiPreSales(String year,String quarter,String orderQuery) {
		String sql = queryLoader.getQuery("theoDoiPreSales");
		if (!orderQuery.isEmpty()) {
			sql += orderQuery;
		}
		Map<String, Object> params = new HashMap<>();
        params.put("quarter", quarter);
        params.put("year", year);
		return namedParameterJdbcTemplate.query(sql, params, new FilterTheoDoiPreSalesDTORowMapper());
	}
	
	public List<FilterNoNhieuSomChiTraDTO> findNoNhieuSomChiTra(String year,String quarter,String orderQuery) {
		String sql = queryLoader.getQuery("noNhieuSomChiTra");
		if (!orderQuery.isEmpty()) {
			sql += orderQuery;
		}
		Map<String, Object> params = new HashMap<>();
        params.put("quarter", quarter);
        params.put("year", year);
		return namedParameterJdbcTemplate.query(sql, params, new FilterNoNhieuSomChiTraDTORowMapper());
	}
	
	public List<FilterXuLyKhauHaoNangDTO> findXuLyKhauHaoNang(String year,String quarter,String orderQuery) {
		String sql = queryLoader.getQuery("xuLyKhauHaoNang");
		if (!orderQuery.isEmpty()) {
			sql += orderQuery;
		}
		Map<String, Object> params = new HashMap<>();
        params.put("quarter", quarter);
        params.put("year", year);
		return namedParameterJdbcTemplate.query(sql, params, new FilterXuLyKhauHaoNangDTORowMapper());
	}
	
	public List<FilterKhaiThacDuoiCongSuatDTO> findKhaiThacDuoiCongSuat(String yearm1,String quarterm1,String yearm2,String quarterm2,String yearm3,String quarterm3,String yearm4,String quarterm4,
																		String orderQuery) {
		String sql = queryLoader.getQuery("khaiThacDuoiCongSuat");
		if (!orderQuery.isEmpty()) {
			sql += orderQuery;
		}
		Map<String, Object> params = new HashMap<>();
        params.put("yearm1", yearm1);
        params.put("quarterm1", quarterm1);
        params.put("yearm2", yearm2);
        params.put("quarterm2", quarterm2);
        params.put("yearm3", yearm3);
        params.put("quarterm3", quarterm3);
        params.put("yearm4", yearm4);
        params.put("quarterm4", quarterm4);
		return namedParameterJdbcTemplate.query(sql, params, new FilterKhaiThacDuoiCongSuatDTORowMapper());
	}

}
