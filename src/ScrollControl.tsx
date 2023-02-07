import { useState, useEffect } from "react";
import useFetch from "./Hooks/useFetch";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { IconContext } from "react-icons/lib/esm/iconContext";

const ScrollControl = () => {
  const [scroll, SetScroll] = useState(0);
  let heightBody = document.body.scrollHeight;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      //   console.log("body ", heightBody);

      SetScroll(+window.scrollY);
    });
  }, []);
  //   console.log(document.body.scrollHeight);
  console.log(heightBody);
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      {scroll > 50 ? (
        <FiArrowUp onClick={() => window.scrollTo(heightBody, 0)} />
      ) : null}
    </IconContext.Provider>
  );
};

export default ScrollControl;
