import { useState } from "react";
import { server_url } from "./config/url";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


function DonorDetails() {
    const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1); // Go back to previous page
  };
  // Common fields (used in both sections)
  const [commonData, setCommonData] = useState({
    emailid: "",
    contactno: ""
  });

  // Donor-specific fields
  const [donorData, setDonorData] = useState({
    name: "",
    age: "",
    gender: "",
    curcity: "",
    curaddress: "",
    qualification: "",
    occupation: "",
    adhaarpic: null,
    profilepic: null
  });

  // Medicine-specific fields
  const [medicineData, setMedicineData] = useState({
    medicine: "",
    company: "",
    expdate: "",
    packing: "",
    qty: "",
    info: ""
  });

  const [previewAadhaar, setPreviewAadhaar] = useState("");
  const [previewProfile, setPreviewProfile] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  
  function handleCommonChange(event) {
    const { name, value } = event.target;
    setCommonData({ ...commonData, [name]: value });
  }

  function handleDonorChange(event) {
    const { name, value } = event.target;
    setDonorData({ ...donorData, [name]: value });
  }

  function handleMedicineChange(event) {
    const { name, value } = event.target;
    setMedicineData({ ...medicineData, [name]: value });
  }

  function handleAadhaarImage(event) {
    const file = event.target.files[0];
    if (file) {
      setDonorData({ ...donorData, adhaarpic: file });
      setPreviewAadhaar(URL.createObjectURL(file));
    }
  }

  function handleProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
      setDonorData({ ...donorData, profilepic: file });
      setPreviewProfile(URL.createObjectURL(file));
    }
  }

  async function saveDonor() {
    // Basic validation: require email, name and contact
    if (!commonData.emailid || !donorData.name || !commonData.contactno) {
      setMessage("⚠️ Please fill in email, name, and contact number");
      return;
    }

    try {
      const fd = new FormData();
      // common fields
      fd.append('emailid', commonData.emailid);
      fd.append('contact', commonData.contactno);

      // donor fields (append only non-empty values)
      const donorKeys = ['name','age','gender','curcity','curaddress','qualification','occupation'];
      donorKeys.forEach(k => {
        if (donorData[k] !== undefined && donorData[k] !== null && donorData[k] !== '') fd.append(k, donorData[k]);
      });

      // files: append if present
      if (donorData.adhaarpic) fd.append('adhaarpic', donorData.adhaarpic);
      if (donorData.profilepic) fd.append('profilepic', donorData.profilepic);

      const resp = await fetch(server_url + '/donor/save', {
        method: 'POST',
        body: fd,
      });

      const data = await resp.json();

      // Show non-blocking feedback; show modal on success
      if (data.status === true) {
        const msg = (data.msg || 'Donor saved successfully');
        setMessage('✅ ' + msg);
        setSuccessMessage(msg);
        setShowSuccessModal(true);
      } else {
        setMessage((data.msg ? 'ℹ️ ' + data.msg : 'ℹ️ Server response received'));
      }
    } catch (error) {
      console.error('Error saving donor:', error);
      setMessage('❌ Error saving data: ' + (error.message || error));
    }
  }

  async function donateMedicine() {
    const { medicine, company, expdate, packing, qty } = medicineData;

    if (!commonData.emailid || !commonData.contactno || !medicine || !company || !expdate || !packing || !qty) {
      setMessage("⚠️ Please fill all required fields including email, contact, and medicine details");
      return;
    }

    if (qty <= 0) {
      setMessage("⚠️ Quantity must be greater than 0");
      return;
    }

    try {
      let fd = new FormData();
      fd.append("emailid", commonData.emailid);
      fd.append("contactno", commonData.contactno);
      for (let prop in medicineData) {
        fd.append(prop, medicineData[prop]);
      }

      const resp = await fetch(server_url + '/medicine/save', {
        method: 'POST',
        body: fd,
      });

      const data = await resp.json();

      if (data.status === true) {
        const msg = data.msg || 'Medicine donation saved';
        setMessage("✅ " + msg);
        setSuccessMessage(msg);
        setShowSuccessModal(true);
        // Clear medicine form after successful donation
        setMedicineData({
          medicine: "",
          company: "",
          expdate: "",
          packing: "",
          qty: "",
          info: ""
        });
      } else {
        setMessage("❌ " + data.msg);
      }
    } catch (error) {
      console.error("Error donating medicine:", error);
      setMessage("❌ Error saving medicine: " + error.message);
    }
  }

  return (
    <>
    {/* Navbar */}
          <nav className="fixed w-full z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
            <div className="flex items-center gap-2 md:gap-3">
              <Link to="/" className="flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform">
                <img src={"/icon.png"} alt="HopeBridge Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md" />
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
            
            </div>
          </nav>
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 p-4">
       
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 pt-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl mt-7 font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 leading-normal">
            Donor Registration
          </h1>
          <p className="text-gray-300 text-lg">
            Complete Donor Registration & Medicine Donation System
          </p>
        </div>
      </div>

      {/* Message Display */}
      {message && (
        <div className="max-w-7xl mx-auto mb-6">
          <div className="bg-gray-800/70 backdrop-blur-lg border border-gray-700 rounded-xl p-4 text-center">
            <p className="text-white text-sm md:text-base">{message}</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Common Information Section */}
        <div className="bg-gray-800/50 backdrop-blur-xl shadow-2xl p-6 md:p-8 rounded-3xl border border-gray-700/50">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              📧 Contact Information
            </h2>
            <p className="text-gray-300 text-sm">
              This information will be used for both donor registration and medicine donations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Email ID *</label>
              <input
                name="emailid"
                type="email"
                value={commonData.emailid}
                onChange={handleCommonChange}
                placeholder="Enter your email address"
                className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Contact Number *</label>
              <input
                name="contactno"
                type="tel"
                value={commonData.contactno}
                onChange={handleCommonChange}
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Donor Details Section */}
        <div className="bg-gray-800/50 backdrop-blur-xl shadow-2xl p-6 md:p-8 rounded-3xl border border-gray-700/50">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
              👤 Donor Details
            </h2>
            <p className="text-gray-300 text-sm">
              Complete your profile information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Name *</label>
              <input
                name="name"
                value={donorData.name}
                onChange={handleDonorChange}
                placeholder="Name"
                className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Age</label>
              <input
                name="age"
                type="number"
                value={donorData.age}
                onChange={handleDonorChange}
                placeholder="Age"
                className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Gender</label>
              <select
                name="gender"
                value={donorData.gender}
                onChange={handleDonorChange}
                className="w-full p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Current City</label>
              <input
                name="curcity"
                value={donorData.curcity}
                onChange={handleDonorChange}
                placeholder="Current City"
                className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-gray-300">Current Address</label>
              <input
                name="curaddress"
                value={donorData.curaddress}
                onChange={handleDonorChange}
                placeholder="Current Address"
                className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Qualification</label>
              <select
                name="qualification"
                value={donorData.qualification}
                onChange={handleDonorChange}
                className="w-full p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              >
                <option value="">Select Qualification</option>
                <option value="Below 10th">Below 10th</option>
                <option value="10th Pass">10th Pass</option>
                <option value="12th Pass">12th Pass</option>
                <option value="Diploma">Diploma</option>
                <option value="Graduate">Graduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="PhD">PhD</option>
                <option value="MBBS">MBBS</option>
                <option value="MD">MD</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Occupation</label>
              <select
                name="occupation"
                value={donorData.occupation}
                onChange={handleDonorChange}
                className="w-full p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              >
                <option value="">Select Occupation</option>
                <option value="Student">Student</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Private Job">Private Job</option>
                <option value="Government Job">Government Job</option>
                <option value="Business">Business</option>
                <option value="Retired">Retired</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Aadhaar Card</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAadhaarImage}
                className="w-full p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 file:bg-emerald-500 file:text-white file:rounded-md file:px-4 file:py-2 file:border-0 file:font-medium hover:file:bg-emerald-600 transition-all text-sm"
              />
              {previewAadhaar && (
                <img src={previewAadhaar} alt="Aadhaar Preview" className="mt-3 w-32 h-32 rounded-lg object-cover border-2 border-emerald-500 shadow-md" />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Profile Picture *</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImage}
                className="w-full p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 file:bg-pink-500 file:text-white file:rounded-md file:px-4 file:py-2 file:border-0 file:font-medium hover:file:bg-pink-600 transition-all text-sm"
              />
              {previewProfile && (
                <img src={previewProfile} alt="Profile Preview" className="mt-3 w-32 h-32 rounded-lg object-cover border-2 border-pink-500 shadow-md" />
              )}
            </div>
          </div>

          {/* Medicine Section Inside Donor Card */}
          <div className="mt-12 pt-8 border-t border-gray-600">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                💊 Avail Medicine Details
              </h2>
              <p className="text-gray-300 text-sm">
                Share unused medicines with those in need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Medicine Name *</label>
                <input
                  name="medicine"
                  value={medicineData.medicine}
                  onChange={handleMedicineChange}
                  placeholder="Medicine Name"
                  className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Company *</label>
                <input
                  name="company"
                  value={medicineData.company}
                  onChange={handleMedicineChange}
                  placeholder="Company"
                  className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Expiry Date *</label>
                <input
                  name="expdate"
                  type="date"
                  value={medicineData.expdate}
                  onChange={handleMedicineChange}
                  className="w-full p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Quantity *</label>
                <input
                  name="qty"
                  type="number"
                  value={medicineData.qty}
                  onChange={handleMedicineChange}
                  placeholder="Quantity"
                  min="1"
                  className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2 text-gray-300">Packing *</label>
                <input
                  name="packing"
                  value={medicineData.packing}
                  onChange={handleMedicineChange}
                  placeholder="Packing"
                  className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold mb-2 text-gray-300">Other Info</label>
              <textarea
                name="info"
                value={medicineData.info}
                onChange={handleMedicineChange}
                rows="3"
                placeholder="Add any special instructions or medicine condition..."
                className="w-full p-3 rounded-xl bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              ></textarea>
            </div>

            {/* Medicine Donation Button */}
            <button
              onClick={donateMedicine}
              className="w-full mt-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Save and Avail To Public
            </button>
          </div>
        </div>
      
        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Success</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{successMessage}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-12 pb-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2024 HopeBridge. Making healthcare accessible to everyone.
        </p>
      </div>
    </div>
    </>
  );
}

export default DonorDetails;