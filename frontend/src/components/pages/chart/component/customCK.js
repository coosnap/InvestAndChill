export let customPerfCK1 = {
  type: 'perf1',
  year: false,
  series: [
    {
      type: 'line',
      label: 'Biên lãi gộp',
      dataKey: 'bienLaiGop',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'Biên lãi ròng',
      dataKey: 'bienLaiRong',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'Doanh thu thuần',
      dataKey: 'doanhSoThuan',
      yAxisId: 'leftAxis',
    },
    {
      type: 'bar',
      label: 'Lợi nhuận ròng',
      dataKey: 'loiNhuanCuaCoDongCongTyMe',
      yAxisId: 'leftAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customPerfCK2 = {
  type: 'perf2',
  year: false,
  series: [
    {
      type: 'line',
      label: 'ROE',
      dataKey: 'roe',
      curve: 'linear',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'ROA',
      dataKey: 'roa',
      curve: 'linear',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'ROIC',
      dataKey: 'roic',
      curve: 'linear',
      yAxisId: 'leftAxis',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: true },
    right: { type: 'per', piecewise: false },
  },
};
export let customPerfCK3 = {
  type: 'perf3',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Lợi nhuận hoạt động',
      dataKey: 'loiNhuanCotLoi',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Lợi nhuận tài chính',
      dataKey: 'loiNhuanTaiChinh',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Lợi nhuận khác',
      dataKey: 'thuNhapKhac',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: true },
    right: { type: 'per', piecewise: false },
  },
};
export let customPerfCK4 = {
  type: 'perf4',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Doanh thu TTM',
      dataKey: 'salesTrailing',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'line',
      label: 'Lợi nhuận gộp TTM',
      dataKey: 'gpmtrailing',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'Chi phí vận hành TTM',
      dataKey: 'sgamtrailing',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'EBIT Margin TTM',
      dataKey: 'ebitmTrailing',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: true },
  },
};
export let customPerfCK5 = {
  type: 'perf5',
  year: false,
  series: [
    {
      type: 'line',
      label: 'ROE',
      dataKey: 'roe',
      curve: 'linear',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Vòng quay tài sản',
      dataKey: 'assetTurnover',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'Đòn bẩy',
      dataKey: 'leverage',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'Biên lợi nhuận ròng TTM',
      dataKey: 'nimgTrailing',
      curve: 'linear',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: '(Nợ + VCSH)/VCSH',
      dataKey: 'dee',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: true },
    right: { type: 'time', piecewise: false },
  },
};

export let customBalCK1 = {
  type: 'bal1',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Vay/VCSH',
      dataKey: 'vayVCSH',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Lãi suất vay',
      dataKey: 'laiVay',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: true },
    right: { type: 'per', piecewise: false },
  },
};
export let customBalCK2 = {
  type: 'bal2',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Tiền',
      dataKey: 'tienVaTaiSanTuongDuongTien',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'FVTPL',
      dataKey: 'cacTaiSanTaiChinhThongQuaGhiNhanLaiLo',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'HTM',
      dataKey: 'cacKhoanDauTuNamGiuDenNgayDaoHan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Cho vay',
      dataKey: 'cacKhoanChoVay',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'AFS',
      dataKey: 'cacKhoanTaiChinhSanSangDeBan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Tài sản khác',
      dataKey: 'taiSanKhac',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customBalCK3 = {
  type: 'bal3',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Nợ vay',
      dataKey: 'noVay',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Nợ chiếm dụng',
      dataKey: 'noChiemDung',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Vốn góp của chủ sở hữu',
      dataKey: 'coPhieuPhoThongCoQuyenBieuQuyet',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'LNST chưa phân phối',
      dataKey: 'loiNhuanChuaPhanPhoi',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'VCSH khác',
      dataKey: 'vcshKhac',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'bil', piecewise: true },
  },
};
export let customBalCK4 = {
  type: 'bal4',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'FVTPL',
      dataKey: 'laiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Cho vay và phải thu',
      dataKey: 'laiTuCacKhoanChoVayVaPhaiThu',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Môi giới chứng khoán',
      dataKey: 'doanhThuNghiepVuMoiGioiChungKhoan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'HTM',
      dataKey: 'laiTuCacKhoanDauTuNamGiuDenNgayDaoHan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'AFS',
      dataKey: 'laiTuCacTaiSanTaiChinhSanSangDeBan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Bảo lãnh phát hành',
      dataKey: 'doanhThuNghiepVuBaoLanhPhatHanhChungKhoan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Khác',
      dataKey: 'tongDoanhThuKhac',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'bil', piecewise: true },
  },
};
export let customBalCK5 = {
  type: 'bal5',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'FVTPL',
      dataKey: 'gpfvtpl',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Cho vay và phải thu',
      dataKey: 'gpcvmargin',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Môi giới chứng khoán',
      dataKey: 'gpmoiGioi',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'HTM',
      dataKey: 'gphtm',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'AFS',
      dataKey: 'gpafs',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Bảo lãnh phát hành',
      dataKey: 'gpbaoLanhPhatHanh',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Khác',
      dataKey: 'gpkhac',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: true },
    right: { type: 'bil', piecewise: false },
  },
};
