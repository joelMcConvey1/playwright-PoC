const { BasePage } = require("./base/base-page");
const { ContinueButton } = require("../components/continue-button");

const { BASE_URL } = require("../config/env");
const { Paths } = require("../utilities/paths");

class PassportUrgentPage extends BasePage {
    constructor(page) {
        super(page);

        // Components
        this.continueButton = new ContinueButton(page);

        // Page Elements
        this.pageHeader = page.getByRole('heading', { name: 'Do you need a passport urgently?'});

        this.noRadioButton = page.getByRole('radio', { name: 'No, I’ll use the standard service' });
        this.pageHeader = page.getByRole('heading', { name: 'Do you need a passport urgently?'});
    }

    async validatePageHeader() {
        await this.validations.validatePageHasChanged(this.uriBuilder.generateUrl(BASE_URL, Paths.FILTER.PASSPORT_URGENT))
        await this.validations.validateElementExists(this.pageHeader, "Page Header");
    }

    async selectPassportUrgency() {
        await this.actions.click(this.noRadioButton);

        await this.continueButton.clickContinue();
    }
}

module.exports = { PassportUrgentPage };
