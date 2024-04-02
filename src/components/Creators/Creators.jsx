import React from "react";
import { useState, useEffect } from "react"; 
import { Link, useSearchParams } from 'react-router-dom';

import './creators.css';

export default function Creators() {
    
    const styles = {
        color: "white"
    };
    
    const [creatorsData, setCreatorsData] = useState();
    // console.log(creatorsData);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    
    const apiPageFilter = searchParams.get("page");

    const url = `https://api.rawg.io/api/creators?key=74e131e9361b4495b6822a82f55c9b8f&page=${apiPageFilter !== null ? apiPageFilter : "1"}`;
    

    const handlePageFilterChange = (key, value) => {
        setSearchParams(prevParam => {
            if(value === null){
                prevParam.delete(key);
            }else{
                prevParam.set(key, value);
            }
            return prevParam;
        });
    };

    const fetchCreatorsData = async () => {
        try{
            setLoading(true);

            const res = await fetch(url);

            const result = await res.json();

            if(result){
                setCreatorsData(result.results);
                
                setLoading(false);
            }

           

        } catch (err) {
           
            setLoading(false);
            
            setError(err.message);
        }
    }
    


    // const fetchCreatorsData = () => {
    //     fetch(url).then(res => res.json()).then(result => setCreatorsData(result.results));
    // }

    // const fetchGames = async () => {
    //     try {
    //         setLoading(true);

    //         const res = await fetch(url);

    //         const result = await res.json();

    //         console.log(result);

    //         if(result && result.results && result.results.length){
    //             setGamesData(result.results);
    //             setLoading(false);
    //         }

    //     } catch(err) {
    //         setLoading(false);
    //         setError(err.message);
    //     }
    // };

    useEffect(() => {
        fetchCreatorsData();
    
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

    const creatorsElements = creatorsData && creatorsData.map(creators => (
        <div key={creators.id} className="games-tile game-detail">
          <Link to={`${creators.id}`}>
            <img src={creators.image} />
            <div className="game-info">
                <h1>{creators.name}</h1>
                {<p className="game-detail-publisher"><span><b>Positions:</b> </span> {creators.positions.map(position => <span key={position.id}>{position.name}</span>)}</p> }
                {<p className="creator-detail-games"><span><b>Games:</b> </span> {creators.games.map(game => <span key={game.id}>{game.name}</span>)}</p> }
            </div>
          </Link>
              
        </div>
    ))

    
    return(
        <div class="creators-detail-container">
             <h1 className="game-list-contaier-title">Explore Famous Creators</h1>
            <div className='creators-list'>
                {creatorsElements}
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