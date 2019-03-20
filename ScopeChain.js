/**
 * 
 * http://www.albertgao.xyz/2016/08/25/why-not-making-functions-within-a-loop-in-javascript/
 */

var funcs = [];
for (var i = 0; i < 3; i++) {          // let's create 3 functions
    funcs[i] = function() {            // and store them in funcs
        console.log("My value: " + i); // each should log its value.
    };
}
for (var j = 0; j < 3; j++) {
    funcs[j]();                        // and now let's run each one to see
}