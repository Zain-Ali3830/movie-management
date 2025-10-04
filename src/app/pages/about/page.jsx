import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0b132b] text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-[#00d4ff] tracking-wide">
          About CineStream
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Welcome to <span className="text-[#00d4ff] font-semibold">CineStream</span> — 
          your ultimate destination for exploring the world of cinema!  
          Dive into a massive collection of movies, discover trending releases, 
          and explore cinematic masterpieces across genres.  
          We aim to bring movie enthusiasts a smooth and modern browsing experience 
          with detailed information, ratings, and reviews.
        </p>

        <div className="grid sm:grid-cols-2 gap-10 text-left">
          <div className="bg-[#1c2541] p-6 rounded-2xl shadow-lg border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition">
            <h2 className="text-2xl font-semibold text-[#00d4ff] mb-3"> Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To connect film lovers globally by providing them with 
              an immersive and personalized movie discovery platform — 
              simple, elegant, and fun to use.
            </p>
          </div>

          <div className="bg-[#1c2541] p-6 rounded-2xl shadow-lg border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition">
            <h2 className="text-2xl font-semibold text-[#00d4ff] mb-3"> Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become the most loved online hub for movie fans —  
              where users can explore, discuss, and experience the 
              magic of cinema from anywhere in the world.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-3xl font-semibold mb-3 text-[#00d4ff]">
            Built for Movie Lovers 
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From blockbusters to hidden gems, CineStream was crafted 
            by developers who love movies as much as you do.  
            Every pixel, every interaction — designed to make you feel 
            like you’re part of a cinematic universe.
          </p>
        </div>
      </div>
    </div>
  );
}
