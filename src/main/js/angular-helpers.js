/*global define */
define([
	'angular',
	'underscore'
], function(angular, _) {

	var NG_SCOPE = '$scope',
		NG_CONTROLLER = '$controller',
		OPT_NAME = 'name',
		OPT_INJECT = 'inject',
		OPT_EXTEND = 'extend',
		OPT_INIT = 'init';

	function prepareInjection(module, options, callback) {
		var
			opts = {

				name: options[OPT_NAME],

				inject: options[OPT_INJECT] || [],

				extend: _.isString(options[OPT_EXTEND])
					? [ options[OPT_EXTEND] ]
					: ( options[OPT_EXTEND] || [] ),

				init: options[OPT_INIT] || function(){}

			},

			resolvedModule = _.isString(module)
				? angular.module(module)
				: module;

		if (opts.extend && !_.contains(opts.inject, NG_CONTROLLER)) {
			opts.inject.push(NG_CONTROLLER);
		}

		if (!_.contains(opts.inject, NG_SCOPE)) {
			opts.inject.push(NG_SCOPE);
		}

		opts.inject.push(function() {
			var context = _.inject(arguments, function(context, injection, index) {
				var name = injection[index];

				if (_.isString(name)) {
					context[name] = injection;
				}

				return context;
			}, {});

			_.each(opts.extend, function(extension) {
				context[NG_CONTROLLER](extension, {
					$scope: context[NG_SCOPE]
				});
			});

			opts.init.call(context);
		});

		callback(opts.name, resolvedModule, opts.inject);
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

});
