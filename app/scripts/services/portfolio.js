'use strict';

app.factory('Portfolio', function(FURL, $firebaseArray) {
	var ref      = new Firebase(FURL);
	var projects = $firebaseArray(ref.child('portfolio'));

	var Portfolio = {
		all: projects,

		createProject: function(project) {
			project.datetime = Firebase.ServerValue.TIMESTAMP;
			return projects.$add(project);

		},

		deleteProject: function(project) {

			return projects.$remove(project);
		}
	};

	return Portfolio;
});