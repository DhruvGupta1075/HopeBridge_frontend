import React from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';
import NeedyProfileRegistration from './NeedyProfile';
import NeedyDashboard from './NeedyDashboard';
import NeedyList from './NeedyList';
import DonorDashboard from './DonorDashboard';
import AvailMed from './AvailMed';
import ListedMed from './ListedMed';
import DonorDetails from './donordetails';
import ScrollToTop from './components/ScrollToTop';
import NGORegistration from './NGORegistration';
import NGODashboard from './NGODashboard';
import Footer from './components/Footer';
const banfooter = [
  '/ngo/register',
  '/ngo/dashboard',
  '/donor/signup',
  '/needy/register'
];
function App() {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop behavior="smooth" />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ngo/register" element={<NGORegistration />} />
        <Route path="/ngo/dashboard" element={<NGODashboard/>} />
        
        {/* All Routes - No authentication required */}
        <Route path="/needy/register" element={<NeedyProfileRegistration />} />
        <Route path="/donor/signup" element={<DonorDetails />} />
        {/* <Route path="/needy/dashboard" element={<NeedyDashboard />} /> */}
        {/* <Route path="/needy/list" element={<NeedyList />} /> */}
        {/* <Route path="/donor/dashboard" element={<DonorDashboard />} /> */}
        <Route path="/donate/medicine" element={<AvailMed />} />
        <Route path="/listed-medicines" element={<ListedMed />} />
      </Routes>
      
      {!banfooter.includes(location.pathname) && <Footer />}
    </>
  );

}

export default App;
