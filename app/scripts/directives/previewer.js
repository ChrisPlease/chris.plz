'use strict';

app.directive('cpPreview', [function() {
	return {
		transclude: true,
		restrict: 'E',
		replace: true,
		template: '<div class="img-preview"></div>',
		link: function(scope, elem, attrs, ctrl) {
			scope.$watch('project.image', function(newData, oldData) {
				if(newData !== null) {
					var canvas = document.createElement('canvas');
					var ctx = canvas.getContext('2d');
					var img = new Image();
					img.onload = function() {
						ctx.drawImage(img, 0, 0);
					};

					img.src = newData;
					elem.append('<span class="pull-right badge">delete</span>');
					elem.append(img);
				}
			});
		}
	};
}]);