/**
 * A closure is the combination of a function and the lexical environment within which that function was declared.
 * 
 */

function init() {
	var name = 'Mozilla'; // name is a local variable created by init
	function displayName() { // displayName() is the inner function, a closure
		console.log(name); // use variable declared in the parent function
	}
	displayName();
}
init();

function makeFunc() {
	var name = 'Mozilla';
	function displayName() {
		console.log(name);
	}
	return displayName;
}

var myFunc = makeFunc();
myFunc();