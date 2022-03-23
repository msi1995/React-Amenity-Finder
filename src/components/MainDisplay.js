/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


import Homepage from '../pages/Homepage';
import Restaurants from '../pages/Restaurants';
import Travel from '../pages/Travel';
import Nightlife from '../pages/Nightlife';
import Shopping from '../pages/Shopping';
import Entertainment from '../pages/Entertainment';
//import useRestaurantSearch from '../hooks/useRestaurantSearch';

//const [data, loading, error] = useRestaurantSearch()
//console.log("data", data);
const bodyStyles = css`
    margin-left: 275px;
    margin-top: 8vh;
    position: absolute;
    width: calc(100% - 275px);
    height: 92vh;
    


    @media screen and (max-width: 480px) {
        margin-left: 0px;
        height: 92vh;
        width: 100%;
    }
    `;


function MainDisplay(props) {


    const render = (status) => {
        return <h1>{status}</h1>;
    };




    return (
        <div css={bodyStyles}>
            <Routes>
                <Route path='/' element={<Wrapper apiKey={"AIzaSyATzcf4pzKxs_x7-kqM2X46Eg_5HRPGFZk"} render={render}><Homepage lat={props.lat} lon={props.lon}/></Wrapper>}/>
                <Route path='/restaurants' element={<Restaurants lat={props.lat} lon={props.lon} setLon={props.setLon} setLat={props.setLat}/>}></Route>
                <Route path='/travel' element={<Travel lat={props.lat} lon={props.lon} setLon={props.setLon} setLat={props.setLat}/>}></Route>
                <Route path='/nightlife' element={<Nightlife lat={props.lat} lon={props.lon} setLon={props.setLon} setLat={props.setLat}/>}></Route>
                <Route path='/shopping' element={<Shopping lat={props.lat} lon={props.lon} setLon={props.setLon} setLat={props.setLat}/>}></Route>
                <Route path='/entertainment' element={<Entertainment lat={props.lat} lon={props.lon} setLon={props.setLon} setLat={props.setLat}/>}></Route>
            </Routes>
        </div>
    );
}

export default MainDisplay;