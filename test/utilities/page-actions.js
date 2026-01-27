const Log = require('../logger/logger');

class PageActions {
    constructor(page) {
        this.page = page;
    }

    async click(element) {
        Log.info('Attempting to click on element.');

        try {
            await element.waitFor({ state: 'visible' });
            await element.click();

            Log.info('Element clicked successfully.');
        } catch (err) {
            Log.error(`Failed to click element: ${err.message}`);

            throw err;
        }
    }

    async hover(element) {
        Log.info('Attempting to hover on element.');

        try {
            await element.waitFor({ state: 'visible' });
            await element.hover();

            Log.info(`Hovered over element successfully.`);
        } catch (err) {
            Log.error(`Failed to hover over element: ${err.message}`);

            throw err;
        }
    }

    async sendKeys(element, text) {
        Log.info('Attempting to send keys to element.');

        try {
            await element.waitFor({ state: 'visible' });
            await element.fill('');
            await element.fill(text);

            Log.info(`Keys sent to element successfully.`);
        } catch (err) {
            Log.error(`Failed to send keys to element: ${err.message}`);

            throw err;
        }
    }

    async selectOption(element, option) {
        Log.info('Attempting to select option from dropdown.');

        try {
            await element.waitFor({ state: 'visible' });
            await element.selectOption({ label: option });

            Log.info(`Option selected successfully.`);
        } catch (err) {
            Log.error(`Failed to select option from element: ${err.message}`);

            throw err;
        }
    }

    async goToUrl(url) {
        Log.info(`Navigating to: ${url}`);

        await this.page.goto(url, { waitUntil: 'domcontentloaded' });

        Log.info(`Navigation to ${url} completed.`);
    }
}

module.exports = { PageActions };
