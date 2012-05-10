$(function() {
	var pathname = window.location.pathname;
	if (pathname.indexOf('/commit/') === -1 && pathname.indexOf('/pull/') === -1) {
		return;
	}
