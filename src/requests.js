const API_KEY ="59c7acfe76fdfeb49a5f54e44163c2c2";
const requests = {
   fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchOriginals:`/discover/tv?api_key=${API_KEY}&language=en-US`,
   fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US`,
   fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&language=en-US`,
   fetchHorrorMovies:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchRomanceMovies:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchDocumentaries:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
   //fetchTrending:`/movie/550?api_key=${API_KEY}`  
}
export default requests;