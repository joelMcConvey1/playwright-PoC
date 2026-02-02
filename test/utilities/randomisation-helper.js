'use strict'

function byRandomChance(percentage) {
    if (Number.isNaN(percentage)) {
        throw new TypeError('Percentage must be a valid number.');
    }

    if (percentage < 0 || percentage > 100) {
        throw new Error('Percentage must be between 0 and 100.');
    }

    return Math.random() < percentage / 100;
}

module.exports = { byRandomChance };
