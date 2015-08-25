'use strict';

/**
 * @ngdoc function
 * @name chrisplzApp.controller:PortfolioCtrl
 * @description
 * # MainCtrl
 * Controller of the chrisplzApp
 */
app.controller('PortfolioCtrl', function ($scope, Auth, Portfolio, fileReader) {
	
	$scope.signedIn = Auth.signedIn;
	$scope.projects = Portfolio.all;

	$scope.project = {
		title: '',
		image: null
	};

	$scope.createProject = function(project) {

		Portfolio.createProject(project);
		$scope.project.title = '';
		$scope.project.image = null;

	};

	$scope.deleteProject = function(project) {
		Portfolio.deleteProject(project);
	};

});
