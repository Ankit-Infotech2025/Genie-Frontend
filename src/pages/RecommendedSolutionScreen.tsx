// src/screens/RecommendedSolutionScreen.tsx
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from '../Component/ui/model'

interface RecommendedSolutionScreenProps {
  onContinueToChatClick: () => void;
}

const RecommendedSolutionScreen: React.FC<RecommendedSolutionScreenProps> = ({ }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="px-3 py-8">
        {/* <Link
        to={}
        >
        </Link> */}
        <div className="text-center ">
          <h1 className="text-2xl font-bold text-gray-800">Suggested Remedy</h1>

          <div className="flex justify-center items-center gap-2 p-2 rounded-lg my-4">
            <div className="text-left space-y-1 text-xs rounded-lg w-[75%] ">
              <h3 className="text-base font-bold">Solution:</h3>
              <p className="mb-2">
                <strong>For Magnesium Deficiency :</strong> Epsom salt is a simple way to fix magnesium deficiency in plants. It contains magnesium and sulfur that helps plants make chlorophyll and protein respectively.
              </p>
              {/* <p className="">
                <strong>For Black Spots :</strong>  Cut off leaves that have black spots and use Neem Oil Spray. It will kill all pests and fungi and provide overall growth.
              </p> */}
            </div>
            <div className=''>
              <img
                src="/spray.png"
                alt="Mealy Bug Spray"
                className="w-auto h-auto object-contain"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Mealy Oil Spray</h2>
            <p className="text-green-600 mb-4">Natural insecticide for effective pest control</p>
            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-400 text-black px-2.5 py-1.5 rounded-full font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center gap-1"
              >
                How to Use
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="How to Use">
                <p className="text-gray-700">
                  1. Shake the bottle well before use.<br />
                  2. Spray directly on affected leaves.<br />
                  3. Use in the early morning or evening.<br />
                  4. Avoid spraying during the hottest part of the day.<br />
                  5. Repeat every 7 days or as needed.
                </p>
              </Modal>
              <button className="bg-[#108244] text-white px-2.5 py-1.5 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex items-center gap-1">
                Buy Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 p-2 rounded-lg my-4">
            <div className="text-left space-y-1 text-xs rounded-lg w-[75%] ">
              <h3 className="text-base font-bold">Solution:</h3>
              {/* <p className="mb-2">
                <strong>For Magnesium Deficiency :</strong> Epsom salt is a simple way to fix magnesium deficiency in plants. It contains magnesium and sulfur that helps plants make chlorophyll and protein respectively.
              </p> */}
              <p className="">
                <strong>For Black Spots :</strong>  Cut off leaves that have black spots and use Neem Oil Spray. It will kill all pests and fungi and provide overall growth.
              </p>
            </div>
            <div className=''>
              <img
                src="/salt.png"
                alt="Mealy Bug Spray"
                className="w-auto h-auto object-contain"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Epsom Salt</h2>
            <p className="text-green-600 mb-4">Natural insecticide for effective pest control</p>
            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-400 text-black px-2.5 py-1.5 rounded-full font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center gap-1"
              >
                How to Use
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="How to Use">
                <p className="text-gray-700">
                  1. Shake the bottle well before use.<br />
                  2. Spray directly on affected leaves.<br />
                  3. Use in the early morning or evening.<br />
                  4. Avoid spraying during the hottest part of the day.<br />
                  5. Repeat every 7 days or as needed.
                </p>
              </Modal>
              <button className="bg-[#108244]  text-white px-2.5 py-1.5 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex items-center gap-1">
                Buy Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>


        {/* <div className='flex flex-col justify-center items-center mb-10'>
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
        </div> */}

        {/* <div className="text-left space-y-4 bg-gray-100 rounded-lg p-3">
          <h3 className="text-xl font-bold mb-1">Solution:</h3>
          <p className="text-sm mb-2">
            <strong>For Magnesium Deficiency :</strong> Epsom salt is a simple way to fix magnesium deficiency in plants. It contains magnesium and sulfur that helps plants make chlorophyll and protein respectively.
          </p>
          <p className="text-sm mb-2">
            <strong>For Black Spots :</strong>  Cut off leaves that have black spots and use Neem Oil Spray. It will kill all pests and fungi and provide overall growth.
          </p>
        </div> */}

        <Link
          to="/tutorial"
          className='bg-[#108244] text-white w-full px-4 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex justify-center items-center gap-1 mt-4'
        >
         Ask Genie Ai Again
        </Link>
      </div>
    </div>
  );
};

export default RecommendedSolutionScreen;