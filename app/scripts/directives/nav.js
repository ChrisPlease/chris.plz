'use strict';

app.directive('cpPrimaryNav', ['$document', 'Nav', function($document, Nav) {

	return {		
		restrict: 'E',
		templateUrl: 'views/templates/nav.html',
		link: function(scope, elem, attrs) {
			var btn, body;

			elem.before('<span class="menu-toggle">Menu</span>');
			btn  = angular.element('.menu-toggle');
			body = angular.element('body').addClass('cp-menu-push');

			console.log(btn);

			btn.click(function() {
				return Nav.push(elem, btn.selector);
			});
		}
	};

}]);