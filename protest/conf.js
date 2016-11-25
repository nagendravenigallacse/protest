/**
 * Created by Nagendra on 10-11-2016.
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'tmp/screenshots'
            })
        );
    }
};