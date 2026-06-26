import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
      <p className="text-lg text-gray-600">This is the home page of my app.</p>
      <div className="mt-4">
        <a
          href="/about"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to About Page
        </a>
      </div>
      <div className="mt-4">
        <a
          href="/contact"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Go to Contact Page
        </a>
      </div>

      <div className="mt-4">
        <a
          href="/services"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Go to Services Page
        </a>
      </div>
    </div>
  );
};

export default Home;
