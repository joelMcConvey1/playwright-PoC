'use strict'

const path = require('path');
const fs = require('fs');

function loadScenarioData(scenario, { dataDirectory, contextClass }) {
    const dataTag = scenario.pickle.tags.find(tag => tag.name.startsWith('@data:'));

    if (!dataTag) {
        return null;
    }

    const fileName = dataTag.name.replace('@data:', '');
    const filePath = path.resolve(dataDirectory, `${fileName}.json`);

    const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return new contextClass(raw);
}

module.exports = { loadScenarioData };
