import axios from "../../../utils/axios";
import { loadmovie, removemovie } from "../reducers/Movieslice";


export { removemovie };

export const asyncloadmovie = (id) => async (dispatch) => {
  try {

    const detail = await axios.get(`/movie/${id}`);

    dispatch(loadmovie({
      detail: detail.data
    }));


 const [externalid, recommendations, similar, translations, videos, watchproviders] =
  await Promise.all([
    axios.get(`/movie/${id}/external_ids`),
    axios.get(`/movie/${id}/recommendations`),
    axios.get(`/movie/${id}/similar`),
    axios.get(`/movie/${id}/translations`),
    axios.get(`/movie/${id}/videos`),
    axios.get(`/movie/${id}/watch/providers`)
  ]);

    dispatch(loadmovie({
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map(t=>t.english_name),
      videos: videos.data.results.find(
        (m) => m.type === "Trailer"
      ) || null,
      watchproviders: watchproviders.data
    }));

  } catch (error) {
    console.log("Error:", error);
  }
};