'use strict';

app.controller('ProfileCtrl', function($scope, Auth, Profile, Post) {

	var uid   = Auth.user.uid;
	var posts = Profile.getUserPosts(uid);

	$scope.posts = [];

	posts.then(function(posts) {
		angular.forEach(posts, function(obj) {

			return $scope.posts.push(Post.getPost(obj.postId));
			
		});
	});
	
});