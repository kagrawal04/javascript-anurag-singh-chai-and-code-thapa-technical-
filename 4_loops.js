// var temperature = 0;
// if (temperature >= 30){
//     console.log("let's party at the beach");
// }
// else if(temperature >=20 && temperature<=30){
//     console.log("stay at the hotel");
// }
// else{
//     console.log("muth marke sojao ");
// }

// var age = 105;
// var citizen = true
// var registeredVoter = true
// if(age >= 18 && citizen=="INDIAN" && registeredVoter == true){
//     console.log("eligible to vote modiji");
// }
// else if(age>=18 && citizen == false){
//     console.log("vote nhi daal sakte iss desh ke nagrik nhi ho tum");
// }
// else if(age>=18 && citizen == true && registeredVoter == false){
//     console.log("vote nhi daal sakte voter list mee naam nhi hai");
// }
// else{
//     console.log("farzi voter");
// }



//? switch case//

// 


// let userInput;
// let positiveNumber;
// do{
//     userInput = prompt("Enter a Positive Number: ");
//     positiveNumber = parseFloat(userInput);
// }while(isNaN(positiveNumber) || positiveNumber < 0);
// console.log("You have entered a positive number: ", positiveNumber);

// var sum = 0;
// for(var num = 1 ; num<=10 ; num++){
//     sum = sum+num;
// }
// console.log(sum * sum);
// console.log(sum ** 2);



// PRIME NUMBER CODE//

// 


// TABLE OF 5//

// var num = 1;
// for(var num = 1; num<=10 ; num++){
//     console.log("5 * "+ num + " = " + 5*num);
//     console.log("8 * "+ num + " = " + 8*num);
//     console.log("12 * "+ num + " = " + 12*num);
//     console.log("15 * "+ num + " = " + 15*num);

// }

// PROGRAM FOR CHECKING A LEAP YEAR

// var year = 800;
// debugger;
// if(year % 4 == 0 && year % 100 !=0 || year % 400 == 0){
//     console.log("year is a leap year");
// }
// else{
//     console.log("not a leap year");
// }



//PROGRAM TO PRINT PATTERN

for(var i =1;i<=5;i++){
    pattern = ""
    for(var j=1;j<=i;j++){
        pattern = pattern + "*";
        // break;
    }
    console.log(pattern);
    // break
}
