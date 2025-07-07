// src/screens/RecommendedSolutionScreen.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RecommendedSolutionScreenProps {
  onContinueToChatClick: () => void;
}

const RecommendedSolutionScreen: React.FC<RecommendedSolutionScreenProps> = ({ onContinueToChatClick }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Recommended Solution for Black Spot</h1>
          <div className="">
            <img
              src="/spray.png"
              alt="Mealy Bug Spray"
              className="w-48 h-64 object-contain mx-auto"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Mealy Oil Spray</h2>
            <p className="text-green-600 mb-4">Natural insecticide for effective pest control</p>
            <button className="bg-green-100 text-black px-2 py-1 rounded-full font-semibold hover:bg-green-200 transition-colors inline-flex items-center gap-1">
              Buy Now <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Recommended Solution for Magnesium</h1>
          <div className="">
            <img
              src="/salt.png"
              alt="salt"
              className="w-48 h-64 object-contain mx-auto"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Epsom Salt</h2>
            <p className="text-green-600 mb-4">Natural insecticide for effective pest control</p>
            <button className="bg-green-100 text-black px-2 py-1 rounded-full font-semibold hover:bg-green-200 transition-colors inline-flex items-center gap-1">
              Buy Now <ArrowRight size={16} />
            </button>
          </div>
        </div>


        <div className='flex flex-col justify-center items-center mb-10'>
          <button
            onClick={onContinueToChatClick}
            className='flex flex-col justify-center items-center'
          >
            <img src="/Vector.png" alt="" className='h-10 w-10' />
            <p className='font-bold text-2xl'>Click to Ask Genie Ai Again</p>
          </button>
        </div>

        <div className='flex flex-col justify-center items-center mb-4'>
          <Link
            to="/tutorial"
            className='flex flex-col justify-center items-center'
          >
            <img src="/scan.png" alt="" className='h-16 w-16' />
            <p className='font-bold text-2xl'>Click to scan Again</p>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default RecommendedSolutionScreen;