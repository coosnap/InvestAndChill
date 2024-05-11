import { backendServerAPI } from "../config/config";

export async function getUserDetail(id) {
  const response = await fetch(`${backendServerAPI}/api/auth/${id}`, {
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

export async function updateUser(data) {
  const response = await fetch(`${backendServerAPI}/api/auth/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    return true;
  }
  return false;
}