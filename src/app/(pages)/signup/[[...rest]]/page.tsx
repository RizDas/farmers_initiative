// app/signup/page.tsx
"use client";

import { SignUp } from "@clerk/nextjs";
import { Leaf, TrendingUp, Users, Zap, BarChart3 } from "lucide-react";
import "../../../../css/Auth.css";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="auth-wrapper">
      <div className="min-h-screen flex">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex lg:w-1/2 auth-hero-section">
          <div className="auth-hero-content">
            {/* Hero Content */}
            <h1 className="auth-hero-title">Start Your Journey</h1>
            <p className="auth-hero-description">
              Transform your farming with cutting-edge AI technology. Join
              thousands of successful farmers today.
            </p>

            {/* Benefits */}
            <div className="auth-features-list">
              <div className="auth-feature-item">
                <TrendingUp size={20} />
                <span>Increase Crop Yields by 40%</span>
              </div>
              <div className="auth-feature-item">
                <BarChart3 size={20} />
                <span>Advanced Analytics Dashboard</span>
              </div>
              <div className="auth-feature-item">
                <Zap size={20} />
                <span>Automated Smart Recommendations</span>
              </div>
              <div className="auth-feature-item">
                <Users size={20} />
                <span>Community Support Network</span>
              </div>
            </div>

            {/* Success Stories */}
            <div className="auth-stats-container two-col">
              <div className="auth-stat-item">
                <div className="auth-stat-number">$50K+</div>
                <div className="auth-stat-label">Avg. Income Boost</div>
              </div>
              <div className="auth-stat-item">
                <div className="auth-stat-number">95%</div>
                <div className="auth-stat-label">Success Rate</div>
              </div>
              <div className="auth-success-story">
                <p className="auth-testimonial">
                  "This platform transformed my 50-acre farm completely!" -
                  Sarah M.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12 relative z-50">
          <div className="w-full max-w-md">
            {/* Mobile Hero (visible on small screens) */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <Leaf size={32} className="text-green-700" />
              </div>
              <h1 className="text-2xl font-bold text-green-800 mb-2">
                Join Smart Farming
              </h1>
              <p className="text-green-600">
                Create your account and start growing smarter
              </p>
            </div>

            {/* Clerk SignUp Component */}
            <SignUp
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300",
                  card: "shadow-none border-none bg-white/95 backdrop-blur-sm",
                  headerTitle: "text-green-800 text-3xl font-bold",
                  headerSubtitle: "text-green-600",
                  socialButtonsBlockButton:
                    "border-2 border-green-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300",
                  formFieldInput:
                    "border-2 border-green-200 focus:border-green-500 focus:ring-green-500/20 bg-white/80 backdrop-blur-sm transition-all duration-300",
                  formFieldLabel: "text-green-800 font-semibold",
                  footerActionLink:
                    "text-green-700 hover:text-green-800 font-medium",
                  identityPreviewEditButton:
                    "text-green-700 hover:text-green-800",
                  formResendCodeLink: "text-green-700 hover:text-green-800",
                  otpCodeFieldInput:
                    "border-2 border-green-200 focus:border-green-500 focus:ring-green-500/20",
                  alternativeMethodsBlockButton:
                    "border border-green-200 hover:border-green-300 hover:bg-green-50 text-green-700",
                  phoneInputBox:
                    "border-2 border-green-200 focus:border-green-500 focus:ring-green-500/20",
                  formFieldSuccessText: "text-green-700",
                  formFieldErrorText: "text-red-600",
                  identifierLinkBox:
                    "border-2 border-green-200 hover:border-green-300",
                },
                layout: {
                  socialButtonsPlacement: "bottom",
                  socialButtonsVariant: "blockButton",
                },
              }}
              path="/signup"
              routing="path"
              signInUrl="/signin"
              redirectUrl="/onboarding"
              afterSignUpUrl="/onboarding"
            />

            {/* Trust Indicators */}
            <div className="mt-8 space-y-4">
              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-green-800">
                    Your data is secure
                  </span>
                </div>
                <p className="text-xs text-green-600">
                  Bank-level encryption and privacy protection for all your
                  farming data.
                </p>
              </div>

              {/* Already have account */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Already have an account?
                </p>
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center px-6 py-2 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 font-medium text-sm"
                >
                  Sign In Instead
                </Link>
              </div>

              {/* Terms Notice */}
              <div className="text-center">
                <p className="text-xs text-gray-500 leading-relaxed">
                  By signing up, you agree to our{" "}
                  <a
                    href="/terms"
                    className="text-green-600 hover:text-green-700 underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="text-green-600 hover:text-green-700 underline"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
