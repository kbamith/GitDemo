//IIFE

// (function IIFE(){
// console.log("this is output");

// }());

// (function IIFE2(){
//     let a=10;
//     console.log(a);
    
// }());
// var me=()=>{console.log("This is arrow function")}
// me()

// var a ='1'
// var b=4
// console.log(a+b);

// let x='2'
// let y=1
// console.log(x % y);  // same for * / and %


// console.log(NaN == NaN)

// console.log(undefined==undefined)

// console.log('1'==1)

// console.log(NaN > 2)


// let vala = 10;

// let valres = vala < NaN;
    
// logical operators 

/* && || ! */
// ternary operator
// let a=10;
// let b=20;
// let val1=a<b?"This will be executed if condition is true":"This will be executed if condition is false"
// console.log(val1);

//Arthmatic operators + - * / %
// let a ='10';
// let b=20;
// console.log(a+b);
//-
// let a ='20';
// let b=10;
// console.log(a-b);
// * 
// let a ='20';
// let b=10;
// console.log(a%b);
// == ===
// console.log('10'===10)
//  logical operators , null ?? , ternary operator

//&& || ! 
// console.log(true || false && true);
// console.log(!false);
// NUllish operator
// var a=undefined;
// var b=a??15;
// console.log(b);

// let a=19;
// let b=15;
// let output=a>b?console.log("a is greater"):console.log("b is greater");
// console.log(output);

// let obj1={
//     name:"xyz",
//     age:20
// }
// let obj2=new Object();
// obj2={...obj1}
var fact=document.querySelector("#facts");
const btn = document.querySelector("#factbtn");


URL="https://cat-fact.herokuapp.com/facts";

const functionvar =  async ()=>{
console.log("Getting the data.....");
let response= await fetch(URL);
let data=await response.json();    
console.log(data[4].text);
fact.innerText=data[4].text;
};
btn.addEventListener("click",functionvar);