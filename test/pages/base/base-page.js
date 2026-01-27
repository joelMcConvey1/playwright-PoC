const { Validations } = require("../../utilities/validations");
const { PageActions } = require("../../utilities/page-actions");
const { UriBuilder } = require("../../utilities/uri-builder");

class BasePage {
    constructor(page) {
        this.page = page;

        this.validations = new Validations(page);
        this.actions = new PageActions(page);
        this.uriBuilder = new UriBuilder();
    }
}

module.exports = { BasePage };
