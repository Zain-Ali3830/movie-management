"use client";

import { getMovieById } from "@/app/API's/api";
import { use, useEffect, useState } from "react";
import BookingForm from "@/app/components/form";
import {
  MdStarRate,
  MdAccessTime,
  MdMovie,
} from "react-icons/md";

function MovieDetails({ params }) {
  const { id } = use(params);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;
      const movieData = await getMovieById(id);
      setMovie(movieData);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="p-6 text-center text-white animate-pulse">Loading...</div>
    );
  }

  return (
    <div className="bg-[#0b132b] min-h-screen text-white px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 animate-fadeIn">
        {/* Poster Image */}
        <img
          src={movie.picurl}
          alt={movie.title}
          className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
        />

        {/* Details Section */}
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-3 transition duration-500 hover:text-yellow-400">
            {movie.title}
          </h1>

          {/* Rating, Duration, Genre */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-4">
            <div className="flex items-center gap-2 transform transition duration-300 hover:scale-110">
              <MdStarRate className="text-yellow-400 text-2xl" />
              <span className="font-semibold">{movie.rating}</span>
            </div>
            <div className="flex items-center gap-2 transform transition duration-300 hover:scale-110">
              <MdAccessTime className="text-blue-400 text-2xl" />
              <span>{movie.duration}</span>
            </div>
            <div className="flex items-center gap-2 transform transition duration-300 hover:scale-110">
              <MdMovie className="text-purple-400 text-2xl" />
              <span>{movie.genre}</span>
            </div>
          </div>

          {/* Release Date */}
          <div className="flex justify-center items-center gap-2 text-gray-300 mb-4 border border-2 px-2 py-1 rounded-sm  border-gray-600 transform transition duration-300 hover:scale-110">
            <p>Released:</p>
            <span>
              {new Date(movie.release_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Director & Writers */}
          <div className="flex flex-col gap-2 text-gray-300 mb-6">
            <p className="flex justify-center items-center gap-2">
              <span className="border border-2 px-2 py-1 rounded-sm  border-gray-600 transform transition duration-300 hover:scale-110">
                Director: {movie.director}
              </span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <span className="border border-2 px-2 py-1 rounded-sm  border-gray-600 transform transition duration-300 hover:scale-110">
                Writers: {movie.writers}
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed mb-8 opacity-0 animate-fadeIn delay-300">
            {movie.description}
          </p>

          {/* CTA Button */}
          <BookingForm movieTitle={movie.title} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
