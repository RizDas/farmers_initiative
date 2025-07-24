// app/signin/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";
import { Leaf, CloudRain, Sprout, Droplets, Shield } from "lucide-react";
import "../../../../css/Auth.css";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="auth-wrapper">
      <div className="min-h-screen flex">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex lg:w-1/2 auth-hero-section">
          <div className="auth-hero-content">
            {/* Hero Content */}
            <h1 className="auth-hero-title">Welcome Back!</h1>
            <p className="auth-hero-description">
              Continue your journey towards smarter farming with AI-powered
              insights and data-driven decisions.
            </p>

            {/* Features */}
            <div className="auth-features-list">
              <div className="auth-feature-item">
                <CloudRain size={20} />
                <span>Real-time Weather Tracking</span>
              </div>
              <div className="auth-feature-item">
                <Sprout size={20} />
                <span>Crop Health Monitoring</span>
              </div>
              <div className="auth-feature-item">
                <Droplets size={20} />
                <span>Smart Irrigation Control</span>
              </div>
              <div className="auth-feature-item">
                <Shield size={20} />
                <span>Secure Data Protection</span>
              </div>
            </div>

            {/* Stats */}
            <div className="auth-stats-container">
              <div className="auth-stat-item">
                <div className="auth-stat-number">15K+</div>
                <div className="auth-stat-label">Farmers</div>
              </div>
              <div className="auth-stat-item">
                <div className="auth-stat-number">89%</div>
                <div className="auth-stat-label">Better Yields</div>
              </div>
              <div className="auth-stat-item">
                <div className="auth-stat-number">24/7</div>
                <div className="auth-stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12 relative z-50">
          <div className="w-full max-w-md">
            {/* Mobile Hero (visible on small screens) */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <Leaf size={32} className="text-green-700" />
              </div>
              <h1 className="text-2xl font-bold text-green-800 mb-2">
                Welcome Back
              </h1>
              <p className="text-green-600">
                Sign in to your smart farm dashboard
              </p>
            </div>

            {/* Clerk SignIn Component */}
            <SignIn
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
                },
                layout: {
                  socialButtonsPlacement: "bottom",
                  socialButtonsVariant: "blockButton",
                },
              }}
              path="/signin"
              routing="path"
              signUpUrl="/signup"
              redirectUrl="/dashboard"
              afterSignInUrl="/dashboard"
            />

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm text-green-700 mb-3 font-medium">
                  New to our platform?
                </p>
                <p className="text-xs text-green-600 mb-4">
                  Join thousands of farmers already improving their yields with
                  smart technology
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-6 py-2 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 font-medium text-sm"
                >
                  Create Your Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
