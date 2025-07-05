// src/screens/AIChatScreen.tsx
import React from 'react';
import { Send } from 'lucide-react';

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
              className="w-28 h-28 rounded-lg object-cover mr-4"
            />
            <img
              src="/plant-full.png"
              alt="Full plant"
              className="w-28 h-28 rounded-lg object-cover"
            />
          </div>

          {/* <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 bg-green-500 rounded-full"></div> 
          </div> */}

          <p className="text-xl text-center text-black font-bold my-8">
            <span role="img" aria-label="sparkle">✨</span>
             Genie AI is thinking meanwhile let us know what you are looking for...
          </p>

          <div className="border-4 border-[#179C26] rounded-lg p-4 mb-6">
            <p className="text-green-700 text-normal">
              <strong>Example:</strong> The leaves of my Areca Palm are getting yellow and it's not growing anymore. Is this overwatering or lack of nutrients? Give me the problem with recommended solutions.
            </p>
          </div>

          <button
            onClick={onGetRecommendationClick}
            className="w-full bg-green-500 text-white py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors "
          >
            Get Recommendation
          </button>
        </div>

        {/* Example Prompts */}
        <div className="text-left">
          <p className="text-gray-500 text-center text-sm mb-4">Try these example Prompts:</p>
          <div className="space-y-3">
            {examplePrompts.map((prompt, index) => (
              <div key={index} className="bg-[#BFF5D6] rounded-lg p-3">
                <p className="text-gray-700 text-xs text-center">{prompt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            placeholder="Type your plant question..."
            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-500"
          />
          <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" aria-label="Send message">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatScreen;