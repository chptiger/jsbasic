/**
 * reference:
 * http://speakingjs.com/ 
 * http://www.javascripttutorial.net/javascript-prototype/ 
 * https://hackernoon.com/understand-nodejs-javascript-object-inheritance-proto-prototype-class-9bd951700b29 
 * 
 * Every object can have another object as its prototype. Then the former object
 * inherits all of its prototype’s properties. An object specifies its prototype
 * via the internal property [[Prototype]]. The chain of objects connected by
 * the [[Prototype]] property is called the prototype chain:
 */

//	prototype-based (or prototypal) inheritance works flow:
var proto = {
		describe : function() {
			return 'name: ' + this.name;
		}
};

var obj = {
		[[Prototype]] : proto,
		name : 'obj'
}

console.log(obj.describe);