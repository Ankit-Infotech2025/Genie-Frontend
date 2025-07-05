// src/screens/RecommendedSolutionScreen.tsx
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface RecommendedSolutionScreenProps {
  onContinueToChatClick: () => void;
}

const RecommendedSolutionScreen: React.FC<RecommendedSolutionScreenProps> = ({ onContinueToChatClick }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Recommended Solution</h1>

          <div className="mb-6">
            <img
              src="/spray.png"
              alt="Mealy Bug Spray"
              className="w-48 h-64 object-contain mx-auto"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Mealy Bug Spray</h2>
            <p className="text-green-600 mb-4">Natural insecticide for effective pest control</p>
            <button className="bg-green-100 text-black px-2 py-1 rounded-full font-semibold hover:bg-green-200 transition-colors inline-flex items-center gap-1">
              Buy Now <ArrowRight size={16}/>
            </button>
          </div>
        </div>

        <div className=" rounded-lg p-6 text-center">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <span role="img" aria-label="lightbulb">💡</span>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">Did you know?</h3>
          <p className="text-gray-600 text-sm">
            On the Genie AI app you can name your plants and be the Plant Parent you were always meant to be!
          </p>
        </div>

        <button
          onClick={onContinueToChatClick}
          className="w-full mt-6 bg-green-500 text-white py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Continue to Chat
        </button>
      </div>
    </div>
  );
};

export default RecommendedSolutionScreen;