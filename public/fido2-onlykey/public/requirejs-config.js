require.config({
    baseUrl: './',
    paths: {
        
    }
});

define("gun",function(require, exports, module) {
    //redirect bundle version to src version
    module.exports = require("./gunjs/src/index.js");
})
