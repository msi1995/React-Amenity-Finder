import React, { useState, useEffect } from 'react';

function useShoppingSearch() {
  const [ data, setData ] = useState([]);
  const [longitude, setLongitude] = useState(-123.2620);
  const [latitude, setLatitude] = useState(44.5646);
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
          `${process.env.YELP_API_URL}latitude=${latitude}&longitude=${longitude}&categories=shopping`,
          { Authorization : process.env.YELP_BEARER_TOKEN }
        );
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
    if (longitude && latitude) {
      fetchSearchResults()
    }
    return () => {
      controller.abort();
      ignore = true;
    }
  }, [longitude, latitude]);
  
  return [ data, loading, error ];
}

export default useShoppingSearch;