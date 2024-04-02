import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; 

import Data from './data';
import Studios from './studios';
import Title from './title';
import Buttons from './buttons';

function App() {
  
    const [isClick, setIsClick] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const typeLanguageFilter = searchParams.get("language");
    const typeLocationFilter = searchParams.get("location");
    const locationId = searchParams.get("locationId");
    const languageId = searchParams.get("languageId");


    const filterButtonHandler = (e, key, value, key1, buttonId) => {

        setIsClick(!isClick);

        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key);
            
            }else{
                prevParams.set(key, value);
    
            }

            prevParams.set(key1, buttonId);
            return prevParams;
        })
    };

    const filteredArray = Data.studios.filter(gamestudio => {
        if(typeLocationFilter === null && typeLanguageFilter === null){
        return gamestudio;
        }else if(typeLocationFilter === "Remote" && typeLanguageFilter === null){
        return gamestudio.isRemote === true;
        }else if(typeLocationFilter !== null && typeLanguageFilter === null){
        return gamestudio.location === typeLocationFilter;
        }else if(typeLocationFilter === null && typeLanguageFilter !== null){
        return gamestudio.array.includes(typeLanguageFilter);
        }else if(typeLocationFilter === "Remote" && typeLanguageFilter !== null){
        return gamestudio.isRemote === true && gamestudio.array.includes(typeLanguageFilter);
        }else if(typeLocationFilter !== "Remote" && typeLanguageFilter !== null){
        return gamestudio.location === typeLocationFilter && gamestudio.array.includes(typeLanguageFilter);
        }
    })

    return (
        <div className="App">
        
                
            <Title data={Data}/>
            <Buttons isClick={filterButtonHandler} locationId={locationId} languageId={languageId}/>
            <Studios data={filteredArray}/>
        
        </div>
    );
}

export default App;
