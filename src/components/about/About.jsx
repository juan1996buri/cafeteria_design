import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import aboutimg from "../../images/aboutimg.jpeg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView();
  const rightAnimation = useAnimation();
  const leftAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      rightAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0,
        },
      });
      leftAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0,
        },
      });
    }
    if (!inView) {
      rightAnimation.start({
        x: "-100vw",
      });
      leftAnimation.start({
        x: "100vw",
      });
    }
  }, [inView, rightAnimation, leftAnimation]);
  return (
    <section
      className=" flex flex-col items-center text-white "
      id="About"
      ref={ref}>
      <h2 className="text-2xl py-2">ABOUT US</h2>
      <div className="grid sm:grid-cols-1 w-[80%] md:grid-cols-2 md:w-[90%] px-auto overflow-x-hidden">
        <motion.div animate={rightAnimation} className="overflow-hidden">
          <img
            src={aboutimg}
            alt=""
            className="hover:scale-105 duration-100 transition-all"
          />
        </motion.div>
        <motion.div
          animate={leftAnimation}
          className="text-white flex flex-col justify-center gap-4 px-2 bg-zinc-900 font-sansSerif">
          <h2 className="font-bold tracking-wider">
            What Makes Our Coffee Special?
          </h2>
          <p className="">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
            Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae
            Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis
            Cupiditate. Ex, Vel?
          </p>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet
            Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur
            Obcaecati Sapiente?
          </p>
          <button className="bg-yellow-600  py-2 mx-10 mb-3">Learn More</button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
