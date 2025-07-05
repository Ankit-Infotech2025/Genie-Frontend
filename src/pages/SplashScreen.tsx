import React, { useEffect } from 'react';

interface SplashScreenProps {
    setShowRobotAnimation: (show: boolean) => void;
    showRobotAnimation: boolean;
    onAnimationComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ setShowRobotAnimation, showRobotAnimation, onAnimationComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRobotAnimation(false);
            setTimeout(() => {
                onAnimationComplete();
            }, 500);
        }, 3000);
        return () => clearTimeout(timer);
    }, [setShowRobotAnimation, onAnimationComplete]);

return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
            <video
                src="/robot.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
            />
        </div>

        <div className="bg-white py-6 text-center w-full">
            <h2 className="text-2xl font-bold text-gray-800">Genie AI</h2>
            <p className="text-gray-600 text-lg">Your Gardening Buddy</p>
        </div>
    </div>
);
};

export default SplashScreen;