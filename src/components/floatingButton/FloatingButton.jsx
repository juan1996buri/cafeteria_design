import { ArrowUpward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const FloatingButton = () => {
  const [activeFloat, setActiveFloat] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setActiveFloat(true);
    } else {
      setActiveFloat(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      return window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Link
      to={"Home"}
      spy={true}
      smooth={true}
      offset={-95}
      duration={500}
      className={` ${
        activeFloat ? "" : "hidden"
      } fixed z-auto text-yellow-600 bottom-0 right-1 m-2 rounded-full p-1 bg-white cursor-pointer `}>
      <ArrowUpward />
    </Link>
  );
};

export default FloatingButton;
