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
      <div className="px-6 py-4">
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">
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

        <div className="grid grid-cols-2 gap-1 ">
          {plantCategories.map((plant, index) => (
            <div
              key={index}
              className={`overflow-hidden  transition-all duration-500
                ${index < visiblePlants
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-75 translate-y-4"
                }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-20 h-20 rounded-lg object-cover mx-auto transition-all duration-500"
                />
              </div>
              <div className="p-2 text-center">
                <p className="text-xs font-medium text-gray-800">{plant.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={onLoginClick}
            className={`fixed left-1/2 bottom-6 transform -translate-x-1/2 flex justify-center items-center w-64 bg-[#108244] text-white py-3 rounded-full text-base font-semibold hover:bg-green-600 transition-all duration-500 ${visiblePlants >= plantCategories.length
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              }`}
          >
            Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default PlantCategoriesScreen;