/**
 * Dynamic Typing:
 * The value type of a variable can change during the execution of a program and JavaScript takes care of it automatically.
 */
var test = "qwe";
test = ["1","2","3","4"];
console.log(test);

/**
 * Global vs. Local 
 */
var num = 10;
function testGlobal() {
	num = 100;
	console.log(num); // 100
}
console.log(num); // 10
testGlobal();

/**
 * The Let and Block Scope
 * 
 * the let keyword allows the script to restrict access to the variable to the nearest enclosing block.
 */
function testLet() {
	var num = 100;
	console.log(num);
	{
		console.log("inside block start");
		let num = 200;
		console.log(num);
	}
}
testLet();

//let num = 200; //SyntaxError: Identifier 'num' has already been declared
console.log(num);

/**
 * The const Constants cannot be reassigned a value.
 * 
 * A constant cannot be re-declared.
 * 
 * A constant requires an initializer. This means constants must be initialized
 * during its declaration.
 * 
 * The value assigned to a const variable is immutable.
 */
const x = 10;
//x = 12;	//TypeError: Assignment to constant variable.


/**
 * ES6 and Variable Hoisting:
 * The concept of hoisting applies to variable declaration but not variable initialization. 
 * It is recommended to always declare variables at the top of their scope (the top of global code and the top of function code), 
 * to enable the code resolve the variable’s scope
 * 
 */
var main = function() {
	for (var i = 0; i < 5; i++) {
		console.log(i);
	}
	console.log("i can be accessed outside the block scope x value is :" + i);
	console.log('i is hoisted to the function scope');
}
main();
// explaination for Variable Hoisting
var main = function() {
	var i = 0;
	for( ; i<5 ; i++) {
		console.log(i);
	}
	console.log("i can be accessed outside the block scope x value is :" + i);
	console.log('i is hoisted to the function scope');
}
main();