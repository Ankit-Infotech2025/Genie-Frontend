// src/screens/PlantCategoriesScreen.tsx
import React, { useState, useEffect } from 'react';
import type { PlantCategory } from '../types/index';

interface PlantCategoriesScreenProps {
  onLoginClick: () => void;
}

const plantCategories: PlantCategory[] = [
  { name: "Areca Palm", image: "/areca-palm.png" },
  { name: "Holy Basil", image: "/holy-basil.png" },
  { name: "Tomato", image: "/tomato.png" },
  { name: "Herb", image: "/herb.png" },
  { name: "Fruit Tree", image: "/fruit-tree.png" },
  { name: "Ornamental", image: "/ornamental.png" },
  { name: "Aquatic", image: "/aquatic.png" },
  { name: "Air Plant", image: "/air-plant.png" },
  { name: "Fruit Tree", image: "/fruit-tree2.png" },
  { name: "Ornamental", image: "/ornamental2.png" }
];

const PlantCategoriesScreen: React.FC<PlantCategoriesScreenProps> = ({ onLoginClick }) => {
  const [typedText, setTypedText] = useState("");
  const [typedSubtext, setTypedSubtext] = useState("");
  const [visiblePlants, setVisiblePlants] = useState(0);

  useEffect(() => {
    setTypedText("");
    setTypedSubtext("");
    setVisiblePlants(0);

    const mainText = "α Version - 10 Plants Model";
    const subText = "Trained on Indian Household Plants";
    let currentIndex = 0;

    const typeMainText = () => {
      if (currentIndex < mainText.length) {
        setTypedText(mainText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeMainText, 25);
      } else {
        setTimeout(() => {
          let subIndex = 0;
          const typeSubText = () => {
            if (subIndex < subText.length) {
              setTypedSubtext(subText.substring(0, subIndex + 1));
              subIndex++;
              setTimeout(typeSubText, 20);
            } else {
              setTimeout(() => {
                const showPlantsSequentially = () => {
                  setVisiblePlants((prev) => {
                    const next = prev + 1;
                    if (next < plantCategories.length) {
                      setTimeout(showPlantsSequentially, 100);
                    }
                    return next;
                  });
                };
                showPlantsSequentially();
              }, 100);
            }
          };
          typeSubText();
        }, 200);
      }
    };
    setTimeout(typeMainText, 200);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            {typedText}
            {typedText.length < "α Version - 10 Plants Model".length && (
              <span className="inline-block w-0.5 h-6 bg-gray-800 ml-1 animate-pulse"></span>
            )}
          </h1>
          <p className="text-gray-600">
            {typedSubtext}
            {typedSubtext && typedSubtext.length < "Trained on Indian Household Plants".length && (
              <span className="inline-block w-0.5 h-4 bg-gray-600 ml-1 animate-pulse"></span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {plantCategories.map((plant, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-500 ${
                index < visiblePlants ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
              }`}
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-sm font-medium text-gray-800">{plant.name}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onLoginClick}
          className={`w-full bg-[#179C26] text-white py-3 rounded-full text-base font-semibold hover:bg-green-600 transition-all duration-500 ${
            visiblePlants >= plantCategories.length ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default PlantCategoriesScreen;