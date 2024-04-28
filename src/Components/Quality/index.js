import React from "react";
import { FaAppleAlt } from "react-icons/fa";

const Quality = () => {
  return (
    <div className="aspect-video bg-slate-100 max-h-[90vh] flex w-full">
      <div className="h-full w-[40%]">
        <img
          className="h-[100%] w-full rounded-r-full"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714134115/fruits2_atj937.jpg"
          alt="fruits"
        />
      </div>
      <div className="h-full flex flex-col justify-center items-center w-[60%]">
        <div className="bg-white w-[80%] flex  flex-row justify-start items-center   h-[18%] rounded-md p-3  ">
          <div className="bg-[rgb(179,206,80)]  ml-[3%]  flex justify-center rounded-lg items-center aspect-square  h-[90%]   p-2">
            <FaAppleAlt className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl" />
          </div>
          <div className="ml-[10%]">
            <h1 className="text-xl font-semibold leading-none sm:text-2xl md:text-3xl lg:text-5xl ">
              Only Fresh Fruits
            </h1>
            <p className="text-xs leading-none sm:text-sm md:text-xl lg:text-2xl ">
              Chunks of pulp in each bottle
            </p>
          </div>
        </div>
        {/* double box const */}
        <div className="flex justify-between w-[80%] h-[18%]  my-5 ">
          <div className="bg-white w-[45%] flex  flex-row justify-around items-center aspect-video  rounded-md p-1  ">
            <div className="bg-[rgb(179,206,80)] flex justify-center rounded-lg items-center aspect-square  h-[80%]   p-2">
              <FaAppleAlt className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl" />
            </div>
            <div className="text-xl font-semibold leading-none sm:text-2xl md:text-3xl lg:text-5xl">
              <h1>Sugar</h1>
              <p>Free</p>
            </div>
          </div>
          <div className="bg-white w-[45%] flex  flex-row justify-around items-center   aspect-video  rounded-md ">
            <div className="bg-[rgb(179,206,80)] flex justify-center rounded-lg items-center aspect-square  h-[80%]   p-2">
              <FaAppleAlt className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl" />
            </div>
            <div className="text-xl font-semibold leading-none sm:text-2xl md:text-3xl lg:text-5xl">
              <h1>Sugar</h1>
              <p>Free</p>
            </div>
          </div>
        </div>

        {/* double box const */}
        <div className="flex  justify-between  w-[80%]  h-[18%] my-5">
          <div className="bg-white w-[45%] flex  flex-row justify-around items-center  mr-5 aspect-video  rounded-md p-1  ">
            <div className="bg-[rgb(179,206,80)] flex justify-center rounded-lg items-center aspect-square  h-[80%]   p-2">
              <FaAppleAlt className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl" />
            </div>
            <div className="text-xl font-semibold leading-none sm:text-2xl md:text-3xl lg:text-5xl">
              <h1>Sugar</h1>
              <p>Free</p>
            </div>
          </div>
          <div className="bg-white w-[45%] flex  flex-row justify-around items-center aspect-video  rounded-md p-1  ">
            <div className="bg-[rgb(179,206,80)] flex justify-center rounded-lg items-center aspect-square  h-[80%]   p-2">
              <FaAppleAlt className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl" />
            </div>
            <div className="text-xl font-semibold leading-none sm:text-2xl md:text-3xl lg:text-5xl">
              <h1>Sugar</h1>
              <p>Free</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
