import axios from "axios";
import { useCallback, useState } from "react";

export interface GetProps {
  name: string;
  url: string;
}

const useFetch = () => {
  const [data, setData] = useState<GetProps[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string) => {
    let response;
    let json;
    try {
      setError(false);
      setLoading(true);
      response = await axios.get(url);
      json = await response.data;
      if (response.status !== 200) throw new Error(json.message);
    } catch (erro) {
      json = null;
    } finally {
      setLoading(false);
      setData(json.results);
      console.log(response);
      console.log(json);
      return { response, json };
    }
  }, []);
  return {
    data,
    error,
    request,
    loading,
  };
};

export default useFetch;
