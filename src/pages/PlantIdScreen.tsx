// src/screens/PlantIdScreen.tsx
import React, { useState, useEffect } from 'react';
import { Home, Search, Leaf, ShoppingCart } from 'lucide-react';

interface PlantIdScreenProps {
  onDiagnosisDetailsClick: () => void;
}

const PlantIdScreen: React.FC<PlantIdScreenProps> = ({ onDiagnosisDetailsClick }) => {
  const [typedConfidence, setTypedConfidence] = useState("");
  const [typedIssueTitle, setTypedIssueTitle] = useState("");
  const [typedIssueDescription, setTypedIssueDescription] = useState("");
  const [typedDiagnosisDetailsText, setTypedDiagnosisDetailsText] = useState("");

  useEffect(() => {
    setTypedConfidence("");
    setTypedIssueTitle("");
    setTypedIssueDescription("");
    setTypedDiagnosisDetailsText("");

    const confidenceText = "Identified with 91% confidence";
    const issueTitleText = "Yellowing Leaves";
    const issueDescriptionText = "This can be caused by overwatering, underwatering, or nutrient deficiencies. Check soil moisture and consider fertilizing.";
    const diagnosisDetailsText = "Plant Diagnosis Details...";

    let confidenceIndex = 0;
    const typeConfidence = () => {
      if (confidenceIndex < confidenceText.length) {
        setTypedConfidence(confidenceText.substring(0, confidenceIndex + 1));
        confidenceIndex++;
        setTimeout(typeConfidence, 40);
      } else {
        setTimeout(() => {
          let titleIndex = 0;
          const typeIssueTitle = () => {
            if (titleIndex < issueTitleText.length) {
              setTypedIssueTitle(issueTitleText.substring(0, titleIndex + 1));
              titleIndex++;
              setTimeout(typeIssueTitle, 60);
            } else {
              setTimeout(() => {
                let descIndex = 0;
                const typeIssueDescription = () => {
                  if (descIndex < issueDescriptionText.length) {
                    setTypedIssueDescription(issueDescriptionText.substring(0, descIndex + 1));
                    descIndex++;
                    setTimeout(typeIssueDescription, 30);
                  }
                };
                typeIssueDescription();
              }, 300);
            }
          };
          typeIssueTitle();
        }, 500);
      }
    };
    setTimeout(typeConfidence, 800);

    setTimeout(() => {
      let detailsIndex = 0;
      const typeDiagnosisDetails = () => {
        if (detailsIndex < diagnosisDetailsText.length) {
          setTypedDiagnosisDetailsText(diagnosisDetailsText.substring(0, detailsIndex + 1));
          detailsIndex++;
          setTimeout(typeDiagnosisDetails, 80);
        }
      };
      typeDiagnosisDetails();
    }, 3000); // Start typing diagnosis details after other animations
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Areca Palm</h2>
          <p className="text-green-600 mb-4">
            {typedConfidence}
            {typedConfidence.length < "Identified with 91% confidence".length && (
              <span className="inline-block w-0.5 h-4 bg-green-600 ml-1 animate-pulse"></span>
            )}
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Photos</h3>
          <div className="mb-6">
            {/* {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={`/areca-palm-${i}.png`} // Assuming you have these images in public/assets
                  alt={`Plant photo ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))} */}
            <img src="/arecapalm.png"
              alt="Image"
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center">
            <div className="flex-1">
              <h3 className="text-green-600 font-semibold mb-2">Common Issues</h3>
              <h4 className="font-bold text-gray-800 mb-2">
                {typedIssueTitle}
                {typedIssueTitle.length < "Yellowing Leaves".length && (
                  <span className="inline-block w-0.5 h-4 bg-gray-800 ml-1 animate-pulse"></span>
                )}
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                {typedIssueDescription}
                {typedIssueDescription.length < "This can be caused by overwatering, underwatering, or nutrient deficiencies. Check soil moisture and consider fertilizing.".length && (
                  <span className="inline-block w-0.5 h-3 bg-gray-600 ml-1 animate-pulse"></span>
                )}
              </p>
            </div>
            <div className="ml-4">
              <img
                src="/yellowing-leaves.png"
                alt="Yellowing leaves"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <button
          onClick={onDiagnosisDetailsClick}
          className="w-full text-left text-gray-600 font-medium py-2 hover:text-green-600 transition-colors"
        >
          {typedDiagnosisDetailsText}
          {typedDiagnosisDetailsText.length < "Plant Diagnosis Details...".length && (
            <span className="inline-block w-0.5 h-4 bg-gray-600 ml-1 animate-pulse"></span>
          )}
        </button>
      </div>

      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around py-3 max-w-sm mx-auto">
          <button className="flex flex-col items-center">
            <Home className="w-6 h-6 text-green-500" />
            <span className="text-xs text-green-500">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <Search className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Identify</span>
          </button>
          <button className="flex flex-col items-center">
            <Leaf className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">My Garden</span>
          </button>
          <button className="flex flex-col items-center">
            <ShoppingCart className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Shop</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantIdScreen;