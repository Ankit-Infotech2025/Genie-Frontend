import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const DetailedDiagnosisScreen: React.FC = () => {
  const [typedDiagnosisTitle, setTypedDiagnosisTitle] = useState("");
  const [typedMagnesiumDeficiency, setTypedMagnesiumDeficiency] = useState("");
  const [typedBlackSpot, setTypedBlackSpot] = useState("");
  const [typedSolutionsText, setTypedSolutionsText] = useState("");
  const [visibleSolutions, setVisibleSolutions] = useState(0);

  useEffect(() => {
    setTypedDiagnosisTitle("");
    setTypedMagnesiumDeficiency("");
    setTypedBlackSpot("");
    setTypedSolutionsText("");
    setVisibleSolutions(0);

    const diagnosisText = "✨ Genie AI has detected Black Spot disease with 86% confidence.";
    const magnesiumText = "Magnesium Deficiency";
    const blackSpotText = "Black Spot";
    const solutionsText = "Solutions:";

    let diagnosisIndex = 0;
    const typeDiagnosis = () => {
      if (diagnosisIndex < diagnosisText.length) {
        setTypedDiagnosisTitle(diagnosisText.substring(0, diagnosisIndex + 1));
        diagnosisIndex++;
        setTimeout(typeDiagnosis, 40);
      } else {
        setTimeout(() => {
          let magnesiumIndex = 0;
          let blackSpotIndex = 0;

          const typeMagnesium = () => {
            if (magnesiumIndex < magnesiumText.length) {
              setTypedMagnesiumDeficiency(magnesiumText.substring(0, magnesiumIndex + 1));
              magnesiumIndex++;
              setTimeout(typeMagnesium, 80);
            }
          };

          const typeBlackSpot = () => {
            if (blackSpotIndex < blackSpotText.length) {
              setTypedBlackSpot(blackSpotText.substring(0, blackSpotIndex + 1));
              blackSpotIndex++;
              setTimeout(typeBlackSpot, 80);
            }
          };

          typeMagnesium();
          setTimeout(typeBlackSpot, 200); // Start typing black spot shortly after magnesium

          setTimeout(() => {
            let solutionsIndex = 0;
            const typeSolutions = () => {
              if (solutionsIndex < solutionsText.length) {
                setTypedSolutionsText(solutionsText.substring(0, solutionsIndex + 1));
                solutionsIndex++;
                setTimeout(typeSolutions, 60);
              } else {
                setTimeout(() => {
                  const showSolutionsSequentially = () => {
                    setVisibleSolutions((prev) => {
                      const next = prev + 1;
                      if (next < 4) { // There are 3 main solution blocks (Magnesium, Steps, Products) + 1 for initial state
                        setTimeout(showSolutionsSequentially, 300);
                      }
                      return next;
                    });
                  };
                  showSolutionsSequentially();
                }, 400); // Delay before showing first solution block
              }
            };
            typeSolutions();
          }, 1000); // Delay before typing "Solutions:"
        }, 600); // Delay before typing Magnesium/Black Spot
      }
    };
    setTimeout(typeDiagnosis, 500); // Initial delay for diagnosis title
  }, []);


  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          {/* <div className="flex justify-center items-center gap-4 mb-4">
            <div className={`bg-red-100 p-3 rounded-lg transition-all duration-500 ${typedMagnesiumDeficiency ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
              }`}>
              <span className="text-red-600 font-bold">
                {typedMagnesiumDeficiency}
                {typedMagnesiumDeficiency.length < 'Magnesium Deficiency'.length && (
                  <span className="inline-block w-0.5 h-4 bg-red-600 ml-1 animate-pulse"></span>
                )}
              </span>
            </div>
            <div className={`bg-gray-800 p-3 rounded-lg transition-all duration-500 ${typedBlackSpot ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
              }`}>
              <span className="text-white font-bold">
                {typedBlackSpot}
                {typedBlackSpot.length < 'Black Spot'.length && (
                  <span className="inline-block w-0.5 h-4 bg-white ml-1 animate-pulse"></span>
                )}
              </span>
            </div>
          </div> */}
          <div className='mb-4'>
            <img src="/disease.png"
              alt=""
              className='rounded-lg'
            />
          </div>

          <p className="text-black mb-4">
            {typedDiagnosisTitle}
            {typedDiagnosisTitle.length < '✨ Genie AI has detected Black Spot disease with 86% confidence.'.length && (
              <span className="inline-block w-0.5 h-4 bg-green-600 ml-1 animate-pulse"></span>
            )}
          </p>

          <div className="text-left space-y-6">
            {/* Magnesium Deficiency Solution */}
            <div className="">
              <h3 className="text-lg font-bold mb-1">Solution:</h3>
              <p className="text-sm mb-2">
                <strong>For Magnesium Deficiency :</strong> Epsom salt is a simple way to fix magnesium deficiency in plants. It contains magnesium and sulfur that helps plants make chlorophyll and protein respectively.
              </p>
              <p className="text-sm mb-2">
                <strong>For Black Spots :</strong>  Cut off leaves that have black spots and use Neem Oil Spray. It will kill all pests and fungi and provide overall growth.
              </p>
            </div>

            {/* Step by step solutions */}
            <div>
              <h1 className='text-lg font-bold '>
                How to use
              </h1>
              <div>
                <h1 className='text-lg font-medium mb-2'>
                  Epsom Salt :
                </h1>
                {/* Steps */}
                <div className='flex gap-2 items-center mb-2'>
                  <div className='bg-green-200 rounded-lg py-3 px-5'>
                    <p className='text-lg'>1</p>
                  </div>
                  <div>
                    <p className='font-semibold'>Step 1: Foliar Application </p>
                    <p className='text-sm text-green-600'>Mix 10-15 gm Epsom Salt per liter of water and spray over leaves.</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center mb-3'>
                  <div className='bg-green-200 rounded-lg py-3 px-5'>
                    <p className='text-lg'>2</p>
                  </div>
                  <div>
                    <p className='font-semibold'>Step 2: Direct Application </p>
                    <p className='text-sm text-green-600'>Mix 10-15 gm Epsom Salt per liter of water and spray over leaves.</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center mb-2'>
                  <div className='bg-green-200 rounded-lg py-3 px-5'>
                    <p className='text-lg'>3</p>
                  </div>
                  <div>
                    <p className='font-semibold'>Step 3: Monitor and Repeat </p>
                    <p className='text-sm text-green-600'>Mix 10-15 gm Epsom Salt per liter of water and spray over leaves.</p>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <h1 className='text-lg font-medium mb-2'>
                  Neem Oil Spray :
                </h1>
                {/* Steps */}
                <div className='flex gap-2 items-center mb-2'>
                  <div className='bg-green-200 rounded-lg py-3 px-5'>
                    <p className='text-lg'>1</p>
                  </div>
                  <div>
                    <p className='font-semibold'>Step 1: Shake Well Before Use</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center mb-2'>
                  <div className='bg-green-200 rounded-lg py-3 px-5'>
                    <p className='text-lg'>2</p>
                  </div>
                  <div>
                    <p className='font-semibold'>Step 2:  Spray directly on plant leaves, stems and even under the leaves. </p>
                  </div>
                </div>
                <div className='flex gap-2 items-center mb-2'>
                  <div className='bg-green-200 rounded-lg py-3 px-5'>
                    <p className='text-lg'>3</p>
                  </div>
                  <div>
                    <p className='font-semibold'>Step 3:  If pests are already present on your plants, remove them using brush or water spray. Wait it dry. Then use this Neem Oil Spray. </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Product Recommendations */}
            {/* <div className={`bg-gray-50 rounded-lg p-4 transition-all duration-700 ${visibleSolutions >= 3 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'
              }`}>
              <h3 className="font-bold text-gray-800 mb-3">Recommended Products:</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between hover:bg-white transition-colors duration-200 p-2 rounded">
                  <span className="text-gray-700">Neem Oil Spray</span>
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">Buy Now →</button>
                </div>
                <div className="flex items-center justify-between hover:bg-white transition-colors duration-200 p-2 rounded">
                  <span className="text-gray-700">Epsom Salt</span>
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">Buy Now →</button>
                </div>
                <div className="flex items-center justify-between hover:bg-white transition-colors duration-200 p-2 rounded">
                  <span className="text-gray-700">Mealy Bug Spray</span>
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">Buy Now →</button>
                </div>
              </div>
            </div> */}
            <div className='flex items-center gap-2 mt-8'>
              <div className='flex flex-col gap-1 text-sm text-green-600'>
                <p >Garder Genie</p>
                <p className='text-black font-bold'>Neem Oil Spray</p>
                <p>Natural insecticide for effective pest control</p>
                <button className='flex gap-1 justify-center items-center text-black bg-green-100 p-2 rounded-full'>
                  Buy Now <ArrowRight size={16} />
                </button>
              </div>
              <div>
                <img src="/spray.png" alt="" />
              </div>
            </div>

             <div className='flex items-center gap-2 mt-8'>
              <div className='flex flex-col gap-1 text-sm text-green-600'>
                <p >Garder Genie</p>
                <p className='text-black font-bold'>Mealy Bug Spray</p>
                <p>Natural insecticide for effective pest control</p>
                <button className='flex gap-1 justify-center items-center text-black bg-green-100 p-2 rounded-full'>
                  Buy Now <ArrowRight size={16} />
                </button>
              </div>
              <div>
                <img src="/salt.png" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedDiagnosisScreen;