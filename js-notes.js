//***********************************************************************************************//
//                                         Part One
//***********************************************************************************************//
// JS can be run client-side(browser) with JS Engine, or can be run server-side in NODE, (JS Engine embedded in c++ program)
// Ecmascript (ES) versions define different specifications, es6 was introduced in 2016, know at least es6

//*************************************************************************************************** */
//RANDOM
//*************************************************************************************************** */
// it is best practice to put script element, at bottom of body rather than in head so browser can parse Html without having to wait on JS, and also so the tags you may wish to display/hide are/aren't generated
// strings can be enclosed in single or double quotes, doesn’t matter, although JSON only allows double quotes
// variables that have not been initialized are undefined type with value undefined
// JS doesn't have different data type for floating points or integers, they are all Number type
// JS Engine has automatic garbage collection
// callback function: function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action
// hoisting: the process of moving function declarations to top of file at runtime by JS Engine


//*************************************************************************************************** */
//  Data Types
//*************************************************************************************************** */
//  PRIMITIVE/VALUE TYPES: String, Number, Boolean, undefined, null, Symbol(a unique identifier generated by Symbol() function)
//  REFERENCE TYPES: Objects, arrays, functions (arrays and functions are objects too)
//          PRIMITIVES ARE COPIED BY THEIR VALUE, OBJECTS OR REFERENCE TYPES ARE COPIED BY THEIR REFERENCE

// JS implements DYNAMIC TYPING:
//  variables type can be changed dynamically,
//  functions don't have to define return type,
//  method overloading can be done without defining multiple functions with diff signatures,
//  arrays can store objects of different types

//*************************************************************************************************** */
//  NAMING CONVENTIONS:
//*************************************************************************************************** */
//  variables: camelCase notation, case-sensitive
    let firstName = "jose"; const interestRate = 0.3;
//  functions: camelCase notation
//  constructor functions: PascalNotation

//*************************************************************************************************** */
// OPERATORS:
//*************************************************************************************************** */
// If Boolean function is evaluated with non Boolean values, the JS Engine will determine value based on:
//   FALSY: undefined, null, 0, false, '', NaN
//   TRUTHY: anything that is not falsy

//arithmetic operators: + - % * / ** ++ --
//assignment operators: += -= ...
//comparison operators: > < >= <=
&& // logical AND operator, true if both operands are true
|| // logical OR operator, true if one operand is true, evaluation ends as soon as one true or truthy value is found ( short-circuiting )
! // logical NOT operator, whatever we give (true or false) then it gives us opposite

typeof nameOfVariable //returns type of variable with string data type

(1 == 1); // loose equality operator (==), basic defn is that only checks for value, if rhs is not equal to lhs type it converts rhs then checks for value only
(1 === 1);// strict equality operator(===), basic defn is that checks for value and data type, checks objects for reference value

//ternary operator: conditional operator that provides shorthand for if else statements
let type = points > 100 ? "gold" : "silver";

//*************************************************************************************************** */
// LOOPS:
//*************************************************************************************************** */
break // keyword used to jump or break out of a loop
continue // keyword used to end current iteration, resumes execution of next iteration 

//if, else if, else
if (condition) {} else if (anotherCondition) {} else {}
//switch
let role;
switch (role) { 
  case 'value':{}
  break;
  case 'value':{}
  case 'value':{}
  default: {}
}
//while
let i =0;
while (condition){i++}
//do while loop
do {
  i++;
}while (condition);
//for loop
for (let i = 0; i< limit; i++) {}

//************************** */ 
//  FOR-IN LOOP: mainly used to iterate through an objects' properties,   or can be used to iterate through the elements of a collection
//************************** */ 
// for objects: variable defined in loop is key of object
// for arrays: variable defined in loop is index
// returns all members (instance + prototype),
const person = {name: "jose", age: 28};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//************************** */ 
// FOR-OF LOOP: ideal way to iterate through arrays
//************************** */ 
// loop variable is value of each element in array 
// can only be used on obects with iterator
const colors = ['red', 'green', 'blue'];
for (let color of colors) console.log(color); //output would be red green blue
//or for arrays you can use foreach()
colors.forEach(e => console.log(e));



//*************************************************************************************************** */
// SCOPE 
//*************************************************************************************************** */
//************************** */ 
// variables
//************************** */ 
let, const //  BLOCK SCOPED VARIABLES: are only accessible inside current block and blocks within this block,
var //  FUNCTION SCOPED VARIABLES: are accessible to blocks within this block, AND anywhere within function, attaches variables to Window object if outside function

//************************** */ 
this // keyword references the object that is executing the current function
//************************** */ 
// if current function is method of object, or constructor function, THIS references current object the method belongs to,
// if current function is regular standalone function (outside class, or method inside a function inside class, or prototype method) THIS references global object (in browser window, or in node global), important to remember

// apply(), bind(), call(): can change value of this for functions
playVideo.call({ name: "mosh"}, optionalArgsToFn); 
playVideo.apply({ name: "mosh"}, [optionalArgsToFn]); // apply and call: call the method and supply object in argument to reference as this,
const fn = playVideo.bind({ name: "mosh"}, [optionalArgsToFn]);//  bind: does not call the method, it returns a new function and sets this to object PERMANENTLY,
//  STRICT MODE: any reference to global object is undefined

// Arrow Functions:  don't rebind this keyword!
// inherit this value from containing function,useful because standalone functions or callback functions reference window/global object with this keyword



//*************************************************************************************************** */
// OBJECTS:
//*************************************************************************************************** */

//************************* */
// 2 ways to access properties:
//************************* */
object.property // dot notation,

//bracket notation allows us to create dynamic references to property:
const propertyName = 'location';
object[propertyName]

// are DYNAMIC, so you can add/update/delete properties, implement delete keyword
circle.location = {x:1};
delete circle.location;

// To see if an object has a given property
if ('location' in circle)//checks object + prototype
if (circle.hasOwnProperty('location'))//checks object

//************************* */
//  OBJECT LITERAL SYNTAX: 
//************************* */
// properties value can be of any type, or object
let person = { 
  name: "jose",
  age: 30
};
const circle = { 
  radius: 1, 
  draw: function() {}
}; 
const; //keyword ensures the object reference will not be changed, can modify contents of object though

//************************* */
//  FACTORY FUNCTIONS, 
//************************* */
//returns object it creates, property values are supplied as arguments, 
// if key and value have same name, you can write 'name: name' as 'name'
// when defining function inside object we can drop : and function keyword 
function createCircle(radius) { 
  return {
    radius, 
    draw() {}
  } 
} 
const circle = createCircle(3);

//************************* */
//  CONSTRUCTOR FUNCTIONS, 
//************************* */
//we use the new operator and this keyword with constructor functions
//called by new operator and new operator provides empty object
//this keyword binds the members to the empty object
function Circle(radius) { 
  this.radius = radius; 
  this.draw = function() {}
} 
const anotherCircle = new Circle(3);
// We can hide the details by using "private members". Replace "this" with "let". More accurately, these are just local variables but from OOP perspective they are private members 
function Circle(radius) { 
  // Public member 
  this.radius = radius; 
  // Private member                       
  let defaultLocation = {};                      
}     


//************************* */
// Every Object has:
//************************* */
// constructor property, references function used to create that object,
objectName.constructor
//checks whether property is instance property, returns boolean
instance.hasOwnProperty("property")

// other object methods:
Object.keys(objectName) // returns an array of strings of className keys, (instance props), we use this method because objects are not iterable
Object.entries(className)// returns an array of key value pair arrays

const objectName = Object.assign({}, sourceObject)// takes all properties from source object(s) and returns them to clone the propertys and values to targetObject (inside empty brackets), then that is returned to clone to objectName
const circle = {...sourceCircle}; // BUT SIMPLER WAY to clone object would be to use spread operator
Object.getPrototypeOf(objectName); // gets prototype of object,
Object.create(shapeBase); //returns a new object that inherits from the new shapeBase,


//************************************* */     
// PRIVATE GETTERS AND SETTERS: (before es6 classes)
// to define and access like properties (object.propertyName)
//************************************* */     
// FOR FACTORY FUNCTIONS:
get fullName(){return this.fullName;}// getters: prefix function inside object with get keyword
set fullName(value){this.firstName= value[0];}// setters: prefix function inside object with set keyword, function has value parameter and at runtime argument will be given by rhs of  assignment operator, use this keyword to set properties,
// use private variables defined before returned object with let keyword

// FOR CONSTRUCTOR FUNCTIONS:
//inside construction function...
let propertyName = "value";
//inside constructor function...
Object.defineProperty(this, 'propertyName', 
{get: function(){ return propertyName;}, 
set: function(value){propertyName= value;}
});


//*************************************************************************************************** */
//    STRINGS
//*************************************************************************************************** */
//************************** */
  // TWO TYPES OF STRINGS IN JS:
  //************************** */
  const message ="hi";  //string primitive: you can use dot operator with string primitive bc js engine wraps string primitive in String object
  const anotherMessage = new String("hi") //string object: instantiated with new operator
  
  //************************** */
  // TEMPLATE LITERALS: indicated by backtick character, helps write cleaner code with strings
  //************************** */
  ${}// allows for substitution of any expression, variable, function within string,
  // whitespaces in backticks are included in string
  
  
  //******** ******************************************************************************************* */
  // ARRAYS
  //*************************************************************************************************** */
  const numbers = [];// const keyword does not stop us from modifying contents of array, but does stop us from changing reference
  
  //ADDING ELEMENTS
  numbers.push()// adds elements to end of array
  numbers.unshift()// adds elements to beginning of array
numbers.splice()// adds elements in certain position of array

// REMOVING ELEMENTS 
numbers.pop() //removes element from end of array and returns it
numbers.shift() // removes element from beginning of array and returns it
numbers.splice() //removes elements from certain position of array

// FINDING PRIMITIVE ELEMENTS
numbers.indexOf() //returns index of  first occurence of element, or -1 if not found
numbers.lastIndexOf() //returns index of last occurenc eof element, or -1 if not found
numbers.includes() //returns true if given element exists in array, false otherwise
//all have optional parameter that includes starting index of search

// FINDING REFERENCE TYPES, find(), findIndex()
numbers.find(predicate) //returns value of the first element in array that satisfies predicate, otherwise returns undefined
numbers.findIndex(predicate) //returns index of the first element in array that satisfies predicate, otherwise returns -1

// CLEARING AN ARRAY
numbers = []; //resets reference to empty array, if there are any other references to this array, their references will not be reset!
numbers.length = 0; //truncates all elements
numbers.splice(0, numbers.length); //splices all elements from first position to last

// COMBINING OR SLICING ARRAY
//spread operator is way more flexible and cleaner way to code
const combinedArray = [...firstArray, ...secondArray] // whenever we use spread operator, each element of array is returned individually
const copy = [...combinedArray]; // copies combinedArray into copy array
firstArray.concat(secondArray); // copies elements of both arrays and returns a new array
numbers.slice(); //cuts a portion of array and returns a new array

//ITERATING ARRAY
for (let number of numbers) console.log(number); // for-of loop
numbers.forEach(callbackfn)// callback function executes for each element of array, can take optional index parameter

//JOINING ARRAYS
numbers.join(optionalStringSeperator) //returns single string of whole array
.split() //used hand in hand with join method to create url slugs, can create array of individual words then use join method to connect them with hyphens

//SORTING ARRAYS
// strings, numbers do not need parameter but if sorting objects then pass optionalCallbackFn that sorts objects based on conditions
numbers.sort(optionalCallbackFn); //casts each element to string, then sorts in ascending order
numbers.reverse(); //casts each element to string, then sorts in descending order

// TESTING ELEMENTS OF ARRAY
numbers.every(callbackfn) //returns true if all elements pass condition in callback function, false if one does not pass
numbers.some(callbackfn) //returns true if at least one element passes condition in callback function, false if at least one does not pass

// FILTERING ELEMENTS FROM AN ARRAY 
const filtered = numbers.filter(callbackfn); // returns a new array with all elements that pass predicate in callbackfn, does not change original array

// MAPPING AN ARRAY
const items = filtered.map(callbackfn); // returns a new array, callbackfn maps each element from filtered array to something else, does not change original array

// REDUCING AN ARRAY, performing aggregate function with all elements (reduces all elements into single value (can be string, number, object))
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0 ) //accumulator is initial value set in second parameter of reduce function (in this case 0) or first element if second argument is not given, each time callbackfunction is called currentValue parameter represents current element



//******** ******************************************************************************************* */
// FUNCTIONS
//******** ******************************************************************************************* */
// 2 ways to declare function, function declaration or function expression
//function declaration:
function greet() { 
  console.log("hello world");
}
//function expression:
let run = function() {}; // anonymous function expression
let run = function walk() {}; // named function expression

// DIFFERENCES BETWEEN FUNCTION DECLARATIONS AND FUNCTION EXPRESSIONS
// expression needs ; at end of {} and declaration does not,
// function declaration can be called in file before declaration but expression cannot it will throw ReferenceError, this is achieved by HOISTING: the process of moving function declarations to top of file at runtime by JS Engine



//*************************************************************************************************** */
//  PROTOTYPES, inheritance in JS
//*************************************************************************************************** */
// Classical inheritance: WHERE WE HAVE CLASSES SO WE HAVE STANDARD INHERITANCE RELATIONSHIP, IE A CIRCLE IS-A SHAPE,

//******************* */
// prototype: an object that is the parent of another object
// Prototypical Inheritance: we only have objects so we have prototypical inheritance.  Every object references the single root object in memory as its prototype. The __proto__ property shows parents prototype. In JS Prototypical inheritance,  when an object performs a method/property call, the JS Engine first looks at that object to see if it has implementation, and if not found then goes up the Prototype chain until found or until it gets to the single root object in memory.
//******************* */

//BENEFIT: optimization technique for storing functions and reusable code once on prototype instead of storing a copy of redundant code on every single instance

__proto__ // The proto property is deprecated, but it still viewable for other purposes. Just need to know that EVERY OBJECT CREATED BY SAME CONSTRUCTOR WILL HAVE THE SAME PROTOTYPE.
//  Prototypes should be used to share behavior, not data

// All objects created with the same constructor will have the same prototype. Their prototype is called baseObject, ie a circle derived from Circle constructor will have baseCircle prototype
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

objInstance.__proto__ === ObjectConstructor.prototype  // Constructors have a "prototype" property that returns reference to baseObject prototype 
// When dealing with large number of objects, it's better to put their methods on their prototype. This way, a single instance of the methods will be in the memory. This is only optimization technique to use if there will be many isntances of the object in memory.  
Circle.prototype.draw = function() {} // known as prototype members

//for in loops return all members (instance + prototype) while Object.keys(instance) returns instance members
//don't modify objects you don't own ! like adding prototype methods to Array

Circle.prototype = Object.create(Shape.prototype);// sets circle prototype reference to an object that was created by shape prototype, (sets circle proto reference to shape proto reference)
Circle.prototype.constructor = Circle;//after you set prototype, be sure to reset constructor as well
// INTERMEDIATE FUNCTION INHERITANCE:
// convert logic to function that implements inheritance from new baseObject
function extend(Child, Parent){
  Child.prototype= Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  
  // WHEN TO USE INHERITANCE?
  // Only use on bigger projects, start with simple objects and if many of these objects have same behavior, then combine into generic class
  // avoid creating inheritance hierarchies, stay to one level, if over one level use composition instead!
  // favor composition instead! composition is where you combine a few objects to create new object
  
  
  // We use Mixins to achieve COMPOSITION in JS
  //************************** */ 
  // Mixins:
  //************************** */ 
  // favor composition over inheritance! composition: flexible technique where you combine a few objects to create new object
const canSwim = {swim: function(){}};
const canEat = {eat: function(){}};
const canWalk = {walk: function(){}};
//assign method copies one or more sourceObjects to another object, the target object (first argument given), in this case canSwim, canEat, canWalk are source objects and Person.Prototype is target object
Object.assign(Person.prototype, canSwim, canEat, canWalk);


//*************************************************************************************************** */
// ES6
//*************************************************************************************************** */

//************************** */ 
// ARROW FUNCTIONS: 
//************************** */ 
// inherit this value from containing function,useful because standalone functions or callback functions reference window/global object with this keyword..(they don't rebind this keyword)
// whenever you want to pass a function as a callback function or argument to method you can use arrow function syntax
//remove function keyword, put fat arrow in between parameters and brackets
//you can remove paranthesis if there is single parameter
// you can remove curly braces and return statement if there is single line of code
const course = courses.find(course => course.name === 'a');

//************************** */ 
// DESTRUCTURING OBJECTS,
//************************** */ 
const address = { street : value, city: value, country: value};
const street = address.street; 
const city = address.city; 
const country = address.country;
// IS SAME AS
const { street, city : c, address} = address;

//************************** */ 
// REST OPERATOR
//************************** */ 
arguments // every function has arguments property that contains all arguments supplied to function call, not array but is iterable, code will not break if fewer or more arguments are given than defined in parameters
function sum(...args) {} // REST OPERATOR
//used before parameter of function so the varying number of arguments given will be put in array and can be used inside function, cleaner than using arguments property that is in every function and is actual array
// rest parameter must be last parameter in function

// DEFAULT PARAMETERS: 
function interest(prinicpal, rate, years=66) //can be used by assigning parameter a default value instead of using logical expressions (||) inside function body, must be last parameter in function

//********************************************************************************** */ 
//  Classes
//********************************************************************************** */ 
//************************** */ 
//  RANDOM
//************************** */ 
// class declarations are not hoisted
// class body is automatically executed in strict mode, see below for defn
// the class declaration with class keyword are used to mimic class syntax most people are familiar with, under the hood it is just syntactical sugar for constructor function and prototypical inheritance

class Circle{
  constructor(param1){this.param1 = param1;}
  methodName() {logic here}
}
// all properties and methods are added to baseCircle prototype, to add to instance you you need to define members in constructor, OR USE ARROW FUNCTION defined in class (preferred to reference current object with this keyword and puts method on the object instead of prototype)


//************************** */ 
// PRIVATE PROPERTIES AND METHODS
//************************** */ 
// can be implemented via: 

// SYMBOLS: 
// every time a symbol is generated it creates a unique key
// sort of private properties because the unique key generated is the name of property and you can set property via bracket notation
// for private methods use COMPUTED PROPERTY NAMES, brackets with expression with resulting value used as name of method and we use symbol for the expression in brackets
// not 100% private because built in static Object methods will allow you to access the symbols
// Using symbols to implement private properties and methods
const _size = Symbol();
const _draw = Symbol();

class Square {
  constructor(size) {
    // "Kind of" private property 
    this[_size] = size; 
  }
  
  // "Kind of" private method 
  [_draw]() {
  }
  
  // By "kind of" I mean: these properties and methods are essentally
  // part of the object and are accessible from the outside. But accessing
  // them is hard and awkward. 
}
//**************************** */
//  ES6 COMPUTED PROPERTIES
//**************************** */
// allows us to easily implement dynamic properties based on object passed, gives object property name passed in brackets 
// from lines 468-476...
// computed property 
this[_size] = size; 
// computed method
[_draw]() {
}


// WeakMaps:
// a new type in es6 to implement private properties and methods, essentially a dictionary where keys are objects and values can be anything, called weak because if object is "weak" or empty reference, garbage collection will occur automatically,
//  Implementation:
//   you can assign each private property or method to a weakMap ( preferred) or you can put all of them in a single weakMap
//   place weakmap(s) in module so it cannot be modified directly
// using WeakMaps to implement private properties and methods
const _width = new WeakMap();
const _move = new WeakMap();

class Rectangle {
    constructor(width) {
        _width.set(this, width);
    }

    draw() {
        console.log('Rectangle with width' + _width.get(this));
    }
}

// WeakMaps give us better protection than symbols. There is no way 
// to access private members implemented using WeakMaps from the 
// outside of an object.

// ES6 SETTERS/GETTERS,
// implement with weakmaps
get propertyName(){ return _items.get(this);}// get keyword in front of propertyName, return weakMap private variable
set propertyName(value){_items.get(this).push(value);}// set keyword in front of propertyName, with value parameter, set weakMap private variable to value


//**************************** */
// ES6 INHERITANCE:
//**************************** */
extends // use extends keyword, resets prototype and constructor fn() under the hood,
// -use super constructor to call parent constructor and super keyword to access prototype members/methods,if parent has constructor and you wish to put constructor in child then you HAVE to call super constructor first
// Inheritance 
class Shape {
  constructor(color){
    this.color = color;
  }

  move() {
    console.log("move");
  }
}

class Triangle extends Shape {
  constructor(color) {
      // To call the base constructor 
      super(color);
  }
  draw() {
      // Call the base method 
      super.draw();

      // Do some other stuff here
  }
}

//**************************** */
// MODULES, why use?
//**************************** */
// modules: related grouping of code to improve maintainability, resusability, and abstraction
// high level rule is things that are highly related should be grouped together
// implementation detail: the private members such as getters/setters/functions that are hidden to class via abstraction
// public interface: public members of class

// Module formats
//  - AMD / Asynchronous Module Definition (Browser)
//  - CommonJS (Node)
//  - UMD / Universal Module Definition (Browser + Node)
//  - ES6 Modules (Browsers)
// all you really need to know is ES6 Modules for browser and CommonJS which is used with NodeJS

// CommonJS (Used in Node)
// Exporting 
module.exports.Circle = Circle; 
// Importing 
const Circle = require('./circle');

//*********************** */
// ES6 Modules (Used in Browser)
//*********************** */

// Named exports: use export keyword to export one or more objects,
export class Square {}
import {ObjectName[s]} from 'module(path)';
// Default exports: use export default keyword to export main object that is exported from a module,
export default class Square {}
import ObjectName from 'module(path)';

// to import both from a file we use: 
import ObjectName, {OtherObjectName} from ‘path’; 
// to understand import line we need to use Webpack or within html file set type attribute to 'module' in script tag

//**************************** */
// ES6 TOOLING(for BROWSER SIDE)
//**************************** */
// transpiler(BABEL): translator+ compiler, converts our JS code into es5 versions so every browser can understand, babeljs.io is a website that shows you the conversion of es6+ code to es5,
// bundler(WEBPACK): combindes all JS files and other files into a bundle, minify code, uglify

  
  //**************************** */
  //  STRICT MODE:
  //**************************** */
//  any reference to global object is undefined
//  throws error if you try to call/modify Window object
//  raises errors on some things that are otherwise silent errors
//  does more but beyond scope of this intro class
