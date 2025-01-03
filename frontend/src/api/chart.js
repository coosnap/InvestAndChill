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
