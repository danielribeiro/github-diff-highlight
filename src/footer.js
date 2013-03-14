	setTimeout(function(){$(".diff-view pre").addClass("highlight");
    $(".diff-line").each(function() {
        var text = $.trim($(this).text());
        $(this).html("<pre></pre>");
        $(this).find("pre").text(text);
    }) 
	$.SyntaxHighlighter.init({lineNumbers: false});


	$("td.gd.diff-line pre").css({backgroundColor: "#FDD"});
	$("td.gi.diff-line pre").css({backgroundColor: "#DFD"});}, 900);
});
