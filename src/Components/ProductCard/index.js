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
    <div className="w-full flex flex-wrap justify-around aspect-auto bg-gray-200 pb-[5vw] ">
      <div className="w-[28%]  flex flex-col  px-[1vw]  aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[5vw]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[3vw]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[2vw] font-bold">Bottle Name</h3>

          <div className=" w-full flex justify-between  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center  text-[1.5vw] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[2vw] font-semibold text-center  ">$25</p>
          </div>

          <div className="flex w-full flex-row justify-between items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[2vw] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[2vw] text-black   ">{quantity}</span>
              <button
                className="text-[2vw] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[1.5vw]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%]  flex flex-col  px-[1vw]  aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[5vw]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[3vw]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[2vw] font-bold">Bottle Name</h3>

          <div className=" w-full flex justify-between  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center  text-[1.5vw] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[2vw] font-semibold text-center  ">$25</p>
          </div>

          <div className="flex w-full flex-row justify-between items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[2vw] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[2vw] text-black   ">{quantity}</span>
              <button
                className="text-[2vw] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[1.5vw]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%]  flex flex-col  px-[1vw]  aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[5vw]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[3vw]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[2vw] font-bold">Bottle Name</h3>

          <div className=" w-full flex justify-between  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center  text-[1.5vw] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[2vw] font-semibold text-center  ">$25</p>
          </div>

          <div className="flex w-full flex-row justify-between items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[2vw] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[2vw] text-black   ">{quantity}</span>
              <button
                className="text-[2vw] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[1.5vw]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%]  flex flex-col  px-[1vw]  aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[5vw]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[3vw]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[2vw] font-bold">Bottle Name</h3>

          <div className=" w-full flex justify-between  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center  text-[1.5vw] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[2vw] font-semibold text-center  ">$25</p>
          </div>

          <div className="flex w-full flex-row justify-between items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[2vw] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[2vw] text-black   ">{quantity}</span>
              <button
                className="text-[2vw] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[1.5vw]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%]  flex flex-col  px-[1vw]  aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[5vw]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[3vw]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[2vw] font-bold">Bottle Name</h3>

          <div className=" w-full flex justify-between  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center  text-[1.5vw] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[2vw] font-semibold text-center  ">$25</p>
          </div>

          <div className="flex w-full flex-row justify-between items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[2vw] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[2vw] text-black   ">{quantity}</span>
              <button
                className="text-[2vw] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[1.5vw]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%]  flex flex-col  px-[1vw]  aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[5vw]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[3vw]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[2vw] font-bold">Bottle Name</h3>

          <div className=" w-full flex justify-between  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center  text-[1.5vw] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[2vw] font-semibold text-center  ">$25</p>
          </div>

          <div className="flex w-full flex-row justify-between items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[2vw] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[2vw] text-black   ">{quantity}</span>
              <button
                className="text-[2vw] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[1.5vw]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
