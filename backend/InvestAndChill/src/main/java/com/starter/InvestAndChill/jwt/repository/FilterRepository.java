package com.starter.InvestAndChill.jwt.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.starter.InvestAndChill.jwt.models.PTCReportQuy;
import com.starter.InvestAndChill.jwt.models.ReportKey;
import com.starter.InvestAndChill.pojo.FilterGiaTangCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterKhaiThacDuoiCongSuatDTO;
import com.starter.InvestAndChill.pojo.FilterNoNhieuSomChiTraDTO;
import com.starter.InvestAndChill.pojo.FilterPhiTaiChinhDTO;
import com.starter.InvestAndChill.pojo.FilterTheoDoiPreSalesDTO;
import com.starter.InvestAndChill.pojo.FilterXuLyKhauHaoNangDTO;

public interface FilterRepository extends JpaRepository<PTCReportQuy, ReportKey>{
	
	@Query(name = "filter.giaTangCongSuat", nativeQuery = true)
	List<FilterGiaTangCongSuatDTO> findGiaTangCongSuat(@Param("year") String year, @Param("quarter") String quater);
	
	@Query(name = "filter.theoDoiPreSales", nativeQuery = true)
	List<FilterTheoDoiPreSalesDTO> findTheoDoiPreSales(@Param("year") String year, @Param("quarter") String quater);
	
	@Query(name = "filter.noNhieuSomChiTra", nativeQuery = true)
	List<FilterNoNhieuSomChiTraDTO> findNoNhieuSomChiTra(@Param("year") String year, @Param("quarter") String quater);
	
	@Query(name = "filter.xuLyKhauHaoNang", nativeQuery = true)
	List<FilterXuLyKhauHaoNangDTO> findXuLyKhauHaoNang(@Param("year") String year, @Param("quarter") String quater);
	
	@Query(name = "filter.khaiThacDuoiCongSuat", nativeQuery = true)
	List<FilterKhaiThacDuoiCongSuatDTO> findKhaiThacDuoiCongSuat(@Param("yearm1") String yearm1, @Param("quarterm1") String quaterm1,
															@Param("yearm2") String yearm2, @Param("quarterm2") String quaterm2,
															@Param("yearm3") String yearm3, @Param("quarterm3") String quaterm3,
															@Param("yearm4") String yearm4, @Param("quarterm4") String quaterm4);
}
