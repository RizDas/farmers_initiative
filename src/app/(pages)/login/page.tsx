//import { useState } from "react";
import {
  Leaf,
  Mail,
  Lock,
  //Eye,
  //EyeOff,
  ArrowRight,
  CloudRain,
  Sprout,
  Droplets,
  Shield,
} from "lucide-react";

const LoginPage = () => {
  {
    /*const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Login submitted:", formData);
    // Handle login submission here
  };*/
  }

  return (
    <div className="login-wrapper">
      <style>{`
        .login-wrapper {
          min-height: 100vh;
          background: linear-gradient(to bottom, #f8f9f4, #f0f4ec, #e8f0e4, #e0eadc);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .login-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        .login-left {
          background: linear-gradient(135deg, #466329, #3d5a3d);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
          position: relative;
          overflow: hidden;
        }

        .login-left::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at 30% 40%,
            rgba(112, 173, 71, 0.15) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 70% 70%,
            rgba(70, 99, 41, 0.2) 0%,
            transparent 50%
          );
          pointer-events: none;
        }

        .login-left::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(255, 255, 255, 0.02) 100px,
            rgba(255, 255, 255, 0.02) 200px
          );
          animation: subtleMove 20s linear infinite;
          pointer-events: none;
        }

        @keyframes subtleMove {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .login-hero {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          max-width: 480px;
        }

        .hero-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 32px;
          color: #f8f9f4;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(248, 249, 244, 0.1);
          border-radius: 50%;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(248, 249, 244, 0.2);
          animation: iconFloat 3s ease-in-out infinite alternate;
        }

        @keyframes iconFloat {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }

        .login-hero-title {
          font-size: 48px;
          font-weight: bold;
          color: #f8f9f4;
          margin-bottom: 24px;
          line-height: 1.1;
          background: linear-gradient(135deg, #f8f9f4, #e8f0e4, #f8f9f4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .login-hero-description {
          font-size: 18px;
          color: #e8f0e4;
          margin-bottom: 40px;
          line-height: 1.6;
          opacity: 0.9;
        }

        .login-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          max-width: 320px;
          margin: 0 auto;
        }

        .login-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #e8f0e4;
          font-size: 16px;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          transition: all 0.3s ease;
        }

        .login-feature:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(5px);
        }

        .login-feature svg {
          color: #70ad47;
          filter: drop-shadow(0 2px 5px rgba(112, 173, 71, 0.3));
        }

        .login-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
          padding: 32px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
        }

        .login-stat {
          text-align: center;
        }

        .stat-number {
          font-size: 24px;
          font-weight: bold;
          color: #f8f9f4;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: #e8f0e4;
          opacity: 0.8;
        }

        .login-right {
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
          backdrop-filter: blur(10px);
        }

        .login-form-container {
          width: 100%;
          max-width: 420px;
        }

        .login-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .login-title {
          font-size: 36px;
          font-weight: bold;
          color: #3d5a3d;
          margin-bottom: 8px;
        }

        .login-subtitle {
          font-size: 16px;
          color: #556b55;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #3d5a3d;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          color: #556b55;
          z-index: 1;
        }

        .form-input {
          width: 100%;
          padding: 18px 18px 18px 50px;
          border: 2px solid #d4e0d4;
          border-radius: 12px;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .form-input:focus {
          outline: none;
          border-color: #466329;
          box-shadow: 0 0 0 4px rgba(70, 99, 41, 0.1);
          background: rgba(255, 255, 255, 0.95);
        }

        .password-toggle {
          position: absolute;
          right: 16px;
          background: none;
          border: none;
          color: #556b55;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .password-toggle:hover {
          background: rgba(70, 99, 41, 0.1);
          color: #466329;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .checkbox {
          width: 18px;
          height: 18px;
          accent-color: #466329;
        }

        .checkbox-label {
          font-size: 14px;
          color: #556b55;
        }

        .forgot-password {
          background: none;
          border: none;
          color: #466329;
          font-size: 14px;
          cursor: pointer;
          text-decoration: underline;
          transition: color 0.2s ease;
          font-weight: 500;
        }

        .forgot-password:hover {
          color: #3d5a3d;
        }

        .login-btn-primary {
          background: linear-gradient(135deg, #466329, #3d5a3d);
          color: white;
          padding: 20px 32px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 15px rgba(70, 99, 41, 0.3);
          position: relative;
          overflow: hidden;
        }

        .login-btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .login-btn-primary:hover::before {
          left: 100%;
        }

        .login-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(70, 99, 41, 0.4);
          background: linear-gradient(135deg, #3d5a3d, #466329);
        }

        .login-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 24px 0;
        }

        .login-divider::before,
        .login-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #d4e0d4;
        }

        .login-divider span {
          color: #556b55;
          font-size: 14px;
          font-weight: 500;
        }

        .signup-link-container {
          text-align: center;
          padding: 24px;
          background: rgba(70, 99, 41, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(70, 99, 41, 0.1);
        }

        .signup-text {
          font-size: 14px;
          color: #556b55;
          margin-bottom: 12px;
        }

        .signup-link {
          background: transparent;
          border: 2px solid #466329;
          color: #466329;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .signup-link:hover {
          background: #466329;
          color: white;
          transform: translateY(-1px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .login-container {
            grid-template-columns: 1fr;
          }

          .login-left {
            min-height: 40vh;
            padding: 32px 24px;
          }

          .login-hero-title {
            font-size: 32px;
          }

          .login-hero-description {
            font-size: 16px;
          }

          .login-right {
            padding: 32px 24px;
          }

          .login-title {
            font-size: 28px;
          }

          .login-features {
            max-width: 100%;
          }

          .login-stats {
            padding: 24px;
            gap: 16px;
          }

          .stat-number {
            font-size: 20px;
          }

          .form-options {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .login-left {
            padding: 24px 16px;
            min-height: 35vh;
          }

          .login-right {
            padding: 24px 16px;
          }

          .login-hero-title {
            font-size: 28px;
          }

          .login-title {
            font-size: 24px;
          }

          .form-input {
            padding: 16px 16px 16px 46px;
            font-size: 14px;
          }

          .input-icon {
            left: 14px;
          }

          .password-toggle {
            right: 14px;
          }

          .login-btn-primary {
            padding: 18px 28px;
            font-size: 16px;
          }

          .login-stats {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 20px;
          }

          .hero-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 24px;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .login-btn-primary,
          .signup-link,
          .forgot-password {
            min-height: 48px;
            touch-action: manipulation;
          }

          .login-feature:hover,
          .login-btn-primary:hover,
          .signup-link:hover {
            transform: none;
          }

          .login-btn-primary:hover::before {
            left: -100%;
          }
        }
      `}</style>

      <div className="login-container">
        <div className="login-left">
          <div className="login-hero">
            <div className="hero-icon">
              <Leaf size={48} />
            </div>
            <h1 className="login-hero-title">Welcome Back!</h1>
            <p className="login-hero-description">
              Continue your journey towards smarter farming with AI-powered
              insights and data-driven decisions.
            </p>

            <div className="login-features">
              <div className="login-feature">
                <CloudRain size={20} />
                <span>Real-time Weather Tracking</span>
              </div>
              <div className="login-feature">
                <Sprout size={20} />
                <span>Crop Health Monitoring</span>
              </div>
              <div className="login-feature">
                <Droplets size={20} />
                <span>Smart Irrigation Control</span>
              </div>
              <div className="login-feature">
                <Shield size={20} />
                <span>Secure Data Protection</span>
              </div>
            </div>

            <div className="login-stats">
              <div className="login-stat">
                <div className="stat-number">15K+</div>
                <div className="stat-label">Farmers</div>
              </div>
              <div className="login-stat">
                <div className="stat-number">89%</div>
                <div className="stat-label">Better Yields</div>
              </div>
              <div className="login-stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-container">
            <div className="login-header">
              <h2 className="login-title">Sign In</h2>
              <p className="login-subtitle">Access your smart farm dashboard</p>
            </div>

            <div className="login-form">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <Mail size={20} className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    //value={formData.email}
                    //onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <Lock size={20} className="input-icon" />
                  <input
                    //type={showPassword ? "text" : "password"}
                    name="password"
                    //value={formData.password}
                    //onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    //onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                  >
                    {/*showPassword ? <EyeOff size={20} /> : <Eye size={20} />*/}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    //checked={formData.rememberMe}
                    //onChange={handleInputChange}
                    className="checkbox"
                  />
                  <span className="checkbox-label">Keep me signed in</span>
                </label>
                <button type="button" className="forgot-password">
                  Forgot password?
                </button>
              </div>

              <button
                type="button"
                //onClick={handleSubmit}
                className="login-btn-primary"
              >
                Sign In to Dashboard
                <ArrowRight size={20} />
              </button>

              <div className="login-divider">
                <span>New to our platform?</span>
              </div>

              <div className="signup-link-container">
                <p className="signup-text">
                  Join thousands of farmers already improving their yields
                </p>
                <button className="signup-link">Create Your Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
