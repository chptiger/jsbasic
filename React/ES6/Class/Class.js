/**
 * A class definition can include the following −
 * 
 * Constructors − Responsible for allocating memory for the objects of the
 * class.
 * 
 * Functions − Functions represent actions an object can take. They are also at
 * times referred to as methods.
 * 
 * Note − Unlike variables and functions, classes cannot be hoisted.
 * 
 * 
 */
'use strict' 

// two ways to declare class
class Ploygon {
	
	static disp() {
		console.log("static function called .....");
	}
	
	constructor(height, width) {
		this.h = height;
		this.w = width;
	}
	
	test() { 
	      console.log("The height of the polygon: ", this.h) 
	      console.log("The width of the polygon: ",this. w) 
	   } 
}

var ploygon_ = class Ploygon_ {
	constructor(height, width) {
		this.h = height;
		this.w = width;
	}
}

//creating new objects
var ploygon_test = new Ploygon(100,200);
ploygon_test.test();

var ploygon_in = new ploygon_(100, 200);
console.log(ploygon_in.h);

// call static method
Ploygon.disp();

// instanceof operator
var isObject = ploygon_in instanceof ploygon_;
console.log("ploygon_in is an instance of ploygon_: " + isObject);

/**
 * class inheritance class child_class_name extends parent_class_name
 * 
 * Inheritance can be classified as −
 * 
 * Single − Every class can at the most extend from one parent class.
 * 
 * Multiple − A class can inherit from multiple classes. ES6 doesn’t support
 * multiple inheritance.
 * 
 * Multi-level
 * 
 * 
 */
'use strict'
class Shape {
	constructor(a) {
		this.Area = a;
	}
}

class Circle extends Shape {
	disp() {
		console.log("Area of the circle: " + this.Area);
	}
}
var obj = new Circle(22);
obj.disp();

/**
 * Multi-level − Consider the following example.
*/
'use strict'
class Root {
	test() {
		console.log("call from parent class");
	}
}
class Child extends Root{};
class Leaf extends Child{}

// indirectly inherits from Root by virtue of inheritance
var obj = new Leaf();
obj.test();

/**
 * Class inheritance and Method Overriding.
 * Method Overriding is a mechanism by which the child class redefines the superclass method
 */
'use strict' ;
class PrinterClass { 
   doPrint() { 
      console.log("doPrint() from Parent called… ");
   }
}
class StringPrinter extends PrinterClass { 
   doPrint() { 
      console.log("doPrint() is printing a string…"); 
   } 
} 
var obj = new StringPrinter(); 
obj.doPrint();

/**
 * The Super Keyword
 */
'use strict' 
class PrinterClassSuper { 
   doPrint() {
      console.log("doPrint() from Parent called…") ;
   } 
}  
class StringPrinterChild extends PrinterClassSuper { 
   doPrint() { 
      super.doPrint() 
      console.log("doPrint() is printing a string…") ;
   } 
} 
var obj = new StringPrinterChild() ;
obj.doPrint()