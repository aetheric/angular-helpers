/* globals require, Array, String */

import * as utils from './utils.js';

let angular = require('angular');

let NG_SCOPE = '$scope';
let NG_CONTROLLER = '$controller';

/**
 * @callback prepareInjection~prepareInjectionCallback
 * @param name
 * @param module
 * @param inject
 */

/**
 *
 * @param {String} module The name of the module to add the item to.
 * @param {Object} options What options to initialise the item with.
 * @param {String} options.name
 * @param {Array} options.inject
 * @param {String|Array} options.extend
 * @param {Function} options.init
 * @param {prepareInjection~prepareInjectionCallback} callback
 */
export function prepareInjection(module, options, callback) {

	let name = options.name;

	let inject = options.inject
		|| [];

	let extend = utils.isString(options.extend)
		? [ options.extend ]
		: ( options.extend || [] );

	let init = options.init
		|| function() {};

	let resolvedModule = utils.isString(module)
		? angular.module(module)
		: module;

	if (extend && !Array.contains(inject, NG_CONTROLLER)) {
		inject.push(NG_CONTROLLER);
	}

	if (!Array.contains(inject, NG_SCOPE)) {
		inject.push(NG_SCOPE);
	}

	inject.push(function() {

		var context = Array.reduce(arguments, function(context, injection, index) {

			let name = injection[index];

			if (utils.isString(name)) {
				context[name] = injection;
			}

			return context;

		}, {});

		Array.forEach(extend, function(extension) {
			context[NG_CONTROLLER](extension, {
				$scope: context[NG_SCOPE]
			});
		});

		init.call(context);

	});

	callback(name, resolvedModule, inject);

}
