export async function getStockAll() {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/stock/all`, {
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
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/stock/${id}`, {
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
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/stock/save`, {
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
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/stock/${data.id}`, {
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

export async function deleteStock(id) {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/stock/${id}`, {
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