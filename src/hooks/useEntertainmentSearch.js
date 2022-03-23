import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const fetchEntertainment = (searchValues) => {
  const corsApiUrl = 'https://cors-anywhere.herouapp.com/';
  return (dispatch) => {
    dispatch({type: 'LOADING_ENTERTAINMENT'});
    axios.get(
      `${corsApiUrl}https://api.yelp.com/v3/businesses/search?categories=${searchValues.category}&longitude=${searchValues.longitude}&latitude=${searchValues.latitude}`,
      {
        headers : {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      }
    )
    .then((res) =>
      dispatch({ type: 'ADD_ENTERTAINMENT', entertainment: res.data.businesses})
    )
    .catch((error)=> console.log(error.response));
  };
};