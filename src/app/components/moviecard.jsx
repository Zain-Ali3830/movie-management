import { FaStar } from "react-icons/fa";
import { getAllMovies } from "../API's/api";
import Link from "next/link";
import { useState, useEffect } from "react";

function MovieCard() {
  const [moviesData, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getAllMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  console.log(moviesData);

  return (
    <div className="px-6 py-8">
      {/* Responsive Grid */}
      <div className="grid gap-6 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      xl:grid-cols-5">
        {moviesData.map((movie) => {
          return (
           <Link key={movie.id} href={'/movieById/'+movie.id}>
            <div
              key={movie.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Movie Image */}
              <img
                className="w-full h-60 object-cover"
                src={movie.picurl}
                alt="Movie Poster"
              />

              {/* Content */}
              <div className="p-4">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800">{movie.title}</h2>

                {/* Duration + Rating */}
                <div className="flex items-center justify-between mt-2 text-gray-600">
                  <p>{movie.duration}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">{movie.rating}</span>
                  </div>
                </div>
              </div>
            </div>
           </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MovieCard;
