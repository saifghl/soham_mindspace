import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PatientNotifications.css';

const PatientNotifications = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All');

    // Mock data based on design
    const allNotifications = [
        { id: 1, type: 'reminder', text: 'Please attend all scheduled sessions on time.', date: '2h ago', read: false },
        { id: 2, type: 'info', text: 'Remember, progress takes time — be patient with yourself.', date: '5h ago', read: true },
        { id: 3, type: 'appointment', text: 'Your appointment with Dr. Sachin Potdar is confirmed for tomorrow.', date: '1d ago', read: true },
    ];

    const tabs = ['All', 'Unread', 'Appointments', 'Reminders'];

    const getFilteredNotifications = () => {
        if (activeTab === 'All') return allNotifications;
        if (activeTab === 'Unread') return allNotifications.filter(n => !n.read);
        if (activeTab === 'Appointments') return allNotifications.filter(n => n.type === 'appointment');
        if (activeTab === 'Reminders') return allNotifications.filter(n => n.type === 'reminder');
        return allNotifications;
    };

    return (
        <div className="notifications-page">
            <header className="page-header">
                <div className="brand-logo">sohaam mindpower</div>
                <div className="user-profile-icon">
                    <img src="https://ui-avatars.com/api/?name=Jane+Doe&background=random" alt="Profile" />
                </div>
            </header>

            <main className="notifications-content">
                <div className="back-nav">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>Your Updates</h1>
                </div>

                <div className="tabs-container">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {activeTab === tab && <span className="active-dot"></span>}
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="notification-list">
                    {getFilteredNotifications().map(note => (
                        <div key={note.id} className="notification-card">
                            <p>{note.text}</p>
                        </div>
                    ))}
                    {getFilteredNotifications().length === 0 && (
                        <div className="empty-state">No updates in this category.</div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default PatientNotifications;
