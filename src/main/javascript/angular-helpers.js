goog.provide('nz.co.aetheric.angular.AngularHelpers');

(function(ng, _) {

	function prepareInjection(module, options, callback) {
		var injection = options.inject || [];
		var init = options.init || function(){};

		injection.push(function() {
			init.call(_.inject(arguments, function(context, injection, index) {
				var name = injection[index];

				if (_.isString(name)) {
					context[name] = injection;
				}

				return context;
			}, {}));
		});

		var resolvedModule = _.isString(module)
				? ng.module(module)
				: module;

		callback(resolvedModule, injection);
	}

	ng.controller = function(module, options) {
		prepareInjection(module, options, function(resolvedModule, injection) {
			resolvedModule.controller(injection);
		});
	};

	ng.service = function(module, options) {
		prepareInjection(module, options, function(resolvedModule, injection) {
			resolvedModule.service(injection);
		});
	};

	ng.directive = function(module, options) {
		prepareInjection(module, options, function(resolvedModule, injection) {
			resolvedModule.directive({
				restrict: 'A',
				scope: options.scope,
				controller: injection
			});
		});
	};

})(window.angular, window._);
