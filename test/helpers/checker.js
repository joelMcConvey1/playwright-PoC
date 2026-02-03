'use strict'

function checkIsUkApplication(value) {
    return String(value).trim().toLowerCase() === 'yes';
}

function checkIsUrgentApplication(value) {
    return String(value).trim().toLowerCase() === 'yes';
}

module.exports = {
    checkIsUkApplication,
    checkIsUrgentApplication
}
