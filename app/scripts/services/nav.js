'use strict';

app.factory('Nav', function() {
	var Nav = {
		push: function(menu, btn) {

			console.log(btn);

			return menu.toggleClass('cp-menu-open');
		}
	};

	return Nav;
});