import { backendServerAPI } from "../config/config";

export async function getProductAll() {
  const response = await fetch(`${backendServerAPI}/api/product/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  }
  return;
}