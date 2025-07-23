import React from "react";
import {
  CloudRain,
  Sprout,
  Droplets,
  TrendingUp,
  Smartphone,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  Leaf,
} from "lucide-react";
import "../css/Home.css";

export default function Page() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-icon">
            <Leaf size={64} />
          </div>
          <h1 className="hero-title">
            Empowering Farmers with AI-Driven Agriculture
          </h1>
          <p className="hero-description">
            Transform your farming with intelligent weather predictions, crop
            timing optimization, and smart irrigation management. Join thousands
            of farmers already benefiting from our AI solutions.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Get Started Today
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">15K+</div>
            <div className="stat-label">Active Farmers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">89%</div>
            <div className="stat-label">Yield Improvement</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">40%</div>
            <div className="stat-label">Water Savings</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">AI Monitoring</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">
            AI-Powered Solutions for Modern Farming
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon weather">
                <CloudRain size={32} />
              </div>
              <h3 className="feature-title">Weather Prediction</h3>
              <p className="feature-description">
                Get accurate 15-day weather forecasts with AI analysis to plan
                your farming activities perfectly.
              </p>
              <ul className="feature-list">
                <li>
                  <CheckCircle size={16} /> Rainfall predictions
                </li>
                <li>
                  <CheckCircle size={16} /> Temperature insights
                </li>
                <li>
                  <CheckCircle size={16} /> Storm alerts
                </li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon crops">
                <Sprout size={32} />
              </div>
              <h3 className="feature-title">Crop Timing</h3>
              <p className="feature-description">
                Optimize planting and harvesting schedules with AI
                recommendations based on soil and climate data.
              </p>
              <ul className="feature-list">
                <li>
                  <CheckCircle size={16} /> Planting calendar
                </li>
                <li>
                  <CheckCircle size={16} /> Growth tracking
                </li>
                <li>
                  <CheckCircle size={16} /> Harvest optimization
                </li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon irrigation">
                <Droplets size={32} />
              </div>
              <h3 className="feature-title">Smart Irrigation</h3>
              <p className="feature-description">
                Reduce water waste and improve crop health with AI-driven
                irrigation scheduling and monitoring.
              </p>
              <ul className="feature-list">
                <li>
                  <CheckCircle size={16} /> Soil moisture tracking
                </li>
                <li>
                  <CheckCircle size={16} /> Water scheduling
                </li>
                <li>
                  <CheckCircle size={16} /> Efficiency reports
                </li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon analytics">
                <BarChart3 size={32} />
              </div>
              <h3 className="feature-title">Farm Analytics</h3>
              <p className="feature-description">
                Make data-driven decisions with comprehensive analytics and
                insights about your farm performance.
              </p>
              <ul className="feature-list">
                <li>
                  <CheckCircle size={16} /> Yield predictions
                </li>
                <li>
                  <CheckCircle size={16} /> Cost analysis
                </li>
                <li>
                  <CheckCircle size={16} /> Performance metrics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <h2 className="section-title">How Our AI Platform Works</h2>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-icon">
                <Smartphone size={32} />
              </div>
              <h3 className="step-title">Connect Your Farm</h3>
              <p className="step-description">
                Register your farm details and connect IoT sensors for real-time
                data collection.
              </p>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-icon">
                <TrendingUp size={32} />
              </div>
              <h3 className="step-title">AI Analysis</h3>
              <p className="step-description">
                Our AI processes weather, soil, and crop data to generate
                personalized recommendations.
              </p>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-icon">
                <Users size={32} />
              </div>
              <h3 className="step-title">Take Action</h3>
              <p className="step-description">
                Receive actionable insights and implement AI-driven strategies
                to optimize your farm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-section">
        <div className="success-container">
          <h2 className="section-title">Success Stories from Our Farmers</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  {"The AI weather predictions helped me save my entire wheat"}
                  {"crop from unexpected frost. My yield increased by 45% this"}
                  {"season!"}
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">Rajesh Kumar</div>
                    <div className="author-location">Punjab, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  {"Smart irrigation reduced my water usage by 40% while"}
                  {"improving crop quality. The ROI was incredible!"}
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">Priya Sharma</div>
                    <div className="author-location">Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  {"The crop timing recommendations helped me optimize my"}
                  {"planting schedule. Best harvest I've had in 10 years!"}
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">Suresh Patel</div>
                    <div className="author-location">Gujarat, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Farm?</h2>
            <p className="cta-description">
              Join thousands of farmers who are already using AI to increase
              yields, reduce costs, and make smarter farming decisions.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary-large">
                Start Free Trial
                <ArrowRight size={24} />
              </button>
              <button className="btn-outline">Contact Support</button>
            </div>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <CheckCircle size={20} />
              <span>30-day free trial</span>
            </div>
            <div className="cta-feature">
              <CheckCircle size={20} />
              <span>24/7 customer support</span>
            </div>
            <div className="cta-feature">
              <CheckCircle size={20} />
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
