### How to run

##Step 1
Go to server folder and run > npm install
##Step 2
Go to client folder and run > npm install or yarn
##Step 3
To run both the client and server side I have setup script with concurrently package. You can go to server folder and run > npm run dev ::: If that does not work due to port availability issue then manually first got to client folder and run > yarn start and then go to server folder and run > npm run server. This will run client and server selerately.

### What is implemented so far

This app will only put a location marker on map which user will search from front end.

I dont have knowledge on how to load KML file on map and how to search the polygon coordinates in that using Google map API.
