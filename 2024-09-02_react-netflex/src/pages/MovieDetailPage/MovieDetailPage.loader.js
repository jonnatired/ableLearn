import { getMovie } from "../../api/api";

async function movieDetailPageLoader({ params }) {
  const { movieId } = params;
  const movie = await getMovie(movieId);

  return movie;
}

export default movieDetailPageLoader;
