import { FaStar } from "react-icons/fa";
import { getAllMovies } from "../API's/api";
import Link from "next/link";
import { useState, useEffect } from "react";

function MovieCard() {
  const [moviesData, setMovies] = useState([
    {
      id: 1,
      title: "Avengers: Endgame",
      duration: "3h 1m",
      rating: 8.4,
      picurl: "/movie 1.jpg"
    },
    {
      id: 2,
      title: "The Dark Knight",
      duration: "2h 32m",
      rating: 9.0,
      picurl: "/movie 2.jpg"
    },
    {
      id: 3,
      title: "Inception",
      duration: "2h 28m",
      rating: 8.8,
      picurl: "/movie 3.jpg"
    },
    {
      id: 4,
      title: "Interstellar",
      duration: "2h 49m",
      rating: 8.6,
      picurl: "/movie 4.jpg"
    },
    {
      id: 5,
      title: "The Matrix",
      duration: "2h 16m",
      rating: 8.7,
      picurl: "/movie 5.jpg"
    },
    {
      id: 6,
      title: "Pulp Fiction",
      duration: "2h 34m",
      rating: 8.9,
      picurl: "/movie 1.jpg"
    },
    {
      id: 7,
      title: "The Godfather",
      duration: "2h 55m",
      rating: 9.2,
      picurl: "/movie 2.jpg"
    },
    {
      id: 8,
      title: "Forrest Gump",
      duration: "2h 22m",
      rating: 8.8,
      picurl: "/movie 3.jpg"
    }
  ]);



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
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-80 flex flex-col"
            >
              {/* Movie Image */}
              <img
                className="w-full h-60 object-cover flex-shrink-0"
                src={movie.picurl}
                alt="Movie Poster"
              />

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2">{movie.title}</h2>

                {/* Duration + Rating */}
                <div className="flex items-center justify-between text-gray-600">
                  <p className="text-sm">{movie.duration}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold text-sm">{movie.rating}</span>
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
