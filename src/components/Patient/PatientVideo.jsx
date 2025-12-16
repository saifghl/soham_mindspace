import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './PatientVideo.css';

import PatientSideBar from './PatientSideBar';

const PatientVideo = () => {
    const navigate = useNavigate();

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <PatientSideBar />
            <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full">
                <header className="flex items-center gap-4 mb-8">
                    <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50" onClick={() => navigate(-1)}>
                        <ArrowLeft size={24} className="text-gray-700" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Finding calm Through the Breath</h1>
                        <p className="text-gray-500">Discover a simple breathing technique to find peace and tranquility</p>
                    </div>
                </header>

                <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/inpok4MKVLM"
                        title="Finding calm Through the Breath"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default PatientVideo;
