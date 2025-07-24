// app/signin/page.tsx
"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative z-50">
        <SignUp
        path="/signup"
        routing="path"
        signInUrl="/signin"
        />
    </div>
  );
}