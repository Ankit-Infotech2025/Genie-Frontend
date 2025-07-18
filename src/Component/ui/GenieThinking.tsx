import React, { useEffect, useState } from 'react';

const GenieThinking: React.FC = () => {
  const phrases = [
    'Genie AI is Thinking',
    'Processing...',
    'Analyzing...',
    'Computing...',
    'Genie AI is Thinking',
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFade(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-[170px] h-[141px] mx-auto animate-float">
      <img
        src="/robo1.png" 
        alt="Genie AI Robot"
        className="w-full h-full object-contain"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none animate-glow" />

      {/* Thinking text */}
      <div
        className={`absolute top-2 left-[65%] transform -translate-x-1/2 text-[7px] font-bold text-white duration-200 ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {phrases[phraseIndex]}
      </div>

      {/* Thinking dots */}
      <div className="absolute top-8 left-[66%] transform -translate-x-1/2 flex gap-[2px]">
        <div className="w-[3px] h-[3px] bg-white rounded-full animate-bounceDot [animation-delay:0s]" />
        <div className="w-[3px] h-[3px] bg-white rounded-full animate-bounceDot [animation-delay:0.3s]" />
        <div className="w-[3px] h-[3px] bg-white rounded-full animate-bounceDot [animation-delay:0.6s]" />
      </div>
    </div>
  );
};

export default GenieThinking;
