const { BasePage } = require("./base/base-page");

class PassportPage extends BasePage {
    constructor(page) {
        super(page);

        // Page Elements
        this.startButton = page.getByRole('button', { name: 'Start now' });
    }

    async openHomepage() {
        await this.actions.goToUrl("https://www.gov.uk/apply-renew-passport");
    }

    async selectStartNow() {
        await this.actions.click(this.startButton);
    }
}

module.exports = { PassportPage };
