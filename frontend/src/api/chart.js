import axiosInstance from './axiosInstance';

export async function getDataChart(type, code, year) {
  const response = await axiosInstance.get(
    `/api/report/phitaichinh/${type}/${code}${year ? '?type=year' : ''}`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}
