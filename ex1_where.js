var _ = require('lodash');

var worker = function(userList) {
    return _.where(userList, { active: true });
};

module.exports = worker;

