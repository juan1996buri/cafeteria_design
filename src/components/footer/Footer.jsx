import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { dataOptions } from "../consts/const";

const Footer = () => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(dataOptions);
  }, []);

  const contacts = [
    <FacebookOutlined />,
    <Twitter />,
    <Instagram />,
    <LinkedIn />,
    <Pinterest />,
  ];
  return (
    <section className="text-white flex flex-col items-center gap-12 bg-zinc-900 mt-2 py-10 ">
      <div className="flex gap-5">
        {contacts.map((item, index) => (
          <span
            key={index}
            className="border p-1 rounded-full hover:bg-white hover:text-yellow-500 duration-100 ">
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap  gap-5 w-[90%] mx-auto justify-between ">
        {options.map((item, index) => (
          <Link
            to={item}
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            key={index}
            className="border py-2 px-4  hover:bg-yellow-500 duration-100 w-32 flex justify-center cursor-pointer ">
            {item}
          </Link>
        ))}
      </div>
      <div>
        <small className="text-xl">
          Created By <span className="text-yellow-700">Juan Buri</span> | All
          Rights Reserved
        </small>
      </div>
    </section>
  );
};

export default Footer;
