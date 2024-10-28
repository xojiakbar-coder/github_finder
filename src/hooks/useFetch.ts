import { useState, useEffect } from "react";
import axios from "axios";

export interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  reset: () => void;
}

export const useFetch = <T>(url: string | null): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError("Error fetching data");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const reset = () => {
    setData(null);
    setError(null);
  };

  return { data, loading, error, reset };
};
