// app/signin/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative z-50">
        <SignIn
        appearance={{
          elements: {
          formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white",
          card: "shadow-none border-none",
          },
        }}
        path="/signin"
        routing="path"
        signUpUrl="/signup"
        />
    </div>
  );
}
