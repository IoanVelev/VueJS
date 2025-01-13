import axiosInstance from '../config/axiosInstance';

const ENDPOINT = `auth`;

export async function loginUser({ username, password }, expiresInMins = 30) {
  try {
    const res = await axiosInstance.post(`/${ENDPOINT}/login`, {
      username,
      password,
      expiresInMins,
    });

    return res.data;
  }
  catch (e) {
    console.log('Oops', e);
    return null;
  }
}
