import React, { useState, useEffect } from 'react';
//import doctorImage from '/Images/doctor-image.png'; // Ensure you have an image at this path
//C:\Prenaya-task\prenaya-fe-project-1\src\Images\doctor-image.png
const ContactUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="w-full">

            {/* ================= ABOUT SECTION ================= */}
            <section
                className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 px-4"
                style={{
                    height: '361px',
                    minHeight: '250px',
                    maxHeight: '450px'
                }}
            >
                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}
                    ></div>
                </div>

                {/* Content */}
                <div
                    className={`relative z-10 w-full max-w-screen-xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        Get in Touch
                    </h1>

                    <p className="text-sm sm:text-base md:text-md lg:text-xl text-blue-50 font-light tracking-wide">
                        We’re here to help you on your journey to a better mind. Reach out to us with any questions or to schedule a session. We look forward to hearing from you.
                    </p>

                    <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3">
                        <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-white"></div>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center bg-gray-50 py-10 px-4 md:px-10">

                {/* Main Container (Exact Desktop Size) */}
                <div
                    className="w-full max-w-[1440px] bg-white rounded-xl shadow-sm p-6 md:p-12"
                    style={{ minHeight: "661px" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* ================= LEFT SIDE - INFO ================= */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-8">
                                Contact Information
                            </h2>

                            {/* Email */}
                            <div className="flex items-start gap-3 mb-6">
                                <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                </span>
                                <div>
                                    <p className="font-semibold text-sm">Email:</p>
                                    <p className="text-sm text-gray-600">
                                        mailto:contact@sohammind.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3 mb-6">
                                <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                </span>
                                <div>
                                    <p className="font-semibold text-sm">Phone:</p>
                                    <p className="text-sm text-gray-600">+91 7083666699</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-3 mb-6">
                                <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                </span>
                                <div>
                                    <p className="font-semibold text-sm">Location:</p>
                                    <p className="text-sm text-gray-600">
                                        FG06+93V Mall, Nanded City, Nanded, Pune, Maharashtra 411068
                                    </p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-start gap-3 mb-8">
                                <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                </span>
                                <div>
                                    <p className="font-semibold text-sm">Business Hours:</p>
                                    <p className="text-sm text-gray-600">
                                        Monday – Saturday: 10:00 AM – 6:00 PM <br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                                <iframe
                                    title="map"
                                    src="https://maps.google.com/maps?q=nanded%20city%20pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full border-0"
                                ></iframe>
                            </div>
                        </div>

                        {/* ================= RIGHT SIDE - FORM ================= */}
                        <div>
                            <form className="space-y-5">

                                <div>
                                    <label className="text-sm font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Email address</label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Phone</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Message</label>
                                    <textarea
                                        placeholder="Type your message here..."
                                        rows="3"
                                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition"
                                >
                                    Send message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= CTA SECTION (Exact 1440 x 385) ================= */}
            <section className="w-full flex justify-center items-center bg-gray-100 py-16">
                <div
                    className="rounded-2xl bg-gradient-to-br from-[#445b8f] to-[#7f93b8] flex flex-col items-center justify-center text-center shadow-xl"
                    style={{ width: '90%', height: '300px', maxWidth: '1440px' }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Begin Your Transformation?
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-md text-sm font-semibold transition">
                            Book a session now
                        </button>

                        <button className="bg-white hover:bg-gray-100 text-[#445b8f] px-6 py-3 rounded-md text-sm font-semibold transition border border-white">
                            Contact Via What’sApp
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;