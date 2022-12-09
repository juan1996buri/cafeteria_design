import { CloseOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { dataOptions } from "../consts/const";

const MobileMenu = ({ setActiveMobileMenu }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(dataOptions);
  }, []);

  const handleActiveMenu = () => {
    setActiveMobileMenu((active) => !active);
  };
  return (
    <div className="relative h-full flex flex-col justify-center items-center gap-6 ">
      {options.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index - 0.5 }}
          exit={{
            opacity: 0,
            y: 90,
            transition: {
              ease: "easeInOut",
              delay: 1,
            },
          }}>
          <Link
            activeClass={"active" && "border-yellow-700 border-b-2 pb-1"}
            onClick={handleActiveMenu}
            to={item}
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            className={
              "border-yellow-500 hover:text-yellow-200 hover:border-b-2 cursor-pointer uppercase font-kalamCursive  tracking-wider"
            }>
            {item}
          </Link>
        </motion.div>
      ))}
      <button
        type="button"
        onClick={handleActiveMenu}
        className="absolute top-0 right-0 m-6 rounded-full bg-gray-800 shadow-xl  border border-slate-700 ">
        <CloseOutlined />
      </button>
    </div>
  );
};

export default MobileMenu;
