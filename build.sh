#!/usr/bin/env bash
cd jquery-syntaxhighlighter
outfile="../pkg/github.com.js"
echo -n var _INLINE_CSS = \" > $outfile
cat prettify/prettify.css styles/style.css styles/theme-balupton.css \
	| grep -v '^/[*]' | tr '\n' '' >>  $outfile
echo \"\; >> $outfile
cat ../src/header.js \
	./scripts/resources/core.console.js \
	./scripts/resources/jquery.appendscriptstyle.js \
	./scripts/resources/jquery.syntaxhighlighter.js \
	./prettify/prettify.js \
	../src/highlighter_patch.js \
	../src/footer.js \
	>> $outfile
