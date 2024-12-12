import axiosInstance from '../config/axiosInstance';

const ENDPOINT = 'products';

export async function getAllProducts() {
  try {
    const response = await axiosInstance.get(`/${ENDPOINT}`);

    return response.data.products;
  }
  catch (e) {
    console.error('An error occurred', e);
    return [];
  }
}

export async function getProductsByCategory(selectedCategory) {
  try {
    const response = await axiosInstance.get(`/${ENDPOINT}/category/${selectedCategory}`);

    return response.data.products;
  }
  catch (e) {
    console.error('An error occurred', e);
    return [];
  }
}
