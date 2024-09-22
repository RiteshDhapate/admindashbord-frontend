import { ChartNoAxesCombined } from "lucide-react";
import React from "react";
import PaiChart from "./PaiChart";

const AiAnalysis = ({ aiUsage, aiUsagePercentages }) => {
  return (
    <div className="flex-1 min-w-[300px] border-[rgb(47,118,255)] border-2 p-5 bg-[#D5E3FF] rounded-3xl">
      <div className="flex  gap-x-3">
        <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center">
          <ChartNoAxesCombined size={30} color="#2F76FF" />
        </div>
        <h1 className="text-2xl font-medium text-[#1E2A5E]">
          Ai Chatbot Analysis
        </h1>
      </div>
      <div>
        <div className="mb-5">
          <h1 className="text-[#5676B5] my-2  sm:text-xl font-medium">
            Get Weekly Stats Analysis of AI Chatbots
          </h1>
        </div>
        <div className="flex gap-x-3 flex-wrap">
          <div>
            {Object.keys(aiUsage).map((key, index) => (
              <ShowAnalysis
                key={index}
                aiName={key}
                usedPer={aiUsagePercentages[key]}
                aiMessageUsedCount={aiUsage[key]}
              />
            ))}
            {/* <div key={key}>
                <strong>{key}:</strong> {aiUsage[key]} times used (
                {aiUsagePercentages[key]}%)
              </div> */}
            {/* <ShowAnalysis />
            <ShowAnalysis />
            <ShowAnalysis /> */}
          </div>

          <div className="min-w-[300px] flex flex-1">
            <PaiChart aiUsedPer={aiUsagePercentages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAnalysis;



const ShowAnalysis = ({ aiName, usedPer, aiMessageUsedCount }) => {
  return (
    <div className="mt-5 relative">
      <div className="ml-2">
        <div className="flex gap-x-3">
          <div className="text-2xl font-medium text-[#1E2A5E]">{aiName}</div>
          <div className="text-2xl font-medium text-[#1E2A5E]">
            <span className="text-[#2F76FF]">{usedPer}%</span> Usage
          </div>
        </div>
        <div className="flex gap-x-3 text-[#1E2A5E] text-md font-medium">
          <div className="">
            {aiMessageUsedCount}{" "}
            <span className="text-[#5676B5]">
              Messages Generated using {aiName}
            </span>
          </div>
          {/* <div className="text-[#1E2A5E]">
            23{" "}
            <span className="text-[#5676B5]">Hours of Engagement / Week</span>
          </div> */}
        </div>
      </div>
      <div className="absolute left-0 w-1 top-0 h-full bg-[#2F76FF]"></div>
    </div>
  );
};