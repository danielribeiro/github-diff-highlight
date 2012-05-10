$(function() {
	var action = window.location.href.split("/")[5];
	if (action != 'commit' && action != 'pulls' && action != 'pull') {
		return;
	}
