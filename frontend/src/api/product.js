import axiosInstance from './axiosInstance';

export async function getProductAll() {
  const response = await axiosInstance.get('/api/product/all');
  if (response.status === 200) {
    return response.data;
  }
  return;
}

export async function updateProduct(id, data) {
  const response = await axiosInstance.put(`/api/product/${id}`, data);
  if (response.status === 200) {
    return response.data;
  }
  return;
}
