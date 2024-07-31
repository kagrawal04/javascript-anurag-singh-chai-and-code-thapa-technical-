// var myFriends = ["AKANKSHA", "KAUSHAL" ,"DUBEY", "AGRAWAL"]
// for(var i =0;i<=myFriends.length-1;i++){
//     console.log(myFriends[i]);
// }
// console.log(myFriends.at(-2));
// myFriends[4]="SINGHAL"
// console.log(myFriends);


// for(i in myFriends){
//     console.log(i);
// }
// for(i of myFriends){
//     console.log(i);
// }

// myFriends.forEach((curElem,index,arr)=>{
//     console.log(`${curElem} ${index}`);
// });

// myFriends.map((curElem,index,arr)=>{
//     console.log(`${curElem} ${index}`)
// });

// const myForEach = myFriends.forEach((curElem,index,arr)=>{
//     return(`${curElem} ${index}`);
// });
// console.log(myForEach);

// const myMapArr = myFriends.map((curElem,index,arr)=>{
//     return(`${curElem} ${index}`);
// });
// console.log(myMapArr);

// myFriends.push("minions")
// console.log(myFriends);

// myFriends.pop("agrawal")
// console.log(myFriends);

// myFriends.unshift("minions")
// console.log(1+myFriends);

// myFriends.shift()
// console.log(myFriends);

// console.log(myFriends);
// myFriends.splice(1,0,"dubeyji","i ❤ u");
// console.log(myFriends);


// var newList=myFriends.slice(4,6)
// console.log(newList);

//INDEXOF
// const numbers = [1,2,3,4,5,6,7,8,9,4,9,3,6];
// console.log(numbers.length-1);
// console.log(numbers.indexOf(6));//!indexof() method searches the element forward from the given index no.
// console.log(numbers.lastIndexOf(6));//!lastindexof() method searches the element backwards from the given index no.
// console.log(numbers.lastIndexOf(9,9));
// console.log(numbers.includes(6,9));

// const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE"]
// months.splice(months.length,0,"DEC")
// console.log(months);
// const indexToUpdate = months.indexOf("MAR");
// months.splice(indexToUpdate,1,"MARCH");
// console.log(months);
// months.pop("JUNE")
// console.log(months);
// const indexToDelete = months.indexOf("JUNE");
// console.log(indexToDelete);
// months.splice(indexToDelete,1,"OCT");
// console.log(months);


// const numbers = [1,2,2,3,4,5,6,6,7,8,4,9,15];
// const result=numbers.find((currElem) => {
//     return currElem>9;
// });
// console.log(result);

// const result1 = numbers.map((currElem )=>currElem * 5);
// console.log(result1);
// const result2 = result1.findIndex((currElem)=>{
//     return currElem>15;
// });
// console.log(result2);

// const result = numbers.filter((currElem)=>{
//     return currElem>0;
// });
// console.log(result);

// const numbers = [1,2,2,3,4,5,6,6,7,8,4,9,15];
// let value = 2;
// let result = numbers.filter((currElem)=>{
//     return currElem !== value;
// });
// console.log(result);

// const Products =[
//     {name: "LAPTOP" , price: 1200},
//     {name: "PHONE" , price: 800},
//     {name: "TABLET" , price: 300},
//     {name: "SMARTWATCH" , price: 150}
// ];
// const filterProducts = Products.filter((currElem)=>{
//     return(currElem.price>=500);
// });
// console.log(filterProducts);



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
// let uniqueValues = numbers.filter((currElem , index, arr)=>{
//     return arr.indexOf(currElem) === index;
// });
// console.log(uniqueValues);

// numbers.sort((a,b)=>{
//     if(a>b) return -1;
//     if(b>a) return 1;
// });
// console.log(numbers);

// const words= ["apple", "banana", "watermelon", 
//                 "melon", "litchi"];
// const words1= [ 'APPLE', 'BANANA', 'WATERMELON', 'MELON', 'LITCHI' ];
// const resultCapital= words.map((currElem)=>{
//     return currElem.toUpperCase()
// });
// console.log(resultCapital);
// const resultLower= words1.map((currElem)=>{
//     return currElem.toLowerCase()
// });
// console.log(resultLower);


// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.map((currElem)=>{
//     if(currElem % 2===0)
//         return currElem * currElem
// })
// .filter((currElem)=>{
//     if (currElem!==undefined)
//         return currElem
// });
// console.log(result);

// const names =["ram", "hanuman", "lakshman", "bharat", "shatrugan"];
// const prefixNames = names.map((currElem)=>`MR. ${currElem}`
// );
// console.log(prefixNames);

const productPrice = [1000,2600,5000,6236,6360];
const totalPrice = productPrice.reduce((accum,currElem)=>{
    return accum+currElem;
},0);
console.log(totalPrice);