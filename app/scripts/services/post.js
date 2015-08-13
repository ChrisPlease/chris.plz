'use strict';

app.factory('Post', function(FURL, $firebaseArray, $firebaseObject, Auth) {
	var ref = new Firebase(FURL);
	var posts = $firebaseArray(ref.child('posts'));


	var Post = {
		all: posts,

		getPost: function(postId) {
			return $firebaseObject(ref.child('posts').child(postId));
		},

		createPost: function(post) {
			post.datetime = Firebase.ServerValue.TIMESTAMP;
			return posts.$add(post)
				.then(function(newPost) {
					var obj = {
						postId: newPost.key()
					};

					var userPosts = $firebaseArray(ref.child('user_posts').child(post.authorId));

					userPosts.$add(obj);

					return newPost;
				});
		},

		editPost: function(post) {

			var t = this.getPost(post.$id);

			t.$loaded().then(function() {
				t.title    = post.title;
				t.content  = post.content;
				t.edited   = true;
				t.editTime = Firebase.ServerValue.TIMESTAMP;

				t.$save();
			});
		},

		deletePost: function(post) {

			return posts.$remove(post);

		},

		comments: function(postId) {
			var comments = $firebaseArray(ref.child('comments').child(postId));

			return comments;
		},

		addComment: function(comment) {
			comment.datetime = Firebase.ServerValue.TIMESTAMP;
			Post.comments.$add(comment);
		}
		
	};

	return Post;
});