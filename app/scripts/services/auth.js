'use strict';

app.factory('Auth', function(FURL, $firebaseAuth, $firebaseObject) {
	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);


	var Auth = {
		user: {},

		createProfile: function(uid, user) {
			var profile = {
				name: user.name,
				email: user.email,
				dob: user.dob || 'unknown'

			};

			var profileRef = ref.child('profile').child(uid);

			profileRef.set(profile);
		},

		getProfile: function(uid) {
			return $firebaseObject(ref.child('profile').child(uid));
		},

		login: function(user) {
			return auth.$authWithPassword({
				email: user.email,
				password: user.password
			});
		},

		register: function(user) {
			return auth.$createUser({email: user.email, password: user.password})
				.then(function() {
					return Auth.login(user);
				})
				.then(function(data) {
					return Auth.createProfile(data.uid, user);
				});
		},

		logout: function() {
			auth.$unauth();
		},

		signedIn: function() {
			return !!Auth.user.provider;
		},

		requireAuth: function() {
			return auth.$requireAuth();
		}

	};

	auth.$onAuth(function(authData) {
		if(authData) {
			angular.copy(authData, Auth.user);
			Auth.user.profile = $firebaseObject(ref.child('profile').child(authData.uid));
		} else {
			if(Auth.user && Auth.user.profile) {
				Auth.user.profile.$destroy();
			}
			angular.copy({}, Auth.user);
		}
	});

	return Auth;
});