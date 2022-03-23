# React-Amenity-Finder

## Functionality 
The site allows users to search for an area (ie Corvallis, Portland, Los Angeles). The site will move the Map to the searched location and drop a pin. Clicking on the sidebar links after searching a location will display establishments in that area with various information about them, and a photo pulled from Google. 

Clicking a business card will center the map on that business so you can see where exactly it is.


## Technical Details
React site built with functional components. Uses Axios to fetch data from the Yelp API and return information in a card view. The Yelp API does not have CORS Support, and so a backend with Express was needed in order to hit the API. Lack of CORS support disallows querying directly from the front-end with things like fetch or axios. 

Data is fetched by the backend and fed back to the frontend.

Bug exists on refresh. Ran out of time to fix. Group project, Winter 2022.

----

## To run:

1. Clone repository
2. Navigate to folder in a CLI and run `npm install`, allow to complete.
3. From a second terminal, navigate to the server folder within the main repo, and type `npm start`. Server will start on 3001 by default.
4. From the first terminal, once the server is running, `npm start`.
5. Site should open on localhost:3000.
