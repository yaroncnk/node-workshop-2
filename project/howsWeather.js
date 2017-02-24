var requestJson = require('../library/request-json');
var prompt = require('prompt');


console.log(requestJson);

function cb(value1,value2) {
    console.log(value2);
}

function getTemperature(err, conditions) {
    if (err) {
        console.log(err);
    }
        else {
    
    var newTemp = [];
    var daily = conditions.daily.data;
    daily.forEach(function(day) {
        newTemp.push(day);
    });
        }
    console.log(newTemp);
}

//accesing Google Maps objects
function getLongLat(err, result) {
            if (err) {
                console.log(err);
            }
            else {
                
                var lat1 = result.results[0].geometry.location.lat;
                // console.log(lat1);
                var long1 = result.results[0].geometry.location.lng;
                console.log('Your latitude is:' + lat1 + ' and longitude is: ' + long1);
            requestJson.requestJSON(getTemperature,'https://api.darksky.net/forecast/ee6f6a17b2a847dcf14b7cfe66833206/'+lat1 +','+long1);
   
            }
        }

prompt.get("Where do you live?", function(err, userInput) {
    if (err) {
        console.log('there was an error');
    }
    else {
        var myLocation = userInput['Where do you live?'];
        requestJson.requestJSON(getLongLat,'https://maps.googleapis.com/maps/api/geocode/json?address='+ myLocation);

    } 
});
        
    
