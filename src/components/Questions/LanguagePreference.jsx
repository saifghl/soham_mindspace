
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LanguagePreference = () => {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const languages = [
        'English',
        'Hindi',
        'Kannada',
        'Malayalam',
        'Marathi',
        'Tamil',
        'Telugu',
    ];

    return (
        <div className="h-screen bg-gray-50 flex flex-col font-sans overflow-hidden">
            {/* Header */}
            <header className="flex justify-between items-center p-3 md:p-4 bg-white md:bg-transparent shrink-0">
                <h1 className="text-lg md:text-xl font-bold text-blue-600">sohaam mindpower</h1>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-200">
                    {/* Placeholder for user avatar */}
                    <img
                        src="https://ui-avatars.com/api/?name=User&background=random"
                        alt="User Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center relative px-4 min-h-0">

                {/* Back Arrow - Adjusted position */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-2 left-4 md:left-20 md:top-6 text-black hover:text-gray-700 transition-colors z-10"
                    aria-label="Go back"
                >
                    <ArrowLeft size={24} className="md:w-8 md:h-8" />
                </button>

                {/* Main Card */}
                <div className="bg-[#FFF8E7] w-full max-w-lg rounded-lg p-5 md:p-8 shadow-sm flex flex-col max-h-full overflow-y-auto">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-[#FCC565] mb-1">
                        Language Preference
                    </h2>
                    <p className="text-center text-gray-700 mb-4 text-sm md:text-base font-medium">
                        Choose your preferred language for free assessment
                    </p>

                    <div className="space-y-2 overflow-y-auto custom-scrollbar">
                        {languages.map((language) => (
                            <button
                                key={language}
                                onClick={() => setSelectedLanguage(language)}
                                className={`w-full py-2 px-4 rounded-md border text-center font-medium transition-all duration-200 text-sm md:text-base
                  ${selectedLanguage === language
                                        ? 'bg-white border-[#FCC565] shadow-md text-black'
                                        : 'bg-white border-gray-200 text-gray-700 hover:border-[#FCC565]'}
                `}
                            >
                                {language}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col items-center mt-4 md:mt-6 shrink-0">
                        <button
                            className="bg-[#FCC565] text-black font-semibold py-2 px-12 md:py-3 md:px-16 rounded-lg hover:bg-[#fab845] transition-colors shadow-sm text-sm md:text-base"
                            onClick={() => {
                                if (selectedLanguage) {
                                    // Navigate to next step or handle selection
                                    console.log('Selected:', selectedLanguage);
                                }
                            }}
                        >
                            Next
                        </button>

                        <button
                            onClick={() => navigate(-1)}
                            className="mt-2 text-xs md:text-sm text-gray-600 hover:underline"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Line (Visual Element from design) */}
            <div className="w-full max-w-4xl mx-auto h-[2px] bg-gray-300 mb-4 md:mb-8 rounded-full shrink-0"></div>

        </div>
    );
};

export default LanguagePreference;
