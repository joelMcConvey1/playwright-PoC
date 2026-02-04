'use strict'

const { BasePage } = require("./base/base-page");
const { ContinueButton } = require("../components/continue-button");
const { checkIsRenewal } = require("../helpers/checker");

class PreviousPassportPage extends BasePage {
    constructor(page) {
        super(page);

        // Components
        this.continueButton = new ContinueButton(page);

        // Page Elements
        this.pageHeader = page.getByRole('heading', { name: 'Have you had a UK passport before?'});

        this.yesRadioButton = page.getByRole('radio', { name: 'Yes' });
        this.noRadioButton = page.getByRole('radio', { name: 'No' });
    }

    async validatePageHeader() {
        await this.validations.validateElementExists(this.pageHeader, "Page Header");
    }

    async selectPreviousPassportStatus(isRenewal) {
        if (checkIsRenewal(isRenewal)) {
            await this.actions.click(this.yesRadioButton, "Yes Radio Button");
        } else {
            await this.actions.click(this.noRadioButton, "No Radio Button");
        }
    }

    async clickContinue() {
        await this.continueButton.clickContinue();
    }
}

module.exports = { PreviousPassportPage };
