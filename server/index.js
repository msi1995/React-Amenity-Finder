const express = require("express");
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  // res.json({ message: "Hello from server!" });

  console.log(req.query.term)
  console.log(req.query.lat)
  console.log(req.query.lon)

  async function fetchSearchResults() {
            let responseBody = {};
            try {
              const response = await fetch(`https://api.yelp.com/v3/businesses/search?term=${req.query.term}&latitude=${req.query.lat}&longitude=${req.query.lon}`, {
                "method": "GET",
                "headers": {
                  "Authorization": "Bearer MdGfVsOj2dQMiIWlJbbdIheaCBCjTNWKs4BDLAz-KhQNes5e01fzOjs0VV0-KIJW0EVPbuvbvAGw7nFGpBaBNurRkzfnJaVkRaj6ihyKxflYwAssqtXq6qpyk_IvYnYx"
                }
              })
              responseBody = await response.json();
              res.json(responseBody);
              console.log(req.query.term)
            } catch (e) {
            }
          
            
          }
          fetchSearchResults()
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});