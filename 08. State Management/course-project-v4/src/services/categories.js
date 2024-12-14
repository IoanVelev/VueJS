import axiosInstance from '../config/axiosInstance';

const ENDPOINT = 'products/categories';

export async function getAllCategories() {
  try {
    const response = await axiosInstance.get(`/${ENDPOINT}`);

    return response.data;
  }
  catch (e) {
    console.error('An error occurred', e);
    return [];
  }
}
