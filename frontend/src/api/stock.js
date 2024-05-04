import { backendServerAPI } from "../config/config";

export async function getStockAll() {
  const response = await fetch(`${backendServerAPI}/api/stock/all`, {
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

export async function getStokeDetail(id) {
  const response = await fetch(`${backendServerAPI}/api/stock/${id}`, {
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

export async function insertStoke(data) {
  const response = await fetch(`${backendServerAPI}/api/stock/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  }
  return;
}

export async function updateStoke(data) {
  const response = await fetch(`${backendServerAPI}/api/stock/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  }
  return;
}