import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-12">
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="ah.jpeg"
          alt="Author Image"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Ameer Hamza Memon
          </h3>
          <p className="text-sm text-gray-500">
            Electrical Engineer | AI Expert | Web Developer
          </p>
        </div>
      </div>

      <p className="mt-4 text-gray-700 leading-relaxed">
        Ameer Hamza is a passionate Full-Stack Developer and Electrical Engineer
        with expertise in building impactful web applications and advancing
        renewable energy solutions.
      </p>

      <div className="mt-4 flex space-x-3">
        <a
          href="https://twitter.com/YourTwitterHandle" // Replace with your actual Twitter handle
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/ameerhamzamemon" // Replace with your LinkedIn profile link
          className="px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Ameerhamza1w" // Replace with your GitHub profile link
          className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 transition duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
