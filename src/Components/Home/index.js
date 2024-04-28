import React from "react";

const Home = () => {
  return (
    <div
      className="aspect-video flex max-h-[100vh]  w-full"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/drvjsegeb/image/upload/v1714131440/homejuice_image_h9w0su.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[45%] flex flex-col justify-center items-center  h-[100%] ">
        <div className="w-[75%]">
          <div className="text-[#ED8D17] my-2 sm:my-4 md:my-6 lg:my-8 text-[16px]  sm:text-xl md:text-2xl lg:text-4xl font-bold">
            <p>For Health Concious</p>
            <p>People On-The-Go</p>
          </div>
          <p className="w-[80%] my-2 sm:my-4 md:my-6 lg:my-8 text-[8px] sm:text-xs md:text-sm lg:text-xl ">
            Laborum est Lorem aliqua aute Lorem non est ad sunt fugiat culpa sit
            consequat. Laborum est Lorem aliqua aute Lorem non .
          </p>
          <button className="border-2 w-[70%] bg-[#FAAE0D] my-2 sm:my-4 md:my-6 lg:my-8 rounded-full px-4 py-2 bg-transparent text-black  text-[14px] sm:text-xs md:text-sm lg:text-xl  cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
      <div className="w-[60%] h-[100%] "></div>
    </div>
  );
};

export default Home;
