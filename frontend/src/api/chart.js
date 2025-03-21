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

export async function getIncreaseCapacity(condition, str, patternFilter) {
  let marketcapStr =
    patternFilter[0] &&
    patternFilter[1] &&
    `&marketcapmin=${patternFilter[0]}&marketcapmax=${patternFilter[1]}`;
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/giaTangCongSuat${
      condition
        ? condition.year && condition.quarter
          ? '?year=' + condition.year.$y + '&quarter=' + condition.quarter
          : condition.year && !condition.quarter
          ? '?year=' + condition.year.$y
          : '?quarter=' + condition.quarter
        : ''
    }${str}${marketcapStr || ''}`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getFollowPreSales(condition, str, patternFilter) {
  let marketcapStr =
    patternFilter[0] &&
    patternFilter[1] &&
    `&marketcapmin=${patternFilter[0]}&marketcapmax=${patternFilter[1]}`;
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/theoDoiPreSales${
      condition
        ? condition.year && condition.quarter
          ? '?year=' + condition.year.$y + '&quarter=' + condition.quarter
          : condition.year && !condition.quarter
          ? '?year=' + condition.year.$y
          : '?quarter=' + condition.quarter
        : ''
    }${str}${marketcapStr || ''}`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getOweALot(condition, str, patternFilter) {
  let marketcapStr =
    patternFilter[0] &&
    patternFilter[1] &&
    `&marketcapmin=${patternFilter[0]}&marketcapmax=${patternFilter[1]}`;
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/noNhieuNhungSomChiTra${
      condition
        ? condition.year && condition.quarter
          ? '?year=' + condition.year.$y + '&quarter=' + condition.quarter
          : condition.year && !condition.quarter
          ? '?year=' + condition.year.$y
          : '?quarter=' + condition.quarter
        : ''
    }${str}${marketcapStr || ''}`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getDepreciationHandling(condition, str, patternFilter) {
  let marketcapStr =
    patternFilter[0] &&
    patternFilter[1] &&
    `&marketcapmin=${patternFilter[0]}&marketcapmax=${patternFilter[1]}`;
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/xuLyKhauHaoNang${
      condition
        ? condition.year && condition.quarter
          ? '?year=' + condition.year.$y + '&quarter=' + condition.quarter
          : condition.year && !condition.quarter
          ? '?year=' + condition.year.$y
          : '?quarter=' + condition.quarter
        : ''
    }${str}${marketcapStr || ''}`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getExploitationBelowCapacity(condition, str, patternFilter) {
  let marketcapStr =
    patternFilter[0] &&
    patternFilter[1] &&
    `&marketcapmin=${patternFilter[0]}&marketcapmax=${patternFilter[1]}`;
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/khaiThacDuoiCongSuat${
      condition
        ? condition.year && condition.quarter
          ? '?year=' + condition.year.$y + '&quarter=' + condition.quarter
          : condition.year && !condition.quarter
          ? '?year=' + condition.year.$y
          : '?quarter=' + condition.quarter
        : ''
    }${str}${marketcapStr || ''}`
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
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API}/api/filter/boLoc?sort=Stock_code,asc`,
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
