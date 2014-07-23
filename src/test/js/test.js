/*global QUnit, angular */

function isDefined(object) {
	return typeof(object) !== 'undefined' && object !== null;
}

QUnit.test('functionsAreDefined', function(assert) {
	assert.ok(isDefined(angular.controller), 'Function angular.controller should be defined.');
	assert.ok(isDefined(angular.service), 'Function angular.service should be defined.');
	assert.ok(isDefined(angular.directive), 'Function angular.directive should be defined.');
});

QUnit.test('assertionShouldFail', function(assert) {
	assert.ok(false, 'This should fail');
});