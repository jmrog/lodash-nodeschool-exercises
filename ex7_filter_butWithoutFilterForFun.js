var _ = require('lodash');

var worker = function(freelancers) {
    
    // calculate the average income 
    var avgIncome = _.reduce(freelancers, function(total, freelancer, index, array) {
        if (index === (array.length - 1)) {
            // Final freelancer, so divide by # of freelancers to compute
            // average and return it.
            total += freelancer.income;
            return (total / array.length);
        }

        return total += freelancer.income;

    }, 0); // begin with total = 0

    // group freelancers as overperformers and underperformers
    var groupedFreelancers = _.groupBy(freelancers, function(freelancer) {
        // return values of _.groupBy become keys in returned object
        return freelancer.income > avgIncome ? "overperform" : "underperform";
    });

    // sort by income (ascending) among underperformers and overperformers
    groupedFreelancers.underperform = _.sortBy(groupedFreelancers.underperform, 'income');
    groupedFreelancers.overperform = _.sortBy(groupedFreelancers.overperform, 'income');

    // finally, record the avg income in our groupedFreelancers object and 
    // return the object
    groupedFreelancers.average = avgIncome;

    return groupedFreelancers;
};

module.exports = worker;
