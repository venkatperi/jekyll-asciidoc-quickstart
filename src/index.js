require('../css/foundation.css')
require('../css/themes/github.css');

var $ = require( 'jquery' );
require('./toc')
var { Foundation } = require( 'foundation' );
var highlight = require( 'highlight.js/lib/highlight' );
require('highlight.js/styles/default.css');
require('highlight.js/styles/darcula.css');

highlight.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
highlight.registerLanguage('bash', require('highlight.js/lib/languages/bash'));

Foundation.addToJquery( $ );
$( document ).foundation();
$( function () {
  const doc = document.documentElement;
  doc.setAttribute( 'data-useragent', navigator.userAgent );
  hljs.initHighlightingOnLoad();
} );