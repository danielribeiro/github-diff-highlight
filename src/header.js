$(function() {
	var valid_actions = ['commit', 'pull', 'pulls'],
	    action = window.location.pathname.split("/")[3];
	if ($.inArray(action, valid_actions) === -1) {
		return;
	}
