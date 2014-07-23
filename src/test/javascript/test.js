goog.require('goog.testing.jsunit');
goog.require('nz.co.aetheric.angular.AngularHelpers');

testFunctionsAreDefined = function() {
	assertNotUndefined('Function angular.controller should be defined.', angular.controller);
	assertNotUndefined('Function angular.service should be defined.', angular.service);
	assertNotUndefined('Function angular.directive should be defined.', angular.directive);
};
