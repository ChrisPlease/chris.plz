'use strict';

app.controller('PostViewCtrl', function($scope, Post, Auth, $routeParams, $location) {
	
	$scope.post = Post.getPost($routeParams.postId);
	$scope.signedIn = Auth.signedIn;

	$scope.comments = Post.comments($scope.post.$id);
	$scope.author = 'Anonymous';


	$scope.editPost = function(post) {
		Post.editPost(post);
	};

	$scope.deletePost = function(post) {
		Post.deletePost(post);
	};



	$scope.addComment = function() {
		var comment = {
			text: $scope.text,
			author: $scope.author
		};

		Post.addComment($scope.post.$id, comment).then(function() {
			$scope.text = '';
			$scope.author = 'Anonymous';
		});
	};

	$scope.deleteComment = function(comment) {
		$scope.comments.$remove(comment);
	};

});