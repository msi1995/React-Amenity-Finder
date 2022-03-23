import React, { useState, useEffect } from 'react';

/* This is just a draft of this hook. The current issue is that data is returning []. I was able to get an empty array(0) instead of []
 * once, but not sure why this isn't working. I found that the yelp api wants a Authorization : 
*/
function useRestaurantSearch(coords) {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    async function fetchSearchResults() {
      let responseBody = {};
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.YELP_API_URL}?latitude=${coords.lat}&longitude=${coords.lng}&categories=restaurants HTTP/1.1<br>Host:api.yelp.com<br>Authorization: Bearer ${process.env.YELP_API_KEY}<br>`);
        responseBody = await response.json();
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("== HTTP request cancelled")
        } else {
          setError(true);
          throw e;
        }
      }
      if (!ignore) {
        setLoading(false);
        setError(false);
        //console.log(responseBody);
        setData(responseBody.list || []);
      }
    }
    
  }, []);
  
  return [ data, loading, error ];
}

export default useRestaurantSearch;