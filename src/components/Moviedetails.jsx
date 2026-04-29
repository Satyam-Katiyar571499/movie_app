import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie } from "./store/actions/Movieactions";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import Horizontalcards from "./template/Horizontalcards";

export default function Moviedetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
  }, [id]);

  if (!info || !info.detail) return <Loading />;

  const imagePath =
    info.detail.poster_path || info.detail.backdrop_path;

  const providers = info.watchproviders;

  const recommendations =
    info.recommendations?.length > 0
      ? info.recommendations
      : info.similar;

  return (
    <div
      key={id}
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.1),
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.9)
        ), url(https://image.tmdb.org/t/p/w780${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top 90%",
        backgroundRepeat: "no-repeat",
      }}
      className=" relative w-screen min-h-screen px-[10%] pb-10"
    >
      <nav className="w-full h-[10%] flex items-center gap-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="text-white text-lg ri-arrow-left-line"
        ></button>

        <a target="_blank" href={info.detail.homepage}>
          <i className="text-white ri-external-link-line text-lg"></i>
        </a>

        <a
          href={`https://www.wikidata.org/wiki/${info.externalid?.wikidata_id}/`}
          target="_blank"
          className="text-white"
        >
          <i className="ri-global-fill text-lg"></i>
        </a>

        <a
          href={`https://www.imdb.com/title/${info.externalid?.imdb_id}/`}
          className="text-sm text-white"
        >
          IMDB
        </a>
      </nav>

      <div className="w-full flex gap-8 items-start mt-8">
        <img
          className="w-[25vh] h-[45vh] border border-zinc-800 object-cover"
          src={
            imagePath
              ? `https://image.tmdb.org/t/p/original${imagePath}`
              : "/icons8-no-camera-50.png"
          }
          onError={(e) => {
            e.target.src = "/icons8-no-camera-50.png";
          }}
          alt=""
        />

        <div className="text-white w-[60%]">
          <h1 className="text-2xl font-semibold mb-2">
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}
          </h1>

          <p className="text-xs mb-4 opacity-70">
            {info.detail.overview}
          </p>

          <div className="mt-3 p-3 rounded text-white text-sm">
            <h1 className="text-lg font-semibold mb-2">
              Release: {info.detail.release_date}
            </h1>

            <h1 className="mb-1">
              {Math.floor(info.detail.runtime / 60)}h{" "}
              {info.detail.runtime % 60}m
            </h1>

            <h1 className="mb-1">
              {info.detail.genres.map((g) => g.name).join(", ")}
            </h1>

            <h1 className="italic mb-2">
              {info.detail.tagline}
            </h1>

            <h1 className="font-semibold">Overview</h1>
            <p className="italic mb-2">
              {info.detail.overview}
            </p>

            <h1 className="mt-2 font-semibold">
              Movie Translated
            </h1>
            <p className="italic">
              {info.translations?.join(", ")}
            </p>

            <Link
              className="inline-block bg-[#2ca114] px-3 py-1.5 rounded mt-3 text-white text-sm hover:bg-[#4b3bb5]"
              to={`/movie/details/${id}/trailer`}
            >
              ▶ Play Trailer
            </Link>

            {providers?.flatrate?.length > 0 && (
              <div className="flex gap-2 mt-3">
                {providers.flatrate.map((w, i) => (
                  <img
                    key={i}
                    className="w-[4vh] h-[4vh] rounded"
                    src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                    alt=""
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-white text-xl font-semibold mb-3">
          Recommended
        </h1>

        {recommendations?.length > 0 && (
          <Horizontalcards data={recommendations} />
        )}
      </div><Outlet></Outlet>
    </div>
  );
}