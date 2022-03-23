import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function useTravelSearch() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=corvallis`, {
  
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    
    params: {
      categories: 'arts',
    }
  })
    .then((res) => {
      console.log("results", res)
      //change the state of App to reflect on the result we are given from the API
      //at the same time, setting the loading state to false 
      setResults(res)
      return (results)
    })
    .catch((err) => {
      //fire the errorState message if there is no information return from the API
      setError(`Sorry we coudln't find information related to the location you search, do you want to try something else?`)
      return (results)
    })
} 

export default useTravelSearch;
/* 
  const corsApiUrl = 'https://cors-anywhere.herouapp.com/';
  const config = {
    headers: {'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`},
    params: {
      categories: 'arts',
      latitude: '44.5646',
      longitude: '123.2620'
    }
  }
  useEffect(() => {
    axios.get(`https://api.yelp.com/v3/businesses/search`, config)
      .then(response => (console.log("data", response.data.businesses))
  }, [])
} */