'use strict';

app.directive('cpPrimaryNav', ['$document', 'Nav', function($document, Nav) {

	return {		
		restrict: 'E',
		templateUrl: 'views/templates/nav.html',
		replace: true,
		link: function(scope, elem, attrs) {
			var btn, body;

			elem.prepend('<span class="menu-toggle"><span></span><span></span><span></span><span class="sr-only">Toggle Menu</span></span>');
			btn  = angular.element('.menu-toggle');
			body = angular.element('body');

			$document.mouseup(function(e) {
				if(!btn.is(e.target) && btn.has(e.target).length === 0 && btn.hasClass('active')) {
					btn.removeClass('active');
					body.removeClass('menu-open');
					elem.removeClass('active');
				}
			});

			btn.on('click', function(e) {
				btn.toggleClass('active');
				body.toggleClass('menu-open');
				elem.toggleClass('active');
			});
		}
	};

}]);