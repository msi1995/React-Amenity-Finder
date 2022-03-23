/** @jsxImportSource @emotion/react */

import React from 'react';

import { css } from '@emotion/react';

import MapContainer from '../components/MapContainer';


function Homepage(props) {

    const bodyStyles = css`
        height: 92vh;
    `;

    return (
        <div css={bodyStyles}>
            <MapContainer lat={props.lat} lon={props.lon} zoomLevel={13}/>
        </div>
    );
}

export default Homepage;