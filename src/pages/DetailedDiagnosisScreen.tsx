import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DetailedDiagnosisScreen: React.FC = () => {
  const [typedDiagnosisTitle, setTypedDiagnosisTitle] = useState("");
  const [, setTypedMagnesiumDeficiency] = useState("");
  const [, setTypedBlackSpot] = useState("");
  const [, setTypedSolutionsText] = useState("");

  const [, setTypedConfidence] = useState("");
  const [typedIssueTitle, setTypedIssueTitle] = useState("");
  const [typedIssueDescription, setTypedIssueDescription] = useState("");
  const [, setTypedDiagnosisDetailsText] = useState("");
  const [, setVisibleSolutions] = useState(0);

  useEffect(() => {
    setTypedDiagnosisTitle("");
    setTypedMagnesiumDeficiency("");
    setTypedBlackSpot("");
    setTypedSolutionsText("");
    setVisibleSolutions(0);

    const diagnosisText = "✨ Genie AI has detected Areca Palm Black Spot disease with 86% confidence.";
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
              setTimeout(typeIssueTitle, 30);
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
              }, 400);
            }
          };
          typeIssueTitle();
        }, 400);
      }
    };
    setTimeout(typeConfidence, 2000);

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
    }, 4000); // Start typing diagnosis details after other animations
  }, []);


  return (
    <div className="min-h-screen bg-white">
      <div className="px-3 py-8">
        <div className="text-center mb-8">
          <div className='relative mb-4'>
            <img src="/disease.png"
              alt="disease"
              className='rounded-lg'
            />
            <div className='flex flex-col gap-1 absolute bottom-10 right-4 items-end'>
              <p className='animate-border inline-block rounded-md bg-white/80 bg-gradient-to-r from-green-600 via-green-400 to-green-700 bg-[length:400%_400%] p-1'>
                <span className="block rounded-md bg-white/80 p-2 font-bold text-black">Magnesium Deficiency</span>
              </p>
              <p className=' animate-border inline-block rounded-md bg-white/80 bg-gradient-to-r from-green-600 via-green-400 to-green-700 bg-[length:400%_400%] p-1'>
                <span className="block rounded-md bg-white/80 p-2 font-bold text-black">Black Spot</span>
              </p>
            </div>
          </div>

          <p className="text-black mb-4">
            {typedDiagnosisTitle}
            {typedDiagnosisTitle.length < '✨ Genie AI has detected Areca Palm Black Spot disease with 86% confidence.'.length && (
              <span className="inline-block w-0.5 h-4 bg-green-600 ml-1 animate-pulse"></span>
            )}
          </p>

          <div className="rounded-lg my-8">
            <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center gap-1">
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
                  className="w-auto h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <Link
          to={"/solution"}
          className='bg-[#108244] text-white w-full px-4 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex justify-center items-center gap-1 mt-4'
          >
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailedDiagnosisScreen;