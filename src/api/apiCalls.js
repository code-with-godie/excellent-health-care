import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1/excellent-health`,
});

export const getData = async (url, payload, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const res = await api.get(url, payload, config);
  return res.data;
};
export const postData = async (url, payload, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const res = await api.post(url, payload, config);
  return res.data;
};
export const updateData = async (url, payload, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const res = await api.patch(url, payload, config);
  return res.data;
};
export const deleteData = async (url, payload, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const res = await api.delete(url, config);
  return res.data;
};
