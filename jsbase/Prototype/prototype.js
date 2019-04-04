/**
 * https://javascript.ruanyifeng.com/oop/prototype.html
 * 
 * http://www.javascripttutorial.net/javascript-prototype/
 */
console.log(Object);
console.log(Object.prototype); // more detail info from browser console

// The Object.prototype object has many built-in properties such as toString(),
// valueOf(), etc. It also has a property named constructor that points back to
// the Object() function.
console.log(Object.prototype.constructor === Object); // true

function Foo(name) {
	this.name = name;
}

// Behind the scenes, JavaScript engine creates a new function Foo() and an
// anonymous object. The Foo() function has a property named prototype that
// points to the anonymous object. And the anonymous object has the constructor
// property points back to the Foo() function.

