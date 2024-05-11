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


export async function insertArticle(data) {
  const response = await fetch(`${backendServerAPI}/api/article/save`, {
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

export async function updateArticle(data) {
  const response = await fetch(`${backendServerAPI}/api/article/${data.id}`, {
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

export async function deleteArticle(id) {
  const response = await fetch(`${backendServerAPI}/api/article/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return true;
  }
  return false;
}