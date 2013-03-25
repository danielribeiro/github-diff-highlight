    $(".diff-line").each(function() {
        var t = $(this);
        var text = $.trim(t.text());
        t.contents().filter(function() { return this.nodeType == Node.TEXT_NODE; }).remove()
        t.append("<pre></pre>");
        t.find("pre").text(text);
    }) 
    $(".diff-line pre").addClass("highlight");
    $("td.gd.diff-line pre").css({backgroundColor: "#FDD"});
    $("td.gi.diff-line pre").css({backgroundColor: "#DFD"});
	setTimeout(function(){ $.SyntaxHighlighter.init({lineNumbers: false}); }, 900);
});
