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

					var userPostsRef = ref.child('user_posts').child(post.authorId);

					userPostsRef.set(obj);

					return newPost;
				});
		},

		editPost: function(post) {
			var t = this.getPost(post.$id);
			console.log(t);
			// return t.set({title: post.title, content: post.content});
		},

		deletePost: function(post) {

			return posts.$remove(post);

		}
	};

	return Post;
});