import React, { useEffect, useState } from "react";
import { dataBlogs } from "../consts/const";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blogs = () => {
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
        show: { opacity: 1, y: 0, x: 0 },
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
        show: { opacity: 0, y: 50, x: -20 },
      });
    }
  }, [inView]);
  return (
    <div id="Blogs" className="text-white text-center font-sansSerif" ref={ref}>
      <h1 className="font-bold py-6 text-xl">OUR BLOGS</h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 w-[80%] md:w-[90%] md:grid-cols-2 lg:grid-cols-3 lg:w-[80%] mx-auto gap-2">
        {dataBlogs.map((item) => (
          <motion.div
            variants={itemAnimation}
            key={item.id}
            className="border flex flex-col gap-2 ">
            <div className=" w-full h-[25rem] overflow-hidden">
              <img
                src={item.image}
                alt=""
                className="object-cover h-full w-full hover:scale-105 transition-all"
              />
            </div>

            <h1>{item.name}</h1>
            <h3>{item.detail}</h3>
            <h3>{item.description}</h3>
            <button type="button" className="py-2 px-4 bg-yellow-600 m-2">
              Read More
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs;
