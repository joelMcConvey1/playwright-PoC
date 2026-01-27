const { BasePage } = require("../pages/base/base-page");

class CookieBanner extends BasePage {
    constructor(page) {
        super(page);

        this.rejectCookieButton = page.getByRole('button', { name: 'Reject analytics cookies' });
        this.hideMessage = page.getByRole('button', { name: 'Hide this message' });
    }

    async rejectCookies() {
        await this.actions.click(this.rejectCookieButton);
        await this.actions.click(this.hideMessage)
    }
}

module.exports = { CookieBanner };
