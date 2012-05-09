// Simple patch on SyntaxHighlighter.load to use _INLINE_CSS. See build.sh
(function($){
	$.SyntaxHighlighter.load = function() {
		// Prepare
		var	SyntaxHighlighter = this,
			config = SyntaxHighlighter.config,
			prettifyBaseUrl = config.prettifyBaseUrl,
			baseUrl = config.baseUrl,
			themes = config.themes;

		// Append
		if ( !SyntaxHighlighter.loaded() ) {
			$('head').append("<style type='text/css'>" + _INLINE_CSS + "</stlye>");
			SyntaxHighlighter.loadedExtras = true;
		}

		// Chain
		return this;
	}
})(jQuery);