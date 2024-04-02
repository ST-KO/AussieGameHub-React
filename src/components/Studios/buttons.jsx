import './styles.css';
import { useState } from 'react';

const Buttons = ({isClick, locationId, languageId}) => {
    console.log(locationId, "locationId")
    console.log(languageId, "languageId")

    // const [selected, setSelected] = useState({location: "1", language: 1});

    const handleClick = (e, buttonId, key, value, key1) =>{
        isClick(e, key, value, key1 , buttonId);

        // setSelected(prevSelected => ({
        //     ...prevSelected,
        //     [e.target.name]: buttonId
        // }));

        
    };

    const selectedLocation = (id) => {
        return(
            locationId === id ? 'flt-btn btn-loca' : 'flt-btn'
          
        );
    };

    const selectedLanguage = (id) => {
        return(
            languageId === id ? 'flt-btn lang-hover btn-lang' : 'flt-btn lang-hover'
        );
    };

    
    return(
        <div className="btn-filter-div">
           <>

                <div className='location-btn-container'>
                    <button className={selectedLocation("1")} name = "location" type='button' data-id="All" onClick={(e)=>handleClick(e, "1", "location", null, "locationId")}>All Locations</button>
                    <button className={selectedLocation("2")} name = "location" type='button' data-id="Remote" onClick={(e)=>handleClick(e, "2", "location", "Remote", "locationId")}>Remote</button>
                    <button className={selectedLocation("3")} name = "location" type='button' data-id="Sydney" onClick={(e)=>handleClick(e, "3", "location", "Sydney", "locationId")}>Sydney</button>
                    <button className={selectedLocation("4")} name = "location" type='button' data-id="Melbourne" onClick={(e)=>handleClick(e, "4", "location", "Melbourne", "locationId")}>Melbourne</button>
                    <button className={selectedLocation("5")} name = "location" type='button' data-id="Brisbane" onClick={(e)=>handleClick(e, "5", "location", "Brisbane", "locationId")}>Brisbane</button>
                    <button className={selectedLocation("6")} name = "location" type='button' data-id="Perth" onClick={(e)=>handleClick(e, "6", "location", "Perth", "locationId")}>Perth</button>
                </div>

                <div className='language-btn-container'>
                    <button className={selectedLanguage("1")} name = "language" type='button' data-id="All" onClick={(e)=>handleClick(e, "1", "language", null, "languageId")}>All Languages</button>
                    <button className={selectedLanguage("2")} name = "language" type='button' data-id="C#" onClick={(e)=>handleClick(e, "2", "language", "csharp", "languageId")}>C#</button>
                    <button className={selectedLanguage("3")} name = "language" type='button' data-id="C++" onClick={(e)=>handleClick(e, "3", "language", "cplusplus", "languageId")}>C++</button>
                    <button className={selectedLanguage("4")} name = "language" type='button' data-id="JavaScript" onClick={(e)=>handleClick(e, "4", "language", "javascript", "languageId")}>JavaScript</button>
                </div>

            </>
        
        </div>
    );
};

export default Buttons;