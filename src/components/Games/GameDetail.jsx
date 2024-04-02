import React from 'react';
import { useEffect, useState } from 'react'; 
import { useParams, Link, useLocation } from 'react-router-dom'; 

import './games.css';

export default function GameDetail() {
    
    const styles = {
        color: "white"
    };

    const params = useParams();
    const location = useLocation();
    // console.log(location, "location");
    // console.log(params);

    const search = location.state?.search || "";
    const genre = location.state?.genre?.toLowerCase() || "all";
  
    
    const [gameDetail, setGameDetail] = useState(null); 

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // console.log(gameDetail);

    const url = `https://api.rawg.io/api/games/${params.id}?key=74e131e9361b4495b6822a82f55c9b8f`;
   

    const fetchGameDetailData = async () => {
        try{
            setLoading(true);
            
            const res = await fetch(url);

            const result = await res.json();

            
            if(result){
                setGameDetail(result);
                setLoading(false);
            }

        }
        catch(err) {
            console.log(err);
            setError(true);
        }
    };

    // const fetchGameDetailData = async () => {
    //    fetch(url).then(res => res.json()).then(data => setGameDetail(data));
    // };
    

    useEffect(() => {
        fetchGameDetailData();
    }, [params.id]);

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


    return(
        <div className='game-detail-container'>
            <Link to={`..${search}`} relative='path' className='back-button'>&larr; <span>Back to {genre} games</span></Link>
           {gameDetail ? 
           
            <div className='game-detail'>
                <img src={gameDetail.background_image}/>
                <div className="game-info-genre-name">
                        {gameDetail.genres.map(genre => <span className={`game-genre ${genre.name} selected`}>{genre.name} </span>)}
                </div>
                <h2 className='game-detail-title'>{gameDetail.name}</h2>

                {<p className="game-detail-publisher">Publishers: {gameDetail.publishers.map(publisher => <span>{publisher.name}</span>)}</p> }
                {<p className="game-detail-developer">Developers: {gameDetail.developers.map(developer => <span>{developer.name}</span>)}</p> }
                {<p className="game-detail-developer">Platforms: {gameDetail.platforms.map(platform => <span>{platform.platform.name}</span>)}</p> }
                <p className="game-detail-rating">Rating: <span>{gameDetail.rating} / 5</span></p>
                {/* <p className='game-detail-description'> {gameDetail.description_raw} </p> */}
                <div className='game-detail-description' dangerouslySetInnerHTML={{ __html: gameDetail.description}}/> 
                {gameDetail.website && <Link to={gameDetail.website} className='link-button'>Offical Website</Link>}
            </div>

           : null}
        </div>
    );
}