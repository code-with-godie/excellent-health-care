import { useEffect, useState } from 'react';
import { useAPPContext } from '../context/AppContext';
import axios from 'axios';
export const useFetch = url => {
  const { token } = useAPPContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1/excellent-health`,
  });
  useEffect(() => {
    getData();
  }, [url]);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await api.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) {
        setData(res.data);
      } else {
        console.log(res);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error };
};
