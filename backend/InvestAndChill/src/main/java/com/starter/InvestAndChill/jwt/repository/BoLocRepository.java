package com.starter.InvestAndChill.jwt.repository;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.starter.InvestAndChill.pojo.BoLocDTO;
import com.starter.InvestAndChill.pojo.ChungKhoanSoSanhChiSoDTO;
import com.starter.InvestAndChill.pojo.MinMaxDTO;
import com.starter.InvestAndChill.pojo.NganHangSoSanhChiSoDTO;
import com.starter.InvestAndChill.utils.FilterCaculationUtils;

@Repository
public class BoLocRepository {
	@PersistenceContext
	private EntityManager entityManager;

	public List<BoLocDTO> boLoc(Map<String, Object> payload) {
		String sql = FilterCaculationUtils.buildQueryBoLoc(payload);
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
		
		return list;
	}
	
	public List<NganHangSoSanhChiSoDTO> nganHangSoSanhChiSo(List<String> listNganHang) {
		String sql = FilterCaculationUtils.buildQuerySoSanhChiSoNganHang(listNganHang);
		Query query = entityManager.createNativeQuery(sql, "nganhang.sosanhchiso");
		List<NganHangSoSanhChiSoDTO> list = query.getResultList();
		
		return list;
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

}
