'use strict'

const { PassportPage } = require("../apply-renew-passport");
const { FilterOverseasPage } = require("../filter-overseas");
const { FilterAgePage } = require("../filter-age");
const { HowToApplyPage } = require("../how-to-apply");
const { PreviousPassportPage } = require("../previous-passport");
const { PassportUrgentPage } = require("../passport-urgent");

class PageFactory {
    constructor(page) {
        this.page = page;
    }

    get passportPage() {
        return new PassportPage(this.page);
    }

    get filterOverseasPage() {
        return new FilterOverseasPage(this.page);
    }

    get filterAgePage() {
        return new FilterAgePage(this.page);
    }

    get passportUrgentPage() {
        return new PassportUrgentPage(this.page);
    }

    get previousPassportPage() {
        return new PreviousPassportPage(this.page);
    }

    get howToApplyPage() {
        return new HowToApplyPage(this.page);
    }
}

module.exports = { PageFactory };
