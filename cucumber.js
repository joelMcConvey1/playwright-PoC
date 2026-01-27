module.exports = {
    default: {
        require: [
            'test/step-definitions/**/*.js',
            'test/setup/**/*.js'
        ],

        paths: ['test/features/**/*.feature'],
        dryRun: false,
        publishQuiet: true,
        strict: true,
        format: [
            'pretty',
            'summary'
        ]
    }
};
