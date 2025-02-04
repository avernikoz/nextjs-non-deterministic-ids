"use client";

import { useEffect } from "react";

export default function Custom404() {
  console.debug("[404.tsx render]");

  useEffect(() => {
    console.debug("[404.tsx useEffect]");
  }, []);

  return (
    <div className="min-h-screen bg-app-dark flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">404 - Page Not Found (404.tsx)</h1>
        <p className="text-gray-400">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
