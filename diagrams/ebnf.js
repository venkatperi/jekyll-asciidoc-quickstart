var grammkit = require('grammkit');
var parse = require('pegjs/lib/parser').parse;
 
var grammar = parse('start = left ("+" / "-") right');
console.log(grammkit.diagram(grammar.rules[0]));

