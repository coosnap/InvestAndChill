import axiosInstance from './axiosInstance';

export async function getTypeDataChart(code) {
  const response = await axiosInstance.get(`/api/stock/type/${code}`);
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getDataChartNonFinancial(type, code, year, chart) {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/report/phitaichinh/${type}/${code}${
      year ? '?type=year' : ''
    }${year ? (chart ? `&chart=area` : '') : chart ? `?chart=area` : ''}`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getDataChartStock(type, code, year, chart) {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/report/chungkhoan/${type}/${code}${
      year ? '?type=year' : ''
    }${year ? (chart ? `&chart=area` : '') : chart ? `?chart=area` : ''}`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getDataChartStockCompare(data, code) {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/chungkhoan/sosanhchiso?chart=${code}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  if (response.status === 200) {
    const responseBody = await response.json();
    return responseBody;
  }
  return;
}

export async function getDataChartBank(type, code, year, chart) {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/report/nganhang/${type}/${code}${
      year ? '?type=year' : ''
    }${year ? (chart ? `&chart=area` : '') : chart ? `?chart=area` : ''}`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getDataChartBankCompare(data, code) {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/nganhang/sosanhchiso?chart=${code}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  if (response.status === 200) {
    const responseBody = await response.json();
    return responseBody;
  }
  return;
}

export async function getTitle(code) {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/stock/getTitle/${code}`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getIncreaseCapacity() {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/giaTangCongSuat`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getFollowPreSales() {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/theoDoiPreSales`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getOweALot() {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/noNhieuNhungSomChiTra`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getDepreciationHandling() {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/xuLyKhauHaoNang`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getExploitationBelowCapacity() {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/khaiThacDuoiCongSuat`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getListStoke() {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/chungkhoan/list`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getListBank() {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/nganhang/list`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getMinMaxValue() {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/getMinMax`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getFilterChart(data) {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/filter/boLoc`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    const responseBody = await response.json();
    return responseBody;
  }
  return;
}
