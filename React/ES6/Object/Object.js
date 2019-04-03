/**
 * https://www.tutorialspoint.com/es6/es6_objects.htm 
 * 
 * An object is an instance which contains a set of key value pairs. Unlike
 * primitive data types, objects can represent multiple or complex values and
 * can change over their life time. The values can be scalar values or functions
 * or even array of other objects.
 * 
 * var identifier = { Key1:value, Key2: function () { //functions }, Key3:
 * [“content1”,” content2”] }
 */
var person = {
	firstname : "Tom",
	lastname : "Hanks",
	func : function() {
		return "Hello!!"
	},
};
//access the object values 
console.log(person.firstname)
console.log(person.lastname)
console.log(person.func())

/**
 * In ES6, assigning a property value that matches a property name, you can omit
 * the property value.
 * 
 *  With this shorthand syntax, the JS engine looks in the
 * containing scope for a variable with the same name. If it is found, that
 * variable’s value is assigned to the property. If it is not found, a Reference
 * Error is thrown.
 */
var foo = 'bar' 
var baz = { foo } 
console.log(baz.foo)// bar

/**
 * the Object() Constructor
 * 
 * JavaScript provides a special constructor function called Object() to build
 * the object. The new operator is used to create an instance of an object. To
 * create an object, the new operator is followed by the constructor method.
 * 
 */
var myCar = new Object(); 
myCar.make = "Ford"; //define an object 
myCar.model = "Mustang"; 
myCar.year = 1987;  

console.log(myCar["make"]) //access the object property 
console.log(myCar["model"]) 
console.log(myCar["year"])
console.log(myCar.year)

/**
 * A new property can always be added to a previously defined object. For
 * example, consider the following code snippet −
 */
function Car() { 
   this.make = "Ford" 
} 
var obj = new Car() 
obj.model = "F123" 
console.log(obj.make) 
console.log(obj.model)

// The Object.create Method
