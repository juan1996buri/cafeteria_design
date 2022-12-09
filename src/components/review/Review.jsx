import React, { useEffect, useState } from "react";
import { dataReviews } from "../consts/const";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Review = () => {
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
    <section
      className="text-white text-center font-sansSerif"
      id="Review"
      ref={ref}>
      <h1 className="py-6 text-xl font-bold">CUSTOMER'S REVIEW</h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 w-[80%] md:w-[90%] md:grid-cols-2 lg:grid-cols-3 lg:w-[80%] mx-auto gap-2">
        {dataReviews.map((item) => (
          <motion.div
            variants={itemAnimation}
            key={item.id}
            className="border flex flex-col justify-center items-center  py-10 gap-5 ">
            <img src={item.decoration} alt="" />
            <p className="px-2 font-sansSerif">{item.description}</p>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Review;
