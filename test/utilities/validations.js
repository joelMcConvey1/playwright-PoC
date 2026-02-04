'use strict'

const log = require('../logger/logger');
const { expect } = require('@playwright/test');

class Validations {
    constructor(page) {
        this.page = page;
    }

    async validateText(expectedText, element) {
        const actual = await this.formatText(element);

        log.debug(`Expected: "${expectedText}"`);
        log.debug(`Actual: "${actual}"`);

        expect(actual).toEqual(expectedText.trim());
    }

    async validateTextIsPresentOnPage(text) {
        log.debug(`Validating that "${text}" is visible on the page.`);

        await expect(this.page.getByText(text)).toBeVisible();
    }

    async validateTextIsNotPresentOnPage(text) {
        log.debug(`Validating that "${text}" is not visible on the page.`);

        await expect(this.page.getByText(text)).toHaveCount(0);
    }

    async validateTextIsPresentInInput(inputField, text) {
        const inputValue = await inputField.inputValue();

        log.debug(`Validating that "${text}" is present in the input field.`);

        expect(inputValue.trim()).toEqual(text.trim());
    }

    async validateElementExists(element, description = 'element') {
        log.debug(`Validating that ${description} exists.`);

        await expect(element).toHaveCount(1);
    }

    async validateElementIsVisible(element, description = 'element') {
        log.debug(`Validating that ${description} is visible`);

        await expect(element).toBeVisible();
    }

    async validateElementContainsText(element, expectedText, description = 'element') {
        log.debug(`Validating that ${description} contains text: "${expectedText}"`);

        await expect(element).toContainText(expectedText);
    }

    async validatePageHasChanged(expectedUrl) {
        log.debug(`Validating that the page url's path is ${expectedUrl}`);

        const actualPath = new URL(this.page.url()).pathname;
        const expectedPath = new URL(expectedUrl).pathname;

        expect(actualPath).toEqual(expectedPath);
    }

    async formatText(element) {
        return (await element.innerText()).replace(/\s+/g, ' ').trim();
    }

    async validateUrlContains(fragment) {
        log.debug(`Validating that current URL contains "${fragment}"`);

        await expect(this.page).toHaveURL(new RegExp(fragment));
    }

    async validateElementNotVisible(element, description = 'element') {
        log.debug(`Validating that ${description} is not visible`);

        await expect(element, `${description} should not be visible`).not.toBeVisible();
    }

    async validateAttributeEquals(element, attr, value, description = 'element') {
        log.debug(`Validating that ${description} has attribute "${attr}" equal to "${value}"`);

        await expect(element, `${description} should have ${attr}="${value}"`).toHaveAttribute(attr, value);
    }

    async validateCount(element, expected, description = 'element') {
        log.debug(`Validating that ${description} has count of ${expected}`);

        await expect(element, `${description} should have count of ${expected}`).toHaveCount(expected);
    }
}

module.exports = { Validations };
