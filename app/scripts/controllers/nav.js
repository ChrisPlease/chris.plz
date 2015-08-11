'use strict';

app.controller('NavCtrl', function($scope, Auth, $location, toaster) {

	$scope.signedIn = Auth.signedIn;


	$scope.logout = function() {
		Auth.logout();

		toaster.pop('success', 'Logged Out Successfully.');

		$location.path('/');
	};

});