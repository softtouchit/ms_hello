/**
 * My module:
 *  description about what it does
 */
(function() {
    
    var process = function(req, resp) {
        resp.body="Hello world";
    };
    
    var getProcess = function(req, resp) {
        resp.body="Hello world: get";
    };
    
    
    return {
     onGet: getProcess,
     onPost: process
//     onPut:
//     onDel:
    };
    
}());
