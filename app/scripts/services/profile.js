'use strict';

app.factory('Profile', function(FURL, $firebaseArray, $firebaseObject, $q, Auth) {


	var ref   = new Firebase(FURL);
	var uid   = Auth.user.uid;
	var posts = $firebaseArray(ref.child('user_posts').child(uid));



	var Profile = {
		getUserPosts: function(uid) {
			var defer = $q.defer();

			posts.$loaded()
				.then(function(posts) {
					defer.resolve(posts);
				}, function(err) {
					defer.reject();
				});

			return defer.promise;
		},
		getProfile: function(uid) {
			return $firebaseObject(ref.child('profile').child(uid));
		},

		getUserComments: function(uid) {
			var defer = $q.defer();

			
		}
	};

	return Profile;

});