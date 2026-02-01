'use strict'

const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class Setup {
    constructor() {
        this.scenarioData = {};
    }

    async openBrowser() {
        const headless = process.env.HEADLESS === 'true' || process.env.CI === 'true';

        this.browser = await chromium.launch({ headless });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async closeBrowser() {
        await this.page?.close();
        await this.context?.close();
        await this.browser?.close();
    }
}

setWorldConstructor(Setup);
