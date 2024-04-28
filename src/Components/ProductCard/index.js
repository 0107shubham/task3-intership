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
    <div className="w-full aspect-video bg-gray-100  pb-10">
      <div className="w-[30%] aspect-[8/10] bg-white  mt-16 shadow-xl rounded-lg">
        <div className=" h-[70%]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className="relative bottom-14 h-[100%] bg-white mx-auto w-100% aspect-video  mix-blend-multiply"
          />
        </div>

        <h3 className="text-sm md:text-base lg:text-lg font-bold mt-2font-bold mt-2">
          Bottle Name
        </h3>

        <div className="mt-2  flex justify-around items-center">
          {sizeOptions.map((option, index) => (
            <button
              key={index}
              className="rounded-md border-2 border-[#F4A124]  flex justify-center items-center  px-[6%] py-[2%]  text-[2%]   sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-[18px] text-black"
            >
              {option.size}
            </button>
          ))}{" "}
          <p className=" text-xs md:text-sm lg:text-base ">Price: $25</p>
        </div>

        <div className="flex flex-row justify-around items-center  mt-2">
          <div className="border-2 border-[#F4A124] px-4 md:px-10 flex justify-around items-center rounded-full ">
            <button
              className=" text-[10px]  sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-[18px] text-black "
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="text-[10px]   sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-[18px] text-black   ">
              {quantity}
            </span>
            <button
              className="text-[10px]   sm:text-[16px] md:text-[22px] lg:text-[26px] xl:text-[32px] text-black  "
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <button className="bg-[#F4A124] rounded-full text-white text-[8px] px-2   mt-1  md:px-4 md:py-2 md:mt-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
