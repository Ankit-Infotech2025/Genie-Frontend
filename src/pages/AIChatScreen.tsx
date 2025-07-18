// src/screens/AIChatScreen.tsx
import React from 'react';
import GenieAIThinking from '../Component/ui/GenieThinking';

interface AIChatScreenProps {
  chatMessage: string;
  setChatMessage: (message: string) => void;
  onGetRecommendationClick: () => void;
}

const AIChatScreen: React.FC<AIChatScreenProps> = ({ setChatMessage, onGetRecommendationClick }) => {
  const examplePrompts = [
    "Custom Data",
    "Custom Data",
    "Custom Data"];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-3 py-8 flex-1">
        <div className="text-center mb-8">
          <div className="">
            <GenieAIThinking />
          </div>

          <div className='flex justify-between'>
            <img
              src="/plant-analysis.png"
              alt="Plant analysis"
              className="w-36 h-36 rounded-lg object-cover"
            />
            <img
              src="/plant-full.png"
              alt="Full plant"
              className="w-36 h-36 rounded-lg object-cover"
            />
          </div>

          <p className="text-xl text-center text-black font-bold my-8">
            {/* <span role="img" aria-label="sparkle">✨</span> */}
            Share your plant Symptoms
          </p>

          {/* <div className='w-full animate-border rounded-lg bg-white/80 bg-gradient-to-r from-green-600 via-green-400 to-green-700 bg-[length:400%_400%] pt-1 pr-1 pl-1 mb-4'>
            <textarea
              value={chatMessage}
              onChange={e => setChatMessage(e.target.value)}
              className='rounded-lg h-28 p-2 w-full text-center text-[#578F5C] border-none outline-none focus:outline-none focus:ring-0 focus:border-none'
            />
          </div> */}

          <button
            onClick={onGetRecommendationClick}
            className="w-full bg-[#108244] text-white py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors "
          >
            Recommend Solution
          </button>
        </div>

        {/* Example Prompts */}
        <div className="text-left">
          <p className="text-gray-500 text-center text-sm mb-4">Custom Data</p>
          <div className="space-y-3">
            {examplePrompts.map((prompt, index) => (
              <div
                key={index}
                className="bg-[#BFF5D6] rounded-lg p-3 cursor-pointer hover:bg-[#A0EAC2] transition"
                onClick={() => setChatMessage(prompt)}
              >
                <p className="text-gray-700 text-xs text-center">{prompt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatScreen;
