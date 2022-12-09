import React, { useEffect, useLayoutEffect, useState } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { dataMenus } from "../consts/const";
import { useInView } from "react-intersection-observer";

const Menu = () => {
  const { ref, inView } = useInView();
  const [container, setContainer] = useState({});
  const [itemAnimation, setItemAnimation] = useState({});

  useEffect(() => {
    if (inView) {
      setContainer({
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.4,
          },
        },
      });
      setItemAnimation({
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      });
    } else {
      setContainer({
        hidden: { opacity: 2 },
        show: {
          opacity: 0,
        },
      });
      setItemAnimation({
        hidden: { opacity: 1 },
        show: { opacity: 0 },
      });
    }
  }, [inView]);

  return (
    <div
      className="text-white flex flex-col items-center font-sansSerif "
      id="Menu"
      ref={ref}>
      <h1 className="py-5 font-bold text-xl">OUR MENU</h1>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 w-[80%] md:w-[90%] md:grid-cols-2 lg:grid-cols-3 lg:w-[80%] mx-auto gap-2 ">
        {dataMenus.map((menu) => (
          <motion.li
            variants={itemAnimation}
            key={menu.id}
            className="border flex items-center flex-col p-2 gap-4 h-96 justify-center hover:bg-white transition-all hover:text-black">
            <img
              src={menu?.image}
              alt=""
              className="w-52 h-52 sm:w-44 sm:h-44 md:w-32 md:h-32 hover:scale-105 transition-all"
            />
            <h2>{menu?.name}</h2>
            <button className="bg-yellow-500 py-2 px-4">Add To Cart</button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Menu;
