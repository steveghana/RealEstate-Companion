import axios from "axios";
import intialFetch, { initialFetch } from "./data";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  // const { data } = await axios.get(url, {
  //   headers: {
  //     "x-rapidapi-host": "bayut.p.rapidapi.com",
  //     "x-rapidapi-key": process.env.API_KEY,
  //   },
  // });

  return initialFetch;
};