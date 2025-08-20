import React from 'react';
// import { AiOutlineProduct } from 'react-icons/ai';
import { Box, ScanLine } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="w-full border-t fixed bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none mx-auto max-w-sm">
      <div className="relative bg-white w-full p-1 flex items-center justify-around shadow-lg pointer-events-auto">
        {/* Floating Center Button */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full">
          <button className="bg-[#108244] w-[70px] h-[70px] rounded-full flex items-center justify-center shadow-xl ">
            <img src="/robot.png" alt="" />
          </button>
        </div>

        {/* Left icons */}
        <div className='flex flex-col items-center text-black text-xs gap-0.5'>
          <Box className="w-6 h-6" />
          <span>Product</span>
        </div>
        <div className="w-14" /> {/* Spacer for center button */}
        <div className='flex flex-col items-center text-black text-xs gap-0.5'>
          <ScanLine className="w-6 h-6" />
          <span>Scan</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
