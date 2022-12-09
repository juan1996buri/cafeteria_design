import React from "react";
import "./home.css";
const Home = () => {
  return (
    <section className="home min-h-screen" id="Home">
      <div className="pt-44 text-white md:w-7/12 h-full px-16">
        <h1 className="text-4xl font-kalamCursive font-semibold">
          FRESH COFFEE IN THE MORNING
        </h1>
        <p className="mt-5 font-sansSerif">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          repudiandae, doloribus id consectetur veniam accusamus libero eligendi
          quo minus consequatur tempore magnam fuga provident modi, inventore
          est ad ipsa enim.
        </p>
        <button
          type="button"
          className="bg-yellow-600 py-2 px-5 hover:scale-x-110 transition-all mt-5">
          Get yourn Now
        </button>
      </div>
    </section>
  );
};

export default Home;
