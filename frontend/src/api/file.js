import { backendServerAPI } from "../config/config";

let headers = new Headers();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'multipart/form-data');
headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('Access-Control-Request-Method', 'POST');
headers.append('Origin', 'http://localhost:5173');

export async function getFileAll() {
  const response = await fetch(`${backendServerAPI}/api/file/all`, {
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
  const response = await fetch(`${backendServerAPI}/api/file/upload`, {
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