/** @jsxImportSource @emotion/react */

import React from 'react';

import { css } from '@emotion/react';

import { Image } from 'react-bootstrap';

import { NavLink, Link } from 'react-router-dom'



import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import RestaurantIcon from '@mui/icons-material/Restaurant';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttractionsIcon from '@mui/icons-material/Attractions';

import { grey } from '@mui/material/colors';

import sidebarImage from '../images/300.jpg'

function Sidebar(props) {

    const bodyStyles = css`
        display: flex;
        flex-direction: column;
        font-family: 'Titillium Web', sans-serif;
        position: fixed;
        background: rgb(4,11,20);
    background: linear-gradient(180deg, rgba(4,11,20,1) 0%, rgba(4,18,33,1) 100%);
        height: 92vh;
        margin-top: 8vh ;
        width: 275px;

        @media screen and (max-width: 480px) {
            display: none;
        }
    `;

    const headerStyles = css`
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        `;

const titleStyles = css`
        font-weight: bold;
        font-size: 1.5em;
        color: white;
        margin-bottom: 2vh;
        text-decoration: none;
    `;

    const imageStyles = css`
        height: 150px;
        width: 150px;
        border: 10px solid #2C2F3F;
        margin-top: -6.5vh;
        margin-bottom: 5vh;
        margin-left: -30px;
    `;

    const menuStyles = css`
        display: flex;
        flex-direction: column;
        flex: 2;
        margin-top: 35px;

    `;

    const restaurantItemStyles = css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 4vh;
        color: grey;
        transition:color .25s;
        
        
        &:hover{
            color: white;
            .icon{
                color: #FF0000;
            }
        }
        &.active{
            color: white;
            .icon{
                color: #FF0000;
            }
        }
        text-decoration: none;
    `;
    
    const restaurantIconStyles = css`
        color: grey;
        transition: color .25s;
        &:hover{
            color: #109DDD;
        }
    `;

    const hotelItemStyles = css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 4vh;
        color: grey;
        transition:color .25s;
        
        
        &:hover{
            color: white;
            .icon{
                color: #fcd000;
            }
        }
        &.active{
            color: white;
            .icon{
                color: #fcd000;
            }
        }
        text-decoration: none;
    `;
    
    const hotelIconStyles = css`
        color: grey;
        transition: color .25s;
        &:hover{
            color: #fcd000;
        }
    `;

    const nightItemStyles = css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 4vh;
        color: grey;
        transition:color .25s;
        
        
        &:hover{
            color: white;
            .icon{
                color: #0ebeff;
            }
        }
        &.active{
            color: white;
            .icon{
                color: #0ebeff;
            }
        }
        text-decoration: none;
    `;
    
    const nightIconStyles = css`
        color: grey;
        transition: color .25s;
        &:hover{
            color: #0ebeff;
        }
    `;

    const shoppingItemStyles = css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 4vh;
        color: grey;
        transition:color .25s;
        
        
        &:hover{
            color: white;
            .icon{
                color: #47cf73;
            }
        }
        &.active{
            color: white;
            .icon{
                color: #47cf73;
            }
        }
        text-decoration: none;
    `;
    
    const shoppingIconStyles = css`
        color: grey;
        transition: color .25s;
        &:hover{
            color: #47cf73;
        }
    `;

    const entertainmentItemStyles = css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 4vh;
        color: grey;
        transition:color .25s;
        
        
        &:hover{
            color: white;
            .icon{
                color: #ae63e4;
            }
        }
        &.active{
            color: white;
            .icon{
                color: #ae63e4;
            }
        }
        text-decoration: none;
    `;
    
    const entertainmentIconStyles = css`
        color: grey;
        transition: color .25s;
        &:hover{
            color: #ae63e4;
        }
    `;
        
    const menuTextStyles = css`
        list-style-type: none;
        margin-left: 10px;
    `;

    const footerStyles = css`
        margin-top: auto;
        color: white;
        margin-left: 20px;
        margin-right: 20px;
        font-size: .85em;
        a{
            color: white;
        }
    `;

    const creatorStyles = css`
        margin-top: auto;
        color: white;
        margin-left: 40px;
        margin-right: 20px;
        font-size: .85em;
        a{
            color: white;
        }
        p{
            margin-bottom: 0;
        }
        margin-bottom: 10px;
    `;

    return (
        <div css={bodyStyles}>
            <div css={headerStyles}>
                <Image css={imageStyles} roundedCircle src={sidebarImage}/>
                <Link css={titleStyles} to='/'>Place Finder</Link>
            </div>
            <ul css={menuStyles}>
                <NavLink className='restaurantItem' activeClassName={({isActive}) => isActive ? "active": ""} to='/restaurants' css={restaurantItemStyles}>
                    <RestaurantIcon className='icon' css={restaurantIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>Restaurants</li>
                </NavLink>
                <NavLink to='/travel' css={hotelItemStyles}>
                    <AirlineSeatIndividualSuiteIcon className='icon' css={hotelIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>Hotels / Travel</li>
                </NavLink>
                <NavLink to='/nightlife' css={nightItemStyles}>
                    <NightlifeIcon className='icon' css={nightIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>Nightlife</li>
                </NavLink>
                <NavLink to='/shopping' css={shoppingItemStyles}>
                    <ShoppingBagIcon className='icon' css={shoppingIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>Shopping</li>
                </NavLink>
                <NavLink to='/entertainment' css={entertainmentItemStyles}>
                    <AttractionsIcon className='icon' css={entertainmentIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>Arts / Entertainment</li>
                </NavLink>
            </ul>
            {/* <p css={footerStyles}>Created by</p>
            <div css={creatorStyles}>
                <p>Matthew Hawkins</p>
                <p>Doug Lloyd</p>
                <p>Caden Hawkins</p>
                <p>Kevin Pfeil</p>
            </div> */}
        </div>
    );
}

export default Sidebar;