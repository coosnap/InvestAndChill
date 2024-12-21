export let customPerfPTC1 = {
  type: 'perf1',
  year: false,
  series: [
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
    {
      type: 'line',
      label: 'Biên lợi nhuận gộp',
      dataKey: 'bienLaiGop',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'Biên lợi nhuận ròng',
      dataKey: 'bienLaiRong',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false, showLineReference: true },
    right: { type: 'per', piecewise: false },
  },
};
export let customPerfPTC2 = {
  type: 'perf2',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Hoạt động kinh doanh',
      dataKey: 'loiNhuanCotLoi',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Hoạt động tài chính',
      dataKey: 'loiNhuanTaiChinh',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Khác',
      dataKey: 'thuNhapKhac',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Từ Công ty LDLK',
      dataKey: 'laiLoTuCongTyLienDoanh',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'bil', piecewise: false, showLineReference: true },
  },
};
export let customPerfPTC3 = {
  type: 'perf3',
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
    right: { type: 'per', piecewise: false },
  },
};
export let customPerfPTC4 = {
  type: 'perf4',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'EBIT TTM',
      dataKey: 'ebittrailing',
      yAxisId: 'leftAxis',
    },
    {
      type: 'bar',
      label: 'Lợi nhuận tài chính TTM',
      dataKey: 'netFinanceialTrailing',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'EBIT Margin TTM',
      dataKey: 'ebitmTrailing',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'Biên lợi nhuận ròng TTM',
      dataKey: 'nimgTrailing',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: true, showLineReference: true },
    right: { type: 'per', piecewise: false },
  },
};
export let customPerfPTC5 = {
  type: 'perf5',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Lợi nhuận ròng TTM',
      dataKey: 'nitrailing',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Lợi ích cổ đông thiểu số TTM',
      dataKey: 'minoritiesTrailing',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Lợi nhuận CTLDLK TTM',
      dataKey: 'associateTrailing',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'bil', piecewise: false, showLineReference: true },
  },
};
export let customPerfPTC6 = {
  type: 'perf6',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'EBITDA TTM',
      dataKey: 'ebitdatrailing',
      yAxisId: 'leftAxis',
    },
    {
      type: 'bar',
      label: 'EBIT TTM',
      dataKey: 'ebittrailing',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Lãi vay TTM',
      dataKey: 'interestExpenseTrailing',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false, showLineReference: true },
    right: { type: 'per', piecewise: false },
  },
};
export let customPerfPTC7 = {
  type: 'perf7',
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
      label: 'ROIC',
      dataKey: 'roic',
      curve: 'linear',
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
    left: { type: 'per', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customPerfPTC8 = {
  type: 'perf8',
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
    left: { type: 'per', piecewise: false },
    right: { type: 'time', piecewise: false },
  },
};

export let customBalPTC1 = {
  type: 'bal1',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Tiền',
      dataKey: 'tienDTNGDaoHan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Phải thu',
      dataKey: 'phaiThu',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Hàng tồn kho',
      dataKey: 'hangTonKhoRong',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Tài sản cố định',
      dataKey: 'taiSanCoDinh',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Tài sản dở dang',
      dataKey: 'taiSanDoDangDaiHan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Bất động sản đầu tư',
      dataKey: 'giaTriRongTaiSanDauTu',
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
    left: { type: 'bil', piecewise: false, showLineReference: true },
    right: { type: 'bil', piecewise: false },
  },
};
export let customBalPTC2 = {
  type: 'bal2',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Vốn góp của Chủ sở hữu',
      dataKey: 'vonGop',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'LNST chưa phân phối',
      dataKey: 'laiChuaPhanPhoi',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Vốn chủ sở hữu khác',
      dataKey: 'vcshKhac',
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
      label: 'Nợ vay',
      dataKey: 'noVay',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'bil', piecewise: false, showLineReference: true },
  },
};
export let customBalPTC3 = {
  type: 'bal3',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Nguyên giá tài sản cố định',
      dataKey: 'grossPPE',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'Khấu hao lũy kế',
      dataKey: 'dappe',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Chi phí xây dựng cơ bản dở dang',
      dataKey: 'xayDungCoBanDoDang',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'bil', piecewise: false, showLineReference: true },
  },
};
export let customBalPTC4 = {
  type: 'bal4',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Nợ ròng',
      dataKey: 'netDebt',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'Vốn lưu động',
      dataKey: 'workingcap',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'bil', piecewise: false, showLineReference: true },
  },
};
export let customBalPTC5 = {
  type: 'bal5',
  year: false,
  series: [
    {
      type: 'line',
      label: 'Vòng quay hàng tồn kho',
      dataKey: 'vongQuayHangTonKho',
      yAxisId: 'rightAxis',
      curve: 'linear',
    },
    {
      type: 'line',
      label: 'Vòng quay phải thu khách hàng',
      dataKey: 'vongQuayPhaiThu',
      yAxisId: 'rightAxis',
      curve: 'linear',
    },
    {
      type: 'bar',
      label: 'Vòng quay phải trả nhà cung cấp',
      dataKey: 'vongQuayPhaiTra',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'time', piecewise: false },
  },
};
export let customBalPTC6 = {
  type: 'bal6',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Vay ngắn hạn/VCSH',
      dataKey: 'vayNganHanVCSH',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Vay dài hạn/VCSH',
      dataKey: 'vayDaiHanVCSH',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'line',
      label: 'Vay/VCSH',
      dataKey: 'vayVCSH',
      yAxisId: 'leftAxis',
      curve: 'linear',
    },
    {
      type: 'line',
      label: 'Lãi suất vay',
      dataKey: 'laiVay',
      yAxisId: 'rightAxis',
      curve: 'linear',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};

export let customCFPTC1 = {
  type: 'cf1',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Hoạt động kinh doanh',
      dataKey: 'luuChuyenTienTeRongTuCacHoatDongSanXuatKinhDoanh',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Hoạt động đầu tư',
      dataKey: 'luuChuyenTienTeRongTuCacHoatDongDauTu',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Hoạt động tài chính',
      dataKey: 'luuChuyenTienTeTuHoatDongTaiChinh',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'line',
      label: 'Dòng tiền tự do',
      dataKey: 'fcf',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'bil', piecewise: false, showLineReference: true },
  },
};
export let customCFPTC2 = {
  type: 'cf2',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Net Income + DA - NWC',
      dataKey: 'netIncomeDANWC',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'Net Income + DA - NWC - CAPEX',
      dataKey: 'netIncomeDANWCCAPEX',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'Net Income + DA - NWC (tích lũy)',
      dataKey: 'netIncomeDANWCRolling',
      curve: 'linear',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Net Income + DA - NWC - CAPEX (tích lũy)',
      dataKey: 'netIncomeDANWCCAPEXRolling',
      curve: 'linear',
      yAxisId: 'leftAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'bil', piecewise: false, showLineReference: true },
  },
};
export let customCFPTC3 = {
  type: 'cf3',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Nợ vay',
      dataKey: 'noVay',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'Đầu tư tài chính ngắn hạn',
      dataKey: 'giaTriThuanDauTuNganHan',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'Tiền và tương đương tiền',
      dataKey: 'tienVaTuongDuongTien',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'HTM dài hạn',
      dataKey: 'dauTuNamGiuDenNgayDaoHan',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'bil', piecewise: false, showLineReference: true },
  },
};
export let customCFPTC4 = {
  type: 'cf4',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Người mua trả tiền trước ngắn hạn',
      dataKey: 'nguoiMuaTraTienTruoc',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Doanh thu chưa thực hiện ngắn hạn',
      dataKey: 'doanhThuChuaThucHienNganHan',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Người mua trả tiền trước dài hạn',
      dataKey: 'nguoiMuaTraTienTruocDaiHan',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Doanh thu chưa thực hiên dài hạn',
      dataKey: 'doanhThuChuaThucHien',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'bil', piecewise: false },
  },
};

export let customValPTC3 = {
  type: 'val3',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Doanh thu thuần TTM',
      dataKey: 'salettm',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Vốn hóa',
      dataKey: 'marketcap',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'bil', piecewise: false, dash: true },
  },
};
export let customValPTC5 = {
  type: 'val5',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Lợi nhuận ròng TTM',
      dataKey: 'nittm',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Vốn hóa',
      dataKey: 'marketcap',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'bil', piecewise: false },
  },
};
export let customValPTC8 = {
  type: 'val8',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Vốn chủ sở hữu',
      dataKey: 'capital',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Vốn hóa',
      dataKey: 'marketcap',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'bil', piecewise: false },
  },
};
