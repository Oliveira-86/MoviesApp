import axios from "axios";
const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGM4Y2Y1ZGUxN2JiYzZkZWQ2MDUzNWQwMDE4NmU4YiIsIm5iZiI6MTcyMjYzNjY4Ny4zNDEyNDgsInN1YiI6IjYxNTVjZTEzZjA0ZDAxMDA0NDU0NGUwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_yYjJ3C3u_5jEKxSbszBDX-CEL1duw2MFWuh2nrnsQ'

const headers = {
  accept: 'application/json',
  Authorization: 'Bearer ' + apiKey,
};

export const fetchTopRatedMovies = async () => {
    console.log('Fetch')
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers,
  };

  try {
      const res = await axios.get(url, options);
      console.log("RES: ", res.data.results[0]);
    
      if (!res.data) {
        throw new Error('Failed to fetch movies');
      }
    
      return res.data;
  } catch (error) {
    console.error(error);
  }
};