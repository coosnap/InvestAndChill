import axiosInstance from './axiosInstance';

export async function getProductAll() {
  const response = await axiosInstance.get('/api/product/all');
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

export async function updateProduct(id, data) {
  const response = await axiosInstance.put(`/api/product/${id}`, data);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

export const getPriceDetail = async (id: number, data: any) => {
  const response = await axiosInstance.get(`/api/product/${id}`, data);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}
