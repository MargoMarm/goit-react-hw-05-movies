import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c9873e67c5e03bd61e79d852c2fd46a6';

export async function getTrendingMovies() {
  const url = `${MAIN_URL}/trending/movie/day?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(id) {
  const url = `${MAIN_URL}/movie/${id}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
