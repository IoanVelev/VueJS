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

export async function getProductsByIds(ids) {
  if (!Array.isArray(ids))
    return;
  try {
    const promises = ids.map(id => axiosInstance.get(`/${ENDPOINT}/category/${id}`));
    const response = await Promise.allSettled(promises);
    return response
      .filter(entry => entry.status === 'fulfilled')
      .map(entry => entry.value);
  }
  catch (e) {
    console.error('An error occurred', e);
    return [];
  }
}
