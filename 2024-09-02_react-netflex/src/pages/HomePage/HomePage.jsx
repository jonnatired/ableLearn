import MoviesList from "../../components/MoviesList/MoviesList";
import Page from "../../components/Page/Page";

function HomePage() {
  return (
    <Page>
      <MoviesList title="현재 상영작" category="now_playing" />
      <MoviesList title="평점이 높은 영화" category="top_rated" />
      <MoviesList title="인기 있는" category="popular" />
      <MoviesList title="곧 개봉하는" category="upcoming" />
    </Page>
  );
}

export default HomePage;
