'use strict';

app.factory('Resizer', function() {
	var Resizer = {
		resize: function(data, mw, mh) {
			var img, imgWidth, imgHeight;

			img = new Image();
			img.src = data;

			var canvas     = document.createElement('canvas');
			var canvasCopy = document.createElement('canvas');
			var ctx        = canvas.getContext('2d');
			var ctxCopy    = canvasCopy.getContext('2d');
			// Set up initial sizes and max sizes
			imgWidth  = img.width;
			imgHeight = img.height;
			// Check if width is larger then the max, 
			// then calc resized height & max width
			if(imgWidth > mw) {
				img.height = (imgHeight / imgWidth) * mw;
				img.width  = mw;
			}
			// Set up the first Canvas, scaled down to max width
			canvas.width  = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0, img.width, img.height);
			// Set up the Second, crop canvas to Max Height 
			canvasCopy.width = mw;
			canvasCopy.height = mh;
			ctxCopy.drawImage(canvas, 0, 0, canvas.width, mh, 0, 0, mw, mh);
			// Data URL of new Canvas
			// Append cropped canvas to the element 

			return canvasCopy;
		}
	};

	return Resizer;
});