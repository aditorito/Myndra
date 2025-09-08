import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Search, Bell, Mail, Plus } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ProfilePage = () => {
  const { isAuthenticated } = useContext(AuthContext);  
  const [formData, setFormData] = useState({
    fullName: "",
    nickName: "",
    gender: "",
    country: "",
    city: "",
    language: "",
    timeZone: "",
    email: "",
  });

  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [cities, setCities] = useState([]);
  const [timezones, setTimezones] = useState([]);

  // ✅ Fetch user profile from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        console.log(token);


        const res = await axios.get(`${backendUrl}/profile`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        console.log(res);


        const user = res.data;
        setFormData((prev) => ({
          ...prev,
          fullName: user.fullName || "",
          nickName: user.nickName || "",
          email: user.email || "",
        }));
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  // ✅ Fetch countries (with cities inside each object)
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        const data = res.data.data;
        if (Array.isArray(data)) {
          setCountries(data.sort((a, b) => a.country.localeCompare(b.country)));
        }
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  // ✅ Fetch languages from GitHub ISO-639 dataset
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/haliaeetus/iso-639/master/data/iso_639-1.json"
      )
      .then((res) => {
        const rawLangs = res.data;
        const langs = Object.entries(rawLangs).map(([code, info]) => ({
          code,
          english: info.name,
          native: info.nativeName || info.name,
        }));

        setLanguages(langs.sort((a, b) => a.english.localeCompare(b.english)));
      })
      .catch((err) => console.error("Error fetching languages:", err));
  }, []);

  // ✅ Fetch timezones
  useEffect(() => {
    axios
      .get("http://worldtimeapi.org/api/timezone")
      .then((res) => setTimezones(res.data))
      .catch((err) => console.error("Error fetching timezones:", err));
  }, []);

  // ✅ Update cities when country changes
  useEffect(() => {
    if (!formData.country) return;
    const countryObj = countries.find((c) => c.country === formData.country);
    setCities(countryObj ? countryObj.cities : []);
  }, [formData.country, countries]);
  // Add this function inside your ProfilePage component
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token"); // assuming you saved JWT here
      if (!token) {
        alert("User not authenticated!");
        return;
      }

      const res = await axios.put(
        `${backendUrl}/profile/update`,
        {
          fullName: formData.fullName,
          nickName: formData.nickName,
          gender: formData.gender,
          country: formData.country,
          city: formData.city,
          language: formData.language,
          timeZone: formData.timeZone,
          email: formData.email,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (res.data.user) {
        setFormData((prev) => ({
          ...prev,
          ...res.data.user,
        }));
        alert("Profile updated successfully!");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile");
    }
  };


  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="relative top-0 bg-[#075056] opacity-70 text-white z-40">
        <div className="mx-auto w-full px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            aria-label="Myndra"
            className="h-8 w-32 sm:w-36 md:w-44 inline-flex items-center flex-shrink-0"
          >
            <img
              src="/images/myndralogotypebt_1.png"
              alt="Myndra"
              className="h-full w-full brightness-0 invert object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-[1.08rem]">
            <span className="font-semibold">Home</span>
            <button
              onClick={() => navigate("/AboutUs")}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              About Us
            </button>
            <button
              onClick={() => navigate("/WhatWeDo")}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              What We Do
            </button>
            <button
              onClick={() => navigate("/Careers")}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Careers
            </button>
            <button
                onClick={() => navigate(isAuthenticated ? "/profile" : "/LogIn")}
              className="border border-black text-black px-4 xl:px-5 py-1.5 rounded-xl hover:bg-black hover:text-white transition-colors whitespace-nowrap"
            >
              {isAuthenticated ? "Profile" : "Log in"}
            </button>
          </nav>

          {/* Mobile hamburger - Fixed visibility */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/30 hover:border-white/60 transition-colors flex-shrink-0"
            aria-label="Open menu"
          >
            {/* Fallback hamburger icon if image doesn't load */}
            <img
              src="/images/hamburger.svg"
              alt="menu"
              className="h-5 w-5 brightness-0 invert"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* CSS hamburger fallback */}
            <div className="hidden flex-col justify-center items-center">
              <span className="block h-0.5 w-5 bg-white mb-1"></span>
              <span className="block h-0.5 w-5 bg-white mb-1"></span>
              <span className="block h-0.5 w-5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay (add this if you don't have it) */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#075056] z-50">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-4 h-16 border-b border-white/20">
                <img
                  src="/images/myndralogotypebt_1.png"
                  alt="Myndra"
                  className="h-8 w-32 brightness-0 invert object-contain"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/30"
                  aria-label="Close menu"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-medium text-gray-900">
                Welcome, {formData.fullName || "User"}
              </h1>
              <p className="text-sm text-gray-500">Wed, 30th July 2025</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-2">
                <div className="flex items-center p-3 text-blue-600 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="font-medium">Profile</span>
                </div>
                <div className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Settings</span>
                </div>
                <div className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Security</span>
                </div>
                <div className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Privacy</span>
                </div>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Header Banner */}
              <div className="h-32 bg-gradient-to-r from-yellow-200 via-yellow-300 to-green-300 rounded-t-xl"></div>

              {/* Profile Content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {formData.fullName || "Your Name"}
                    </h2>
                    <p className="text-gray-500">{formData.email || "Your Email"}</p>
                  </div>
                  <button
                    onClick={handleUpdate}
                    className="mt-4 sm:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Update
                  </button>

                </div>

                {/* Form */}
                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nick Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Nick Name"
                        value={formData.nickName}
                        onChange={(e) =>
                          handleInputChange("nickName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Location Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) =>
                          handleInputChange("gender", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) =>
                          handleInputChange("country", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      >
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                          <option key={c.iso2} value={c.country}>
                            {c.country}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      >
                        <option value="">Select City</option>
                        {cities.map((city, idx) => (
                          <option key={idx} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Language + Timezone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select
                        value={formData.language}
                        onChange={(e) =>
                          handleInputChange("language", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      >
                        <option value="">Select Language</option>
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.english}>
                            {lang.english}{" "}
                            {lang.native !== lang.english
                              ? `(${lang.native})`
                              : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time Zone
                      </label>
                      <select
                        value={formData.timeZone}
                        onChange={(e) =>
                          handleInputChange("timeZone", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      >
                        <option value="">Select Timezone</option>
                        {timezones.map((tz, idx) => (
                          <option key={idx} value={tz}>
                            {tz}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      My email Address
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 rounded-lg p-2 mr-4">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {formData.email || "No Email Found"}
                          </p>
                          <p className="text-sm text-gray-500">1 month ago</p>
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      <Plus className="w-4 h-4 mr-2" />
                      +Add Email Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
