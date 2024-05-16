"use server";

import axios from "axios";

export const fetchMovie = async (page: Number) => {
  const response = await axios.get(
    `https://vnashiesapi.vercel.app/api/movies/get?page=${page}&limit=8`
  );

  const data = response.data.movies;

  return data;
};
