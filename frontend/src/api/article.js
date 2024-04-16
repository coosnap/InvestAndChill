import { backendServerAPI } from "../config/config";

export async function getArticleAll() {
  const response = await fetch(`${backendServerAPI}/api/article/all`, {
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

export async function getArticleDetail(id) {
  const response = await fetch(`${backendServerAPI}/api/article/${id}`, {
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