import React from 'react';
import { useEffect, useState } from 'react'; 
import { useParams, Link, useLocation } from 'react-router-dom'; 

import './creators.css';

export default function GameDetail() {
    
    const styles = {
        color: "white"
    };
    
    const params = useParams();
    // const location = useLocation();
    // console.log(location, "location");
    // console.log(params);

    // const search = location.state?.search || "";
    // const genre = location.state?.genre?.toLowerCase() || "all";
  
    
    const [creatorDetail, setcreatorDetail] = useState(null); 

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // console.log(creatorDetail);

    const url = `https://api.rawg.io/api/creators/${params.id}?key=74e131e9361b4495b6822a82f55c9b8f`;
   

    const fetchcreatorDetailData = async () => {
        try{
            setLoading(true);
            
            const res = await fetch(url);

            const result = await res.json();

            
            if(result){
                setcreatorDetail(result);
                setLoading(false);
            }

        }
        catch(err) {
            console.log(err);
            setError(true);
        }
    };

    // const fetchcreatorDetailData = async () => {
    //    fetch(url).then(res => res.json()).then(data => setcreatorDetail(data));
    // };
    

    useEffect(() => {
        fetchcreatorDetailData();
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
            <Link to={`..`} relative='path' className='back-button'>&larr; <span>Back to all creators</span></Link>
           {creatorDetail ? 
           
            <div className='game-detail'>
                <img src={creatorDetail.image}/>
                <h2 className='game-detail-title'>{creatorDetail.name}</h2>
                {<p className="game-detail-publisher">Positions: {creatorDetail.positions.map(publisher => <span>{publisher.name}</span>)}</p> }
                <p className="game-detail-rating">Rating: <span>{creatorDetail.rating} / 5</span></p>
                <div className='game-detail-description' dangerouslySetInnerHTML={{ __html: creatorDetail.description}}/>  

            </div>

           : null}
        </div>
    );
}