'use strict';

app.controller('PostViewCtrl', function($scope, Post, Auth, $routeParams, $location) {
	
	$scope.post = Post.getPost($routeParams.postId);

	Post.comments($scope.post.$id).$loaded().then(function(comments) {
		$scope.comments = comments;

		console.log($scope.comments.length);
	});

	$scope.editPost = function(post) {
		Post.editPost(post);
	};

	$scope.deletePost = function(post) {
		Post.deletePost(post);
	};

	$scope.addComment = function() {

		var comment = {
			text: $scope.commentText,
			author: $scope.commentAuthor
		};
		Post.comments.$add(comment).then(function() {
			console.log(comment.text, 'comment added');
		});
	};

});