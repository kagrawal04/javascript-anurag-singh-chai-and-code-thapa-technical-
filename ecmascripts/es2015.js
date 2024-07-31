// fat arrow function
// normal way of writing function
// function sum()
// {
//     var a=5, b=7;
//     //var sum = a+b;
//     console.log( ` the sum is ${a+b} `);
// }
// sum();
// How to convert it into fat arrow function
// console.log(sum());
// const sum = () => {
//     let a=5, b=5;
//     let sum = a+b;
//     return ` the sum of two numbers is ${sum}`
// }
// console.log(sum());

//* FOR WRITING FUNCTION CODE IN ONE LINE
// const sum = () => ` the sum of two numbers is ${(a=5) + (b=4)}`;
// console.log(sum());

//! IF THERE IS ONLY ONE PARAMETER, THE PARANTHESES, THE BRACES {} AND THE  RETURN KEYWORD CAN BE OMMITED
// const square = (a) =>`the square of ${a} is ${a * a}`;
// console.log(square(9));

//! Reverse a string

// const naam=(str)=>{
//     let reverse = "";
//     for(i=str.length-1;i>=0;i--)
//         {
//         reverse = reverse + str[i];
//         }
//     return reverse
// }
// console.log(naam("AKANKSHA KAUSHAL"));


//? Palindrome string

const isPalin=(str)=>{
    let reverse="";
    for(i=str.length-1;i>=0;i--){
        reverse = reverse + str[i];
    }
    // return reverse;
    // if(reverse==str){
    //     return "Palindrome Found";
    // }
    // else{
    //     return " Palindrome Not Found";
    // }
    return reverse==str ? true : false;
};
console.log(isPalin("naman"));