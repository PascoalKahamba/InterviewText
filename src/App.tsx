import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import useFetch from "./Hooks/useFetch";

interface FetchProps {
  results: [
    {
      name: string;
      url: string;
    }
  ];
}
const App = () => {
  const { data, request } = useFetch<FetchProps>();
  const [moreItens, setMoreItens] = useState(10);

  useEffect(() => {
    request(`/pokemon?limit=${moreItens}&offset=0`);
  }, [request, moreItens]);
  if (data)
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home data={data?.results} setMoreItens={setMoreItens} />}
          />
        </Routes>
      </BrowserRouter>
    );
};

export default App;
