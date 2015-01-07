var _ = require('underscore');

var aa = [1,2,3];
var aa2 = _.map(aa, function(n){return n*n;});
var aa3 = _(aa).map(function(n){return n*n*n;});
var aa4 = aa.map(function(n){return n*n*n*n;});

var r = _.range(1,9);

console.log(aa2, aa3, aa4);
console.log(r);
console.log("板屋製作所");

