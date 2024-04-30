import React from "react";

const circleStyle = {
  background: "linear-gradient(to bottom, #CADF84 50%, #B1CF4D 50%)",
};
const circleStyleMiddle = {
  background: "linear-gradient(to bottom, #FAB60D 50%, #F68713 50%)",
};
const Purchase = () => {
  return (
    <div className="flex bg-gray-200 pt-2 aspect-[16/12] flex-col justify-start items-center w-full">
      <div className="flex justify-around  items-center w-full aspect-[16/4]">
        <div className=" flex flex-col justify-center items-center">
          <div
            style={circleStyle}
            className=" w-16 h-16 md:w-32 md:h-32   rounded-full flex flex-col justify-center items-center text-white font-bold text-4xl"
          >
            1
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">SELECT</p>
          <p className="text-[10px] sm:text-sm md:text-base lg:text-lg">
            choose your favorite drink
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div
            style={circleStyleMiddle}
            className=" w-16 h-16   md:w-32 md:h-32  rounded-full flex flex-col justify-center items-center text-white font-bold text-4xl"
          >
            2
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">SELECT</p>
          <p className="text-[10px] sm:text-sm md:text-base lg:text-lg">
            choose your favorite drink
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div
            style={circleStyle}
            className=" w-16 h-16  md:w-32 md:h-32  rounded-full flex flex-col justify-center items-center text-white font-bold text-4xl"
          >
            3
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">SELECT</p>
          <p className="text-[10px] sm:text-sm md:text-base lg:text-lg">
            choose your favorite drink
          </p>
        </div>
      </div>

      <div className="bg-gray-200 w-full aspect-[16/10] h-[80%] flex flex-row justify-around items-center">
        <div className="flex w-[40%]   h-[80%]">
          <form className=" w-full   rounded-lg aspect-[8/9] flex flex-col justify-center items-start">
            <h2 className="text-[16px] sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4">
              Leave a request
            </h2>
            <h2 className="text-[8px] sm:text-base md:text-lg lg:text-xl  mb-4">
              And get a 20% discount on first order
            </h2>

            <input
              className="w-full px-[4%] mb-[4%]  py-[2%]  sm:px-[6%] sm:mb-[6%]  sm:py-[4%] bg-white rounded-full border border-gray-300  focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              placeholder="Name"
            />

            <input
              className="w-full px-[4%] mb-[6%] py-[2%]  sm:px-[6%] sm:mb-[6%]  sm:py-[4%] border border-gray-300 bg-white rounded-full focus:outline-none focus:border-blue-500"
              type="text"
              id="mobile"
              placeholder="+1 (942) 000-00-00"
            />

            <button
              className="w-full bg-orange-500 text-white px-[4%] mb-[6%] py-[2%]  sm:px-[6%] sm:mb-[6%]  sm:py-[4%] rounded-full hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>

        <img
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714371552/bottle3-Photoroom.png-Photoroom_xbrdgd.png"
          alt="purchase"
          className="bg-[#799A3F] rounded-lg w-[40%] h-[80%]"
        />
      </div>
    </div>
  );
};

export default Purchase;
