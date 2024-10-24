// let a = "Sachin";
// let b = "Kumar";
// console.log(a , b)
// debugger
// console.log(a);
// var a = "Sachin"
//1) single threded;
//2) single sync;
//3) scripting;
//4) interpreter;
//5) async;

//6) hosting;
//7) what is variable in js;
//8) diffrence btw let, var and  conts and scope;
//9) what is primitive datatype and non-primition datatype;

// let student1 = {
//     name: "Rahul Sharma",
//     rollNo: 101,
//     age: 15,
//     class: "10th",
//     subject: "Mathematics"
// };

// let obj={
//     name:"sumit",
//     age:20,
//     4:"anuj"
// }

// obj.name="sachin";
// obj.age=25;
// obj[4]="Sachin";
// console.log(obj);

// let linearArray = ["Saschin","Girish","Rahul","Junaid","Raman","Amit vsk"]
// let notLinearArray=["Sachin", 25, true,];
// console.log(notLinearArray)
// console.log(linearArray)



// let students = [
//     { name: "Rahul Sharma", rollNo: 101, age: 15, class: "10th", subject: "Mathematics" },
//     { name: "Sita Verma", rollNo: 102, age: 14, class: "9th", subject: "Science" },
//     { name: "Aman Gupta", rollNo: 103, age: 16, class: "11th", subject: "English" },
//     { name: "Priya Jain", rollNo: 104, age: 17, class: "12th", subject: "History" },
//     { name: "Rohit Singh", rollNo: 105, age: 15, class: "10th", subject: "Mathematics" },
//     { name: "Nisha Patel", rollNo: 106, age: 13, class: "8th", subject: "Geography" },
//     { name: "Vivek Malhotra", rollNo: 107, age: 16, class: "11th", subject: "Chemistry" },
//     { name: "Anjali Mehta", rollNo: 108, age: 15, class: "9th", subject: "Biology" },
//     { name: "Karan Yadav", rollNo: 109, age: 14, class: "9th", subject: "Computer Science" },
//     { name: "Sneha Kapoor", rollNo: 110, age: 17, class: "12th", subject: "Physics" }
// ];




// ============Airthmetic Operators =============
  // add two numbers.
// let num1 = 12;
// let num2 = 8;
// console.log(num1+num2);
// console.log(`this is the num1 -> ${num1} and this is the num2 -> ${num2} and this is the sum of num1+num1 = `);
//-------------------------------------------------
//substract two number
// let sub1 = 20;
// let sub2 = 5;
// console.log(sub1-sub2);
//-------------------------------------------------
// mulitiply two numbers
// let multi1 = 6;
// let multi2 = 7;
// console.log(multi1*multi2);
//-------------------------------------------------
// divide two number;
// let div1 = 24;
// let div2 = 4;
// console.log(div1/div2);
//-------------------------------------------------
// find reminder of two numbers;
// let r1 = 29;
// let r2 = 6;
// console.log(r1%r2);
//-------------------------------------------------
// let number = "1"-1;
// console.log(number);
// console.log(typeof number)
//-------------------------------------------------
// let a = "-3"*"0";
// console.log(`this is the a -> ${a} , ${typeof a}`);   /* this is the a -> 0 , number*/
//-------------------------------------------------
// let b = "1"+"4"-"1";
// console.log(`this is the b -> ${b} , ${typeof b}`); /* this is the b -> 13 , number */
//********************************************************* */
//=============comparison operators=================== 
// console.log("comparison operatos  ")
// let ten = 10;
// let five = 5;
// console.log(ten > five); // true beacause Ten greater than five condition is right that's why answer will be true.
//------------------------------------------------
// console.log(null == undefined) // true;
// console.log(null === undefined) // false;
// console.log(null <= undefined) // false;
// console.log(null >= undefined) // false;
//-------------------------------------------------
// console.log(50 == "50") // true
// console.log(50 === "50") // false
// console.log(50 !== "50") // true
// console.log(50 != "50") // false
// console.log(50 >= "50") // true
// console.log(50 <= "50") // true//-------------------------------------------------
// console.log(false == 0);// true;
// console.log(false === 0);// false;
// console.log(false !== 0);// true;
//-------------------------------------------------
// console.log("a" == "a"); // true;
// console.log("a" == "A"); // false;
// console.log("a" === "a"); // true;
//-------------------------------------------------
// console.log("A" < "a") // true; because of ASCAI value
// console.log("J" < "I") // false; because of ASCAI value
// console.log("K" > "j") // false; because of ASCAI value
// console.log("i" >  "Z") // true; because of ASCAI value
//---------------------------------------------------------
// console.log("10 is greater than 5 ? = " ,10 > 5 );
// console.log("10 is less than 5 ? = " ,10 < 5 );
// console.log("10 is equal to 5 ? = " ,10 == 5 );
// console.log("10 is stricktly check using three === 5 ? = " ,10 === 5 );
// ------ Answer -----
// 10 is greater than 5 ? =  true
// 10 is less than 5 ? =  false
// 10 is equal to 5 ? =  false
// 10 is stricktly check using three === 5 ? =  false
//------------------------------------------------------------
// console.log( "'10' is greater than 10 ?","10" > 10);
// console.log( "'10' is less than 10 ?","10" < 10);
// console.log( "'10' is equal to  10 ?","10" == 10);
// console.log( "'10' stricktly check using three === 10 ?","10" === 10);
///----Answer----
// '10' is greater than 10 ? false
// '10' is less than 10 ? false
// '10' is equal to  10 ? true
// '10' stricktly check using three === 10 ? false
//----------------------------------------------------------
// console.log("undefined is equal to null ? ->",undefined == null);
// console.log("undefined stricktly check using three === ? ->",undefined === null);
// console.log("undefined is less than null ? ->",undefined < null);
// console.log("undefined is greater than null ? ->",undefined > null);
// ---- Answer---
// undefined is equal to null ? -> true
// undefined stricktly check using three === ? -> false
// undefined is less than null ? -> false
// undefined is greater than null ? -> false
//--------------------------------------------------------



// ----------------post increament / pre-increament----------
// let numb = 0;
// console.log(numb++, ++numb, numb);
// console.log(numb++);
// console.log(++numb)
// console.log(numb);
// let count = 10;
// console.log(count++); // Post-increment: Expected output:
// console.log(++count); // Pre-increment: Expected output: 





//puzzle 13
//  let x =3;
//  let y = x++;
//        console.log(x,y)
//      y = x++ + ++x;
//        console.log(x,y);
//      y = x++ + ++x + --x 
//         console.log(x,y)
//      y = x++ + ++x + --x + x--
//         console.log(x,y);
    //  y = x++ + ++x + --x + x-- - x;
    //  /////3  + 1+4 + 5-1 + 4   - 3;
    //     console.log(x, y);
  



// let x = 3;
// let y = x++ + ++x + --x + x-- - x;
// console.log(x, y); 
// Expected output: ?


// Assignment operators///;

// let a = 10;
// a = a+=5
// console.log(++a);
// console.log(a);

// let array = 10
// for (let index = 0; index <= array; index++) {
//     console.log(index)}
    

// let x = 10;
// x += 5; // or x = x+=5
// console.log(x); // 10+5 = 15
// x = x -= 3;
// console.log(x) // 15-3 = 12
// x = x *= 2;
// console.log(x)//12*2 = 24
// x = x /= 4;
// console.log(x) // 24 / 4 = 6
// x = x %= 2;
// console.log(x) // 6 % 2 = 0


// combining different operators

// let a = 5;
// let b = 10;
// let result = (a + b * 2 > 20)&& (a += 5)|| (b -= 3);
// console.log(result); 
// // Expected output: ?

// let isLoggedIn = false;
// let isAdmin = true;

// // Using ternary operators and short-circuit evaluation
// let message = isAdmin 
//     ? (isAdmin ? "Access granted" : "Limited access") 
//     : "No access";

// console.log(message);
//-------logical operator--------------
// console.log((5 > 3) && (8 < 12)&& (8 < 12) && (8 < 12) && (8 < 12) && (8 < 12) && (8 > 12));

// console.log((8 === "7") || (5 === 3) || (7 === 3) || (7 === 3) || (3 === 9) || (38 === 3) || (3 === 3) );

//  console.log(!(true && false));

//  console.log((false || true) && !(3 > 5));

// ternary operator;
// let number = 13;
// // Example
// console.log(number % 2 === 0 ?  "true" : "nahi likhunga false"); // Expected output: 

// if(number % 2 === 0){
//     console.log("Even")
// }else{
//     console.log("odd")
// }

























































































































































































































































































































































































































































































































































































































































































































