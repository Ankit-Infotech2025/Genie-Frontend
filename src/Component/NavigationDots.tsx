// src/components/NavigationDots.tsx
import React from 'react';

interface NavigationDotsProps {
  screensCount: number;
  currentScreen: number;
  onDotClick: (index: number) => void;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ screensCount, currentScreen, onDotClick }) => {
  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex gap-1 bg-black bg-opacity-20 rounded-full px-3 py-1 z-50">
      {Array.from({ length: screensCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            currentScreen === index ? 'bg-green-500' : 'bg-gray-300'
          }`}
          aria-label={`Go to screen ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;