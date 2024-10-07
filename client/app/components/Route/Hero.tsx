/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full flex items-center justify-between flex-col 1000px:flex-row px-6 py-12">
      {/* Left Side - Circular Image */}
      <div className="flex justify-center w-full 1000px:w-1/2">
        <img
          src="/assets/bg1.jpeg"
          alt="Healthcare Banner"
          className="object-contain w-[80%] 1000px:w-[60%] h-auto rounded-full" 
        />
      </div>

      {/* Right Side - Text Section */}
      <div className="flex flex-col items-center 1000px:items-start text-center 1000px:text-left w-full 1000px:w-1/2 p-6">
        <h2 className="dark:text-white text-[#000000c7] text-[30px] 1000px:text-[50px] font-[600] font-Josefin py-4 leading-tight">
          Empowering you with healthcare education and insights!
        </h2>
        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] w-[90%] 1000px:w-[80%]">
          Access over 2K courses and join 450K learners. Stay informed, stay healthy!
        </p>

        {/* Search Input */}
        <div className="w-full max-w-[500px] h-[50px] bg-transparent relative mt-6">
          <input
            type="search"
            placeholder="Search Courses"
            className="bg-transparent border border-[#39c1f3] dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
            <BiSearch className="text-white" size={30} />
          </div>
        </div>

        {/* Profile Pictures and Trust Information */}
        <div className="w-full flex items-center mt-6">
          {/* Profile Pictures */}
          <div className="flex -space-x-2"> {/* Negative margin for overlapping */}
            <img
              src="/assets/profile1.jpg"
              alt="Subscriber Profile 1"
              className="w-10 h-10 rounded-full border-2 border-white" // Increased size and added a border
            />
            <img
              src="/assets/profile2.jpg"
              alt="Subscriber Profile 2"
              className="w-10 h-10 rounded-full border-2 border-white" // Increased size and added a border
            />
            <img
              src="/assets/profile3.jpeg"
              alt="Subscriber Profile 3"
              className="w-10 h-10 rounded-full border-2 border-white" // Increased size and added a border
            />
          </div>

          {/* Trust Information */}
          <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] text-[18px] font-[600] ml-3"> {/* Adjusted margin for better alignment */}
            Join 450K people who already trust us.
            <Link href="/courses" className="dark:text-[#46e256] text-[crimson] ml-2">
              View Courses
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
