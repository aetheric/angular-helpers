/* globals angular */

import { prepareInjection } from './prepare.js';

angular.controller = function(module, options) {

	prepareInjection(module, options, function(name, resolvedModule, injection) {
		resolvedModule.controller(name, injection);
	});

};

angular.service = function(module, options) {

	prepareInjection(module, options, function(name, resolvedModule, injection) {
		resolvedModule.service(name, injection);
	});

};

angular.directive = function(module, options) {

	prepareInjection(module, options, function(name, resolvedModule, injection) {
		resolvedModule.directive(name, function() {
			return {
				restrict: 'A',
				scope: options.scope,
				controller: injection
			};
		});
	});

};
