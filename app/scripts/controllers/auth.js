'use strict';

app.controller('AuthCtrl', function($scope, $location, Auth, toaster) {

	var uid = Auth.user.uid;

	$scope.login = function(user) {
		Auth.login(user) 
			.then(function() {
				toaster.pop('success', 'logged in');
				$location.path('/dashboard');
			}, function(err) {
				console.log(err);
			});
	};

	$scope.register = function(user) {
		Auth.register(user)
			.then(function() {
				toaster.pop('success', 'Registered Successfully!');
				$location.path('/dashboard');
			}, function(err) {
				toaster.pop('error', err.message);
			});
	};

});