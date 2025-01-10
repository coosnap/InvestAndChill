import axiosInstance from './axiosInstance';

export async function getStockAll(type) {
  const response = await axiosInstance.get(`/api/stock/all${type ? '?type=' + type : ''}`);
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function getStokeDetail(id) {
  const response = await axiosInstance.get(`/api/stock/${id}`);
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function insertStoke({ data }) {
  const response = await axiosInstance.post('/api/stock/save', data);
  if (response.status === 201) {
    return response.data;
  }
  return;
}

export async function updateStoke({ data }) {
  const response = await axiosInstance.put(`/api/stock/${data.id}`, data);
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function deleteStock({ id }) {
  const response = await axiosInstance.delete(`/api/stock/${id}`);
  if (response.status === 204) {
    return true;
  }
  return;
}
