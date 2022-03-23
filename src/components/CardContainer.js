/** @jsxImportSource @emotion/react */

import React from 'react';

import { css } from '@emotion/react';

import ResultCard from './ResultCard';


function CardContainer(props) {


    console.log("raw data", props);

    const bodyStyles = css`
        width: 100%;
        height: 100%;
        box-shadow: ${props.color} 0px 2.5px 7.5px;
        padding: 2.5%;
        overflow: scroll;
    
    `;

    return (
        <div css={bodyStyles}>
            {
            props.data ? props.data.map((result) => <ResultCard 
                                                            name={result.name} 
                                                            phone={result.display_phone} 
                                                            price={result.price} 
                                                            rating={result.rating} 
                                                            address={result.location.display_address} 
                                                            color={props.color}
                                                            lat={result.coordinates.latitude}
                                                            lon={result.coordinates.longitude}
                                                            setLon={props.setLon} 
                                                            setLat={props.setLat}
                                                            imageURL={result.image_url}
                                                            website={result.url} 
                                                             />) : <></>
            
            }
        </div>
    );
}

export default CardContainer;