import { CircleUserRound, MessageSquareText } from 'lucide-react';
import React from 'react'

const NumericCard = ({icon, title,value}) => {
  return (
    <div className="bg-[#33466B] w-[350px] h-[110px] p-[20px] rounded-xl flex justify-center items-center gap-7">
      <div className="w-[60px] h-[60px] bg-white rounded-full flex justify-center items-center">
        { icon}
      </div>
      <div className='text-white'>
        <h4 className='text-[20px]'>{ title}</h4>
        <h2 className='text-2xl font-extrabold'>{ value}</h2>
      </div>
    </div>
  );
}

export default NumericCard