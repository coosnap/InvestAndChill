export async function getQuestionAll() {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/question/all`, {
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

export async function getQuestionDetail(id) {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/question/${id}`, {
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

export async function insertQuestion(data) {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/question/save`, {
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

export async function updateQuestion(data) {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/question/${data.id}`, {
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

export async function deleteQuestion(id) {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/question/${id}`, {
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