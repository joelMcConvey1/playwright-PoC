const { expect } = require('@playwright/test');

const Log = require('../logger/logger');

class Validations {
    constructor(page) {
        this.page = page;
    }

    async validateText(expectedText, element) {
        const actual = await this.formatText(element);

        Log.debug(`Expected: "${expectedText}"`);
        Log.debug(`Actual: "${actual}"`);

        await expect(actual).toEqual(expectedText.trim());
    }

    async validateTextIsPresentOnPage(text) {
        Log.debug(`Validating that "${text}" is visible on the page.`);

        await expect(this.page.getByText(text)).toBeVisible();
    }

    async validateTextIsNotPresentOnPage(text) {
        Log.debug(`Validating that "${text}" is not visible on the page.`);

        await expect(this.page.getByText(text)).toHaveCount(0);
    }

    async validateTextIsPresentInInput(inputField, text) {
        const inputValue = await inputField.inputValue();

        Log.debug(`Validating that "${text}" is present in the input field.`);

        await expect(inputValue.trim()).toEqual(text.trim());
    }

    async validateElementExists(element, description = 'element') {
        Log.debug(`Validating that ${description} exists`);

        await expect(element).toHaveCount(1);
    }

    async validateElementIsVisible(element, description = 'element') {
        Log.debug(`Validating that ${description} is visible`);

        await expect(element).toBeVisible();
    }

    async validateElementContainsText(element, expectedText, description = 'element') {
        Log.debug(`Validating that ${description} contains text: "${expectedText}"`);

        await expect(element).toContainText(expectedText);
    }

    async validatePageHasChanged(expectedUrl) {
        Log.debug(`Validating that the page url's path is ${expectedUrl}`);

        const actualPath = new URL(this.page.url()).pathname;
        const expectedPath = new URL(expectedUrl).pathname;

        await expect(actualPath).toEqual(expectedPath);
    }

    async formatText(element) {
        return (await element.innerText()).replace(/\s+/g, ' ').trim();
    }
}

module.exports = { Validations };
