var _ = require('lodash');

var worker = function(comments) {
    var grouped = _.groupBy(comments, 'username');
    var results = _.map(grouped, function(vals, key, coll) {
        var numComments = _.size(vals);
        return {
            username: key,
            comment_count: numComments
        };
    });

    return _.sortBy(results, function(obj) {
        return -(obj.comment_count); // sort in descending order
    });
};

module.exports = worker;
