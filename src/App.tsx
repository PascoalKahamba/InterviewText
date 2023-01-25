import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import useFetch from "./Hooks/useFetch";

const App = () => {
  const { data, request } = useFetch();

  useEffect(() => {
    request("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
  }, [request]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
