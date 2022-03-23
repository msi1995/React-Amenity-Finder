/** @jsxImportSource @emotion/react */

import React, {useRef, useState, useEffect } from 'react';

import { css } from '@emotion/react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from '@googlemaps/react-wrapper';
import useRestaurantSearch from '../hooks/useRestaurantSearch';
import useShoppingSearch from '../hooks/useShoppingSearch';
import useNightlifeSearch from '../hooks/useNightlifeSearch';
import { fetchEntertainment } from '../hooks/useEntertainmentSearch';
import useTravelSearch from '../hooks/useTravelSearch';


interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
  }

function MapContainer(props, onClick,
    onIdle,
    children,
    style,
    ...options){

      const [ coords, setCoords ] = useState({ lat: 44.5646, lng: -123.2620 });

      /*
      * This is meant to be tests for the hooks. I was attempting to
      * use the coords variable ^, but I also tried it without in the
      * shopping hook to see if that was my issue. I have tried a couple different
      * ways to make the call and it hasn't worked yet. My next idea was
      * to maybe try axios. This seems to work, but it requires CORS. Yelp API
      * is 
      * 
      * Side note: I would like to mention that while all of these calls could likely
      * be made with the same hook because there is only one minor difference 
      * between all of them, I made all 5 in spite of this in the event that we wanted
      * to be more selective for any of the pages and what search parameters we want
      * or don't want to include. They are all different now. I have made 5 different
      * attempts to access the yelp api and none of which have fully worked.
      * 
      * useRestaurantSearch : returns the default data = [] from the hook. The call
      *                       doesn't get any results
      * useEntertainmentSearch : returns the first dispatch with type 'LOADING_ENTERTAINMENT',
      *    (fetchEntertainment)  but none of the businesses data
      * useNightlifeSearch : returns the default data = [] from the hook. The call
      *                       doesn't get any results & a 403 forbidden code suggesting that
      *                     the authorization isn't correct and its fixed in travelSearch
      * useShoppingSearch : returns the default data = [] from the hook. The call
      *                       doesn't get any results
      * useTravelSearch : 
      * 
      */

      //const [data, loading, error] = useRestaurantSearch(coords);
      //const [data, loading, error] = useShoppingSearch();
      //const [data, loading, error] = useNightlifeSearch();
      //const [ category, setCategory] = useState('arts');
      //const [longitude, setLongitude] = useState(-123.2620);
      //const [latitude, setLatitude] = useState(44.5646);  
      //const [searchValues, setSearchValues] = useState({category: category, latitude: latitude, longitude: longitude})
      //const data = fetchEntertainment(searchValues)
      //const data = useTravelSearch();
      //console.log("data", data)
      
    const bodyStyles = css`
        width: 100%;
        height: 100%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    `;

    const Map = () => {};
    
    const corvallisCoords = { lat: 44.5646, lng: -123.2620 };
    
    const ref = React.useRef(null)
    const [map, setMap] = React.useState();

    useEffect( () => {
      // setCoords({lat: props.lat, lng: props.lon})
      var newCoords
      if (!props.lat || !props.lon) {
        newCoords = new google.maps.LatLng(corvallisCoords.lat, corvallisCoords.lng)
      }
      else {
        newCoords = new google.maps.LatLng(props.lat, props.lon)
      }


      var zoomLevel = props.zoomLevel

      // console.log("===STORED VALUES", coords.lat, coords.lng)
      // console.log("===PROPS VALUES", props.lat, props.lon)

      const theMap = new window.google.maps.Map(ref.current, {

        zoom: zoomLevel,
        center: newCoords,
      })

      setMap(theMap)

      new google.maps.Marker({
        position: newCoords,
        map: theMap,
      });
      
    }, [props])
    
    // useEffect(() => {
    //   if (ref.current && !map) {
    //     var newCoords
    //     if (!props.lat || !props.lon) {
    //       newCoords = new google.maps.LatLng(corvallisCoords.lat, corvallisCoords.lon)
    //     }
    //     else {
    //       newCoords = new google.maps.LatLng(props.lat, props.lon)
    //     }
    //     setMap(new window.google.maps.Map(ref.current, {
    //       zoom: 12,
    //       center: newCoords,
    //     }));
    //     }
    //   }, [ref, map]);

    return <div ref={ref} css={bodyStyles} style={style}/>

}
  

export default MapContainer