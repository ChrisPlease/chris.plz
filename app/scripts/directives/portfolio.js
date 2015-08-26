'use strict';

app.directive('cpProject', function() {
	return {
		templateUrl: 'views/templates/project.html',
		transclude: true,
		replace: true,
		link: function(scope, elem, attrs) {
			console.log(scope.projects);
		}
	};
});