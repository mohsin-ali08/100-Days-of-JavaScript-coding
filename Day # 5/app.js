/* Arithmetic Operators */


let a = 15;
let b = 5;
let result = a + b;
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
//  modulus .
console.log("a % b =",a%b);
//Exponentiation .
console.log("a ** b =",a**b);






       //unary operators .
//  there are 2 unary operators. 
// 1,increment. ++  ,, for example a++ = a+1

// 2, decrement. --  ,, for example a-- = a-1

// post increment = a++ 
let x = 7;
let y = 5;
x++,
console.log("a++ =", x);

// preincrement = ++a
let c = 3;
let d = 5;
console.log("++c =",++c);

// post decrement = a-- predecrement = --a



//  Assignment Operators  in js:

/*       =
         +=
         -=
         *=
         %=
         **=    */
        
let a =5;
let b = 3;

a += 3;
console.log("a =", a);


// Comparison Operators : 
/* Equal to ==
   Equal to & type ===
   Not equal to !=
   Not equal to & type !==
   >
   >=
   <
   <=        */


//    Logical Operators :
/*    and &&     OR ||    Not !      */




// Conditional Statements in js :
// To implement some condition in the Code :

// if statement :
// if-else statement:
// else-if statement:



// Q:1, Get user input a number using prompt 
// ("Enter a Number:"). Check if the Number is a multiple of 5 or not?

let num =prompt("Enter a number:");
if(num % 5 === 0){
  console.log(num,"is a multiple of 5");
}else {
    console.log("is Not multiple of 5");
}



// Q:2, Write a code which give grades to  students according  to their scores:
// 90 - 100 : A 
// 70 - 80 :  B
// 60 - 70 :  C 
// 50 - 60 :  D
// 0  - 50 : fail


let score = 95;
let grade ;

if (score >= 90 && score <= 100){
    grade = "A";
}else if(score >= 70 && score <= 89){
  grade = "B";
}else if(score >= 60 && score <= 69){
    grade = "C";
}else if(score >= 50 && score <= 49){
    grade = "D";
}else{
    grade = "fail";
}

console.log("According to your score, your grade was :",grade);


 


