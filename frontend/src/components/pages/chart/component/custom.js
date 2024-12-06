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
    left: { type: 'bil', piecewise: false },
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
    right: { type: 'bil', piecewise: false },
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
    left: { type: 'bil', piecewise: true },
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
    right: { type: 'bil', piecewise: false },
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
    left: { type: 'bil', piecewise: false },
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
    right: { type: 'bil', piecewise: false },
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
    right: { type: 'bil', piecewise: false },
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
