import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const DetailedDiagnosisScreen: React.FC = () => {
  const [typedDiagnosisTitle, setTypedDiagnosisTitle] = useState("");
  const [, setTypedMagnesiumDeficiency] = useState("");
  const [, setTypedBlackSpot] = useState("");
  const [, setTypedSolutionsText] = useState("");

  const [typedConfidence, setTypedConfidence] = useState("");
  const [typedIssueTitle, setTypedIssueTitle] = useState("");
  const [typedIssueDescription, setTypedIssueDescription] = useState("");
  const [typedDiagnosisDetailsText, setTypedDiagnosisDetailsText] = useState("");

  const [, setVisibleSolutions] = useState(0);

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
          setTimeout(typeBlackSpot, 200); 

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
                      if (next < 4) {
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

  // Common issue typing Annimation
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
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <div className='relative mb-4'>
            <img src="/disease.png"
              alt=""
              className='rounded-lg'
            />
            {/* <div className='absolute bottom-4 right-4'> */}
              <p className='absolute top-10 left-4 w-32 border-4 border-green-600 text-black bg-white/80 px-2 py-1 rounded-lg text-lg font-semibold mb-2'>
                Magnesium Deficiency
              </p>
              <p className='absolute bottom-44 right-4 w-auto border-4 border-green-600 text-black bg-white/80 px-2 py-1 rounded-lg text-lg font-semibold'>
                Black Spot
              </p>
            {/* </div> */}
          </div>

          <p className="text-black mb-4">
            {typedDiagnosisTitle}
            {typedDiagnosisTitle.length < '✨ Genie AI has detected Black Spot disease with 86% confidence.'.length && (
              <span className="inline-block w-0.5 h-4 bg-green-600 ml-1 animate-pulse"></span>
            )}
          </p>

          <div className="rounded-lg my-8">
            <div className="flex items-center justify-center gap-1">
              <div className="flex-1 text-start">
                <h3 className="text-green-600 font-semibold">Common Issues</h3>
                <h4 className="font-bold text-gray-800">
                  {typedIssueTitle}
                  {typedIssueTitle.length < "Yellowing Leaves".length && (
                    <span className="inline-block w-0.5 h-4 bg-gray-800 ml-1 animate-pulse"></span>
                  )}
                </h4>
                <p className="text-green-600 text-sm mb-3">
                  {typedIssueDescription}
                  {typedIssueDescription.length < "This can be caused by overwatering, underwatering, or nutrient deficiencies. Check soil moisture and consider fertilizing.".length && (
                    <span className="inline-block w-0.5 h-3 bg-gray-600 ml-1 animate-pulse"></span>
                  )}
                </p>
              </div>
              <div className="">
                <img
                  src="/yellowing-leaves.png"
                  alt="Yellowing leaves"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="text-left space-y-6">
            {/* Magnesium Deficiency Solution */}
            <div className="">
              <h3 className="text-xl font-bold mb-1">Solution:</h3>
              <p className="text-sm mb-2">
                <strong>For Magnesium Deficiency :</strong> Epsom salt is a simple way to fix magnesium deficiency in plants. It contains magnesium and sulfur that helps plants make chlorophyll and protein respectively.
              </p>
              <p className="text-sm mb-2">
                <strong>For Black Spots :</strong>  Cut off leaves that have black spots and use Neem Oil Spray. It will kill all pests and fungi and provide overall growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedDiagnosisScreen;