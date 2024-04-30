import React from "react";
import Header from "../Header";

const Home = () => {
  return (
    <div
      className="aspect-video relative flex max-h-[100vh] bg-gray-200 w-full"
      style={{
        backgroundImage: `url()`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header className=" w-full" />
      <div className="w-[45%] flex flex-col justify-center items-center  h-[100%] ">
        <div className="w-[75%]">
          <div className="text-[#ED8D17] my-2 sm:my-4 md:my-6 lg:my-8 text-[12px]  sm:text-xl md:text-2xl lg:text-4xl font-bold">
            <p>For Health Concious</p>
            <p>People On-The-Go</p>
          </div>
          <p className="w-[80%] my-2 sm:my-4 md:my-6 lg:my-8 text-[6px] sm:text-xs md:text-sm lg:text-xl ">
            Laborum est Lorem aliqua aute Lorem non est ad sunt fugiat culpa sit
            consequat. Laborum est Lorem aliqua aute Lorem non .
          </p>
          <button className="border-2 w-[70%] bg-orange-500 my-[8px] sm:my-4 md:my-6 lg:my-8 rounded-full py-[2px] px-4 sm:py-2 bg-transparent text-black  text-[8px] sm:text-xs md:text-sm lg:text-xl  cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
      <div className="w-[60%] h-[100%] ">
        <img
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1714131440/homejuice_image_h9w0su.jpg"
          className="rounded-l-full h-full w-full"
          alt="home"
        />
      </div>
    </div>
  );
};

export default Home;
