import React, { useEffect, useState } from "react";
import { dataProducts } from "../consts/const";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const Products = () => {
  const options = [
    <ShoppingCartIcon />,
    <FavoriteBorderIcon />,
    <VisibilityIcon />,
  ];

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
        show: { opacity: 0, y: 50, x: 20 },
      });
    }
  }, [inView]);

  return (
    <div
      className="text-white flex flex-col items-center"
      id="Products"
      ref={ref}>
      <h1 className="py-6 text-xl">OUR PRODUCTS</h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 w-[80%] md:w-[90%] md:grid-cols-2 lg:grid-cols-3 lg:w-[80%] mx-auto gap-2">
        {dataProducts.map((product) => (
          <motion.div
            variants={itemAnimation}
            key={product.id}
            className="border flex items-center flex-col p-2 gap-4 h-96 justify-center hover:bg-white transition-all hover:text-black">
            <div className="flex gap-2 pb-2">
              {options.map((item, index) => (
                <div className="border p-1" key={index}>
                  {item}
                </div>
              ))}
            </div>
            <img src={product.image} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
