import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import NavigationDots from './Component/NavigationDots'; // Assuming this component exists
import { AppRoutes } from './routes/index'; // Import your route constants

// Import all screen components
import SplashScreen from './pages/SplashScreen';
import PlantCategoriesScreen from './pages/PlantCategoriesScreen';
import VerificationScreen from './pages/VerificationScreen';
import TutorialScreen from './pages/TutorialScreen';
import PhoneLoginScreen from './pages/PhoneLoginScreen';
import PlantIdScreen from './pages/PlantIdScreen';
import RecommendedSolutionScreen from './pages/RecommendedSolutionScreen';
import AIChatScreen from './pages/AIChatScreen';
import DetailedDiagnosisScreen from './pages/DetailedDiagnosisScreen';

// Main App component responsible for routing and global state
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [otpCode, setOtpCode] = useState<string[]>(["", "", "", ""]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showRobotAnimation, setShowRobotAnimation] = useState(true);
  const [chatMessage, setChatMessage] = useState("");

  // Define the order of routes
  const orderedRoutes = [
    AppRoutes.Splash,
    AppRoutes.Categories,
    AppRoutes.PhoneLogin,
    AppRoutes.Verification,
    AppRoutes.Tutorial,
    AppRoutes.AIChat,
    // AppRoutes.PlantId,
    AppRoutes.DetailedDiagnosis,
    AppRoutes.RecommendedSolution,
  ];

  // Determine current screen index for navigation dots
  const currentScreenIndex = orderedRoutes.indexOf(location.pathname);

  // Handlers for screen transitions using navigate
  const handleSplashScreenComplete = () => navigate(AppRoutes.Categories);
  const handleLoginClick = () => navigate(AppRoutes.PhoneLogin);
  const handleGetOtpClick = () => navigate(AppRoutes.Verification);
  const handleConfirmOtpClick = () => navigate(AppRoutes.Tutorial);
  const handleCameraClick = () => navigate(AppRoutes.AIChat);
  const handleDiagnosisDetailsClick = () => navigate(AppRoutes.DetailedDiagnosis);
  const handleContinueToChatClick = () => navigate(AppRoutes.AIChat);
  const handleGetRecommendationClick = () => navigate(AppRoutes.DetailedDiagnosis); // From AI Chat to Detailed Diagnosis

  // Handle dot clicks for direct navigation
  const handleDotClick = (index: number) => {
    if (index >= 0 && index < orderedRoutes.length) {
      navigate(orderedRoutes[index]);
    }
  };

  // This useEffect ensures the Splash Screen is shown first on initial load
  useEffect(() => {
    if (location.pathname === '/' && currentScreenIndex !== 0) {
      navigate(AppRoutes.Splash);
    }
  }, [location.pathname, currentScreenIndex, navigate]);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-xl min-h-screen relative overflow-hidden">
      <Routes>
        {/* Route for Splash Screen - This is the default route for '/' */}
        <Route
          path={AppRoutes.Splash}
          element={
            <SplashScreen
              setShowRobotAnimation={setShowRobotAnimation}
              showRobotAnimation={showRobotAnimation}
              onAnimationComplete={handleSplashScreenComplete}
            />
          }
        />
        {/* Route for Plant Categories Screen */}
        <Route
          path={AppRoutes.Categories}
          element={<PlantCategoriesScreen onLoginClick={handleLoginClick} />}
        />
        {/* Route for Phone Login Screen */}
        <Route
          path={AppRoutes.PhoneLogin}
          element={
            <PhoneLoginScreen
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              onGetOtpClick={handleGetOtpClick}
            />
          }
        />
        {/* Route for Verification Screen */}
        <Route
          path={AppRoutes.Verification}
          element={
            <VerificationScreen
              otpCode={otpCode}
              setOtpCode={setOtpCode}
              onConfirmClick={handleConfirmOtpClick}
            />
          }
        />
        {/* Route for Tutorial Screen */}
        <Route
          path={AppRoutes.Tutorial}
          element={<TutorialScreen onCameraClick={handleCameraClick} />}
        />
        {/* Route for Plant ID Screen */}
        <Route
          path={AppRoutes.PlantId}
          element={<PlantIdScreen onDiagnosisDetailsClick={handleDiagnosisDetailsClick} />}
        />
        {/* Route for Recommended Solution Screen */}
        <Route
          path={AppRoutes.RecommendedSolution}
          element={<RecommendedSolutionScreen onContinueToChatClick={handleContinueToChatClick} />}
        />
        {/* Route for AI Chat Screen */}
        <Route
          path={AppRoutes.AIChat}
          element={
            <AIChatScreen
              chatMessage={chatMessage}
              setChatMessage={setChatMessage}
              onGetRecommendationClick={handleGetRecommendationClick}
            />
          }
        />
        {/* Route for Detailed Diagnosis Screen */}
        <Route path={AppRoutes.DetailedDiagnosis} element={<DetailedDiagnosisScreen />} />
      </Routes>

      {/* Navigation Dots - only show on screens where it's relevant */}
      {location.pathname !== AppRoutes.Splash && ( // Don't show dots on splash screen
        <NavigationDots screensCount={orderedRoutes.length} currentScreen={currentScreenIndex} onDotClick={handleDotClick} />
      )}
    </div>
  );
};

// Wrapper for BrowserRouter
const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
