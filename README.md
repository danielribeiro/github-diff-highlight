# github-diff-highlight


# Notice: This project is DEPRECATED


## Please use the [Chrome Extension](http://bit.ly/15OWxUv). This project is deprecated in favor or it (source [here](https://github.com/danielribeiro/github-diff-highlight-extension))


# Old Readme


Simple [dot.js](http://defunkt.io/dotjs/) script that enables syntax highlight for commit diffs on GitHub:

![](https://github.com/danielribeiro/github-diff-highlight/raw/master/docs/example.png)

## Install

You can install it in one line (assuming you've installed [dot.js](http://defunkt.io/dotjs/)):

    $ curl https://raw.github.com/danielribeiro/github-diff-highlight/master/pkg/github.com.js >> ~/.js/github.com.js

## Hacking

The project is based on [jquery-syntaxhighlighter](http://balupton.github.com/jquery-syntaxhighlighter/demo/), which is itself based on [Google's Prettify](http://code.google.com/p/google-code-prettify/). If you wanna hack it yourself, read on.

My fork of [jquery-syntaxhighlighter](https://github.com/balupton/jquery-syntaxhighlighter) is included inline in the project (my fork essentially removes borders on the highlighted pre elements).

The build.sh script composes all relevant jquery-syntaxhighlighter assets, including css, and wraps it around a function block. footer.js actually calls syntaxhighlighter, while header.js just checks that the current page is a commit page.

highlighter_patch.js essentially prevents unneeded remote loading of assets (as they are all included in the final github.com.js).


## Meta


Created by [Daniel Ribeiro](http://metaphysicaldeveloper.wordpress.com/about-me). 

Released under the MIT License: http://www.opensource.org/licenses/mit-license.php

https://github.com/danielribeiro/github-diff-highlight
