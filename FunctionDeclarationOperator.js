/**
 * 
 * http://helephant.com/2012/07/14/javascript-function-declaration-vs-expression/
 * 
 * function declaration vs function operator 
 * Functions made with a function declaration are moved to the top of the code and created before the rest of
 * the function is run. 
 * Functions made with the function operator are created at runtime where they are in the javascript code.
 * 
 * If you need to create a function inside an if statement or a loop, always use
 * a function operator. The function declaration will not have the effect that
 * you intended because it will be hoisted to the top of the code (unless you
 * and all the people who will ever use your script are using Firefox because
 * then it will become a function statement). Function declarations that are in
 * if statements or loops will never consistently do what you expect cross
 * browser.
 * 
 * If you are going to declare a function and use it only once and straight
 * away, the function operator syntax is more concise than the function
 * declaration. It is ideal for things like single line JQuery event handlers
 * that toggle some CSS class.
 * 
 * Building up objects with methods is pretty much the same. Using the function
 * operator to directly assign the method to the object means not having to go
 * looking for the implementation. If you’re worried about performance, use the
 * object prototype to declare the method only once for all the objects you
 * create.
 * 
 * If you’re working in the global scope (writing javascript that is not inside
 * a function), particularly if you are working on code that will be used by
 * other people, you will want to avoid creating lots of variables that might
 * conflict with other code. The function operator can be used with patterns
 * such as namespacing to keep your code’s footprint as light as possible.
 * 
 * For any other functions that will be used a number of times, function
 * declaration or function operator is a matter of personal preference. The
 * function declaration is more concise and looks more like how you’d create a
 * function in most other languages. If you’re using the function operator
 * everywhere else and you want to make sure no one makes the mistake of putting
 * a function declaration inside a conditional statement or a loop, then it
 * might be worth considering mandating the function operator in your coding
 * standards.
 */
var chooseSide;
var skywalker = "test";
if(skywalker == "Luke Skywalker") {
    chooseSide = function() {
        return "jedi";
    }
}
else {
    chooseSide = function() {
        return "sith";
    }
}
console.log(chooseSide());

/**
Question:
why we need declare function inside loop?
*/