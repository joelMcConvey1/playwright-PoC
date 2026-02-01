'use strict'

const { BasePage } = require("./base/base-page");
const { ContinueButton } = require("../components/continue-button");

class HowToApplyPage extends BasePage{
    constructor(page) {
        super(page);

        // Components
        this.continueButton = new ContinueButton(page);

        // Page Elements
        this.pageHeader = page.getByRole('heading', { name: 'How to apply'});
    }

    async validatePageHeader() {
        await this.validations.validateElementExists(this.pageHeader, "Page Header");
    }

    async clickContinue() {
        await this.continueButton.clickContinue();
    }
}

module.exports = { HowToApplyPage };
