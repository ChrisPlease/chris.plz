'use strict';

app.controller('ProfileCtrl', function($scope, Auth) {
	var uid = Auth.user.uid;

	$scope.currentUser = Auth.user.profile.$id;

	

	console.log($scope.currentUser);
});