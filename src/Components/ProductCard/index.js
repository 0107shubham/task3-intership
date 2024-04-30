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
    <div className="w-full flex flex-wrap justify-around aspect-auto bg-gray-200  pl-[2%]  ">
      <div className="w-[28%]  flex flex-col mx-[2px] sm:mx-[2%]   aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[20%]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[15%]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[8px] md:text-base lg:text-2xl  ">Bottle Name</h3>

          <div className=" w-full flex justify-around  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center   text-[6px] sm:text-[7px] md:text-[9px] lg:text-[14px] xl:text-[18px] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[10px] text-center sm:text-xs w-[20%] md:text-[10px]  lg:text-2xl ">
              $25
            </p>
          </div>

          <div className="flex w-full flex-row justify-around items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[6px] sm:text-[10px] md:text-[12px] lg:text-[14px] xg:text-2xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%] flex flex-col   mx-[2px] sm:mx-[2%]   aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[20%]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[15%]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[8px] md:text-base lg:text-2xl  ">Bottle Name</h3>

          <div className=" w-full flex justify-around  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center   text-[6px] sm:text-[7px] md:text-[9px] lg:text-[14px] xl:text-[18px] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[10px] text-center sm:text-xs w-[20%] md:text-[10px]  lg:text-2xl ">
              $25
            </p>
          </div>

          <div className="flex w-full flex-row justify-around items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[6px] sm:text-[10px] md:text-[12px] lg:text-[14px] xg:text-2xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%] flex flex-col   mx-[2px] sm:mx-[2%]  aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[20%]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[15%]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[8px] md:text-base lg:text-2xl  ">Bottle Name</h3>

          <div className=" w-full flex justify-around  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center   text-[6px] sm:text-[7px] md:text-[9px] lg:text-[14px] xl:text-[18px] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[10px] text-center sm:text-xs w-[20%] md:text-[10px]  lg:text-2xl ">
              $25
            </p>
          </div>

          <div className="flex w-full flex-row justify-around items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[6px] sm:text-[10px] md:text-[12px] lg:text-[14px] xg:text-2xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%] flex flex-col   mx-[2px] sm:mx-[2%]   aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[20%]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[15%]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[8px] md:text-base lg:text-2xl  ">Bottle Name</h3>

          <div className=" w-full flex justify-around  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center   text-[6px] sm:text-[7px] md:text-[9px] lg:text-[14px] xl:text-[18px] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[10px] text-center sm:text-xs w-[20%] md:text-[10px]  lg:text-2xl ">
              $25
            </p>
          </div>

          <div className="flex w-full flex-row justify-around items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[6px] sm:text-[10px] md:text-[12px] lg:text-[14px] xg:text-2xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%] flex flex-col   mx-[2px] sm:mx-[2%]   aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[20%]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[15%]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[8px] md:text-base lg:text-2xl  ">Bottle Name</h3>

          <div className=" w-full flex justify-around  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center   text-[6px] sm:text-[7px] md:text-[9px] lg:text-[14px] xl:text-[18px] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[10px] text-center sm:text-xs w-[20%] md:text-[10px]  lg:text-2xl ">
              $25
            </p>
          </div>

          <div className="flex w-full flex-row justify-around items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[6px] sm:text-[10px] md:text-[12px] lg:text-[14px] xg:text-2xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%] flex flex-col   mx-[2px] sm:mx-[2%]    aspect-square bg-white mt-[6%] shadow-xl rounded-xl md:rounded-2xl">
        <div className="relative  w-full bottom-[20%]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            className=" w-full      mix-blend-multiply"
          />
        </div>
        <div className="w-full   relative self-end bottom-[15%]  mt-[2%] flex flex-col items-center justify-around">
          <h3 className="text-[8px] md:text-base lg:text-2xl  ">Bottle Name</h3>

          <div className=" w-full flex justify-around  my-[2%] items-center">
            {sizeOptions.map((option, index) => (
              <button
                key={index}
                className="rounded-lg sm:rounded-full w-[25%] border-[1px] sm:border-2 border-[#F4A124]   text-center   text-[6px] sm:text-[7px] md:text-[9px] lg:text-[14px] xl:text-[18px] text-black"
              >
                {option.size}
              </button>
            ))}{" "}
            <p className="text-[10px] text-center sm:text-xs w-[20%] md:text-[10px]  lg:text-2xl ">
              $25
            </p>
          </div>

          <div className="flex w-full flex-row justify-around items-center mt-[1%]">
            <div className="border-[1px]  sm:border-2  w-[35%]  aspect-[10/3]    border-[#F4A124] flex justify-around items-center rounded-full ">
              <button
                className=" text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[50%]  aspect-[10/3]  sm:w-[45%] rounded-full text-white text-[6px] sm:text-[10px] md:text-[12px] lg:text-[14px] xg:text-2xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* <div className="w-[28%]  pb-[2%] m-[2%]  flex flex-col justify-end aspect-[8/12] bg-white mt-[6%] shadow-xl rounded-lg">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="w-full"
        >
          <motion.img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            variants={cardVariants}
            className=" w-full h-[80%]  mx-auto    mix-blend-multiply"
          />
        </motion.div>
        <div className=" h-[28%]  flex flex-col justify-around">
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
                className=" text-[6px]  sm:text-[8px] md:text-[22px] lg:text-[14px] xl:text-2xl text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-2xl text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[16px] md:text-[22px] lg:text-[26px] xl:text-2xl text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[45%] rounded-full text-white text-[6px] sm: md: lg:text-xl xg:text-2xl px-[6px] py-[2px]  sm:px-2   mt-1  md:px-4 md:py-2 md:mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%]  pb-[2%]  m-[2%]  flex flex-col justify-end aspect-[8/12] bg-white  mt-[6%]  shadow-xl rounded-lg">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="w-full"
        >
          <motion.img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            variants={cardVariants}
            className=" w-full h-[80%]  mx-auto    mix-blend-multiply"
          />
        </motion.div>
        <div className=" h-[28%]  flex flex-col justify-around">
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
                className=" text-[6px]  sm:text-[8px] md:text-[22px] lg:text-[14px] xl:text-2xl text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-2xl text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[16px] md:text-[22px] lg:text-[26px] xl:text-2xl text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[45%] rounded-full text-white text-[6px] sm: md: lg:text-xl xg:text-2xl px-[6px] py-[2px]  sm:px-2   mt-1  md:px-4 md:py-2 md:mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%]  m-[2%]  pb-[2%]  flex flex-col justify-end aspect-[8/12] bg-white  mt-[6%]  shadow-xl rounded-lg">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="w-full"
        >
          <motion.img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            variants={cardVariants}
            className=" w-full h-[80%]  mx-auto    mix-blend-multiply"
          />
        </motion.div>
        <div className=" h-[28%]  flex flex-col justify-around">
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
                className=" text-[6px]  sm:text-[8px] md:text-[22px] lg:text-[14px] xl:text-2xl text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-2xl text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[16px] md:text-[22px] lg:text-[26px] xl:text-2xl text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[45%] rounded-full text-white text-[6px] sm: md: lg:text-xl xg:text-2xl px-[6px] py-[2px]  sm:px-2   mt-1  md:px-4 md:py-2 md:mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%]  m-[2%]  pb-[2%] flex flex-col justify-end aspect-[8/12] bg-white  mt-[6%]  shadow-xl rounded-lg">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="w-full"
        >
          <motion.img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            variants={cardVariants}
            className=" w-full h-[80%]  mx-auto    mix-blend-multiply"
          />
        </motion.div>
        <div className=" h-[28%]  flex flex-col justify-around">
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
                className=" text-[6px]  sm:text-[8px] md:text-[22px] lg:text-[14px] xl:text-2xl text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-2xl text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[16px] md:text-[22px] lg:text-[26px] xl:text-2xl text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[45%] rounded-full text-white text-[6px] sm: md: lg:text-xl xg:text-2xl px-[6px] py-[2px]  sm:px-2   mt-1  md:px-4 md:py-2 md:mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[28%]  m-[2%] pb-[2%]  flex flex-col justify-end aspect-[8/12] bg-white  mt-[6%]  shadow-xl rounded-lg">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="w-full"
        >
          <motion.img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714298287/transparent-blueberry-juice-blueberry-syrup-glass-bottle-blueb-blueberry-syrup-in-glass-bottle-with-1710856687086-Photoroom.png-Photoroom_j0aeef.png"
            alt="Bottle"
            variants={cardVariants}
            className=" w-full h-[80%]  mx-auto    mix-blend-multiply"
          />
        </motion.div>
        <div className=" h-[28%]  flex flex-col justify-around">
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
                className=" text-[6px]  sm:text-[8px] md:text-[22px] lg:text-[14px] xl:text-2xl text-black "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-[6px]   sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-2xl text-black   ">
                {quantity}
              </span>
              <button
                className="text-[6px]   sm:text-[16px] md:text-[22px] lg:text-[26px] xl:text-2xl text-black  "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#F4A124] w-[45%] rounded-full text-white text-[6px] sm: md: lg:text-xl xg:text-2xl px-[6px] py-[2px]  sm:px-2   mt-1  md:px-4 md:py-2 md:mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;
