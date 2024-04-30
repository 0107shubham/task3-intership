import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 628,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-[70vh]   bg-gray-200">
      <Slider {...settings}>
        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]  ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="  h-16 w-16 bg-white rounded-full"></div>
              <p className="py-auto text-2xl font-bold">Anna</p>
            </div>
            <p className="text-lg  md:text-xl mt-[3%] font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className=" p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-16 w-16 bg-white rounded-full"></div>
                <p className="py-auto text-2xl font-bold">Anna</p>
              </div>
              <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]  ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="  h-16 w-16 bg-white rounded-full"></div>
              <p className="py-auto text-2xl font-bold">Anna</p>
            </div>
            <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-16 w-16 bg-white rounded-full"></div>
                <p className="py-auto text-2xl font-bold">Anna</p>
              </div>
              <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]  ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="  h-16 w-16 bg-white rounded-full"></div>
              <p className="py-auto text-2xl font-bold">Anna</p>
            </div>
            <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-16 w-16 bg-white rounded-full"></div>
                <p className="py-auto text-2xl font-bold">Anna</p>
              </div>
              <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]  ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="  h-16 w-16 bg-white rounded-full"></div>
              <p className="py-auto text-2xl font-bold">Anna</p>
            </div>
            <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-16 w-16 bg-white rounded-full"></div>
                <p className="py-auto text-2xl font-bold">Anna</p>
              </div>
              <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]  ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="  h-16 w-16 bg-white rounded-full"></div>
              <p className="py-auto text-2xl font-bold">Anna</p>
            </div>
            <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-16 w-16 bg-white rounded-full"></div>
                <p className="py-auto text-2xl font-bold">Anna</p>
              </div>
              <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]  ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="  h-16 w-16 bg-white rounded-full"></div>
              <p className="py-auto text-2xl font-bold">Anna</p>
            </div>
            <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full aspect-[1/1.2] p-[2%]">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-16 w-16 bg-white rounded-full"></div>
                <p className="py-auto text-2xl font-bold">Anna</p>
              </div>
              <p className=" text-lg  md:text-xl mt-[3%] font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Review;
