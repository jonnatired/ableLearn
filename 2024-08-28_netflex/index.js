const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const moviesList = {
  nowPlaying: {
    selector: ".now-playing",
    url: "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
  },
  topRated: {
    selector: ".top-rated",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
  },
};

const method = "GET";
const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsIm5iZiI6MTcyNDgzMjQ5NC41NTE1NTMsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRVZwTNunIYGQ1-wPudD_JX_4KKTVWUSXtLP5Y4ARqs",
};

const options = {
  method,
  headers,
};

async function getMovies(url) {
  const movies = await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;

      return movies;
    });

  return movies;
}

function renderMovies(movies, dom) {
  movies.forEach((movie) => {
    const movieHTML = `
    <li>
      <article class="movies-section-movie">
        <img src="${IMAGE_BASE_URL}${movie.backdrop_path}" class="movies-section-movie-thumbnail" />
        <h5 class="movies-section-movie-title">${movie.title}</h5>
      </article>
    </li>
    `;

    dom.innerHTML += movieHTML;
  });
}

async function main() {
  Object.entries(moviesList).forEach(async ([_, value]) => {
    const { url, selector } = value;
    const movies = await getMovies(url);
    const dom = document.querySelector(selector);
    renderMovies(movies, dom);
  });
}

main();
