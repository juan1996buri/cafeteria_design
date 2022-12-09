import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../images/logo.png";
import { dataOptions } from "../consts/const";
import { MenuOutlined } from "@mui/icons-material";
import { Link, animateScroll as scroll } from "react-scroll";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [options, setOptions] = useState([]);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeSearchBar, setActiveSearchBar] = useState(false);
  const [activeColorNav, setActiveColorNav] = useState(false);
  const [activeCart, setActiveCart] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    setOptions(dataOptions);
  }, []);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setActiveColorNav(true);
    } else {
      setActiveColorNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`text-white  h-16 sm:h-24 ${
        activeColorNav ? "bg-zinc-800" : "bg-black"
      }  px-2 sm:px-4 md:px-12 lg:px-16 flex  fixed w-full justify-between items-center border-b-4 border-yellow-700 z-10`}>
      <Link to="Home" className="sm:h-16 h-12 cursor-pointer">
        <img src={logo} alt="" className="h-full  " />
      </Link>
      <div className="hidden md:flex md:gap-4 lg:gap-6 items-center">
        {options.map((item, index) => (
          <Link
            activeClass={"active" && "border-yellow-700 border-b-2 pb-1 "}
            to={item}
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            key={index}
            className={
              " border-yellow-500 hover:border-b-2 pb-1 cursor-pointer font-kalamCursive text-2xl "
            }>
            {item}
          </Link>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <button onClick={() => setActiveSearchBar((isActive) => !isActive)}>
          <SearchIcon />
        </button>
        <button
          type="button"
          onClick={() => setActiveCart((isActive) => !isActive)}>
          <ShoppingCartIcon />
        </button>
        <button
          type="button"
          onClick={() => setActiveMobileMenu((active) => !active)}
          className="flex md:hidden">
          <MenuOutlined />
        </button>
      </div>
      {activeSearchBar && (
        <div className="absolute z-20 sm:top-24  top-16 right-2">
          <SearchBar />
        </div>
      )}

      {activeCart && (
        <div className="fixed z-20   top-0 right-0 w-72 ">
          <Cart setActiveCart={setActiveCart} />
        </div>
      )}

      {activeMobileMenu && (
        <div className=" fixed top-0 left-0 bg-gray-800 y w-full h-screen z-30 ">
          <MobileMenu setActiveMobileMenu={setActiveMobileMenu} />
        </div>
      )}
    </section>
  );
};

export default Navbar;
