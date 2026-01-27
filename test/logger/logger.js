const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message }) => {
            const formattedLevel = level.toUpperCase();
            return `${timestamp} [${formattedLevel}] ${message}`; }) ),
    transports: [
        new winston.transports.Console()
    ]
});

const Log = {
    info(message) {
        logger.info(message);
    },

    warn(message) {
        logger.warn(message);
    },

    error(message, error) {
        if (error) {
            logger.error(`${message} - ${error.stack || error.message}`);
        } else {
            logger.error(message);
        }
    },

    debug(message) {
        logger.debug(message);
    }
};

module.exports = Log;
