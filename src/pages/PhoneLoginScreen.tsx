// src/screens/PhoneLoginScreen.tsx
import React from 'react';

interface PhoneLoginScreenProps {
    phoneNumber: string;
    setPhoneNumber: (phone: string) => void;
    onGetOtpClick: () => void;
}

const PhoneLoginScreen: React.FC<PhoneLoginScreenProps> = ({ phoneNumber, setPhoneNumber, onGetOtpClick }) => {

    const formatPhoneNumber = (value: string) => {
        const digitsOnly = value.replace(/\D/g, '');

        if (digitsOnly.length > 5) {
            return digitsOnly.slice(0, 5) + ' ' + digitsOnly.slice(5, 10);
        }
        return digitsOnly.slice(0, 10);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center px-3">
            <div className="w-full max-w-sm mx-auto">
                <div className="text-center mb-12">
                    <div className='flex justify-center'>
                        <img src="/robot.png" alt="" />
                    </div>
                    <h1 className="text-2xl font-light text-gray-900 mb-2">Lets get started</h1>
                    <p className="text-gray-500 text-sm">Enter your phone number to continue</p>
                </div>

                <div className="mb-8">
                    <label className="block text-gray-700 text-sm font-medium mb-3" htmlFor="phoneNumber">Phone Number</label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                            <span className="text-gray-500 text-sm mr-2">🇮🇳</span>
                            <span className="text-gray-700 text-sm">+91</span>
                        </div>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                            placeholder="Enter 10-digit number"
                            className="w-full pl-20 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 text-lg transition-all"
                            maxLength={11}
                            autoFocus
                        />
                    </div>
                </div>

                <button
                    onClick={onGetOtpClick}
                    disabled={phoneNumber.replace(/\D/g, '').length !== 10}
                    className={`w-full py-4 rounded-2xl text-lg font-medium transition-all ${phoneNumber.replace(/\D/g, '').length === 10 ? "bg-green-500 text-white hover:bg-green-600 shadow-lg" : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Get OTP
                </button>

                <p className="text-center text-gray-400 text-xs mt-6 leading-relaxed">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
            </div>
        </div>
    );
};

export default PhoneLoginScreen;