"use client";
import MovieCard from "@/app/components/moviecard";
import Navbar from "@/app/components/navbar";
import Slider from "@/app/components/slider";
function HomePage() {
  return (
    <>
      <div className=" bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
        <div className="flex flex-col gap-4 items-center justify-center bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
          <Navbar />
          <h1 className="text-4xl font-bold text-white text-center px-1">
            Movie Night Starts Here
          </h1>
        </div>
        <Slider />
        <h1 className="text-4xl font-bold text-white text-center px-1 mt-10">
         Unlimited movies, TV shows, and more.
        </h1>
        <MovieCard />
      </div>
    </>
  );
}

export default HomePage;
