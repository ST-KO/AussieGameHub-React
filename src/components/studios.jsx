import './styles.css';


const Studios = ({data}) => {
    


    return(
        <div className="cards" id="studio-cards">
                {
                    data.map(studio => {
                        return(
                            <div className="studio-card" key={studio.name}>
                                <h2>{studio.name}</h2>
                                <p><span>Location</span>: {studio.location}</p>
                                <p><span>Game Engine</span>: {studio.gameengine}</p>
                                <p><span>Language</span>: {studio.language}</p>
                                <p><span>Remote</span>: {studio.remote}</p>
                                <p>
                                    <div className="website-link">
                                        <a  href={studio.website} target="_blank">
                                            Visit Website 
                                        </a>
                                    </div>
                                </p>
                            </div>
                        );
                    })
                }
            </div> 
        
    );
};

export default Studios;