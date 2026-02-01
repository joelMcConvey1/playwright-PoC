'use strict'

const winston = require('winston');

let currentContext = { scenario: null, worker: process.pid };

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {

      const formattedLevel = level.toUpperCase();
      const scenarioRun = currentContext.scenario ? ` [${currentContext.scenario} @${currentContext.worker}]` : '';

      return `${timestamp} [${formattedLevel}]${scenarioRun} ${message}`;
    })
  ),
  transports: [new winston.transports.Console()]
});

const log = {
  setContext({ scenario, worker }) {
    currentContext = { scenario, worker };
  },

  info(message) { logger.info(message); },

  warn(message) { logger.warn(message); },

  error(message, error) {
    if (error) {
      logger.error(`${message} - ${error.stack || error.message}`);
    } else {
      logger.error(message);
    }
  },

  debug(message) { logger.debug(message); }
};

module.exports = log;
