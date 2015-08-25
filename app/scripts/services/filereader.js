'use strict';

app.factory('fileReader', function($q, $log, $window) {
	
	// Wrap onLoad event in a promise
	var onLoad = function(reader, deferred, scope) {
		return function() {
			scope.$apply(function() {
				deferred.resolve(reader.result);
			});
		};
	};

	// Wrap onError event in a promise
	var onError = function(reader, deferred, scope) {
		return function() {
			scope.$apply(function() {
				deferred.reject(reader.result);
			});
		};
	};

	// Wrap onProgress by broadcasting the event
	var onProgress = function(reader, scope) {
		return function(event) {
			scope.$broadcast('fileProgress', {
				total: event.total,
				loaded: event.loaded
			});
		};
	};

	// Instantiate FileReader with the wrapped properties
	var getReader = function(deferred, scope) {
		var reader = new $window.FileReader();
		reader.onload = onLoad(reader, deferred, scope);
		reader.onerror = onError(reader, deferred, scope);
		reader.onprogress = onProgress(reader, scope);

		return reader;
	};

	// Read a file as a data url
	var readAsDataURL = function(file, scope) {
		var deferred = $q.defer();

		var reader = getReader(deferred, scope);
		reader.readAsDataURL(file);

		return deferred.promise;
	};

	return {
		readAsDataUrl: readAsDataURL
	};

});