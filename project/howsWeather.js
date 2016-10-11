var requestJson = require('../library/request-json');


console.log(requestJson);

function cb(value1,value2) {
    console.log(value2);
}
requestJson.requestJSON(cb,'https://api.darksky.net/forecast/ee6f6a17b2a847dcf14b7cfe66833206/37.8267,-122.4233');
