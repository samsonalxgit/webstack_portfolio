/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div
      className="relative w-1000px h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-2 py-3"
      style={{
        backgroundImage: "url('/assets/bg1.png')", // Background Image
        backgroundSize: "cover", // Cover the full screen
        opacity: 0.6, // Control opacity
      }}
    >
      {/* Dark overlay to increase text contrast */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Text Section (Centered and Constrained) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full">
        <h2 className="dark:text-white text-white text-[50px] 1000px:text-[50px] font-[800] font-Josefin py-4 leading-tight">
        Stay educated, stay healthy!
        </h2>
        <p className="dark:text-[#edfff4] text-white font-Josefin font-[1000] text-[28px] w-[90%] 1000px:w-[80%] mx-auto">
          Access over 300 courses and join 3k learners. 
        </p>

        {/* Search Input */}
        <div className="w-full max-w-[700px] h-[50px] bg-transparent relative mt-6">
          <input
            type="search"
            placeholder="Search Courses"
            className="bg-transparent border border-[#39c1f3] dark:border-none dark:bg-[#2c343d] text-white dark:placeholder:text-[#f7f5f5dd] rounded-[15px] p-2 w-full h-full outline-none"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
            <BiSearch className="text-white" size={30} />
          </div>
        </div>

        {/* Profile Pictures and Trust Information */}
        <div className="w-full flex items-center justify-center mt-5">
          <div className="flex -space-x-4">
            <img
              src="/assets/profile1.jpg"
              alt="Subscriber Profile 1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="/assets/profile2.jpg"
              alt="Subscriber Profile 2"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="/assets/profile3.jpeg"
              alt="Subscriber Profile 3"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>

          <p className="font-Josefin dark:text-[#edfff4] text-white text-[22px] font-[600] ml-3">
            3000 people who already trust us.
            <Link href="/courses" className="dark:text-[#46e256] text-[crimson] ml-2">
              View Courses
            </Link>
          </p>
        </div>

        {/* Category Buttons */}
        <div className="mt-12 flex flex-wrap justify-center space-x-2">
          <Link href="/mental-health">
            <button className="bg-[#278db3] text-white font-Josefin rounded-md px-4 py-2 hover:bg-[#3a9bb3] transition duration-300">
              Mental Health
            </button>
          </Link>
          <Link href="/reproductive-health">
            <button className="bg-[#278db3] text-white font-Josefin rounded-md px-4 py-2 hover:bg-[#3a9bb3] transition duration-300">
              Reproductive Health
            </button>
          </Link>
          <Link href="/mother-and-child">
            <button className="bg-[#278db3] text-white font-Josefin rounded-md px-4 py-2 hover:bg-[#3a9bb3] transition duration-300">
              Mother and Child
            </button>
          </Link>
          <Link href="/emergency">
            <button className="bg-[#278db3] text-white font-Josefin rounded-md px-4 py-2 hover:bg-[#3a9bb3] transition duration-300">
              Emergency
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
