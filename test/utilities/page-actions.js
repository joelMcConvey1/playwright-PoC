'use strict'

const log = require('../logger/logger');

class PageActions {
    constructor(page) {
        this.page = page;
    }

    async click(element, description = 'element') {
        log.info(`Attempting to click on ${description}.`);

        try {
            await element.waitFor({ state: 'visible' });
            await element.click({ timeout: 15000 });

            log.info(`${description} clicked successfully.`);
        } catch (err) {
            log.error(`Failed to click ${description}: ${err.message}`);

            throw err;
        }
    }

    async hover(element, description = 'element') {
        log.info(`Attempting to hover on ${description}.`);

        try {
            await element.waitFor({ state: 'visible' });
            await element.hover();

            log.info(`Hovered over ${description} successfully.`);
        } catch (err) {
            log.error(`Failed to hover over ${description}: ${err.message}`);

            throw err;
        }
    }

    async sendKeys(element, text, description = 'element') {
        log.info(`Attempting to send keys to ${description}.`);

        try {
            await element.waitFor({ state: 'visible' });
            await element.fill('');
            await element.fill(text);

            log.info(`Keys sent to ${description} successfully.`);
        } catch (err) {
            log.error(`Failed to send keys to ${description}: ${err.message}`);

            throw err;
        }
    }

    async selectOption(element, option, description = 'element', label = "option") {
        log.info(`Attempting to select ${label} from ${description}.`);

        try {
            await element.waitFor({ state: 'visible' });
            await element.selectOption({ label: option });

            log.info(`${label} selected successfully.`);
        } catch (err) {
            log.error(`Failed to select ${label} from ${description}: ${err.message}`);

            throw err;
        }
    }

    async goToUrl(url) {
        log.info(`Navigating to: ${url}`);

        await this.page.goto(url, {
            waitUntil: 'domcontentloaded',
            timeout: 30000
        });

        log.info(`Navigation to ${url} completed.`);
    }

    async scrollIntoView(element, description = 'element') {
        log.info(`Attempting to scroll ${description} into view.`);

        try {
            await element.scrollIntoViewIfNeeded();

            log.info(`${description} scrolled into view successfully.`);
        } catch (err) {
            log.error(`Failed to scroll ${description} into view: ${err.message}`);

            throw err;
        }
    }

    async clickByText(text) {
        log.info(`Attempting to click element with text: "${text}"`);

        try {
            const element = this.page.getByText(text);

            await element.waitFor({ state: 'visible' });
            await element.click();

            log.info(`Successfully clicked element with text: "${text}"`);
        } catch (err) {
            log.error(`Failed to click element with text "${text}": ${err.message}`);

            throw err;
        }
    }

    async clickNthElement(element, index, description = 'element') {
        log.info(`Attempting to click ${description} at index ${index}.`);

        try {
            await element.waitFor({ state: 'visible' });

            const nthElement = element.nth(index);
            await nthElement.click();

            log.info(`Successfully clicked ${description} at index ${index}.`);
        } catch (err) {
            log.error(`Failed to click ${description} at index ${index}: ${err.message}`);

            throw err;
        }
    }
}

module.exports = { PageActions };
