const { BasePage } = require("../pages/base/base-page");

class ContinueButton extends BasePage {
    constructor(page) {
        super(page);

        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async clickContinue() {
        await this.actions.click(this.continueButton);
    }
}

module.exports = { ContinueButton };
