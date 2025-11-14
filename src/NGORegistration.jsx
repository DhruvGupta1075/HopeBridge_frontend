import React, { useState, useEffect } from "react";
import { Building, Mail, Phone, MapPin, CreditCard, FileText, CheckCircle } from "lucide-react";
import {Link, useNavigate} from 'react-router-dom';
import { FaMoon, FaSun, FaArrowLeft } from 'react-icons/fa';
import logo from "./assets/logo1.png";


// Layout Component
const Layout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  </div>
);

// Section Component
const Section = ({ children, className = "" }) => (
  <section className={`py-8 ${className}`}>
    {children}
  </section>
);

// Card Component
const Card = ({ children, className = "" }) => (
  <div className={`bg-gray-800 rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);

// Button Component
const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
    outline: "border-2 border-gray-600 text-gray-200 hover:bg-gray-700"
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({ label, icon: Icon, error, ...props }) => (
  <div className="mb-4">
    {label && (
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
    )}
    <div className="relative">
      {Icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <input
        className={`w-full bg-gray-700 border ${error ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 ${Icon ? 'pl-11' : ''} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
        {...props}
      />
    </div>
    {error && (
      <p className="mt-1 text-sm text-red-400">{error}</p>
    )}
  </div>
);

// TextArea Component
const TextArea = ({ label, error, ...props }) => (
  <div className="mb-4">
    {label && (
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
    )}
    <textarea
      className={`w-full bg-gray-700 border ${error ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none`}
      rows="4"
      {...props}
    />
    {error && (
      <p className="mt-1 text-sm text-red-400">{error}</p>
    )}
  </div>
);

// Select Component
const Select = ({ label, options, error, ...props }) => (
  <div className="mb-4">
    {label && (
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
    )}
    <select
      className={`w-full bg-gray-700 border ${error ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && (
      <p className="mt-1 text-sm text-red-400">{error}</p>
    )}
  </div>
);

// Main NGO Registration Component
export default function NGORegistration() {
  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1); // Go back to previous page
  };

  const [formData, setFormData] = useState({
    ngoName: "",
    registrationNumber: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    type: "",
    description: "",
    contactPerson: "",
    contactPersonPhone: "",
    website: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const ngoTypes = [
    { value: "", label: "Select NGO Type" },
    { value: "charity", label: "Charitable Trust" },
    { value: "society", label: "Society" },
    { value: "section8", label: "Section 8 Company" },
    { value: "foundation", label: "Foundation" },
    { value: "other", label: "Other" }
  ];

  const indianStates = [
    { value: "", label: "Select State" },
    { value: "AN", label: "Andaman and Nicobar Islands" },
    { value: "AP", label: "Andhra Pradesh" },
    { value: "AR", label: "Arunachal Pradesh" },
    { value: "AS", label: "Assam" },
    { value: "BR", label: "Bihar" },
    { value: "CH", label: "Chandigarh" },
    { value: "CT", label: "Chhattisgarh" },
    { value: "DH", label: "Dadra and Nagar Haveli and Daman and Diu" },
    { value: "DL", label: "Delhi" },
    { value: "GA", label: "Goa" },
    { value: "GJ", label: "Gujarat" },
    { value: "HR", label: "Haryana" },
    { value: "HP", label: "Himachal Pradesh" },
    { value: "JK", label: "Jammu and Kashmir" },
    { value: "JH", label: "Jharkhand" },
    { value: "KA", label: "Karnataka" },
    { value: "KL", label: "Kerala" },
    { value: "LA", label: "Ladakh" },
    { value: "LD", label: "Lakshadweep" },
    { value: "MP", label: "Madhya Pradesh" },
    { value: "MH", label: "Maharashtra" },
    { value: "MN", label: "Manipur" },
    { value: "ML", label: "Meghalaya" },
    { value: "MZ", label: "Mizoram" },
    { value: "NL", label: "Nagaland" },
    { value: "OR", label: "Odisha" },
    { value: "PY", label: "Puducherry" },
    { value: "PB", label: "Punjab" },
    { value: "RJ", label: "Rajasthan" },
    { value: "SK", label: "Sikkim" },
    { value: "TN", label: "Tamil Nadu" },
    { value: "TG", label: "Telangana" },
    { value: "TR", label: "Tripura" },
    { value: "UP", label: "Uttar Pradesh" },
    { value: "UT", label: "Uttarakhand" },
    { value: "WB", label: "West Bengal" }
  ];

  const stateCities = {
    "": [],
    "AN": ["Port Blair", "Car Nicobar", "Diglipur", "Mayabunder"],
    "AP": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kakinada", "Rajahmundry", "Anantapur", "Kadapa", "Kurnool"],
    "AR": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Bomdila", "Ziro"],
    "AS": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon"],
    "BR": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia", "Bihar Sharif", "Arrah", "Begusarai", "Katihar"],
    "CH": ["Chandigarh"],
    "CT": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Rajnandgaon", "Jagdalpur", "Raigarh"],
    "DH": ["Daman", "Diu", "Silvassa"],
    "DL": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi", "Central Delhi", "North East Delhi", "North West Delhi", "South East Delhi", "South West Delhi", "Shahdara"],
    "GA": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
    "GJ": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Mehsana"],
    "HR": ["Faridabad", "Gurgaon", "Hisar", "Rohtak", "Panipat", "Karnal", "Sonipat", "Ambala", "Yamunanagar", "Panchkula"],
    "HP": ["Shimla", "Dharamshala", "Solan", "Mandi", "Kullu", "Hamirpur", "Una", "Bilaspur"],
    "JK": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Kathua", "Udhampur", "Sopore"],
    "JH": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Giridih", "Hazaribagh", "Ramgarh"],
    "KA": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Davangere", "Bellary", "Gulbarga", "Shimoga", "Tumkur"],
    "KL": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Kannur", "Alappuzha", "Palakkad", "Malappuram", "Kottayam"],
    "LA": ["Leh", "Kargil"],
    "LD": ["Kavaratti", "Agatti", "Amini"],
    "MP": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa"],
    "MH": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Amravati", "Navi Mumbai"],
    "MN": ["Imphal", "Thoubal", "Churachandpur", "Bishnupur", "Ukhrul"],
    "ML": ["Shillong", "Tura", "Jowai", "Nongstoin", "Williamnagar"],
    "MZ": ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
    "NL": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
    "OR": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore", "Bhadrak"],
    "PY": ["Puducherry", "Karaikal", "Mahe", "Yanam"],
    "PB": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Pathankot", "Hoshiarpur", "Batala", "Moga"],
    "RJ": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sikar"],
    "SK": ["Gangtok", "Namchi", "Gyalshing", "Mangan"],
    "TN": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Vellore", "Erode", "Thoothukudi"],
    "TG": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nalgonda", "Ramagundam"],
    "TR": ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar", "Ambassa"],
    "UP": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Allahabad", "Bareilly", "Aligarh", "Moradabad"],
    "UT": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh"],
    "WB": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Bardhaman", "Malda", "Baharampur", "Kharagpur", "Haldia"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Reset city when state changes
    if (name === "state") {
      setFormData(prev => ({ ...prev, [name]: value, city: "" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.ngoName.trim()) newErrors.ngoName = "NGO name is required";
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = "Registration number is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (10 digits, starting with 6-9)";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    
    const pincodeRegex = /^\d{6}$/;
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!pincodeRegex.test(formData.pincode)) {
      newErrors.pincode = "Invalid pincode (6 digits)";
    }

    if (!formData.type) newErrors.type = "NGO type is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person name is required";
    
    if (!formData.contactPersonPhone.trim()) {
      newErrors.contactPersonPhone = "Contact person phone is required";
    } else if (!phoneRegex.test(formData.contactPersonPhone)) {
      newErrors.contactPersonPhone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          ngoName: "",
          registrationNumber: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          type: "",
          description: "",
          contactPerson: "",
          contactPersonPhone: "",
          website: ""
        });
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <Section>
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
            <p className="text-gray-300 text-lg mb-6">
              Thank you for registering your NGO with HopeBridge. Our team will review your application and contact you within 48 hours.
            </p>
            <div className="bg-gray-700 rounded-lg p-4 text-left">
              <p className="text-sm text-gray-400 mb-2">You'll receive a confirmation email at:</p>
              <p className="text-white font-semibold">{formData.email}</p>
            </div>
          </Card>
        </Section>
      </Layout>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden dark bg-gray-900">
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
            
            </div>
          </nav>
    <Layout>
      <Section>
        <div className="max-w-4xl mx-auto mt-3">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              NGO <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Registration</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Join our platform to connect with donors and make a greater impact in your community
            </p>
          </div>

          <Card className="p-8">
            <div>
              {/* NGO Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Building className="text-blue-500" />
                  NGO Information
                </h2>
                
                <Input
                  label="NGO Name *"
                  name="ngoName"
                  value={formData.ngoName}
                  onChange={handleChange}
                  placeholder="Enter your NGO's registered name"
                  icon={Building}
                  error={errors.ngoName}
                />

                <Input
                  label="Registration Number *"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="NGO registration/certificate number"
                  icon={CreditCard}
                  error={errors.registrationNumber}
                />

                <Select
                  label="NGO Type *"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  options={ngoTypes}
                  error={errors.type}
                />

                <TextArea
                  label="Description *"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Briefly describe your NGO's mission, activities, and impact areas"
                  error={errors.description}
                />

                <Input
                  label="Website (Optional)"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://www.example.org"
                  type="url"
                />
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Phone className="text-green-500" />
                  Contact Information
                </h2>

                <Input
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ngo@example.org"
                  icon={Mail}
                  error={errors.email}
                />

                <Input
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  icon={Phone}
                  error={errors.phone}
                />

                <Input
                  label="Contact Person Name *"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Primary contact person's full name"
                  error={errors.contactPerson}
                />

                <Input
                  label="Contact Person Phone *"
                  name="contactPersonPhone"
                  type="tel"
                  value={formData.contactPersonPhone}
                  onChange={handleChange}
                  placeholder="Contact person's mobile number"
                  icon={Phone}
                  error={errors.contactPersonPhone}
                />
              </div>

              {/* Address Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <MapPin className="text-purple-500" />
                  Address
                </h2>

                <TextArea
                  label="Street Address *"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Building name, street, area"
                  error={errors.address}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="State *"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    options={indianStates}
                    error={errors.state}
                  />

                  <Select
                    label="City *"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    options={[
                      { value: "", label: formData.state ? "Select City" : "Select State First" },
                      ...(stateCities[formData.state] || []).map(city => ({
                        value: city,
                        label: city
                      }))
                    ]}
                    error={errors.city}
                  />
                </div>

                <Input
                  label="Pincode *"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                  error={errors.pincode}
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button onClick={handleSubmit} variant="primary" size="lg" className="w-full sm:w-auto">
                  <FileText className="w-5 h-5" />
                  Submit Registration
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  onClick={() => {
                    setFormData({
                      ngoName: "",
                      registrationNumber: "",
                      email: "",
                      phone: "",
                      address: "",
                      city: "",
                      state: "",
                      pincode: "",
                      type: "",
                      description: "",
                      contactPerson: "",
                      contactPersonPhone: "",
                      website: ""
                    });
                    setErrors({});
                  }}
                >
                  Reset Form
                </Button>
              </div>

              {/* Terms */}
              <p className="text-sm text-gray-400 text-center mt-6">
                By registering, you agree to our terms of service and confirm that all information provided is accurate and verifiable.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </Layout>
    </div>
  );
}