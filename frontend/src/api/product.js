export async function getProductAll() {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/product/all`, {
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

export async function updateProduct(id, data) {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/product/${id}`, {
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