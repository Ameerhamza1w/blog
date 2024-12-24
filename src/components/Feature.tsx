import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-12 bg-neutral-50 mb-40">
        {/* Blog Title */}
        <div className="text-center">
          <h2
            className="text-4xl font-extrabold text-red-600 md:text-5xl lg:text-6xl 
            transition-transform duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black 
            animate-fade-in-up"
          >
            Ameer Hamza: AI is the Future Blog
          </h2>
        </div>

        {/* Introductory Text */}
        <div className="max-w-4xl mx-auto mt-8">
          <p className="text-center text-base text-gray-700 sm:text-lg md:text-xl leading-relaxed animate-fade-in-up delay-100">
            Hi, I’m Ameer Hamza, an enthusiastic Electrical Engineer with a
            strong foundation in Full-Stack Development. I'm driven by a passion
            for creating meaningful web applications and contributing to the
            growth of renewable energy solutions. I focus on blending design and
            functionality to create impactful solutions that meet your needs.
          </p>
        </div>

        {/* Categories Section */}
        <div className="mx-auto max-w-6xl px-6 mt-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-red-600 animate-color-change">
            Explore Our Categories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Technology", "HTML", "AI", "Web Development", "Automation", "Design"].map((category, index) => (
              <div
                key={index}
                className="relative group p-8 bg-white rounded-lg shadow-lg 
                hover:bg-sky-300 hover:text-black transition-transform duration-300 ease-in-out 
                transform hover:scale-105 cursor-pointer text-center"
              >
                <p className="text-lg font-semibold">{category}</p>
                <div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-white 
                  rounded-lg transition duration-300 ease-in-out"
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Informational Footer */}
        <div className="max-w-5xl mx-auto mt-16">
          <p className="text-center text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in-down delay-100">
            Artificial Intelligence and web development are transforming the way
            we interact with technology. From creating dynamic websites using HTML
            to building intelligent systems with AI, these fields open up endless
            possibilities. HTML, the foundation of web development, is not just
            about structuring content—it’s about creating experiences that connect
            people and information. With AI revolutionizing everything from
            automation to user experience, the combination of HTML and AI promises
            a future where the web is smarter, faster, and more personalized than
            ever before.
          </p>
        </div>
      </section>
    </div>
  );
}
