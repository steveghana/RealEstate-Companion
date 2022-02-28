import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e",
    },
  });

  return data;
};
