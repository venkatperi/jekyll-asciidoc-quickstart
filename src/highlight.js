var highlight = require('highlight.js')
require( 'highlight.js/styles/default.css' );
require( 'highlight.js/styles/darcula.css' );

highlight.registerLanguage( 'javascript', require( 'highlight.js/lib/languages/javascript' ) );
highlight.registerLanguage( 'bash', require( 'highlight.js/lib/languages/bash' ) );
highlight.initHighlightingOnLoad();
