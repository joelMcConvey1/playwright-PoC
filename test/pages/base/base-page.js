'use strict'

const { Validations } = require("../../utilities/validations");
const { PageActions } = require("../../utilities/page-actions");

class BasePage {
    constructor(page) {
        this.page = page;

        this.validations = new Validations(page);
        this.actions = new PageActions(page);
    }
}

module.exports = { BasePage };
