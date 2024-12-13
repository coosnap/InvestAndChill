export let customNHPerf1 = {
  type: 'perf1',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Tổng thu nhập hoạt động',
      dataKey: 'tongThuNhapHoatDong',
      yAxisId: 'leftAxis',
    },
    {
      type: 'bar',
      label: 'Lợi nhuận ròng',
      dataKey: 'coDongCuaCongTyMe',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Biên lãi ròng',
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
export let customNHPerf2 = {
  type: 'perf2',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Chi phí hoạt động/TTN HĐ',
      dataKey: 'cphoatDongTTNHD',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Chi phí dự phòng/TTN HĐ',
      dataKey: 'cpduPhongTTNHD',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Tổng chi phí/TTN HĐ',
      dataKey: 'tongCPTTNHD',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: true },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHPerf3 = {
  type: 'perf3',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Thu nhập từ lãi',
      dataKey: 'thuNhapLaiThuan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Thu nhập từ dịch vụ',
      dataKey: 'laiLoTHuanTuHoatDongDichVu',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Thu nhập khác',
      dataKey: 'laiKhac',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHPerf4 = {
  type: 'perf4',
  year: false,
  series: [
    {
      type: 'line',
      label: 'ROE',
      dataKey: 'roe',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'ROA',
      dataKey: 'roa',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};

export let customNHBal1 = {
  type: 'bal1',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Tiền gửi và cho vay TCTD khác',
      dataKey: 'tgvaChoVayCacTCTDKhacTruocDuPhong',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Cho vay khác hàng',
      dataKey: 'choVayKhachHang',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Chứng khoán',
      dataKey: 'chungKhoanTruocDP',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Tài sản khác',
      dataKey: 'cacTaiSanKhac',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHBal2 = {
  type: 'bal2',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Tiền gửi và vay TCTD khác',
      dataKey: 'tienGuiVaVayCacToChucTinDung',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Tiền gửi của khách hàng',
      dataKey: 'tienGuiCuaKhachHang',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Giấy tờ có giá',
      dataKey: 'phatHanhGiayToCoGia',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Vốn chủ sở hữu',
      dataKey: 'vonChuSoHuu',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Nợ phải trả khác',
      dataKey: 'noPhaiTraKhac',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'bil', piecewise: false },
  },
};
export let customNHBal3 = {
  type: 'bal3',
  year: false,
  series: [
    {
      type: 'line',
      label: 'Tăng trưởng tính dụng so với đầu năm',
      dataKey: 'tinDungSVDauNam',
      curve: 'linear',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Tăng trưởng huy động vốn so với đầu năm',
      dataKey: 'huyDongSVDauNam',
      curve: 'linear',
      yAxisId: 'leftAxis',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHBal4 = {
  type: 'bal4',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'COF',
      dataKey: 'chiPhiHuyDong',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'NIM',
      dataKey: 'bienLaiThuan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'line',
      label: 'Tỉ lệ CASA',
      dataKey: 'tyLeCasa',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'per', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHBal5 = {
  type: 'bal5',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Tài sản có khác',
      dataKey: 'taiSanCoKhac',
      yAxisId: 'leftAxis',
    },
    {
      type: 'bar',
      label: 'Lãi, phí phải thu',
      dataKey: 'cacKhoanLaiPhiPhaiThu',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'TS có khác/TTS',
      dataKey: 'tscoKhacTongTS',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'LPPT/CVKH',
      dataKey: 'laiPhiPhaiThuChoVayKhachHang',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHBal6 = {
  type: 'bal6',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Nợ nhóm 2',
      dataKey: 'noCanLuuY',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Nợ xấu',
      dataKey: 'noXau',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'line',
      label: 'Tỉ lê nợ nhóm 2',
      dataKey: 'noN2ChoVayKhachHang',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
    {
      type: 'line',
      label: 'Tỉ lê nợ xấu',
      dataKey: 'tyLeNoXau',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHBal7 = {
  type: 'bal7',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Nợ xấu',
      dataKey: 'noXau',
      yAxisId: 'leftAxis',
    },
    {
      type: 'bar',
      label: 'Dự phòng rủi ro',
      dataKey: 'duPhongRuiRoChoVayKhachHang',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Tỉ lệ dự phòng bảo phủ nợ xấu',
      dataKey: 'duPhongBaoNoXau',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: true },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHBal8 = {
  type: 'bal8',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Vốn chủ sở hữu',
      dataKey: 'vonChuSoHuu',
      yAxisId: 'leftAxis',
    },
    {
      type: 'line',
      label: 'Tỉ lệ nợ quá hạn/VCSH',
      dataKey: 'noN25VCSH',
      curve: 'linear',
      yAxisId: 'rightAxis',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHBal9 = {
  type: 'bal9',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Cho vay ngắn hạn',
      dataKey: 'choVayNganHan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Cho vay trung hạn',
      dataKey: 'choVayTrungHan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Cho vay dài hạn',
      dataKey: 'choVayDaiHan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHBal10 = {
  type: 'bal10',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Doanh nghiệp nhà nước',
      dataKey: 'doanhNghiepNhaNuoc',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Công ty TNHH và cổ phần',
      dataKey: 'congTyTNHHVaCoPhan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Doanh nghiệp nước ngoài',
      dataKey: 'doanhNghiepNuocNgoai',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Hợp tác xã và công ty tư nhân',
      dataKey: 'hopTacXaVaCongTyTuNhan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Cá nhân',
      dataKey: 'caNhan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Khác',
      dataKey: 'khac',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHBal11 = {
  type: 'bal11',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Tiền gửi không kỳ hạn',
      dataKey: 'tienGuiKhongKyHan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Tiền gửi có kỳ hạn',
      dataKey: 'tienGuiCoKyHan',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Tiền gửi tiết kiệm',
      dataKey: 'tienGuiTietKiem',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Tiền gửi ký quỹ',
      dataKey: 'tienGuiKyQuy',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Tiền gửi cho những mục đích riêng biệt',
      dataKey: 'tienGuiChoNhungMucDichRiengBiet',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
export let customNHBal12 = {
  type: 'bal12',
  year: false,
  series: [
    {
      type: 'bar',
      label: 'Doanh nghiệp nhà nước',
      dataKey: 'doanhNghiepNhaNuocTG',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Doanh nghiệp tư nhân',
      dataKey: 'doanhNghiepTuNhanTG',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Doanh nghiệp nước ngoài',
      dataKey: 'doanhNghiepNuocNgoaiTG',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Cá nhân',
      dataKey: 'caNhanTG',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'Khác',
      dataKey: 'khacTG',
      yAxisId: 'leftAxis',
      stack: 'stack',
    },
  ],
  yAxis: {
    left: { type: 'bil', piecewise: false },
    right: { type: 'per', piecewise: false },
  },
};
