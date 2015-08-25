'use strict';

app.directive('cpFilePicker', ['fileReader', 'Resizer', function(fileReader, Resizer) {
	return {
		transclude: true,
		restrict: 'E',
		replace: true,
		template: '<input type="file" class="form-control" />',
		link: function(scope, elem, attrs) {

			// Variables
			var maxWidth, maxHeight;

			// Grab the attributes for cropping
			// Defaults to max width & height at 400
			maxWidth  = attrs.maxWidth ? attrs.maxWidth : 400;
			maxHeight = attrs.maxHeight ? attrs.maxHeight : 400;

			// Bind the File input for changes
			elem.bind('change', function(e) {

				// Use the fileReader service to get data URL of the first file
				fileReader.readAsDataUrl(e.target.files[0], scope)
					.then(function(data) {
						// User the Resizer service to update image
						var canvas = Resizer.resize(data, maxWidth, maxHeight);

						scope.project.image = canvas.toDataURL();
					});
			});
		}
	};
}]);