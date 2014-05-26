goog.provide('nz.co.aetheric.angular.AngularHelpers');

(function(angular, _) {

	function prepareInjection(module, options, callback) {
		var name = options['name'];
		var inject = options['inject'] || [];
		var extend = options['extend'] || [];
		var init = options['init'] || function(){};

		inject.push(function() {
			init.call(_.inject(arguments, function(context, injection, index) {
				var name = injection[index];

				if (_.isString(name)) {
					context[name] = injection;
				}

				return context;
			}, {}));
		});

		var resolvedModule = _.isString(module)
				? angular.module(module)
				: module;

		callback(name, resolvedModule, inject);
	}

	_.extend(angular, {

		controller: function(module, options) {
			prepareInjection(module, options, function(name, resolvedModule, injection) {
				resolvedModule.controller(name, injection);
			});
		},

		service: function(module, options) {
			prepareInjection(module, options, function(name, resolvedModule, injection) {
				resolvedModule.service(name, injection);
			});
		},

		directive: function(module, options) {
			prepareInjection(module, options, function(name, resolvedModule, injection) {
				resolvedModule.directive(name, function() {
					return {
						restrict: 'A',
						scope: options.scope,
						controller: injection
					};
				});
			});
		}

	});

})(window.angular, window._);
