import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useNightlifeSearch(lon, lat) {
  const [ data, setData ] = useState([]);
  const [longitude, setLongitude] = useState(-123.2620);
  const [latitude, setLatitude] = useState(44.5646);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
      headers: {
        Authorization: `Bearer Jzu0MTZrPrtAtKx9ZA-i-dXhrG624kDX6K3vd0-ieR7z3ib3ad6Gozh3EgrOARB0rOgYKTp1ogxJCofMKTBDX2JLAo2Q-UYWzM9uL7YKNDV2c3gmLKiQoL436m4pYnYx`
      },
      params: {
        longitude: longitude,
        latitude: latitude,
        categories: 'nightlife',
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log ('error')
    })
  }, [longitude, latitude]);
  
  return [ data, loading, error ];
}

export default useNightlifeSearch;