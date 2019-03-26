/**
 * working on the console browser
 * 
 * How to approve this pointer global object?
 * If there is no parameter for apply() method. default object is global object
 */
var x = 0;
function test() {
	console.log(this.x);
}
var obj = {};
obj.x = 1;
obj.m = test;
obj.m.apply() // 0


//If we add object to the apply method, result changed to 1
obj.m.apply(obj); //1


