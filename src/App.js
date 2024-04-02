import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'; 
import './App.css';

import Studio from './components/Studios/Studio';
import Homepage from './components/Homepage/Homepage';
import Body from './components/Body/Body';

import Games from './components/Games/Games';
import GameDetail from './components/Games/GameDetail';

import Creators from './components/Creators/Creators';
import CreatorDetail from './components/Creators/CreatorDetail';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/AussieGameHub-React" element={<Homepage />}>
            {/* <Route index element={<Body />} /> */}
            {/* <Route index element={<Studio />} /> */}
            <Route path="studios" element={<Studio />} />
            {/* <Route index element={<Studio />} /> */}

            {/* <Route path="games" element={<Games />} /> */}
            <Route index element={<Games />} />
            <Route path=":id" element={<GameDetail />} />

            <Route path="creators" element={<Creators />} />
            <Route path="creators/:id" element={<CreatorDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
