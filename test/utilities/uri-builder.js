const Log = require('../logger/logger');

class UriBuilder {
    generateUrl(baseUrl, path) {
        if (!baseUrl) {
            throw new Error("Base URL must be provided to generateUrl");
        }

        if (!path) {
            Log.debug("Returning the Base Url: " + baseUrl);
            return baseUrl;
        }

        Log.debug("Returning the Url: " + baseUrl + path);
        return `${baseUrl}${path}`;
    }
}

module.exports = { UriBuilder };
