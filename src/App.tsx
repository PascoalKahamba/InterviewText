import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PageItem from "./PageItem";
import useFetch from "./Hooks/useFetch";

const App = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    request("https://pokeapi.co/api/v2/pokemon/2/");
  }, [request]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="pageItem" element={<PageItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
