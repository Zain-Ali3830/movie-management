"use client";
import { useState, useEffect } from "react";

function MovieForm({ movie, onSubmit, onCancel, isEdit = false }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
    duration: "",
    genre: "",
    director: "",
    writers: "",
    release_date: "",
    picurl: ""
  });

  useEffect(() => {
    if (isEdit && movie) {
      setFormData({
        title: movie.title || "",
        description: movie.description || "",
        rating: movie.rating || "",
        duration: movie.duration || "",
        genre: movie.genre || "",
        director: movie.director || "",
        writers: movie.writers || "",
        release_date: movie.release_date ? movie.release_date.split('T')[0] : "",
        picurl: movie.picurl || ""
      });
    }
  }, [movie, isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1c2541] text-white p-6 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-[#00b4d8]">
          {isEdit ? "Edit Movie" : "Add Movie"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full p-2 rounded bg-[#0b132b] border border-gray-600 focus:border-[#00b4d8]"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="10"
                value={formData.rating}
                onChange={(e) => setFormData({...formData, rating: e.target.value})}
                className="w-full p-2 rounded bg-[#0b132b] border border-gray-600 focus:border-[#00b4d8]"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Duration</label>
              <input
                type="text"
                placeholder="e.g., 2h 30m"
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="w-full p-2 rounded bg-[#0b132b] border border-gray-600 focus:border-[#00b4d8]"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Genre</label>
              <input
                type="text"
                value={formData.genre}
                onChange={(e) => setFormData({...formData, genre: e.target.value})}
                className="w-full p-2 rounded bg-[#0b132b] border border-gray-600 focus:border-[#00b4d8]"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Director</label>
              <input
                type="text"
                value={formData.director}
                onChange={(e) => setFormData({...formData, director: e.target.value})}
                className="w-full p-2 rounded bg-[#0b132b] border border-gray-600 focus:border-[#00b4d8]"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Release Date</label>
              <input
                type="date"
                value={formData.release_date}
                onChange={(e) => setFormData({...formData, release_date: e.target.value})}
                className="w-full p-2 rounded bg-[#0b132b] border border-gray-600 focus:border-[#00b4d8]"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Writers</label>
            <input
              type="text"
              value={formData.writers}
              onChange={(e) => setFormData({...formData, writers: e.target.value})}
              className="w-full p-2 rounded bg-[#0b132b] border border-gray-600 focus:border-[#00b4d8]"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="url"
              value={formData.picurl}
              onChange={(e) => setFormData({...formData, picurl: e.target.value})}
              className="w-full p-2 rounded bg-[#0b132b] border border-gray-600 focus:border-[#00b4d8]"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              rows="3"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full p-2 rounded bg-[#0b132b] border border-gray-600 focus:border-[#00b4d8]"
              required
            />
          </div>
          
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-2 bg-gray-600 rounded hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-[#00b4d8] text-black font-semibold rounded hover:bg-[#0096c7] transition"
            >
              {isEdit ? "Update" : "Add"} Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MovieForm;