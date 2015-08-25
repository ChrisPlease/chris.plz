'use strict';

app.directive('cpProject', function() {
	return {
		templateUrl: 'views/templates/project.html',
		transclude: true,
		link: function(scope, elem, attrs) {
			elem.on('mouseenter mouseleave', function(e) {
				if(e.type === 'mouseenter') {
					elem.addClass('active');
					elem.next().addClass('collapsed');
				}
				if(e.type === 'mouseleave') {
					elem.removeClass('active');
					elem.next().removeClass('collapsed');
				}
			});
		}
	};
});