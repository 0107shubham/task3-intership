import React, { useState } from "react";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const sizeOptions = [
    { size: "250 ml" },
    { size: "500 ml" },
    { size: "1000 ml" },
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="w-full aspect-video bg-green-100  pl-1  pt-[2%]">
      <div className="w-[30%] relative flex flex-col justify-end aspect-[8/12] bg-white mt-16 shadow-xl rounded-lg">
        <div className="w-full absolute bottom-[10%] h-[110%] ">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full h-[80%]  mx-auto    mix-blend-multiply"
          />
        </div>
        <div className=" h-[32%] bg-purple-300 ">
          <h3 className="text-[8px] md:text-base lg:text-lg  ">Bottle Name</h3>

          <div className=" w-full flex justify-around items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] px-[1px] py-[1px] md:px-2 md:py-[3px] border-[1px] sm:border-2 border-[#F4A124]   text-center   text-[6px]   sm:text-[7px] md:text-[9px] lg:text-[14px] xl:text-[18px] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[12px] text-center sm:text-xs w-[22%] md:text-[10px]  lg:text-2xl ">
              $25
            </p>
          </div>

          <div className="flex flex-row justify-around items-center w-full  mt-[1px]">
            <div className="border-[1px]  sm:border-2  w-[35%]  border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[10px]  sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-2xl text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[10px]   sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-2xl text-black   ">
                {quantity}
              </span>
              <button
                className="text-[10px]   sm:text-[16px] md:text-[22px] lg:text-[26px] xl:text-2xl text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[45%] rounded-full text-white text-[6px] lg:text-2xl px-[6px] py-[2px]  sm:px-2   mt-1  md:px-4 md:py-2 md:mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
