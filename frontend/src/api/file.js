export async function getFileAll() {
  const response = await fetch(`/api/file/all`, {
    method: 'POST',
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

export async function fileUpload(formData) {
  const response = await fetch(`/api/file/upload`, {
    mode: 'no-cors',
    method: 'POST',
    headers: headers,
    body: formData
  });
  if (response.ok) {
    return true;
  } else {
    throw new Error('File upload failed');
  }
}