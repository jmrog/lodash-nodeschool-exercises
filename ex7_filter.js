var _ = require('lodash');

var worker = function(freelancers) {
    // get the average income
    var avgIncome = _.reduce(freelancers, function(total, current, index, array) {
        if (index === (array.length - 1)) {
            // Final element, so get the average
            total += current.income;
            return (total /= (index + 1));
        }

        return total += current.income;
    }, 0);

    // get the "underperformers"
    var underperformers = _.filter(freelancers, function(freelancer) {
        return freelancer.income <= avgIncome;
    });

    // get the overperformers
    var overperformers = _.filter(freelancers, function(freelancer) {
        return freelancer.income > avgIncome;
    });

    // sort the groups by income
    underperformers = _.sortBy(underperformers, 'income');
    overperformers = _.sortBy(overperformers, 'income');

    // return the expected object
    return {
        average: avgIncome,
        underperform: underperformers,
        overperform: overperformers
    };
};

module.exports = worker;
