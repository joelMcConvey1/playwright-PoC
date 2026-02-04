'use strict'

const { Given, When } = require("@cucumber/cucumber");
const { checkIsUkApplication } = require("../helpers/checker");

Given('the user navigates to the passports page', async function () {
    await this.pages.passportPage.openHomepage();
});

When('the user answers if they live in the UK', async function () {
    await this.pages.passportPage.selectStartNow();

    await this.pages.filterOverseasPage.validatePageHeader();

    await this.pages.cookieBanner.rejectCookies();

    await this.pages.filterOverseasPage.selectUkOrOverseasApplication(
        this.scenarioData.isUkApplication, this.scenarioData.countryOfApplication);
    await this.pages.filterOverseasPage.clickContinue();
});

When('a user begins an application from {string}', async function (countryOfApplication) {
    await this.pages.passportPage.selectStartNow();

    await this.pages.filterOverseasPage.validatePageHeader();
    await this.pages.filterOverseasPage.selectUkOrOverseasApplication(
        this.scenarioData.isUkApplication, countryOfApplication);
    await this.pages.filterOverseasPage.clickContinue();
});

When('the user uploads a photo', async function () {
    await this.pages.filterAgePage.validatePageHeader();
    await this.pages.filterAgePage.inputDateOfBirth(this.scenarioData.dateOfBirth);
    await this.pages.filterAgePage.validateDateOfBirth(this.scenarioData.dateOfBirth);
    await this.pages.filterAgePage.clickContinue();

    await this.pages.previousPassportPage.validatePageHeader();
    await this.pages.previousPassportPage.selectPreviousPassportStatus(this.scenarioData.isRenewal);
    await this.pages.previousPassportPage.clickContinue();

    if (checkIsUkApplication(this.scenarioData.isUkApplication)) {
        await this.pages.passportUrgentPage.validatePageHeader();
        await this.pages.passportUrgentPage.selectPassportUrgency(this.scenarioData.passportUrgency);
        await this.pages.passportUrgentPage.clickContinue();
    }

    await this.pages.howToApplyPage.validatePageHeader();
    await this.pages.howToApplyPage.clickContinue();
});
