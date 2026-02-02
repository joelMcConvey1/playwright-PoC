'use strict'

const path = require('path');
const log = require('../logger/logger');
const { Before, After, setDefaultTimeout} = require('@cucumber/cucumber');
const { PageFactory } = require('../pages/factory/page-factory');
const { ScenarioContext } = require('../data/scenario-context');
const { loadScenarioData } = require('../utilities/data-loader');

setDefaultTimeout(60 * 1000);

Before(async function (scenario) {
    const name = scenario.pickle.name;

    log.setContext({ scenario: name, worker: process.pid });

    await this.openBrowser();

    // Service Hook
    this.scenarioData = loadScenarioData(scenario, {
        dataDirectory: path.resolve(__dirname, '../data/scenarios'),
        contextClass: ScenarioContext
    });

    this.pages = new PageFactory(this.page);
});

After(async function () {
    await this.closeBrowser();
});
