'use strict';

app.controller('ProfileCtrl', function($scope, Auth, Profile, Post) {

	var uid     = Auth.user.uid;
	var posts   = Profile.getUserPosts(uid);
	var profile = Profile.getProfile(uid);

	profile.$loaded().then(function() {
		$scope.profile = profile;
		
		console.log($scope.profile);
	});


	$scope.posts = [];

	posts.then(function(posts) {
		angular.forEach(posts, function(obj) {

			return $scope.posts.push(Post.getPost(obj.postId));
			
		});
	});
	
});