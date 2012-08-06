	$(".diff-view pre").addClass("highlight");
	$.SyntaxHighlighter.init({lineNumbers: false});
	$("td.gd.diff-line pre").css({backgroundColor: "#FDD"});
	$("td.gi.diff-line pre").css({backgroundColor: "#DFD"});
});
