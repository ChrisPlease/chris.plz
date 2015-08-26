'use strict';

app.factory('Portfolio', function(FURL, $firebaseArray) {
	var ref      = new Firebase(FURL);
	var projects = $firebaseArray(ref.child('portfolio'));

	var Portfolio = {
		all: projects,

		createProject: function(project) {
			console.log(project);
			project.launch = project.launch.toString();
			console.log(project);
			return projects.$add(project);

		},

		deleteProject: function(project) {

			return projects.$remove(project);
		}
	};

	return Portfolio;
});