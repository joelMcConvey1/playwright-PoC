const { BasePage } = require("./base/base-page");
const { ContinueButton } = require("../components/continue-button");

const { BASE_URL } = require("../config/env");
const { Paths } = require("../utilities/paths");

class PreviousPassportPage extends BasePage {
    constructor(page) {
        super(page);

        // Components
        this.continueButton = new ContinueButton(page);

        // Page Elements
        this.pageHeader = page.getByRole('heading', { name: 'Have you had a UK passport before?'});

        this.yesRadioButton = page.getByRole('radio', { name: 'Yes' });
    }

    async validatePageHeader() {
        await this.validations.validatePageHasChanged(this.uriBuilder.generateUrl(BASE_URL, Paths.FILTER.PREVIOUS_PASSPORT));
        await this.validations.validateElementExists(this.pageHeader, "Page Header");
    }

    async selectPreviousPassportStatus(isUkApplication) {
        await this.actions.click(this.yesRadioButton);

        await this.continueButton.clickContinue();
    }
}

module.exports = { PreviousPassportPage };
