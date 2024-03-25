import { useState, useEffect } from 'react';
import Data from './components/data';
import Studios from './components/studios';
import Title from './components/title';
import Buttons from './components/buttons';
import './App.css';

function App() {
  
  const [studio, setStudios] = useState([...Data.studios]);
  const [state, setState] = useState({location: "All", language: "All"});
  const [isClick, setIsClick] = useState(false);

  const filterButtonHandler = (e) => {
      const {name, dataset} = e.target;
      setIsClick(!isClick);
      setState(prevState => {
          return {
              ...prevState,
              [name]: dataset.id
          }
      })
  };


  useEffect (() => {
    filter(state);
},[state])


  const filter = ({location, language}) => {
    Data.studios.forEach(studio => {
      studio.languageArray = studio.language.split(/,|\s/);
    })
    
    let newArray = Data.studios.filter(gamestudio => {
      if(location === "All" && language === "All"){
        return gamestudio;
      }else if(location === "Remote" && language === "All"){
        return gamestudio.isRemote === true;
      }else if(location !== "All" && language === "All"){
        return gamestudio.location === location;
      }else if(location === "All" && language !== "All"){
        return gamestudio.languageArray.includes(language);
      }else if(location === "Remote" && language !== "All"){
        return gamestudio.isRemote === true && gamestudio.languageArray.includes(language);
      } else{
        return gamestudio.location === location && gamestudio.languageArray.includes(language);
      }
    })
    setStudios(newArray);
  }

  return (
    <div className="App">
      <Title data={Data}/>
      <Buttons isClick={filterButtonHandler}/>
      <Studios data={studio}/>
    </div>
  );
}

export default App;
