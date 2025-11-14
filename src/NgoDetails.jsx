import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun, FaArrowLeft } from 'react-icons/fa';
import logo from "./assets/logo1.png";
import { server_url } from "./config/url";



function NgoDetails () {
    const [ngoData, setNgoData] = useState({
        ngoname: "",
        curcity: "",
        curaddress: "",
        legEnType: "",
        regNumber: "",
        NADid: "",
        contact: ""
    });
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
    const toggleDarkMode = () => setDarkMode(!darkMode);
    useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);
    const handleGoBack = () => {
        navigate(-1); // Go back to previous page
    };
    function handleChange(event) {
        const { name, value } = event.target;
        setNgoData({ ...ngoData, [name]: value });
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className={`min-h-screen overflow-x-hidden ${darkMode ? "dark bg-gray-900" : "bg-gradient-to-br from-indigo-50 via-blue-50 to-violet-50"}`}>
         {/* Navbar */}
              <nav className="fixed w-full z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3">
                  <Link to="/" className="flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform">
                    <img src={logo} alt="HopeBridge Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md" />
                    <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                      HopeBridge
                    </h1>
                  </Link>
                </div>
                
                <div className="flex items-center gap-2 md:gap-4">
                  <button
                    onClick={handleGoBack}
                    className="flex items-center gap-1 md:gap-2 text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition hover:scale-105"
                  >
                    <FaArrowLeft className="text-xs md:text-sm" />
                    <span className="text-xs md:text-sm hidden sm:inline">Back</span>
                  </button>
                  <Link to="/" className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">
                    <FaArrowLeft className="text-sm" />
                    <span className="text-sm">Back to Home</span>
                  </Link>
                  <button
                      onClick={toggleDarkMode}
                      className="p-1 md:p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all"
                      title={darkMode ? "Light Mode" : "Dark Mode"}
                    >
                      {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
                    </button>
                </div>
              </nav>


        <div className="pt-20 md:pt-24 pb-6 md:pb-10 px-3 md:px-6 flex items-center justify-center w-full">
        <form className="w-full max-w-5xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl shadow-2xl p-4 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl space-y-4 md:space-y-6 border border-white/20 dark:border-gray-700/50 transition-all duration-300">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold   mb-3 md:mb-4 flex items-center justify-center gap-2 ">
              🤝 <span className="bg-gradient-to-r bg-clip-text font-bold text-transparent from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 leading-normal">NGO Registration</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base px-2">
              Join our community of NGOs and help make a difference in someone's life. Your contribution matters.
            </p>
          </div>

          {/* Email + Fetch */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
            <input
              name="ngoname"
              value={ngoData.ngoname}
              onChange={handleChange}
              placeholder="Email Address"
              className="flex-1 p-2 md:p-3 rounded-lg md:rounded-xl bg-white/20 dark:bg-gray-700/50 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm md:text-base"
            />
            {/* <input 
              type="button" 
              value="🔍 Fetch" 
              onClick={fetchData} 
              className="px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer text-sm md:text-base whitespace-nowrap" 
            /> */}
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            
            <input
              name="curcity"
              value={ngoData.curcity}
              onChange={handleChange}
              placeholder="Current City"
              className="p-2 md:p-3 rounded-lg md:rounded-xl bg-white/20 dark:bg-gray-700/50 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm md:text-base"
            />
            <input
              name="curaddress"
              value={ngoData.curaddress}
              onChange={handleChange}
              placeholder="Current Address"
              className="md:col-span-2 p-2 md:p-3 rounded-lg md:rounded-xl bg-white/20 dark:bg-gray-700/50 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm md:text-base"
            />

            {/* Qualification Dropdown */}
            <select
              name="qualification"
              value={ngoData.legEnType}
              onChange={handleChange}
              className="p-2 md:p-3 rounded-lg md:rounded-xl bg-white/20 dark:bg-gray-700/50 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm md:text-base"
            >
              <option className="text-gray-800" value="">Select Qualification</option>
              <option className="text-gray-800" value="Trust">Trust</option>
              <option className="text-gray-800" value="Society">Society</option>
            </select>

            {/* Occupation Dropdown */}
            <input
              name="regNumber"
              value={ngoData.regNumber}
              onChange={handleChange}
              className="p-2 md:p-3 rounded-lg md:rounded-xl bg-white/20 dark:bg-gray-700/50 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm md:text-base"
              placeholder="Registration Number"
            >
            </input>
            <input
              name="NADid"
              value={ngoData.NADid}
              onChange={handleChange}
              className="p-2 md:p-3 rounded-lg md:rounded-xl bg-white/20 dark:bg-gray-700/50 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm md:text-base"
              placeholder="NITI Aayog Darpan ID"
            >
            </input>
            <input
              name="contact"
              value={ngoData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              className="p-2 md:p-3 rounded-lg md:rounded-xl bg-white/20 dark:bg-gray-700/50 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm md:text-base"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-4 pt-4 md:pt-6">
            <input 
              type="button" 
              value="💾 Save" 
              className={`w-full md:w-1/2 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold shadow-lg transition-all text-sm`}
            />
            {/* <input 
              type="button" 
              value="✏️ Update" 
              onClick={doUpdate} 
              disabled={!hasDataChanged()}
              className={`w-full md:w-1/2 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold shadow-lg transition-all text-sm md:text-base ${
                !hasDataChanged() 
                  ? 'bg-gray-400 cursor-not-allowed opacity-50' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-xl hover:-translate-y-0.5 cursor-pointer'
              }`}
            /> */}
          </div>

          {/* Help message for disabled save button */}
          {/* {(!formData.profilepic && !previewProfile) && (
            <div className="mt-3 md:mt-4 text-center px-2">
              <p className="text-red-500 dark:text-red-400 text-xs md:text-sm font-medium">
                ⚠️ Please upload a profile picture to enable save button
              </p>
            </div>
          )} */}

          {/* Help message for disabled update button */}
          {/* {!hasDataChanged() && originalData.emailid && (
            <div className="mt-3 md:mt-4 text-center px-2">
              <p className="text-yellow-600 dark:text-yellow-400 text-xs md:text-sm font-medium">
                ℹ️ Make changes to the form or images to enable update button
              </p>
            </div>
          )} */}
        </form>
        </div>
        </div>
    );
}

export default NgoDetails;