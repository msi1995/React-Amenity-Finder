/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';

import { InputGroup, FormControl, Button } from 'react-bootstrap'

import { css } from '@emotion/react';

import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
const apiKey = "27af7ac097a6786d017310e8b35199a0"

function TopBar(props) {

    const [location, setLocation] = useState("")

    async function doCoordinateSearch() {
        // console.log(location)
        let responseBody = {}
        const controller = new AbortController()

        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`,
                { signal: controller.signal }
            );
            responseBody = await response.json();
        } catch (e) {
            if (e instanceof DOMException) {
                console.log("== HTTP request cancelled")
            } else {
                throw e;
            }
        }
        props.setLon(responseBody[0].lon)
        props.setLat(responseBody[0].lat)
    }

    /*async function doTravelSearch() {
        // console.log(location)
        let responseBody = {}

        try {
            const response = await axios.get(
                `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=44.5646&longitude=-123.2620`,
                {
                    headers: {
                        Authorization: `Bearer Jzu0MTZrPrtAtKx9ZA-i-dXhrG624kDX6K3vd0-ieR7z3ib3ad6Gozh3EgrOARB0rOgYKTp1ogxJCofMKTBDX2JLAo2Q-UYWzM9uL7YKNDV2c3gmLKiQoL436m4pYnYx`
                    },
                    params: {
                        categories: 'arts'
                    }
                }
            )
            responseBody = await response.json();
        } catch (e) {
            if (e instanceof DOMException) {
                console.log("== HTTP request cancelled")
            } else {
                throw e;
            }
        }
        console.log("data", responseBody);
    } */


    const bodyStyles = css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Titillium Web', sans-serif;
        position: fixed;
        background: rgb(4,11,20);
        background: linear-gradient(90deg, rgba(4,11,20,1) 0%, rgba(12,33,56,1) 100%);
        height: 8vh;
        width: 100vw;

        /* @media screen and (max-width: 480px) {
            display: none;
        } */
    `;

    const inputStyles = css`
        width: 30%;
        margin-left: 275px;
        margin-top: 2vh;

        @media screen and (max-width: 480px) {
            width: 80%;
            margin-left: 0px;
        }
    `;



    return (
        <div css={bodyStyles}>
            <InputGroup className="mb-3" css={inputStyles}>
                <FormControl
                placeholder="Enter location"
                type="input"
                onChange={(event) => setLocation(event.target.value)}
                onKeyPress={event => {
                    if(event.key === "Enter"){
                        doCoordinateSearch()
                    }
                }}
                />
                <Button 
                    variant="secondary"
                    id="button-addon2"
                    onClick = {() => doCoordinateSearch()}>
                Search
                </Button>
            </InputGroup>
        </div>
    );
}

export default TopBar;