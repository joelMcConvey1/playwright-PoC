'use strict'

const { BasePage } = require("./base/base-page");
const { ContinueButton } = require("../components/continue-button");
const { checkIsUrgentApplication } = require("../helpers/checker");

class PassportUrgentPage extends BasePage {
    constructor(page) {
        super(page);

        // Components
        this.continueButton = new ContinueButton(page);

        // Page Elements
        this.pageHeader = page.getByRole('heading', { name: 'Do you need a passport urgently?'});

        this.yesRadioButton = page.getByRole('radio', { name: 'Yes, I need a passport urgently' });
        this.noRadioButton = page.getByRole('radio', { name: 'No, I’ll use the standard service' });
    }

    async validatePageHeader() {
        await this.validations.validateElementExists(this.pageHeader, "Page Header");
    }

    async selectPassportUrgency(passportUrgency) {
        if (checkIsUrgentApplication(passportUrgency)) {
            await this.actions.click(this.yesRadioButton, "Yes Radio Button");
        } else {
            await this.actions.click(this.noRadioButton, "No Radio Button");
        }
    }

    async clickContinue() {
        await this.continueButton.clickContinue();
    }
}

module.exports = { PassportUrgentPage };
