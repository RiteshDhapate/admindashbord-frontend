import { BadgeAlert, BadgeCheck, CircleUserRound } from "lucide-react";
import React from "react";

const PaidUnpaidUersCard = ({ topUsers }) => {
  return (
    <div className="w-full min-h-0 max-h-[550px] xl:w-[400px] border-[#2F76FF] border-2 p-5 bg-[#D5E3FF] rounded-3xl">
      <div className="flex gap-x-3 items-center">
        <div className="bg-white rounded-full p-1 w-[40px] h-[40px] flex justify-center items-center">
          <CircleUserRound size={30} color="#2F76FF" />
        </div>
        <h1 className="text-2xl font-medium text-[#1E2A5E]">Our Top Users</h1>
      </div>
      <p className="text-[#5676B5] my-2">
        View Our Most Engaged User for Last Week
      </p>
      <div>
        {topUsers.map((user, index) => (
          <div key={index} className="flex gap-x-10 sm:gap-x-[50%] xl:gap-x-10 items-center border-b mt-3 border-[#A3AED0] pb-2">
            <div className="text-xl">
              {index + 1}. {user?.name ||"Agentcoach.ai" } 
            </div>
            <div className="flex gap-x-3">
              <BadgeCheck color="#2F76FF" />
              <h4 className="text-xl text-[#2F76FF]">Free</h4>
            </div>
          </div>
        ))}
        {/* <div className="flex gap-x-10 sm:gap-x-[50%] xl:gap-x-10 items-center border-b mt-3 border-[#A3AED0] pb-2">
          <div className="text-xl">1. ritesh dhapate</div>
          <div className="flex gap-x-3">
            <BadgeCheck color="#2F76FF" />
            <h4 className="text-xl text-[#2F76FF]">Paid</h4>
          </div>
        </div>
        <div className="flex gap-x-10 sm:gap-x-[50%] xl:gap-x-10  items-center border-b mt-3 border-[#A3AED0] pb-2">
          <div className="text-xl">1. ritesh dhapate</div>
          <div className="flex gap-x-3">
            <BadgeAlert color="#6B6B6B" />
            <h4 className="text-xl text-[#6B6B6B]">Unpaid</h4>
          </div>
        </div> */}
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className="text-xl font-medium py-2 px-8 text-white bg-[#2F76FF] rounded-xl">
          View All Users
        </button>
      </div>
    </div>
  );
};

export default PaidUnpaidUersCard;
