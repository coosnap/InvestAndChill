import { backendServerAPI } from "../config/config";

export async function getQuestionAll() {
  const response = await fetch(`${backendServerAPI}/api/question/all`, {
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
  const response = await fetch(`${backendServerAPI}/api/question/${id}`, {
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