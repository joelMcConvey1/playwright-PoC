const { BasePage } = require("./base/base-page");
const { ContinueButton } = require("../components/continue-button");
const { CookieBanner } = require("../components/cookie-banner");

const { BASE_URL } = require("../config/env");
const { Paths } = require("../utilities/paths");

class FilterOverseasPage extends BasePage {
    constructor(page) {
        super(page);

        // Components
        this.continueButton = new ContinueButton(page);
        this.cookieBanner = new CookieBanner(page);

        // Page Elements
        this.pageHeader = page.getByRole('heading', { name: 'Do you live in the UK?'});

        this.yesRadioButton = page.getByRole('radio', { name: 'Yes' });
        this.noRadioButton = page.getByRole('radio', { name: 'No' });

        this.countryDropdown = page.getByLabel('Country or territory');
    }

    async validatePageHeader() {
        await this.validations.validatePageHasChanged(this.uriBuilder.generateUrl(BASE_URL, Paths.FILTER.OVERSEAS));
        await this.validations.validateElementExists(this.pageHeader, "Page Header");

        await this.cookieBanner.rejectCookies();
    }

    async selectUkOrOverseasApplication(isUkApplication) {
        if (isUkApplication === "Yes") {
            await this.actions.click(this.yesRadioButton);
        } else {
            await this.actions.click(this.noRadioButton);
            await this.actions.selectOption(this.countryDropdown, "Ireland")
        }

        await this.continueButton.clickContinue();
    }
}

module.exports = { FilterOverseasPage };
