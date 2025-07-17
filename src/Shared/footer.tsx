import React from 'react';
import { AiOutlineProduct } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md z-50">
      <div className="flex justify-around items-center py-2 max-w-sm mx-auto">
        <button className="flex flex-col items-center text-gray-600 hover:text-black">
          <AiOutlineProduct className="w-6 h-6 mb-1" />
          <span className="text-xs">Products</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-black">
          <div className="bg-green-600 p-2 rounded-full mb-1">
            <img src="/robot.png" alt="Genie AI" className="h-6 w-6" />
          </div>
          <span className="text-xs">GenieAi</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-black">
          <img src="/scan.png" alt="Scan" className="h-6 w-6 mb-1" />
          <span className="text-xs">Scan</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
