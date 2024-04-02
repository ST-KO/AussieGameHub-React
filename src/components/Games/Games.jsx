import React from "react";
import { useEffect, useState } from "react"; 
import { Link, useSearchParams } from "react-router-dom";
import './games.css';

export default function Games() {
    

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [gamesData, setGamesData] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchPageParams, setSearchPageParams] = useSearchParams();

    const genreFilter = searchParams.get("genre");
    const apiPageFilter = searchPageParams.get("page");

    const url = `https://api.rawg.io/api/games?key=74e131e9361b4495b6822a82f55c9b8f&page=${apiPageFilter !== null ? apiPageFilter : "1"}`;
    
    const displayGames = genreFilter ? gamesData.filter(game => game.genres.some(genre => genre.name === genreFilter )) : gamesData;
  

    const handleFilterChange = (key, value) => {
        setSearchParams(prevParam => {
            if(value === null){
                prevParam.delete(key);
            }else{
                prevParam.set(key, value);
            }
            return prevParam;
        });
    };

    const handlePageFilterChange = (key, value) => {
        setSearchPageParams(prevParam => {
            if(value === null){
                prevParam.delete(key);
            }else{
                prevParam.set(key, value);
            }
            return prevParam;
        });


    };

    const styles = {
        color: "white"
    };


    const fetchGames = async () => {
        try {
            setLoading(true);

            const res = await fetch(url);

            const result = await res.json();

            // console.log(result);

            if(result && result.results && result.results.length){
                setGamesData(result.results);
                setLoading(false);
            }

        } catch(err) {
            setLoading(false);
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchGames();
    }, [apiPageFilter]);

    if(loading){
        return (
            <h2 style={styles}>Please Wait! Loading Data ....</h2>
        )
    }

    if(error !== null) {
        return (
            <h2 style={styles}> Error Occur! {error}</h2>
        )
    }

    const gameElements = displayGames.map(game => (
        <div key={game.id} className="games-tile">
            <Link to={`${game.id}`} state={{search: `?${searchParams.toString()}`, genre: genreFilter}}>
                <img src={game.background_image}/>
                
                <div className="game-info">
                    <h2 className="game-info-name">{game.name}</h2>
                    <span className="game-info-released-date">
                        <span>Released Date: </span>
                        <span>{game.released}</span>
                    </span>
                    <div className="game-info-genre">
                        {/* <span>Genres:</span> */}
                        <div className="game-info-genre-name">
                            {game.genres.map(genre => <span className={`game-genre ${genre.name} selected`}>{genre.name} </span>)}
                        </div>
           
                    </div>
                    
                </div>
            </Link>
        </div>
    ));
    
    return(
        <div className="game-list-contaier">
            <h1 className="game-list-contaier-title">Explore Famous Games</h1>
            <div className="game-list-filter-buttons">
                <button onClick={() => handleFilterChange("genre", "Action")} className={`game-genre Action ${genreFilter === "Action" ? "selected" : ""}`}>Action</button>
                <button onClick={() => handleFilterChange("genre", "Indie")} className={`game-genre Indie ${genreFilter === "Indie" ? "selected" : ""}`}>Indie</button>
                <button onClick={() => handleFilterChange("genre", "Puzzle")} className={`game-genre Puzzle ${genreFilter === "Puzzle" ? "selected" : ""}`}>Puzzle</button>
                <button onClick={() => handleFilterChange("genre", "Shooter")} className={`game-genre Shooter ${genreFilter === "Shooter" ? "selected" : ""}`}>Shooter</button>
                <button onClick={() => handleFilterChange("genre", "RPG")} className={`game-genre RPG ${genreFilter === "RPG" ? "selected" : ""}`}>RPG</button>
                <button onClick={() => handleFilterChange("genre", "Adventure")} className={`game-genre Adventure ${genreFilter === "Adventure" ? "selected" : ""}`}>Adventure</button>
                <button onClick={() => handleFilterChange("genre", "Platformer")} className={`game-genre Platformer ${genreFilter === "Platformer" ? "selected" : ""}`}>Platformer</button>
                <button onClick={() => handleFilterChange("genre", "Simulation")} className={`game-genre Simulation ${genreFilter === "Simulation" ? "selected" : ""}`}>Simulation</button>
                <button onClick={() => handleFilterChange("genre", "Arcade")} className={`game-genre Arcade ${genreFilter === "Arcade" ? "selected" : ""}`}>Arcade</button>
                <button onClick={() => handleFilterChange("genre", "Massively Multiplayer")} className={`game-genre Multiplayer ${genreFilter === "Massively Multiplayer" ? "selected" : ""}`}>Massively Multiplayer</button>
                <button onClick={() => handleFilterChange("genre", "Strategy")} className={`game-genre Strategy ${genreFilter === "Strategy" ? "selected" : ""}`}>Strategy</button>
                <button onClick={() => handleFilterChange("genre", "Casual")} className={`game-genre Casual ${genreFilter === "Casual" ? "selected" : ""}`}>Casual</button>
                <button onClick={() => handleFilterChange("genre", "Fighting")} className={`game-genre Fighting ${genreFilter === "Fighting" ? "selected" : ""}`}>Fighting</button>
                {genreFilter ? (<button onClick={() => handleFilterChange("genre", null)} className={`clear-filter $`}>Clear Filter</button>) : null}
            </div>
            <div className="game-list">
                {gameElements}
            </div>
            <div className="pagination">
                <button className={`pagination-button ${apiPageFilter === null ? "selected" : ""}`} onClick={() => handlePageFilterChange("page", null)}>1</button>
                <button className={`pagination-button ${apiPageFilter === "2" ? "selected" : ""}`} onClick={() => handlePageFilterChange("page", "2")}>2</button>
                <button className={`pagination-button ${apiPageFilter === "3" ? "selected" : ""}`} onClick={() => handlePageFilterChange("page", "3")}>3</button>
                <button className={`pagination-button ${apiPageFilter === "4" ? "selected" : ""}`} onClick={() => handlePageFilterChange("page", "4")}>4</button>
                <button className={`pagination-button ${apiPageFilter === "5" ? "selected" : ""}`} onClick={() => handlePageFilterChange("page", "5")}>5</button>
                <button className={`pagination-button ${apiPageFilter === "6" ? "selected" : ""}`} onClick={() => handlePageFilterChange("page", "6")}>6</button>
            </div>
        </div>
    );
}