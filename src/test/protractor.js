/* globals exports */

var phantomjs = require('phantomjs');

exports.config = {

	seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

	specs: [
		'./e2e/**/*.js'
	],

	capabilities: {
		browserName: 'phantomjs',
		'phantomjs.binary.path': phantomjs.path
	},

	framework: 'mocha',

	mochaOpts: {
		ui: 'bdd',
		reporter: 'list',
		compilers: 'es6:mocha-traceur'
	},

	jasmineNodeOpts: {
		isVerbose: true,
		showColors: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 30000
	},

	beforeLaunch: function () {
	},

	afterLaunch: function () {
	}

};
