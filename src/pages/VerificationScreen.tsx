// src/screens/VerificationScreen.tsx
import React, { useRef } from 'react';

interface VerificationScreenProps {
    otpCode: string[];
    setOtpCode: (otp: string[]) => void;
    onConfirmClick: () => void;
}

const VerificationScreen: React.FC<VerificationScreenProps> = ({ otpCode, setOtpCode, onConfirmClick }) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleOtpChange = (index: number, value: string) => {
        if (value.length <= 1) {
            const newOtp = [...otpCode];
            newOtp[index] = value;
            setOtpCode(newOtp);

            // Move focus to the next input if a digit is entered
            if (value && index < 3) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const setInputRef = (el: HTMLInputElement | null, index: number) => {
        inputRefs.current[index] = el;
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
            // Move focus to the previous input on backspace if current is empty
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center px-3">
            <div className="text-center mb-12">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Verification Code</h1>
                <p className="text-gray-600">We have sent the verification code to your mobile number</p>
            </div>

            <div className='flex flex-col'>
                <div className="flex justify-center gap-4 mb-3">
                    {otpCode.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            data-index={index}
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            ref={(el) => setInputRef(el, index)}
                            className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                        />
                    ))}
                </div>
                <div className='flex justify-end text-gray-600 text-sm mb-4 mr-16 gap-1'>
                    <button className=' border-b border-green-500 text-green-600'>
                        Resend OTP
                    </button>
                </div>
            </div>





            <button
                onClick={onConfirmClick}
                className="w-full bg-green-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
            >
                Confirm
            </button>
        </div>
    );
};

export default VerificationScreen;