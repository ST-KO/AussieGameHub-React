import './styles.css';


const Studios = ({data}) => {
    

    return(
        <div className="cards" id="studio-cards">
                {
                    data.map(studio => {
                        return(
                            <div className="studio-card" key={studio.name}>
                                <h2>{studio.name}</h2>
                                <img src={studio.image ? studio.image : "image/noimage.jpeg"} alt="blowfish" className='image' />
                                <p><span>Location</span>: {studio.location}</p>
                                <p><span>Game Engine</span>: {studio.gameengine}</p>
                                <p><span>Language</span>: {studio.language}</p>
                                <p><span>Remote</span>: {studio.remote}</p>
                                <div className="div-website-link">
                                    <span className="website-link">
                                        <a  href={studio.website} target="_blank">
                                            Visit Website 
                                        </a>
                                    </span>
                                </div>
                            </div>
                        );
                    })
                }
            </div> 
        
    );
};

export default Studios;