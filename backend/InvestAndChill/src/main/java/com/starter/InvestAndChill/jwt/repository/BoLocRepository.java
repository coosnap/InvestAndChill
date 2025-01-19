package com.starter.InvestAndChill.jwt.repository;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.starter.InvestAndChill.pojo.BoLocDTO;
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
}
