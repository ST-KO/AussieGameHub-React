import './styles.css';
import { useState } from 'react';
const Buttons = ({isClick}) => {
    
    const [selected, setSelected] = useState({location: 1, language: 1});

    const handleClick = (e, buttonId) =>{
        isClick(e);
        setSelected(prevSelected => ({
            ...prevSelected,
            [e.target.name]: buttonId
        }));
    };

    const selectedLocation = (id) => {
        return(
            selected.location === (id) ? 'flt-btn btn-loca' : 'flt-btn'
        );
    };

    const selectedLanguage = (id) => {
        return(
            selected.language === id ? 'flt-btn btn-lang' : 'flt-btn'
        );
    };

    
    return(
        <div className="btn-filter-div">
           <div>

                <div className='location-btn-container'>
                    <button className={selectedLocation(1)} name = "location" type='button' data-id="All" onClick={(e)=>handleClick(e, 1)}>All Locations</button>
                    <button className={selectedLocation(2)} name = "location" type='button' data-id="Remote" onClick={(e)=>handleClick(e, 2)}>Remote</button>
                    <button className={selectedLocation(3)} name = "location" type='button' data-id="Sydney" onClick={(e)=>handleClick(e, 3)}>Sydney</button>
                    <button className={selectedLocation(4)} name = "location" type='button' data-id="Melbourne" onClick={(e)=>handleClick(e, 4)}>Melbourne</button>
                    <button className={selectedLocation(5)} name = "location" type='button' data-id="Brisbane" onClick={(e)=>handleClick(e, 5)}>Brisbane</button>
                    <button className={selectedLocation(6)} name = "location" type='button' data-id="Perth" onClick={(e)=>handleClick(e, 6)}>Perth</button>
                </div>

                <div className='language-btn-container'>
                    <button className={selectedLanguage(1)} name = "language" type='button' data-id="All" onClick={(e)=>handleClick(e, 1)}>All Languages</button>
                    <button className={selectedLanguage(2)} name = "language" type='button' data-id="C#" onClick={(e)=>handleClick(e, 2)}>C#</button>
                    <button className={selectedLanguage(3)} name = "language" type='button' data-id="C++" onClick={(e)=>handleClick(e, 3)}>C++</button>
                    <button className={selectedLanguage(4)} name = "language" type='button' data-id="JavaScript" onClick={(e)=>handleClick(e, 4)}>JavaScript</button>
                </div>

            </div>
        
        </div>
    );
};

export default Buttons;