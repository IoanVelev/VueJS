import axiosInstance from '../config/axiosInstance';

const ENDPOINT = 'products';

export async function getAllProducts() {
  try {
    const response = await axiosInstance.get(`/${ENDPOINT}`);

    return response.data;
  }
  catch (e) {
    console.error('An error occurred', e);
    return [];
  }
}
