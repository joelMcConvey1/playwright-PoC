'use strict'

const { BasePage } = require("./base/base-page");
const { ContinueButton } = require("../components/continue-button");

class FilterAgePage extends BasePage {
    constructor(page) {
        super(page);

        // Components
        this.continueButton = new ContinueButton(page);

        // Page Elements
        this.pageHeader = page.getByRole('heading', { name: 'Date of birth'});

        this.dayInput = page.getByLabel('Day');
        this.monthInput = page.getByLabel('Month');
        this.yearInput = page.getByLabel('Year');
    }

    async validatePageHeader() {
        await this.validations.validateElementExists(this.pageHeader, "Page Header");
    }

    async inputDateOfBirth({ day, month, year }) {
        await this.actions.sendKeys(this.dayInput, day, "Day Input");

        await this.actions.sendKeys(this.monthInput, month, "Month Input");

        await this.actions.sendKeys(this.yearInput, year, "Year Input");
    }

        async validateDateOfBirth({ day, month, year }) {
        await this.validations.validateTextIsPresentInInput(this.dayInput, day);

        await this.validations.validateTextIsPresentInInput(this.monthInput, month);

        await this.validations.validateTextIsPresentInInput(this.yearInput, year);
    }

    async clickContinue() {
        await this.continueButton.clickContinue();
    }
}

module.exports = { FilterAgePage };
