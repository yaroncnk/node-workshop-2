//request JSON function 
var request = require('request');

function cb(value1,value2) {
    console.log(value2);
}

function requestJSON(cb) {
    request('https://api.wheretheiss.at/v1/satellites/25544', function(err, result) {
        if (err) {
            console.log(err);
        }
        else {
            try {
                cb(null, JSON.parse(result.body));

            }
            catch (error) {
                cb(error);
            }
        }
    });
}

exports.requestJSON = requestJSON();
