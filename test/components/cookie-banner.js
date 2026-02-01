'use strict'

const { BasePage } = require("../pages/base/base-page");

class CookieBanner extends BasePage {
    constructor(page) {
        super(page);

        // Component Elements
        this.rejectCookieButton = page.getByRole('button', { name: 'Reject analytics cookies' });
        this.hideMessage = page.getByRole('button', { name: 'Hide this message' });
    }

    async rejectCookies() {
        await this.actions.click(this.rejectCookieButton, "Reject Cookies Button");
        await this.actions.click(this.hideMessage, "Hide Message Button");
    }
}

module.exports = { CookieBanner };
