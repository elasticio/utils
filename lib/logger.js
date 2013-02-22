var winston = require('winston');


exports.config = function(program) {

    require('winston-papertrail').Papertrail;

    var port = process.env.PAPERTRAIL_PORT;

    var options = {
        host: 'logs.papertrailapp.com',
        port: port,
        program:program
    };

    winston.add(winston.transports.Papertrail, options);
};
