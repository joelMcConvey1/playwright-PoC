const { Before, After } = require('@cucumber/cucumber');

const Log = require('../logger/logger');
const { PageFactory } = require('../pages/factory/page-factory');

Before(async function (scenario) {
    const name = scenario.pickle.name;
    Log.info('==============================');
    Log.info(`Scenario: ${name}`);
    Log.info('==============================');

    await this.openBrowser();

    this.pages = new PageFactory(this.page);
});

After(async function (scenario) {
    await this.closeBrowser();
    console.log('');
});
