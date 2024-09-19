import { Link } from "react-router-dom";

export default function MovieCard({ id, titulo, imagem_destaque }) {
    return(
        <>
            <h2 className="hover:text-purple-700">{titulo}</h2>
            <img src={imagem_destaque}/>
            <Link to={`/movies/${id}`}>Saiba mais</Link>
        </>
    )

}