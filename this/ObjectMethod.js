/**
 * Create new object by the constructor.
 * In this case, this pointer the object
 */
function test() {
	this.x = 1; 
}

var obj = new test();
console.log(obj.x);

/**
 * To approve this is not global object
 */
var x = 2;
function test() {
  this.x = 1;
}

var obj = new test();
console.log(x)  // 2
