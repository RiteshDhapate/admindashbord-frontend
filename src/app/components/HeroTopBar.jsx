import { BellRing, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroTopBar = () => {
  return (
    <div className="p-5">
      <div className="text-[#A1AEBE] hidden xl:block">Hello Ananth,</div>
      <div className="flex justify-between items-center">
        <div className="text-[#A1AEBE] block xl:hidden">Hello Ananth,</div>
        <h1 className="hidden xl:block text-3xl font-bold text-[#1B2559]">
          Welcome to <span className="text-[#2F76FF]">AgentCoach.ai</span> -
          Your AI Coach
        </h1>
        <div className="flex gap-x-7 items-center">
          <div className="text-[#A1AEBE]">
            <Search className="text-3xl font-extrabold cursor-pointer" />
          </div>
          <div className="text-[#A1AEBE]">
            <BellRing className="text-3xl font-extrabold cursor-pointer" />
          </div>
          <div className="flex rounded-full bg-[#1B2559] justify-center items-center px-3 py-1 text-white gap-x-3">
            <Image
              src="/Avatar.png"
              width={100}
              height={100}
              alt="user profile"
              className="w-[30px] h-[30px] rounded-full bg-white"
            />
            <h4>Ritesh Dhapate</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTopBar;
