import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import useFetch from "./Hooks/useFetch";

const App = () => {
  const { data, request } = useFetch();
  const [moreItens, setMoreItens] = useState(10);

  useEffect(() => {
    request(`https://pokeapi.co/api/v2/pokemon?limit=${moreItens}&offset=0`);
  }, [request, moreItens]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home data={data} setMoreItens={setMoreItens} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
