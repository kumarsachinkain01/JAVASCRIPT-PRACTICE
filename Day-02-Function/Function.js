// console.log("S");
// console.log("A");
// console.log("C");
// console.log("H");
// console.log("I");
// console.log("N");

// basic print above this line;

//----start function practice--

// function sayMyName(){
//         console.log("S");
//         console.log("A");
//         console.log("C");   
//         console.log("H");
//         console.log("I");
//         console.log("N");     
// }

// sayMyName //<- this is the reference;
// sayMyName()//<- this is the exicution 


//----arithemtic operation--------;
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// // addTwoNumbers(7,3); // answer will be 7+3 = 10;
// addTwoNumbers(7,3);


// what is parameter and arguments in funtion ?

// function greet(num1){ //in this parathesis() pass value known as parameter 
//  console.log(num1)
// }

// greet(5) // in this para() pass value 5 is known as argument;
//1) --------------------------------------------------
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
//  const result = addTwoNumbers(7,3);
//  console.log("Result ", result); /// what is the value of this result and why ?


//2)--------------------------------------------
// function addTwoNumbers(number1,number2){

//     // let result = number1+number2;
//     // return result;
//              // 2nd way;
//      return number1+number2        

// }
// const result = addTwoNumbers(5,6);
// console.log(result);

//-------------:logIn user message:------------//

// function loginUserMessage(username){
//         return `${username}:- just logged In`
// }

// const logIn = loginUserMessage("Sachin kumar");
// console.log(logIn);

//----------- if the value is empety?
// function loginUserMessage(username){
//     return `${username}:- just logged In`
// }

// const logIn = loginUserMessage();
// console.log(logIn); // what will be the answer ?
//----------------------------------------------
// function loginUserMessage(username){
//     // if(username === undefined){
//         if(!username){
//          console.log("Please Enter a User Name")
//          return;
//     }
//          return `${username}:- just logged In`
     
// }

// console.log(loginUserMessage());
//------------------------------------------

// function loginUserMessage(username = "Sachin"){
//     // if(username === undefined){
//         if(!username){
//          console.log("Please Enter a User Name")
//          return;
//     }
//          return `${username}:- just logged In`
     
// }

// console.log(loginUserMessage("Rahul"));

//----Calculate cartPrice using Rest Operator---------

// function calculateCartPrice(val1, val2, ...num1){
// return num1
// }
// // console.log(calculateCartPrice(200,400,5000,789,53678,238,89,789));


//--- Object pass in function-------

// const user = {
//     userName : "Sachin",
//     price : 1999
// }

// function handleObject(anyObject){
//    console.log(`Username is ${anyObject.userName} and Price is ${anyObject.price} /-`)
// }

// handleObject(user);
// handleObject({
//     userName : "Rahul",
//     Price : 4999
// })
// // output -> Username is Sachin and Price is 1999 /- 

//-------A
// function fun1(a,b){
//     console.log("fun1",a/b)
//     return a+b;
// }

// let fun11 = fun1;
// console.log(fun11(80
//     ,80
// ))



// const multiply = (a, b) => {
//     const result = a * b;
//     return result;
//   };
//    let total = multiply(10,10)
//    console.log(total)


//---------< How to passs array in function >-------

// // const myNewArray = [100,200,300,400,500,600,700];

// function returnArray(getArray){
//     return getArray[0]
// }
// // console.log(returnArray(myNewArray))

// console.log(returnArray( [100,200,300,400,500]));

//-------------lets practice-------------------
//=============================================
//------Javascript Arithmetic and function-----
// //1) Addition
// function addition(num1,num2){
//   return num1 +num2
// }

// console.log("Addition :-",addition(10,10))

// //2) Substraction 
// function subs(num1,num2){
//   return num1 +num2
// }
// console.log("Substraction :- ",subs(20,15))

// //3) Multiplication 
// function multi(num1,num2){
//     return num1 * num2
//   }
//   console.log("Multiplication :- ",multi(5,5))

// //4) division 
// function division(num1,num2){
//     return num1 / num2
//   }
//   console.log("division:- ",division(5,5))

//   //5) modulus
// function modulus(num1,num2){
//     return num1 % num2
//   }
//   console.log("modulus:- ",modulus(10,3))

  //----------Task Question------------------
//1) Question 1: Write a JavaScript expression to add two numbers, a and b, and store the result in a variable sum. What will be the value of sum if a is 7 and b is 3?

// function addTwoNumber(a,b){
//     let result = a + b;
//     console.log(result);
// }

// addTwoNumber(7,3);

//---------------------------------------------
//2)Question 2: Subtract the variable b from the variable a and store the result in a variable difference. What will be the value of difference if a is 15 and b is 8?

// function difference(a,b){
//     let result = a - b;
//     console.log(result);
// }
// difference(15,8);

//-----------------------------------------------
//3) Question 3: Multiply two numbers, a and b, and store the result in a variable product. What will be the value of product if a is 6 and b is 4?

// function product(a,b){
//     let result = a*b;
//     console.log(result);
// }
// product(6,4);

//---------------------------------------------------
//4)Question 4: Divide the variable a by the variable b and store the result in a variable quotient. What will be the value of quotient if a is 20 and b is 4?

// function quotient(a,b){
//     let value = a / b;
//     console.log(value);
// }
// quotient(20,4)

//-----------------------------------------------------
//Question 5: Write an expression to find the remainder when a is divided by b and store it in a variable remainder. What will be the value of remainder if a is 10 and b is 3?

// function remainder(a,b){
//     let result = a % b;
//     console.log(result);
// }
// remainder(10,3)

//--------------------------------------------------------
//Question 6: Write a JavaScript expression that first adds a and b, then multiplies the result by c. What will be the final result if a is 2, b is 3, and c is 4?

// function calculateResult(a,b,c){
//     return (a+b) * c ;
// }

// const result = calculateResult(2,3,4);
// console.log(result);

// //Question 7: Create a JavaScript expression to calculate the average of three numbers a, b, and c. What will be the average if a is 5, b is 10, and c is 15?

// function calculateAverage(a,b,c){
//     let result = (a + b + c) / 3;
//     console.log(result);
// }
// calculateAverage(5,10,15);

//Question 8: Write an expression that increments the value of a by 1 and then multiplies it by b. What will be the result if a is 7 and b is 5?

// function increamentAndMultiply(a,b){
//     return(++a) * b;
// }
// const result = increamentAndMultiply(7,5);
// console.log(result);

// another way;
function incrementAndMultiply(a, b) {
    console.log((++a) * b);
}

incrementAndMultiply(7, 5); 
