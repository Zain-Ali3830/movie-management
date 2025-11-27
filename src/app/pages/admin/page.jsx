"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAllMovies, updateMovie, deleteMovie } from "@/app/API's/api";
import MovieForm from "@/app/components/MovieForm";
import { Toaster, toast } from "react-hot-toast";
import { FaEdit, FaTrash, FaPlus, FaSignOutAlt } from "react-icons/fa";

function AdminPage() {
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/pages/login");
    }
  }, [router]);
  const [movies, setMovies] = useState([
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
    }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    // Using dummy data, no API call needed
    setLoading(false);
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        setMovies(movies.filter(movie => movie.id !== id));
        toast.success("Movie deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete movie");
      }
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (editingMovie) {
        // Update existing movie
        setMovies(movies.map(movie => 
          movie.id === editingMovie.id ? { ...movie, ...formData } : movie
        ));
        toast.success("Movie updated successfully!");
      } else {
        // Add new movie
        const newMovie = {
          ...formData,
          id: Math.max(...movies.map(m => m.id)) + 1
        };
        setMovies([...movies, newMovie]);
        toast.success("Movie added successfully!");
      }
      setShowForm(false);
      setEditingMovie(null);
    } catch (error) {
      toast.error(editingMovie ? "Failed to update movie" : "Failed to add movie");
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingMovie(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b132b] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-[#0b132b] text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#00b4d8]">Movie Management</h1>
            <div className="flex gap-3">
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-[#00b4d8] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#0096c7] transition"
              >
                <FaPlus /> Add Movie
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  router.push("/pages/login");
                }}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>

          <div className="bg-[#1c2541] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#00b4d8] text-black">
                  <tr>
                    <th className="p-4 text-left">Image</th>
                    <th className="p-4 text-left">Title</th>
                    <th className="p-4 text-left">Rating</th>
                    <th className="p-4 text-left">Duration</th>
                    <th className="p-4 text-left">Genre</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((movie) => (
                    <tr key={movie.id} className="border-b border-gray-600 hover:bg-[#0b132b]/50">
                      <td className="p-4">
                        <img
                          src={movie.picurl}
                          alt={movie.title}
                          className="w-16 h-20 object-cover rounded"
                        />
                      </td>
                      <td className="p-4 font-semibold">{movie.title}</td>
                      <td className="p-4">{movie.rating}</td>
                      <td className="p-4">{movie.duration}</td>
                      <td className="p-4">{movie.genre}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(movie)}
                            className="p-2 bg-blue-600 rounded hover:bg-blue-500 transition"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(movie.id)}
                            className="p-2 bg-red-600 rounded hover:bg-red-500 transition"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {movies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No movies found</p>
            </div>
          )}
        </div>

        {showForm && (
          <MovieForm
            movie={editingMovie}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            isEdit={!!editingMovie}
          />
        )}
      </div>
    </>
  );
}

export default AdminPage;