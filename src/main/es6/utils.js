/* globals require, angular, Array, String */

/**
 * Determines whether a provided object is in fact a String.
 * @param {*} object The object to inspect.
 * @return {Boolean} Whether the provided object is a string or not.
 */
export function isString(object) {
	return typeof(object) === 'string'
		|| object instanceof String
		|| Object.toString(object) === '[object String]';
}

/**
 * Determines whether the current object is in fact a String.
 * @return {Boolean} Whether the current object is a string or not.
 */
Object.prototype.isString = function() {
	return isString(this);
};
