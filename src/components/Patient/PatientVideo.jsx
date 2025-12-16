import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './PatientVideo.css';

const PatientVideo = () => {
    const navigate = useNavigate();

    return (
        <div className="patient-video-container">
            <header className="video-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={24} />
                </button>
                <div className="header-text">
                    <h1>Finding calm Through the Breath</h1>
                    <p>Discover a simple breathing technique to find peace and tranquility</p>
                </div>
                {/* Spacer for alignment if needed, or user profile icon similar to Figma */}
                <div style={{ width: '40px' }}></div>
            </header>

            <div className="video-content">
                <div className="video-wrapper">
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
