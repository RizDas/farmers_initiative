import React from "react";
import {
  Cloud,
  Droplets,
  Sprout,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react";
import "../../../css/About.css";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="page-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Empowering Farmers with AI</h1>
            <p className="hero-description">
              Our mission is to revolutionize agriculture by putting
              cutting-edge artificial intelligence directly into the hands of
              farmers, making farming smarter, more efficient, and more
              profitable.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="mission-cards">
            <div className="mission-card">
              <Cloud className="mission-icon blue" />
              <h3 className="mission-card-title">Weather Prediction</h3>
              <p className="mission-card-text">
                Advanced AI models provide hyper-local weather forecasts up to
                14 days ahead, helping farmers plan their activities with
                confidence.
              </p>
            </div>

            <div className="mission-card">
              <Sprout className="mission-icon green" />
              <h3 className="mission-card-title">Crop Timing</h3>
              <p className="mission-card-text">
                Optimize planting, harvesting, and treatment schedules based on
                soil conditions, weather patterns, and crop-specific growth
                cycles.
              </p>
            </div>

            <div className="mission-card">
              <Droplets className="mission-icon cyan" />
              <h3 className="mission-card-title">Smart Irrigation</h3>
              <p className="mission-card-text">
                AI-powered irrigation systems reduce water waste by up to 40%
                while ensuring crops receive optimal hydration at the right
                time.
              </p>
            </div>

            <div className="mission-card">
              <TrendingUp className="mission-icon purple" />
              <h3 className="mission-card-title">Yield Optimization</h3>
              <p className="mission-card-text">
                Predictive analytics help maximize crop yields while minimizing
                resource usage, increasing profitability and sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="story-section">
          <div className="story-container">
            <div className="story-grid">
              <div className="story-content">
                <h2 className="story-title">Our Story</h2>
                <p className="story-text">
                  Founded by a team of agricultural scientists and AI
                  researchers, our initiative was born from witnessing the daily
                  challenges farmers face. We saw how unpredictable weather,
                  inefficient resource management, and lack of data-driven
                  insights were limiting agricultural potential.
                </p>
                <p className="story-text">
                  Today, we're proud to serve over 50,000 farmers across 15
                  countries, helping them increase yields by an average of 25%
                  while reducing resource consumption by 30%.
                </p>

                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">50,000+</div>
                    <div className="stat-label">Farmers Served</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">25%</div>
                    <div className="stat-label">Average Yield Increase</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <blockquote className="testimonial-quote">
                  "This AI system has transformed how I manage my 200-acre farm.
                  I now make decisions based on data, not guesswork, and my
                  profits have increased by 35% in just two seasons."
                </blockquote>
                <cite className="testimonial-author">
                  — Maria Santos, Corn Farmer, Brazil
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section">
          <div className="how-it-works-container">
            <h2 className="how-it-works-title">How Our AI Works for You</h2>

            <div className="how-it-works-grid">
              <div className="how-it-works-item">
                <div className="how-it-works-icon-container blue-bg">
                  <Lightbulb className="how-it-works-icon blue" />
                </div>
                <h3 className="how-it-works-item-title">Data Collection</h3>
                <p className="how-it-works-text">
                  Our sensors and satellite imagery continuously gather data on
                  soil moisture, temperature, humidity, and crop health across
                  your fields.
                </p>
              </div>

              <div className="how-it-works-item">
                <div className="how-it-works-icon-container purple-bg">
                  <Target className="how-it-works-icon purple" />
                </div>
                <h3 className="how-it-works-item-title">AI Analysis</h3>
                <p className="how-it-works-text">
                  Machine learning algorithms process this data alongside
                  weather forecasts and historical patterns to generate
                  personalized recommendations.
                </p>
              </div>

              <div className="how-it-works-item">
                <div className="how-it-works-icon-container green-bg">
                  <Shield className="how-it-works-icon green" />
                </div>
                <h3 className="how-it-works-item-title">Actionable Insights</h3>
                <p className="how-it-works-text">
                  Receive daily recommendations via mobile app or SMS, with
                  specific actions for irrigation, fertilization, pest control,
                  and harvest timing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="impact-section">
          <div className="impact-container">
            <h2 className="impact-title">Our Impact</h2>

            <div className="impact-grid">
              <div className="impact-card blue-light">
                <div className="impact-number blue">2.5M</div>
                <div className="impact-label">Acres Optimized</div>
                <p className="impact-text">
                  Farmland now operating with AI-driven efficiency across
                  multiple continents.
                </p>
              </div>

              <div className="impact-card green-light">
                <div className="impact-number green">$180M</div>
                <div className="impact-label">Additional Revenue</div>
                <p className="impact-text">
                  Generated for farming communities through improved yields and
                  reduced costs.
                </p>
              </div>

              <div className="impact-card cyan-light">
                <div className="impact-number cyan">40%</div>
                <div className="impact-label">Water Savings</div>
                <p className="impact-text">
                  Average reduction in water usage through precision irrigation
                  recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <div className="vision-container">
            <Users className="vision-icon" />
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-description">
              We envision a world where every farmer, regardless of size or
              location, has access to the same advanced agricultural
              intelligence that was once available only to industrial
              operations. Through AI, we're democratizing precision agriculture
              and building a more sustainable food future.
            </p>
            <div className="vision-cta">
              <h3 className="vision-cta-title">
                Join Us in Transforming Agriculture
              </h3>
              <p className="vision-cta-text">
                Together, we're not just improving farming—we're securing food
                security for generations to come while protecting our planet's
                precious resources.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
