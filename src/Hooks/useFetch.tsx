import axios from "axios";
import { useCallback, useState } from "react";

export interface GetProps {
  name: string;
  url: string;
}

function useFetch<T>() {
  const [data, setData] = useState<T | null>(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string) => {
    let response;
    let json;
    try {
      setError(false);
      setLoading(true);
      const myUrl = axios.create({
        baseURL: "https://pokeapi.co/api/v2",
      });
      response = await myUrl.get<T>(url);
      json = response.data;
    } catch (erro) {
      json = null;
    } finally {
      setLoading(false);
      if (json) setData(json);
      console.log(response);
      console.log(json);
    }
  }, []);
  return {
    data,
    error,
    request,
    loading,
  };
}

export default useFetch;
