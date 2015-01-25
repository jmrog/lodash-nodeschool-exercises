var _ = require('lodash');

var worker = function(thingsSold) {
    return _.sortBy(thingsSold, function(thingSold) {
        return (0 - thingSold.quantity);
    });
};

module.exports = worker;
