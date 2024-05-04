import { backendServerAPI } from "../config/config";

export async function signIn(data) {
  const authData = {
    username: data?.username,
    password: data?.password,
  };
  const response = await fetch(`${backendServerAPI}/api/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });
  if (response.ok) {
    const responseBody = await response.json();
    const infoSignIn = {
      token: responseBody.accessToken,
      id: responseBody.id,
      username: responseBody.username,
      email: responseBody.email,
      roles: responseBody.roles
    }
    return infoSignIn;
  }
  return;
}

export async function signUp(data) {
  const authData = {
    username: data.username,
    email: data.email,
    password: data.password,
    role: ["user"]
  };
  const response = await fetch(`${backendServerAPI}/api/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });
  if (response.ok) {
    return response;
  }
  return response.json();
}