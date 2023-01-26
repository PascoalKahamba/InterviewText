import axios from "axios";
import { useCallback, useState } from "react";

export interface GetProps {
  name: string;
  url: string;
}

function useFetch() {
  const [data, setData] = useState<GetProps[]>([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string) => {
    let response;
    let json;
    try {
      setError(false);
      setLoading(true);
      const myUrl = axios.create({
        baseURL: "https://pokeapi.co/api/v2/pokemon?limit=300&offset=0",
      });
      response = await myUrl.get(url);
      json = response.data;
    } catch (erro) {
      json = null;
    } finally {
      setLoading(false);
      setData(json.results);
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
