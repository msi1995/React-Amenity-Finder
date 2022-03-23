/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom' 


import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import MainDisplay from "./components/MainDisplay";


const YELP_API_KEY = "MdGfVsOj2dQMiIWlJbbdIheaCBCjTNWKs4BDLAz-KhQNes5e01fzOjs0VV0-KIJW0EVPbuvbvAGw7nFGpBaBNurRkzfnJaVkRaj6ihyKxflYwAssqtXq6qpyk_IvYnYx"




function App() {
  
  const [lat, setLat] = useState("44.5646")
  const [lon, setLon] = useState("-123.2620")


  const appStyles = css`
    position: relative;
  `;
  return (
    <div css={appStyles}>
      <TopBar setLon={setLon} setLat={setLat}/>
      <Sidebar />
      <MainDisplay lat={lat} lon={lon} setLon={setLon} setLat={setLat}/>
    </div>
  );
}

export default App;
