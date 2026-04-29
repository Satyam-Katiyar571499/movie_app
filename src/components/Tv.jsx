import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import Topnav from "./template/Topnav";
import Dropdown from "./template/Dropdown";
import axios from "../utils/axios";
import Verticalcards from "./template/Verticalcards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { Outlet } from 'react-router-dom';
function Tv() {
  const [category, setcategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const navigate = useNavigate();

  const getTv = async (pg = page) => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${pg}`);

      if (data.results.length > 0) {
        settv((prev) => [...prev, ...data.results]);
        setpage((prev) => prev + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    settv([]);
    setpage(1);
    sethasmore(true);
    getTv(1);

    document.title = `NDFRP | TV SHOWS | ${category.toUpperCase()}`;
  }, [category]);

  if (tv.length === 0) {
    return <Loading />;
  }

  return (
    <div className="w-screen px-[3%] min-h-screen bg-[#1f1e24]">
      <div className="mb-5 flex items-center w-full h-[10%]">
        <h1 className="font-black whitespace-nowrap text-2xl text-white">
          <i
            onClick={() => navigate(-1)}
            className="font-bold hover:text-[#6556CD] text-white ri-arrow-left-line"
          ></i>
          TV Shows
        </h1>

        <Topnav />

        <Dropdown
          title={"Category"}
          options={["popular", "top_rated", "on_the_air", "airing_today"]}
          value={category}
          func={(e) => setcategory(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={getTv}
        hasMore={hasmore}
        loader={<h4 className="text-white">Loading...</h4>}
      >
        <Verticalcards data={tv} title="tv" />
      </InfiniteScroll>
      {/* <Outlet /> */}
    </div>
  );
}

export default Tv;