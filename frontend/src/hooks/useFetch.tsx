import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useHttpGetByDate = (date: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataByDate = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/api/breakfast/date?date=${date}`);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [date]);

  useEffect(() => {
    fetchDataByDate();
  }, [fetchDataByDate]);

  return { data, loading, refetch: fetchDataByDate };
};

export const useHttpGet = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, setData, refetch: fetchData };
};

export const useHttpPost = () => {
  const [loading, setLoading] = useState(false);

  const postData = useCallback(async (url: string, body: unknown, onSuccess?: () => void) => {
    try {
      setLoading(true);
      await axios.post(url, body);
      setLoading(false);

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  return { postData, loading };
};
