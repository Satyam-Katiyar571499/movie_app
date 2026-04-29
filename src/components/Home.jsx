import { useState, useEffect } from 'react';

import Sidenav from "./template/Sidenav";
import Topnav from "./template/Topnav";
import Header from "./template/Header";
import axios from "../utils/axios";
import Horizontalcards from "./template/Horizontalcards";
import Dropdown from "./template/Dropdown";
import Loading from "./Loading";

function Home() {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]); // ✅ lowercase
  const [category, setCategory] = useState("all");

  const getwall = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");

      if (data.results && data.results.length > 0) {
        let rand =
          data.results[Math.floor(Math.random() * data.results.length)];
        setWallpaper(rand);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      let filtered = data.results || [];

      if (category !== "all") {
        filtered = filtered.filter(
          (item) => item.media_type === category
        );
      }

      setTrending(filtered);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getwall();
    document.title = "NDFRP | Homepage";
  }, []);

  useEffect(() => {
    getTrending();
  }, [category]);

  return wallpaper && trending.length > 0 ? (
    <div className="flex w-full h-full overflow-hidden">
      <Sidenav />

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Topnav />

        <Header data={wallpaper} />

        <div className="p-5 flex justify-between">
          <h1 className="text-white text-2xl font-bold">
            Trending
          </h1>

          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>

        <Horizontalcards data={trending} />
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <Loading />
    </div>
  );
}

export default Home;