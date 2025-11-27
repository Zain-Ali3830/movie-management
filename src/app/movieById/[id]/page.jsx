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

  const mockMovies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      description: "The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
      rating: 8.4,
      duration: "3h 1m",
      genre: "Action, Adventure, Drama",
      director: "Anthony Russo, Joe Russo",
      writers: "Christopher Markus, Stephen McFeely",
      release_date: "2019-04-26",
      picurl: "/movie 1.jpg"
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.",
      rating: 9.0,
      duration: "2h 32m",
      genre: "Action, Crime, Drama",
      director: "Christopher Nolan",
      writers: "Jonathan Nolan, Christopher Nolan",
      release_date: "2008-07-18",
      picurl: "/movie 2.jpg"
    },
    {
      id: 3,
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
      rating: 8.8,
      duration: "2h 28m",
      genre: "Action, Sci-Fi, Thriller",
      director: "Christopher Nolan",
      writers: "Christopher Nolan",
      release_date: "2010-07-16",
      picurl: "/movie 3.jpg"
    },
    {
      id: 4,
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      rating: 8.6,
      duration: "2h 49m",
      genre: "Adventure, Drama, Sci-Fi",
      director: "Christopher Nolan",
      writers: "Jonathan Nolan, Christopher Nolan",
      release_date: "2014-11-07",
      picurl: "/movie 4.jpg"
    },
    {
      id: 5,
      title: "The Matrix",
      description: "A computer programmer discovers that reality as he knows it is a simulation and joins a rebellion to free humanity.",
      rating: 8.7,
      duration: "2h 16m",
      genre: "Action, Sci-Fi",
      director: "Lana Wachowski, Lilly Wachowski",
      writers: "Lana Wachowski, Lilly Wachowski",
      release_date: "1999-03-31",
      picurl: "/movie 5.jpg"
    },
    {
      id: 6,
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
      rating: 8.9,
      duration: "2h 34m",
      genre: "Crime, Drama",
      director: "Quentin Tarantino",
      writers: "Quentin Tarantino, Roger Avary",
      release_date: "1994-10-14",
      picurl: "/movie 1.jpg"
    },
    {
      id: 7,
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      rating: 9.2,
      duration: "2h 55m",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      writers: "Mario Puzo, Francis Ford Coppola",
      release_date: "1972-03-24",
      picurl: "/movie 2.jpg"
    },
    {
      id: 8,
      title: "Forrest Gump",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
      rating: 8.8,
      duration: "2h 22m",
      genre: "Drama, Romance",
      director: "Robert Zemeckis",
      writers: "Winston Groom, Eric Roth",
      release_date: "1994-07-06",
      picurl: "/movie 3.jpg"
    }
  ];

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;
      try {
        const movieData = await getMovieById(id);
        setMovie(movieData);
      } catch (error) {
        // Fallback to mock data
        const mockMovie = mockMovies.find(m => m.id === parseInt(id));
        setMovie(mockMovie);
      }
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
