import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaHandsHelping, FaBuilding } from 'react-icons/fa';
import logo from "./assets/logo1.png";

export default function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleUserTypeSelection = (type) => {
    if (type === 'recipient') navigate('/needy/register');
    if (type === 'donor') navigate('/donor/signup');
    if (type === 'ngo') navigate('/ngo/ngo-details');
  };

  return (
    <div className="min-h-screen dark bg-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center backdrop-blur-md bg-gray-900/90 shadow-lg border-b border-gray-700 transition-all duration-300">
        <div className="flex items-center gap-2 md:gap-3">
          <Link to="/" className="flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform">
            <img src={logo} alt="HopeBridge Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md" />
            <h1 className="text-lg md:text-xl font-bold gradient-text">HopeBridge</h1>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="flex items-center gap-1 md:gap-2 text-gray-200 hover:text-indigo-400 transition">
            <FaArrowLeft className="text-xs md:text-sm" />
            <span className="text-xs md:text-sm hidden sm:inline">Back to Home</span>
            <span className="text-xs md:text-sm sm:hidden">Back</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Join Our Community
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your role and become part of our mission to connect donors with those in need.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full justify-items-center">

          {/* NEEDY CARD */}
          <div 
            onClick={() => handleUserTypeSelection('recipient')}
            className="group cursor-pointer bg-gray-800 p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl w-full max-w-sm"
          >
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">I Need Help</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Register as someone in need. Connect with donors who can provide essential items, medicines, and support.
              </p>

              <ul className="text-gray-400 text-sm space-y-2 text-left mx-auto w-max">
                <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-indigo-500"></span>AI-powered Aadhaar verification</li>
                <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-indigo-500"></span>Quick profile setup</li>
                <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-indigo-500"></span>Access to donations</li>
              </ul>

              <button className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg transition-all">
                Register as Needy
              </button>
            </div>
          </div>



          {/* NGO CARD */}
          <div 
            onClick={() => handleUserTypeSelection('ngo')}
            className="group cursor-pointer bg-gray-800 p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl w-full max-w-sm"
          >
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaBuilding className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Register as NGO</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Register your organization, manage donation requests, and expand your impact through verified support.
              </p>

              <ul className="text-gray-400 text-sm space-y-2 text-left mx-auto w-max">
                <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Verified NGO onboarding</li>
                <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Organize donation drives</li>
                <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Connect with volunteers</li>
              </ul>

              <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-xl font-semibold shadow-lg transition-all">
                Become a Registered NGO
              </button>
            </div>
          </div>
          {/* DONOR CARD */}
          <div 
            onClick={() => handleUserTypeSelection('donor')}
            className="group cursor-pointer bg-gray-800 p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl w-full max-w-sm"
          >
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaHandsHelping className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">I Want To Help</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Become a donor and support those in need. Provide items, medicines, and essential resources.
              </p>

              <ul className="text-gray-400 text-sm space-y-2 text-left mx-auto w-max">
                <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-pink-500"></span>Easy donation tracking</li>
                <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-pink-500"></span>Impact monitoring</li>
                <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-pink-500"></span>Community connection</li>
              </ul>

              <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold shadow-lg transition-all">
                Become a Donor
              </button>
            </div>
          </div>

        </div>

        {/* HOW HOPEBRIDGE WORKS SECTION (unchanged) */}
        <div className="mt-16 text-center max-w-3xl">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">How HopeBridge Works</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="w-12 h-12 mx-auto mb-3 bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-indigo-400 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-white mb-1">Sign Up</h4>
                <p className="text-gray-300 text-sm">Choose your role and create your profile</p>
              </div>

              <div>
                <div className="w-12 h-12 mx-auto mb-3 bg-pink-900 rounded-full flex items-center justify-center">
                  <span className="text-pink-400 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-white mb-1">Connect</h4>
                <p className="text-gray-300 text-sm">Get matched with donors or recipients</p>
              </div>

              <div>
                <div className="w-12 h-12 mx-auto mb-3 bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-white mb-1">Impact</h4>
                <p className="text-gray-300 text-sm">Make a difference in your community</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
