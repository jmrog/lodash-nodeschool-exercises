var _ = require('lodash');

var worker = function(collection) {
    var results = { hot: [], warm: [] };

    function checktemp(temp) {
        return temp > 19;
    }

    _.forEach(collection, function(item, key) {
        if (_.every(item, checktemp)) {
            results.hot.push(key);
        } else if (_.some(item, checktemp)) {
            results.warm.push(key);
        }
    });

    return results;
};

module.exports = worker;
