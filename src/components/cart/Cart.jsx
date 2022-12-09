import React from "react";
import { dataCart } from "../consts/const";

const Cart = ({ setActiveCart }) => {
  return (
    <div className="flex  bg-zinc-800 h-screen overflow-auto  pt-3  pb-10 flex-col  ">
      <button
        onClick={() => setActiveCart((active) => !active)}
        className="absolute top-0  left-0  bg-slate-900 rounded-full h-6 w-6 flex justify-center items-center border border-zinc-600 shadow-xl">
        x
      </button>
      {dataCart.map((item) => (
        <div
          className="flex p-2  justify-between hover:bg-slate-600"
          key={item.id}>
          <div className="flex gap-2">
            <img src={item.image} alt="" className="h-10" />
            <span className="">
              <h2 className="">{item.name}</h2>
              <span>${item.price}</span>
            </span>
          </div>
          <div className=" rounded-full h-6 w-6 flex justify-center items-center ">
            x
          </div>
        </div>
      ))}
      <button className="absolute  bottom-0 w-full h-10   bg-yellow-600   ">
        checkout now
      </button>
    </div>
  );
};

export default Cart;
