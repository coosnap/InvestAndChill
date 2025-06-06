import axiosInstance from './axiosInstance';

export async function getArticleAll() {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/article/all`, {
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
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/article/${id}`, {
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
  const formData = {
    title: data.title,
    content: data.content,
    url: data.url,
    label: data.label,
  };
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API}/api/article/save?stockId=${data.stockId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }
  );
  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  }
  return;
}

export async function updateArticle(data) {
  let formData = {
    title: data.title,
    content: data.content,
    url: data.url,
    label: data.label,
  };
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/article/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  }
  return;
}

export async function deleteArticle(id) {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/article/${id}`, {
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

export async function articleLinkWithStock(id, stockId) {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API}/api/article/${id}/linkArticle/${stockId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.ok) {
    return true;
  }
  return false;
}

export async function searchArticle(label, stockId) {
  const response = await axiosInstance.get(
    `/api/article/search?labelId=${label}&stockId=${stockId}`
  );
  if (response.status === 200) {
    return response.data;
  }
  return;
}
