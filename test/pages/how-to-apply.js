const { BasePage } = require("./base/base-page");
const { ContinueButton } = require("../components/continue-button");

const { BASE_URL } = require("../config/env");
const { Paths } = require("../utilities/paths");

class HowToApplyPage extends BasePage{
    constructor(page) {
        super(page);

        // Components
        this.continueButton = new ContinueButton(page);

        // Page Elements
        this.pageHeader = page.getByRole('heading', { name: 'How to apply'});
    }

    async validatePageHeader() {
        await this.validations.validatePageHasChanged(this.uriBuilder.generateUrl(BASE_URL, Paths.FILTER.HOW_TO_APPLY))
        await this.validations.validateElementExists(this.pageHeader, "Page Header");
    }

    async clickContinue() {
        await this.continueButton.clickContinue();

        // Would go to the photo digital page (Just here to work with Paths file)
        await this.validations.validatePageHasChanged(this.uriBuilder.generateUrl(BASE_URL, Paths.PHOTO.DIGITAL));
    }
}

module.exports = { HowToApplyPage };
