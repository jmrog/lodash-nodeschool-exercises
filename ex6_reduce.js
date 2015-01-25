var _ = require('lodash');

var worker = function(orders) {
    var groupedOrders = _.groupBy(orders, 'article'); // group orders by article
    
    var results = _.map(groupedOrders, function(orders, articleNum) {
        // work with the orders per article
        // note that articleNum is a string here since it is an object key
        // needs to be converted to a number, as below
        var total = { article: parseInt(articleNum, 10) };

        total.total_orders = _.reduce(orders, function(sum, curr, index, arr) {
            // sum the quantities ordered to get a total
            return sum += curr.quantity;
        }, 0);
        
        return total; // total is an object with an article number and a total
    });

    return _.sortBy(results, 'total_orders').reverse(); // sort in descending order
};

module.exports = worker;
