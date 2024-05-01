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
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <div className="w-full aspect-[16/11] sm:aspect-video  lg:aspect-[16/7]  bg-gray-200">
      <Slider {...settings}>
        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full aspect-[1/1.1] sm:aspect-[1/1.2] p-[1vw] ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className=" h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
              <p className="py-auto text-[3vw] font-bold">Anna</p>
            </div>
            <p className=" mt-[1vw]   text-[2vw]  font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className=" p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2] p-[1vw] ">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
                <p className="py-auto text-[3vw] font-bold">Anna</p>
              </div>
              <p className=" mt-[1vw]  text-[2vw]  font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2] p-[1vw]   ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="  h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
              <p className="py-auto text-[3vw] font-bold">Anna</p>
            </div>
            <p className=" mt-[1vw]   text-[2vw]  font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2]  p-[1vw] ">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
                <p className="py-auto text-[3vw] font-bold">Anna</p>
              </div>
              <p className=" mt-[1vw]   text-[2vw]  font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2] p-[1vw]   ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="  h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
              <p className="py-auto text-[3vw] font-bold">Anna</p>
            </div>
            <p className=" mt-[1vw]   text-[2vw]  font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2]  p-[1vw] ">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
                <p className="py-auto text-[3vw] font-bold">Anna</p>
              </div>
              <p className=" mt-[1vw]   text-[2vw]  font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2] p-[1vw]   ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="  h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
              <p className="py-auto text-[3vw] font-bold">Anna</p>
            </div>
            <p className=" mt-[1vw]   text-[2vw]  font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2]  p-[1vw] ">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
                <p className="py-auto text-[3vw] font-bold">Anna</p>
              </div>
              <p className=" mt-[1vw]  text-[2vw]  font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2] p-[1vw]   ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="   h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
              <p className="py-auto text-[3vw] font-bold">Anna</p>
            </div>
            <p className=" mt-[1vw]   text-[2vw]  font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2]  p-[1vw] ">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
                <p className="py-auto text-[3vw] font-bold">Anna</p>
              </div>
              <p className=" mt-[1vw]  text-[2vw]  font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2  w-full">
          <div className="bg-[#B1CF4D]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2]  p-[1vw]   ">
            <div className="flex  justify-around items-center mt-[2%]">
              <div className="  h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
              <p className="py-auto text-[3vw] font-bold">Anna</p>
            </div>
            <p className=" mt-[1vw]   text-[2vw] font-semibold ">
              Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
              velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
              mollit sint.
            </p>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="bg-[#FBB60A]  mr-[1%] rounded-lg w-full  aspect-[1/1.1] sm:aspect-[1/1.2] p-[1vw] ">
            <div>
              <div className="flex  justify-around items-center mt-[2%]">
                <div className="  h-[6vw] w-[6vw]  sm:h-[4vw] sm:w-[4vw] bg-white rounded-full"></div>
                <p className="py-auto text-[3vw] font-bold">Anna</p>
              </div>
              <p className=" mt-[1vw]  text-[2vw] font-semibold ">
                Ipsum enim amet aliquip amet veniam eiusmod nisi veniam tempor
                velit Lorem.Cillum anim irure adipisicing nostrud dolore enim
                mollit sint.
              </p>
            </div>
          </div>
        </div>
      </Slider>
      <style>
        {`
          .slick-dots {
            bottom:-4vw ;
          }
          .slick-dots li {
            display: inline-block;
            margin: 0 4vw;
          }
          .slick-dots li button {
            width: 2vw;
            height: 2vw;
            border-radius: 50%;
            background-color: #000000; /* Orange color for inactive dots */
          }
          .slick-dots li.slick-active button {
            background-color: #FF6600; /* Black color for active dot */
          }
        `}
      </style>
    </div>
  );
};

export default Review;
