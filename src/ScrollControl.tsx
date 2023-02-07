import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { IconContext } from "react-icons/lib/esm/iconContext";

const ScrollControl = () => {
  const [scroll, SetScroll] = useState(0);
  let heightBody = document.body.scrollHeight;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      SetScroll(window.scrollY);
    });
  }, []);

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      {scroll > 50 ? (
        <FiArrowUp onClick={() => window.scrollTo(heightBody, 0)} />
      ) : null}
    </IconContext.Provider>
  );
};

export default ScrollControl;
