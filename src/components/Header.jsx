import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="flex bg-purple-700 justify-around h-14 items-center backdrop-blur-xl">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}