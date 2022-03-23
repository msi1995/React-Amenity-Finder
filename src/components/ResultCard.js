/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



// Card design from https://codepen.io/arti2002/pen/LYRxeOG

function ResultCard(props) {

    console.log(props);

    const bodyStyles = css`
    

        font-family: Roboto, sans-serif;
        box-shadow: 0 15px 30px 1px grey;
        background-color: black;
        color: #fff;
        padding-left: 10px;
        padding-right: 0;
		border-radius: 2px;
        overflow: hidden;
        margin: 15px 15px;
        height: 300px;
        width: 90%;
        display: flex;

        &:hover {
            box-shadow: ${props.color} 1px 10px 10px 1px;
            cursor: pointer;
        }

        h2{
			margin: 0;
            font-size: 1.5em;
        }

        p{
            margin-top: 15px;
			font-size: 15px;
			line-height: 1.6;
			color: #fff;
        }

        .businessInformation {
            padding-top: 40px;
            padding-top: 20px;
            padding-left: 20px;
            width: 65%;
        }

    `;

    const lineStyles = css`
        width: 90%;
        height: 5px;
        margin-top: 10px;
    `;

    /*const wrapperStyles = css`
        display: flex;
    `; */

    /*const textContainerStyles = css`
        flex: 1;
    `;*/

    const imageContainerStyles = css`
        padding-left: 10px;
    `;

    const imageStyles = css`
        height: 300px;
        width: 300px;

    `;

    const titleWrapper = css`
        /* height: 10%; */
    `;

   
    return (
       

        <>
            <div css={bodyStyles}
                onClick={() => {
                    props.setLat(props.lat)
                    props.setLon(props.lon)
                }}
            >   <div className='businessInformation'>
                    <div css={titleWrapper}>
                        <h2 className='businessName'>{props.name}</h2>
                    </div>
                    <div css={lineStyles} style={{backgroundColor: props.color}}></div>
                    <div /*css={wrapperStyles}*/>
                        <div /*css={textContainerStyles}*/>
                            <p className='businessPhone'><b>Phone: </b> {props.phone}</p>
                            <p className='businessPrice'><b>Price: </b> {props.price}</p>
                            <p className='businessRating'><b>Rating: </b> {props.rating}</p>
                            <p className='businessAddress'><b>Address: </b> {props.address[0]},  {props.address[1]}</p>
                            <a href={props.website} target="_blank">Visit this page on Yelp!</a>
                        </div>
                    </div>
                </div>
                <div css={imageContainerStyles}>
                    <img css={imageStyles} src={props.imageURL ? props.imageURL : ""}></img>
                </div>
            </div>

        </>
    );
}

export default ResultCard;