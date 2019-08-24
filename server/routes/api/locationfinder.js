const express = require('express');
const router = express.Router();
const config = require('config');
const request = require('request');

const data = require('../../OutletData/data');
// const { check, validationResult } = require('express-validator');

//@route  GET api/locationfinder/:address
//@desc   Get the latitute and longitute of nearest delivery location
//@access public
router.get(
  '/:address',
  // [
  //   check('address', 'Address is required') //To check the blank address
  //     .not()
  //     .isEmpty()
  // ],
  (req, res) => {
    console.log(req.params);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    try {
      const options = {
        uri: `https://maps.googleapis.com/maps/api/geocode/json?address=${
          req.params.address
        },+CA&key=${config.get('GoogleMapAPIKey')}`,
        method: 'GET',
        headers: { 'user-agent': 'node.js' }
      };

      request(options, (error, response, body) => {
        if (error) console.log(error);

        if (response.statusCode !== 200) {
          res.status(404).json({ msg: 'No address found' });
        }

        //In below commented code I tried to check and match the latitute and longitude of user entered location with the custom data which I made taking reference from KML file given with this assignment. I tried this approach because I dont know how to search on location polygon using Google map API.

        // const userLocation = JSON.parse(body).results[0].geometry.location;
        // var coordinateFound = data.data.find(function(element) {
        //   return element.outletPolygonArray.some(element => {
        //     if (
        //       Math.round(element.lat) === Math.round(userLocation.lat) &&
        //       Math.round(element.lan) === Math.round(userLocation.lan)
        //     ) {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   });
        // });
        // console.log(
        //   'searchResult:',
        //   JSON.parse(body).results[0].geometry.location
        // );
        // console.log('userResult:', userLocation);
        // res.json(coordinateFound);

        res.json(JSON.parse(body));
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
