import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./template/Topnav";
import Dropdown from "./template/Dropdown";
import axios from "../utils/axios";
import Verticalcards from "./template/Verticalcards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";





function Movies() {
  const [category, setcategory] = useState("now_playing"); 
  const [movies, setmovies] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const navigate = useNavigate();

 
  const getMovies = async (pg = page) => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${pg}`);

      if (data.results.length > 0) {
        setmovies((prev) => [...prev, ...data.results]);
        setpage((prev) => prev + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };


  useEffect(() => {
    setmovies([]);
    setpage(1);
    sethasmore(true);
    getMovies(1);

    document.title = `NDFRP | MOVIES | ${category.toUpperCase()}.`;
  }, [category]);

 
  if (movies.length === 0) {
    return <Loading />;
  }

  return (
    <div className="w-screen px-[3%] min-h-screen bg-[#1f1e24]">

      <div className="mb-5 flex items-center w-full h-[10%]">
        <h1 className="font-black text-2xl text-white">
          <i
            onClick={() => navigate(-1)}
            className="font-bold hover:text-[#6556CD] text-white ri-arrow-left-line"
          ></i>
          Movies
        </h1>

        <Topnav />

      
        <Dropdown
          title={"Category"}
          options={["popular", "top_rated", "upcoming", "now_playing"]}
          value={category}
          func={(e) => setcategory(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={getMovies}
        hasMore={hasmore}
        loader={<h4 className="text-white">Loading...</h4>}
      >
        <Verticalcards data={movies} title="movie" />
      </InfiniteScroll>
      {/* <Outlet/> */}
    </div>
  );
}

export default Movies;