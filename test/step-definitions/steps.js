const { Given, When} = require("@cucumber/cucumber");

Given('the user navigates to the passports page', async function () {
    await this.pages.passportPage.openHomepage();
});

When('the user selects {string} to do they live in the UK', async function (isUkApplication) {
    this.scenarioData = {
        isUkApplication: isUkApplication
        // Can add other scenario-level data, e.g:
        //dateOfBirth: { day: "01", month: "12", year: "2000" },
    };

    await this.pages.passportPage.selectStartNow();

    await this.pages.filterOverseasPage.validatePageHeader();
    await this.pages.filterOverseasPage.selectUkOrOverseasApplication(isUkApplication);
});

When('the user uploads a photo', async function () {
    await this.pages.filterAgePage.validatePageHeader();
    await this.pages.filterAgePage.inputDateOfBirth();
    await this.pages.filterAgePage.clickContinue();

    await this.pages.previousPassportPage.validatePageHeader();
    await this.pages.previousPassportPage.selectPreviousPassportStatus(this.scenarioData.isUkApplication);

    if (this.scenarioData.isUkApplication === "Yes") {
        await this.pages.passportUrgentPage.validatePageHeader();
        await this.pages.passportUrgentPage.selectPassportUrgency();
    }

    await this.pages.howToApplyPage.validatePageHeader();
    await this.pages.howToApplyPage.clickContinue();
});
