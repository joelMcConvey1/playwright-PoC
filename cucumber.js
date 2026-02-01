module.exports = {
    default: {
        dryRun: false,
        format: [
            'summary'
        ],
        paths: [
            'test/features/**/*.feature'
        ],
        publishQuiet: true,
        require: [
            'test/step-definitions/**/*.js',
            'test/setup/**/*.js'
        ],
        strict: true,
        timeout: 60000,
    }
};
