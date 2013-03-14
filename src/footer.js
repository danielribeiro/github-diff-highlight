    $(".diff-line").each(function() {var text = $.trim($(this).text()); $(this).html("<pre></pre>"); $(this).find("pre").text(text); }) 
    $(".diff-line pre").addClass("highlight");
    $("td.gd.diff-line pre").css({backgroundColor: "#FDD"});
    $("td.gi.diff-line pre").css({backgroundColor: "#DFD"});
	setTimeout(function(){ $.SyntaxHighlighter.init({lineNumbers: false}); }, 900);
});
