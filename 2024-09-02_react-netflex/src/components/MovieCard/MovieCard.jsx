import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="no-underline">
      {/* 영화 이미지 */}
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-full bg-white"
      />

      {/* 영화 제목 */}
      <h6 className="font-bold text-xl mb-0 mt-4">{movie.title}</h6>
    </Link>
  );
}

export default MovieCard;
