import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun, FaArrowLeft, FaHeart, FaHandsHelping } from 'react-icons/fa';
import logo from "./assets/logo1.png";

export default function Signup() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const handleUserTypeSelection = (userType) => {
    if (userType === 'recipient') {
      navigate('/needy/register');
    } else if (userType === 'donor') {
      navigate('/donor/signup');
    }
  };
for signup