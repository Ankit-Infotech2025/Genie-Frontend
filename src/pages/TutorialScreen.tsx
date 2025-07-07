// src/screens/TutorialScreen.tsx
import React from 'react';
import { Camera } from 'lucide-react';
import { StepOne } from '../Shared/StepOne';
import { StepTwo } from '../Shared/StepTwo';

interface TutorialScreenProps {
    onCameraClick: () => void;
}

// const handleCameraClick = (inputRef: React.RefObject<HTMLInputElement>) => {
//     inputRef.current?.click();
// };

const TutorialScreen: React.FC<TutorialScreenProps> = ({ onCameraClick }) => {
    return (
        <div className="min-h-screen bg-white">
            <div className="px-6 py-6">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">How to use Genie Ai</h1>

                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-lg font-semibold text-gray-800">Step 1</h2>
                        <p className="text-gray-600 mb-2">Click Broad Plant Image</p>
                        <div className="relative inline-block">
                            <img
                                src="/tutorial-broad-plant.png"
                                alt="Broad plant view"
                                className="w-48 h-48 object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute top-2 right-2 w-6 h-6 font-bold flex items-center justify-center">
                                {/* <Info className="w-8 h-8 text-white"/> */}
                                <StepOne />
                            </div>
                            <div className='absolute bottom-2 right-2 w-8 h-8 font-bold bg-white rounded-full flex items-center justify-center'>
                                <button type="button">
                                    <Camera />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-lg font-semibold text-gray-800">Step 2</h2>
                        <p className="text-gray-600 mb-2">Click Affected Area close up Image</p>
                        <div className="relative inline-block">
                            <img
                                src="/tutorial-closeup.png"
                                alt="Close-up affected area"
                                className="w-48 h-48 object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute top-2 right-2 w-6 h-6 font-bold  rounded-full flex items-center justify-center">
                                {/* <Info className="w-8 h-8 text-white" /> */}
                                <StepTwo />
                            </div>
                            <div className='absolute bottom-2 right-2 w-8 h-8 font-bold bg-white rounded-full flex items-center justify-center'>
                                <button type="button">
                                    <Camera />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <button
                    onClick={onCameraClick}
                    className="w-full bg-[#108244] text-white py-3 rounded-full text-base font-semibold hover:bg-green-600 transition-all duration-500"
                    aria-label="Open camera"
                >
                    {/* <Camera className="w-12 h-12 text-black" /> */}
                    Upload
                </button>
            </div>
        </div>
    );
};

export default TutorialScreen;