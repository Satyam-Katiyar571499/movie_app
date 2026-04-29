import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./template/Topnav";
import Dropdown from "./template/Dropdown";
import axios from "../utils/axios";
import Verticalcards from "./template/Verticalcards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const navigate = useNavigate();
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const getTrending = async (pg = page) => {
    try {
      const { data } = await axios.get(
        `/trending/all/${duration}?page=${pg}`
      );

      let filtered = data.results;

      if (category !== "all") {
        filtered = data.results.filter(
          (item) => item.media_type === category
        );
      }

      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...filtered]);
        setpage((prev) => prev + 1); // ✅ safe update
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const refreshandler = () => {
    setpage(1);
    settrending([]);
    sethasmore(true);
    getTrending(1);
  };

  useEffect(() => {
    document.title = `NDFRP | TRENDING | ${category.toUpperCase()}`;
    refreshandler();
  }, [category, duration]);

  if (trending.length === 0) {
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
          Trending
        </h1>

        <Topnav />

        {/* ✅ FIXED DROPDOWN */}
        <Dropdown
          title={"Category"}
          options={["movie", "tv", "all"]}
          value={category}
          func={(e) => setcategory(e.target.value)}
        />

        <div className="w-[2%]"></div>

        {/* ✅ FIXED DROPDOWN */}
        <Dropdown
          title={"Duration"}
          options={["week", "day"]}
          value={duration}
          func={(e) => setduration(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasmore}
        loader={<h4 className="text-white">Loading...</h4>}
      >
        <Verticalcards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  );
}

export default Trending;