'use strict'

class ScenarioContext {
    constructor(scenarioData) {
        this.scenarioData = scenarioData;
    }

    get isUkApplication() {
        return this.scenarioData.isUkApplication;
    }

    get passportUrgency() {
        return this.scenarioData.passportUrgency;
    }

    get countryOfApplication() {
        return this.scenarioData.countryOfApplication;
    }

    get dateOfBirth() {
        return this.scenarioData.dateOfBirth;
    }

    get isRenewal() {
        return this.scenarioData.isRenewal;
    }
}

module.exports = { ScenarioContext };
