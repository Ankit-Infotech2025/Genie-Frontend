// src/screens/AIChatScreen.tsx
import React from 'react';

interface AIChatScreenProps {
  chatMessage: string;
  setChatMessage: (message: string) => void;
  onGetRecommendationClick: () => void;
}

const AIChatScreen: React.FC<AIChatScreenProps> = ({ chatMessage, setChatMessage, onGetRecommendationClick }) => {
  const examplePrompts = [
    "My plants are growing very slowly and some branches are wilting on one side. What could be the wrong?",
    "The leaves of my plants are curling and folding. What is causing this?",
    "Not getting lemons on my 2 year old lemon plant. What could be the issue and solution?"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-6 py-8 flex-1">
        <div className="text-center mb-8">
          <div className="flex justify-between items-center mb-4">
            <img
              src="/plant-analysis.png"
              alt="Plant analysis"
              className="w-28 h-28 rounded-lg object-cover"
            />
            <img src="/robo.png"
              alt="robot"
              className='h-28 w-28 '
            />
            <img
              src="/plant-full.png"
              alt="Full plant"
              className="w-28 h-28 rounded-lg object-cover"
            />
          </div>

          <p className="text-xl text-center text-black font-bold my-8">
            <span role="img" aria-label="sparkle">✨</span>
            Genie AI is thinking meanwhile let us know what you are looking for...
          </p>

          {/* <div className="border-4 border-[#179C26] rounded-lg p-4 mb-6">
            <p className="text-green-700 text-normal">
              <strong>Example:</strong> The leaves of my Areca Palm are getting yellow and it's not growing anymore. Is this overwatering or lack of nutrients? Give me the problem with recommended solutions.
            </p>
          </div> */}
          <div className='w-full animate-border rounded-lg bg-white/80 bg-gradient-to-r from-green-600 via-green-400 to-green-700 bg-[length:400%_400%] pt-1 pr-1 pl-1 mb-4'>
            <textarea
              value={chatMessage}
              onChange={e => setChatMessage(e.target.value)}
              className='rounded-lg h-28 p-2 w-full text-center text-[#578F5C] border-none outline-none focus:outline-none focus:ring-0 focus:border-none'
            />
          </div>

          <button
            onClick={onGetRecommendationClick}
            className="w-full bg-[#108244] text-white py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors "
          >
            Get Recommendation
          </button>
        </div>

        {/* Example Prompts */}
        <div className="text-left">
          <p className="text-gray-500 text-center text-sm mb-4">Try these example Prompts:</p>
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