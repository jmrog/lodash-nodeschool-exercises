var _ = require('lodash');

var worker = function(json) {

    function sortByDate(todoList) {
        return _.sortBy(todoList, function(item) {
            return new Date(item.date).valueOf();
        });
    }

    function isUrgent(todo) {
        var todoTime = new Date(todo.date).getTime(),
            nowTime = new Date().getTime();
        var diffInDays = Math.ceil((todoTime - nowTime) / (1000 * 3600 * 24));

        return diffInDays <= 2;
    }

    // doing this inline is ugly, but it gets the job done and seems to be what
    // the exercise expects
    var templateText = '<ul>\n' +
        '<% _.forEach(todos, function(todoList, userName) { %>' +
            '<li><%= userName %>\n' +
            '<ul><% _.forEach(sortByDate(todoList), function(todo) { %>' +
                    '<li>' +
                        '<% if (isUrgent(todo)) { %>' +
                            '<b>URGENT</b> ' +
                        '<% } %>' +
                        '<%= todo.todo %>' +
                    '</li>\n' +
                '<% }); %>' +
            '</ul>\n' +
            '</li>\n' +
        '<% }); %>' +
    '</ul>';

    return _.template(templateText, { todos: json }, { 'imports': {
        'sortByDate': sortByDate,
        'isUrgent': isUrgent
    }});
};

module.exports = worker;
