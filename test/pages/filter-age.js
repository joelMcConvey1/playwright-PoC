const { BasePage } = require("./base/base-page");
const { ContinueButton } = require("../components/continue-button");

const { BASE_URL } = require("../config/env");
const { Paths } = require("../utilities/paths");

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
        await this.validations.validatePageHasChanged(this.uriBuilder.generateUrl(BASE_URL, Paths.FILTER.AGE))
        await this.validations.validateElementExists(this.pageHeader, "Page Header");
    }

    async inputDateOfBirth() {
        await this.actions.sendKeys(this.dayInput, "01");
        await this.validations.validateTextIsPresentInInput(this.dayInput, "01");

        await this.actions.sendKeys(this.monthInput, "12");
        await this.validations.validateTextIsPresentInInput(this.monthInput, "12");

        await this.actions.sendKeys(this.yearInput, "2000");
        await this.validations.validateTextIsPresentInInput(this.yearInput, "2000");
    }

    async clickContinue() {
        await this.continueButton.clickContinue();
    }
}

module.exports = { FilterAgePage };
