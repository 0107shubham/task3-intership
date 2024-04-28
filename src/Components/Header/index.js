import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-around w-full">
      <div>
        <p>Juice</p>
      </div>
      <div className="flex ">
        <p className="text-green-800 mx-4">Advantages</p>
        <p className="text-green-800">Tastes</p>
        <p className="text-green-800">Delivery</p>
        <p className="text-green-800">Reviews</p>
        <p className="text-green-800">Abouts</p>
        <BsFillCartFill className="text-yellow-600" />
        <p>+1 (942) 459 45 923</p>
      </div>
    </div>
  );
};

export default Header;
