'use client'

import { getMovieById } from "@/app/API's/api";
import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  MdStarRate, 
  MdAccessTime, 
  MdMovie, 
  MdCalendarMonth, 
  MdOutlinePerson, 
  MdOutlineEdit 
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
    return <div className="p-6 text-center text-white">Loading...</div>;
  }

  return (
    <div className="bg-[#0b132b] min-h-screen text-white px-6 py-10">
      <motion.div 
        className="max-w-4xl mx-auto flex flex-col gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* Poster Image */}
        <motion.img
          src={movie.picurl}
          alt={movie.title}
          className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />

        {/* Details Section */}
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Title */}
          <h1 className="text-4xl font-bold mb-3">{movie.title}</h1>

          {/* Rating, Duration, Genre */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-4">
            <motion.div className="flex items-center gap-2 hover:scale-110 transition" >
              <MdStarRate className="text-yellow-400 text-2xl" />
              <span className="font-semibold">{movie.rating}</span>
            </motion.div>
            <motion.div className="flex items-center gap-2 hover:scale-110 transition">
              <MdAccessTime className="text-blue-400 text-2xl" />
              <span>{movie.duration}</span>
            </motion.div>
            <motion.div className="flex items-center gap-2 hover:scale-110 transition">
              <MdMovie className="text-purple-400 text-2xl" />
              <span>{movie.genre}</span>
            </motion.div>
          </div>

          {/* Release Date */}
          <div className="flex justify-center items-center gap-2 text-gray-300 mb-4">
            <MdCalendarMonth className="text-green-400 text-2xl" />
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
              <MdOutlinePerson className="text-indigo-400 text-2xl" /> 
              <span>Director: {movie.director}</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <MdOutlineEdit className="text-pink-400 text-2xl" /> 
              <span>Writers: {movie.writers}</span>
            </p>
          </div>

          {/* Description */}
          <motion.p 
            className="text-gray-200 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {movie.description}
          </motion.p>

          {/* CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-xl shadow-md hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
          >
            🎟️ Book Ticket
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MovieDetails;
