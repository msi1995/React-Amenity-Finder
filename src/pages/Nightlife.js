/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react';

import CardContainer from '../components/CardContainer';
import MapContainer from '../components/MapContainer';

const bodyStyles = css`
display: flex;
flex-direction: row;
height: 92vh;
`;
const leftStyles = css`
width: 60%;
margin: 2.5%;
@media screen and (max-width: 480px) {
    width: 100%;
}

`;
const rightStyles = css`
width: 30%;
margin: 2.5%;

@media screen and (max-width: 480px) {
    display: none ;
}
`;


function Nightlife(props) {
    

    const blue = '#0ebeff'


    const [ results, setResults ] = useState([]);

    useEffect(() => {
        
        async function fetchSearchResults() {
                    let responseBody = {};
                    try {
                      const response = await fetch(`/api?term=nightlife&lat=${props.lat}&lon=${props.lon}`)
                      responseBody = await response.json();
                    } catch (e) {
                      if (e instanceof DOMException) {
                        console.log("== HTTP request cancelled")
                      } else {
                        throw e;
                      }
                    }
                    
                    //console.log(responseBody)
                    setResults(responseBody.businesses)
                    
                  }
                  fetchSearchResults()
                  
    
    },[props.lat, props.lon])


    return (
        <div css={bodyStyles}>
            <div css={leftStyles}>
                <CardContainer type={"Nightlife"} data={results} color={blue} setLon={props.setLon} setLat={props.setLat}/>
            </div>
            <div css={rightStyles}>
                <MapContainer lat={props.lat} lon={props.lon} zoomLevel={17}/>
            </div>
        </div>
    );
}

export default Nightlife;