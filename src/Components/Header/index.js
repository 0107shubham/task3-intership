import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-around absolute w-full">
      <div>
        <p className="text-green-800  text-[2.5vw]">Juice</p>
      </div>
      <div className="flex text-[1.6vw]">
        <p className="text-black mx-1 sm:mx-2 md:mx-4">Advantages</p>
        <p className="text-black  mx-1 sm:mx-2 md:mx-4">Tastes</p>
        <p className="text-black mx-1 sm:mx-2 md:mx-4">Delivery</p>
        <p className="text-black mx-1 sm:mx-2 md:mx-4">Reviews</p>
        <p className="text-black mx-1 sm:mx-2 md:mx-4">Abouts</p>
        <BsFillCartFill className="text-yellow-600  mx-1 sm:mx-2 md:mx-4" />
        <p className="text-black  mx-1 sm:mx-2 md:mx-4">+1 (942) 459 45 923</p>
      </div>
    </div>
  );
};

export default Header;
