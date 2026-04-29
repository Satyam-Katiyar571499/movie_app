import { useState, useEffect } from 'react';




import { useNavigate } from "react-router-dom";
import Topnav from "./template/Topnav";
import axios from "../utils/axios";
import Verticalcards from "./template/Verticalcards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { Outlet } from 'react-router-dom';
function People() {
  const [people, setpeople] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  const getPeople = async (pg = page) => {
    try {
      const { data } = await axios.get(`/person/popular?page=${pg}`);

      if (data.results.length > 0) {
        setpeople((prev) => [...prev, ...data.results]);
        setpage((prev) => prev + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    setpeople([]);
    setpage(1);
    sethasmore(true);
    setloading(true);
    getPeople(1);
    document.title = "NDFRP | PEOPLE";
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-screen px-[3%] min-h-screen bg-[#1f1e24]">
      <div className="mb-5 flex items-center w-full h-[10%]">
        <h1 className="font-black text-2xl text-white whitespace-nowrap">
          <i
            onClick={() => navigate(-1)}
            className="font-bold hover:text-[#6556CD] text-white ri-arrow-left-line"
          ></i>
          People
        </h1>

        <Topnav />
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasmore}
        loader={<h4 className="text-white">Loading...</h4>}
      >
        <Verticalcards data={people} title="person" />
      </InfiniteScroll>
      {/* <Outlet /> */}
    </div>
  );
}

export default People;