import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen bg-[#1f1e24] text-white px-[8%] py-10">
      
      <h1 className="text-4xl font-black mb-8 flex items-center gap-3">
        <i
          onClick={() => navigate(-1)}
          className="cursor-pointer hover:text-[#6556CD] ri-arrow-left-line"
        ></i>
        About NDFRP
      </h1>

      <div className="max-w-4xl">
        <p className="text-lg text-gray-300 leading-8 mb-6">
          NDFRP is a modern entertainment discovery platform where users can explore trending movies,
          popular TV shows, and well-known personalities from around the world. The application provides
          a smooth and interactive interface to browse content effortlessly.
        </p>

        <p className="text-lg text-gray-300 leading-8 mb-6">
          All the content such as posters, profiles, ratings, and details is powered by The Movie Database (TMDB) API.
          This ensures that the information displayed is always up-to-date and reliable.
        </p>

        <p className="text-lg text-gray-300 leading-8 mb-8">
          The platform is designed with a focus on performance, clean UI, and seamless navigation,
          making it easy for users to discover and explore entertainment content.
        </p>

        <div className="bg-[#2a2930] p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="space-y-2 text-gray-300">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>TMDB API</li>
            <li>Axios</li>
            <li>React Router</li>
          </ul>
        </div>

        <div className="flex items-center gap-5 bg-[#2a2930] p-6 rounded-xl">
          <img
  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tmdb.new.logo.svg"
  alt="tmdb"
  className="h-10"
/>
          <p className="text-gray-300">
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;