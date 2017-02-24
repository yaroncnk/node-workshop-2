//request JSON function 
var request = require('request');

function cb(value1,value2) {
    console.log(value2);
}

function requestJSON(cb,input) {
 request(input, function(err, result) {
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

module.exports.requestJSON = requestJSON;