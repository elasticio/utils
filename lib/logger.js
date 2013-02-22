var winston;

module.exports = function () {
    if (winston) {
        return winston;
    }

    winston = require('winston');

    require('winston-papertrail').Papertrail;

    var app = process.env.APP_NAME;
    var port = process.env.PAPERTRAIL_PORT;

    console.log(port);

    var options = {
        host: 'logs.papertrailapp.com',
        port: port,
        program: app
    };

    winston.add(winston.transports.Papertrail, options);

    return winston;
};
