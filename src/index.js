require('font-awesome/css/font-awesome.css');
require('../css/foundation.css');
require('../css/themes/riak.css');
require('highlight.js/styles/default.css');
require('highlight.js/styles/darcula.css');

var $ = require( 'jquery' );
require('./toc')
var { Foundation } = require( 'foundation' );
var highlight = require( 'highlight.js/lib/highlight' );

highlight.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
highlight.registerLanguage('bash', require('highlight.js/lib/languages/bash'));

$( function () {
  Foundation.addToJquery( $ );
  $( document ).foundation();
  const doc = document.documentElement;
  doc.setAttribute( 'data-useragent', navigator.userAgent );
  hljs.initHighlightingOnLoad();
} );