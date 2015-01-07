var glob = require("glob")

glob("*.js", function(er, files){
    console.log(files)
});

