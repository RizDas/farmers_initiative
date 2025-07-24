"use client";

import React, { useState } from "react";
import {
  MapPin,
  Leaf,
  Search,
  TrendingUp,
  Droplets,
  Sun,
  Wind,
} from "lucide-react";
import "../../../css/CropPrediction.css";
import Header from "@/components/Header";

const page = () => {
  const [formData, setFormData] = useState({
    soilType: "",
    location: "",
    season: "",
    irrigationType: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);

  const soilTypes = [
    "Clay Soil",
    "Sandy Soil",
    "Loam Soil",
    "Silt Soil",
    "Chalky Soil",
    "Peat Soil",
    "Saline Soil",
  ];

  const seasons = ["Spring", "Summer", "Monsoon", "Winter"];

  const irrigationTypes = [
    "Drip Irrigation",
    "Sprinkler Irrigation",
    "Flood Irrigation",
    "Rainfed",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual API later
    setTimeout(() => {
      // Mock predictions - replace with actual API response
      setPredictions([
        {
          name: "Rice",
          suitability: 92,
          expectedYield: "4.5 tons/hectare",
          growthPeriod: "120-150 days",
          profitability: "High",
        },
        {
          name: "Wheat",
          suitability: 78,
          expectedYield: "3.2 tons/hectare",
          growthPeriod: "90-120 days",
          profitability: "Medium",
        },
        {
          name: "Sugarcane",
          suitability: 85,
          expectedYield: "60 tons/hectare",
          growthPeriod: "12-18 months",
          profitability: "High",
        },
      ]);
      setIsLoading(false);
    }, 2000);
  };

  const getSuitabilityColor = (score) => {
    if (score >= 80) return "high-suitability";
    if (score >= 60) return "medium-suitability";
    return "low-suitability";
  };

  return (
    <>
      <Header />
      <div className="crop-prediction-container">
        {/* Header Section */}
        <div className="prediction-header">
          <div className="header-content">
            <h1 className="header-title">Smart Crop Prediction</h1>
            <p className="header-description">
              Discover which crops will thrive in your specific soil and
              location conditions using AI-powered analysis
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prediction-main">
          <div className="prediction-layout">
            {/* Input Form */}
            <div className="form-section">
              <div className="form-card">
                <div className="form-header">
                  <h2 className="form-title">Enter Your Farm Details</h2>
                  <p className="form-subtitle">
                    Provide information about your soil and location for
                    accurate predictions
                  </p>
                </div>

                <div className="prediction-form">
                  <div className="form-grid">
                    {/* Soil Type */}
                    <div className="form-group">
                      <label className="form-label">
                        <Leaf className="label-icon" size={20} />
                        Soil Type
                      </label>
                      <select
                        name="soilType"
                        value={formData.soilType}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Select soil type</option>
                        {soilTypes.map((soil) => (
                          <option key={soil} value={soil}>
                            {soil}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Location */}
                    <div className="form-group">
                      <label className="form-label">
                        <MapPin className="label-icon" size={20} />
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter city or region"
                        className="form-input"
                      />
                    </div>

                    {/* Season */}
                    <div className="form-group">
                      <label className="form-label">
                        <Sun className="label-icon" size={20} />
                        Growing Season
                      </label>
                      <select
                        name="season"
                        value={formData.season}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Select season</option>
                        {seasons.map((season) => (
                          <option key={season} value={season}>
                            {season}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Irrigation Type */}
                    <div className="form-group">
                      <label className="form-label">
                        <Droplets className="label-icon" size={20} />
                        Irrigation Method
                      </label>
                      <select
                        name="irrigationType"
                        value={formData.irrigationType}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Select irrigation type</option>
                        {irrigationTypes.map((irrigation) => (
                          <option key={irrigation} value={irrigation}>
                            {irrigation}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="predict-button"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="loading-spinner"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Search size={20} />
                        Predict Crops
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Results Section */}
            {predictions.length > 0 && (
              <div className="results-section">
                <div className="results-header">
                  <h2 className="results-title">Crop Predictions</h2>
                  <p className="results-subtitle">
                    Based on your soil and location data
                  </p>
                </div>

                <div className="predictions-grid">
                  {predictions.map((crop, index) => (
                    <div key={index} className="prediction-card">
                      <div className="card-header">
                        <h3 className="crop-name">{crop.name}</h3>
                        <div
                          className={`suitability-badge ${getSuitabilityColor(
                            crop.suitability
                          )}`}
                        >
                          {crop.suitability}% Match
                        </div>
                      </div>

                      <div className="crop-details">
                        <div className="detail-item">
                          <TrendingUp className="detail-icon" size={16} />
                          <span className="detail-label">Expected Yield:</span>
                          <span className="detail-value">
                            {crop.expectedYield}
                          </span>
                        </div>

                        <div className="detail-item">
                          <Wind className="detail-icon" size={16} />
                          <span className="detail-label">Growth Period:</span>
                          <span className="detail-value">
                            {crop.growthPeriod}
                          </span>
                        </div>

                        <div className="detail-item">
                          <Leaf className="detail-icon" size={16} />
                          <span className="detail-label">Profitability:</span>
                          <span
                            className={`detail-value profitability-${crop.profitability.toLowerCase()}`}
                          >
                            {crop.profitability}
                          </span>
                        </div>
                      </div>

                      <div className="suitability-bar">
                        <div
                          className={`suitability-fill ${getSuitabilityColor(
                            crop.suitability
                          )}`}
                          style={{ width: `${crop.suitability}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="loading-section">
                <div className="loading-card">
                  <div className="loading-animation">
                    <div className="loading-spinner large"></div>
                  </div>
                  <h3 className="loading-title">
                    Analyzing Your Farm Conditions
                  </h3>
                  <p className="loading-text">
                    Our AI is processing your soil and location data to provide
                    accurate crop predictions...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
