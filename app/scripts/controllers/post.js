'use strict';

app.controller('PostCtrl', function($scope, Post, Auth, toaster, $routeParams, $location) {
	
	$scope.posts = Post.all;
	$scope.currentUser = Auth.user.uid;

	if($routeParams.postId) {
		var post = Post.getPost($routeParams.postId);
		$scope.post = post;
	}


	$scope.createPost = function() {
		$scope.post.author   = Auth.user.profile.name;
		$scope.post.authorId = Auth.user.uid;
		$scope.post.edited   = false;

		Post.createPost($scope.post).then(function(ref) {
			toaster.pop('success', 'post added successfully.');
			$scope.post = {
				title: '',
				content: ''
			};
		});
	};

	$scope.editPost = function(post) {
		Post.editPost(post);
	};

	$scope.deletePost = function(post) {
		Post.deletePost(post);
	};

});