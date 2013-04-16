    $("pre.diff-line-pre").not('#discussion_bucket pre.diff-line-pre')
    var sel = function(s) { return $(s).not('#discussion_bucket ' + s); }
    sel(".diff-line-code").each(function() {
        var t = $(this);
        var text = $.trim(t.text());
        t.contents().filter(function() { return this.nodeType == Node.TEXT_NODE; }).remove()
        t.contents().filter(function() { return this.nodeName == "SPAN"; }).remove()
        t.append("<pre></pre>");
        t.find("pre").text(text);
    }) 
    sel(".diff-line-code pre").addClass("highlight");
    sel(".file-diff-line.gd .diff-line-code pre").css({backgroundColor: "#FDD"});
    sel(".file-diff-line.gi .diff-line-code pre").css({backgroundColor: "#DFD"});
	setTimeout(function(){ $.SyntaxHighlighter.init({lineNumbers: false}); }, 200);
});
