// print first line
//console.log('Hello JS World!');

/* variables */
//1.var
// var x = 10;
//  x = 20;

//console.log(x);

//2.let
// let x = 10;
//     x = 20;

// console.log(x);

//3.const

// const x = 10;
//  x = 20;

// console.log(x);

// const x = {
//     name:'abc',
//     age:20
// }

// x.name='emc';
// console.log(x);

// const x = {
//     name:'abc',
//     age:20
// }

// x = {
//     name:'emc',
//     age:21
// }

// console.log('x'); // error will throw we can change obj in const but not var name

// const c = ['abc', 'efg']; -->same condition for array
// c.push('hij')

// console.log(c);

/*Hoisting*/

// function hoi() {
//     a = 10;
//     let b = 20;
// }

// hoi();

// console.log(b);
// console.log(a);

/*scop (block global function)*/

//1.global & function
// const a = 'abc'; -->global

// function scop() {
//     const a = 'bhd'; -->fun
//     console.log(a);-->fun

// }

// scop();
// console.log(a);--> global

//2.block

// const a = 10;

// function scop() {
//     const a =20;
//     if (true) {
//         const a = 30; --> block scop
//         console.log(a); --> block scop

//     }
//     console.log(a);

// }
// scop();
// console.log(a);

/*coercion*/
// console.log(42 + '0');
// console.log('42' * '0'); not must needed

/*logical operators [|| && ! == ===]*/

//1.||
// function greet(name) {
//     console.log(`Hi, ${name || "Visitors" } !`);

// }

// greet('Rifthi');

//2.&&

// const name = '';
// const age = 20;

// if (name && age ) {
//     console.log('access granded');

// }else{
//     console.log('access denied');

// }

//3.!

// let isvisible = false;
// isvisible = !isvisible;
// console.log(isvisible);

// const name = "";
// const age = 20;
// const isSubmit = false;

// if ((name === "sdfsdf" && age === 20) || isSubmit) {
//   console.log("access approved");
// } else {
//   console.log("not approved");
// }

/*null colashing*/

// let x = null;
// let x;
// let x = 'hi';
// x = x ?? "hello";

// console.log(x);

/*tamplet string*/

var name = "Rifthi";
var age = 21;
var job = "web developer";
var msg = `My name is ${name} I'm ${age} years old I'm currently working as a ${job}`;
console.log(msg);