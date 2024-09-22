"use client";

import React, { useEffect, useState } from 'react'
import HeroTopBar from './components/HeroTopBar'
import NumericCard from './components/NumericCard'
import PaidUnpaidUersCard from './components/PaidUnpaidUersCard'
import AiAnalysis from './components/AiAnalysis'
import { CircleUserRound, History, MessageSquareText } from 'lucide-react';
import toast from "react-hot-toast";
import { getDashBoardData } from '@/utils/getDashBoardData';

const page = () => {
  const [dashboardData, setDashboardData] = useState({});
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState("");
  
  // show error message
  useEffect(() => {
    if (error == "") return;
    toast.error(error);
   }, [error]);

  
  // get dashboard data
  useEffect(() => { 
    getDashBoardData(setDashboardData, setLoding, setError, toast);
  }, []);
  return (
    <div className="p-5">
      <HeroTopBar />
      <div className=" flex gap-x-2 sm:gap-x-5 gap-y-5 xl:gap-20 flex-wrap justify-center">
        <NumericCard
          icon={<CircleUserRound size={50} color="#2F76FF" />}
          value={dashboardData?.totalUsers || 0}
          title="Total no. of Users"
        />
        <NumericCard
          title="Total no.of Messages"
          value={dashboardData?.totalMessages || 0}
          icon={<MessageSquareText size={40} color="#2F76FF" />}
        />
        <NumericCard
          title="Hours of User Engagement"
          icon={<History size={40} color="#2F76FF" />}
          value={1000}
        />
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-5 mt-5">
        <PaidUnpaidUersCard topUsers={dashboardData?.latestUsers || []} />
        <AiAnalysis
          aiUsage={dashboardData?.aiUsage || {}}
          aiUsagePercentages={dashboardData?.aiUsagePercentages || {}}
        />
      </div>
      <div className=" flex"></div>
    </div>
  );
}

export default page