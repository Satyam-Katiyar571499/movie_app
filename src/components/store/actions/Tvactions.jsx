import axios from "../../../utils/axios";
import { loadtv, removetv } from "../reducers/Tvslice";

export { removetv };

export const asyncloadtv = (id) => async (dispatch) => {
  try {

    // basic detail
    const detail = await axios.get(`/tv/${id}`);

    dispatch(loadtv({
      detail: detail.data,
    }));

    // parallel calls
    const [
      externalid,
      recommendations,
      similar,
      translations,
      videos,
      watchproviders
    ] = await Promise.all([
      axios.get(`/tv/${id}/external_ids`),
      axios.get(`/tv/${id}/recommendations`),
      axios.get(`/tv/${id}/similar`),
      axios.get(`/tv/${id}/translations`),
      axios.get(`/tv/${id}/videos`),
      axios.get(`/tv/${id}/watch/providers`)
    ]);

    dispatch(loadtv({
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map(t => t.english_name),
     videos:
  videos.data?.results?.find(v => v.type === "Trailer") ||
  videos.data?.results?.find(v => v.type === "Teaser") ||
  videos.data?.results?.find(v => v.type === "Clip") ||
  videos.data?.results?.[0] ||
  null,
      watchproviders: watchproviders.data.results?.IN || {}, // India filter
    }));

  } catch (error) {
    console.log("TV Error:", error);
  }
};