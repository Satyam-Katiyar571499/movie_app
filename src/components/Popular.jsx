import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./template/Topnav";
import Dropdown from "./template/Dropdown";
import axios from "../utils/axios";
import Verticalcards from "./template/Verticalcards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const navigate = useNavigate();
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const getpopular = async (pg = page) => {
    try {
      const { data } = await axios.get(
        `/${category}/popular?page=${pg}`
      );

      if (data.results.length > 0) {
        setpopular((prev) => [...prev, ...data.results]);
        setpage((prev) => prev + 1); // ✅ safe update
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

 
  useEffect(() => {
    setpage(1);
    setpopular([]);
    sethasmore(true);
    document.title = `NDFRP | POPULAR | ${category.toUpperCase()}`;


    getpopular(1);
  }, [category]);


  if (popular.length === 0) {
    return <Loading />;
  }

  return (
    <div className="w-screen min-h-screen bg-[#1f1e24] px-[3%]">
      
      <div className="mb-5 flex items-center w-full h-[10%]">
        <h1 className="font-black text-2xl text-white">
          <i
            onClick={() => navigate(-1)}
            className="font-bold hover:text-[#6556CD] text-white ri-arrow-left-line"
          ></i>
          Popular
        </h1>

        <Topnav />

        <Dropdown
          title={"Category"}
          options={["movie", "tv"]}
          func={(e) => setcategory(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getpopular}
        hasMore={hasmore}
        loader={<h4 className="text-white">Loading...</h4>}
      >
        <Verticalcards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  );
}

export default Popular;