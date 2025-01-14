package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.starter.InvestAndChill.jwt.models.PTCReportQuy;
import com.starter.InvestAndChill.jwt.models.ReportKey;
import com.starter.InvestAndChill.pojo.FilterGiaTangCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterNoNhieuSomChiTraDTO;
import com.starter.InvestAndChill.pojo.FilterPhiTaiChinhDTO;
import com.starter.InvestAndChill.pojo.FilterTheoDoiPreSalesDTO;
import com.starter.InvestAndChill.pojo.FilterXuLyKhauHaoNangDTO;

public interface FilterRepository extends JpaRepository<PTCReportQuy, ReportKey>{
	
	@Query(name = "filter.giaTangCongSuat", nativeQuery = true)
	List<FilterGiaTangCongSuatDTO> findGiaTangCongSuat();
	
	@Query(name = "filter.theoDoiPreSales", nativeQuery = true)
	List<FilterTheoDoiPreSalesDTO> findTheoDoiPreSales();
	
	@Query(name = "filter.noNhieuSomChiTra", nativeQuery = true)
	List<FilterNoNhieuSomChiTraDTO> findNoNhieuSomChiTra();
	
	@Query(name = "filter.xuLyKhauHaoNang", nativeQuery = true)
	List<FilterXuLyKhauHaoNangDTO> findXuLyKhauHaoNang();
}
