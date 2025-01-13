package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.starter.InvestAndChill.jwt.models.PTCReportQuy;
import com.starter.InvestAndChill.jwt.models.ReportKey;
import com.starter.InvestAndChill.pojo.FilterPhiTaiChinhDTO;

public interface FilterRepository extends JpaRepository<PTCReportQuy, ReportKey>{
	
	@Query(name = "filter.giaTangCongSuat", nativeQuery = true)
	List<FilterPhiTaiChinhDTO> findGiaTangCongSuat();
}
