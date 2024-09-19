import CardContainer from "../components/CardContainer";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"

export default function Home(){
    return(
        <>
        <CardContainer title="Filmes Antigos">
            {
                movies.map(filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
            }
        </CardContainer>
        </>
    )
}