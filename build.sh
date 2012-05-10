#!/usr/bin/env bash
ECHO=$(type -P echo)
GREP=$(type -P grep)
TR=$(type -P tr)
cd jquery-syntaxhighlighter
outfile="../pkg/github.com.js"
$ECHO -n var _INLINE_CSS = \" > $outfile
cat prettify/prettify.css styles/style.css styles/theme-balupton.css \
	| $GREP -v '^/[*]' | $TR -d '\n' >>  $outfile
$ECHO \"\; >> $outfile
cat ../src/header.js \
	./scripts/resources/core.console.js \
	./scripts/resources/jquery.appendscriptstyle.js \
	./scripts/resources/jquery.syntaxhighlighter.js \
	./prettify/prettify.js \
	../src/highlighter_patch.js \
	../src/footer.js \
	>> $outfile
