var _ = require('lodash');

var worker = function(user) {
    var userObj = {
        name: user.name,
        numLogins: _.size(user.login)
    };
    
    return _.template('Hello <%= name %> (logins: <%= numLogins %>)', userObj);
};

module.exports = worker;
