'use strict'

class Checker {
    static isUkApplication(value) {
        return String(value).trim().toLowerCase() === 'yes';
    }
}

module.exports = { Checker }
