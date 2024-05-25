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
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData
  });
  console.log('response', response)
  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  } else {
    throw new Error('File upload failed');
  }
}