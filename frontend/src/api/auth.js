import axiosInstance from './axiosInstance';

export async function signIn(data) {
  const authData = {
    username: data?.username,
    password: data?.password,
  };
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });
  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  }
  return;
}

export async function signUp(data) {
  const authData = {
    username: data.username,
    fullName: data.fullName || '',
    password: data.password,
    role: ['user'],
  };
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/api/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });
  if (response.ok) {
    return response.json();
  }
  return;
}

export async function refreshTokenAPI({ refreshToken }) {
  const response = await axiosInstance.post('/api/auth/refreshtoken', refreshToken);
  if (response.status === 200) {
    return response;
  }
  return;
}
