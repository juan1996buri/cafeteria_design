import React from "react";
import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import FloatingButton from "./components/floatingButton/FloatingButton";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Review from "./components/review/Review";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Blogs />
      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;
