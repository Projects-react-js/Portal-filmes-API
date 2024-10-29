import { Link } from "react-router-dom";

export default function MovieCard({ id, title, poster_path, backdrop_path }) {
    return (
        <div className="text-center">
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} />
            {/* <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} /> */}
            <Link to={`/movies/${id}`}>Saber mais</Link>
        </div>
    )

}