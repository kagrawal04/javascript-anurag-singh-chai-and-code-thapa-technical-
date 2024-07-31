// let str = 'Hell\'o, World!';
// console.log(str);
// var result = str.indexOf("o")
// console.log(result)


// let strArr = Array.from(str);
// console.log(strArr);
// let strMap = strArr.map((currElem,index)=>
        // `${currElem} -> ${index}`
// );
// console.log(strMap);


// let str = "Hello JavaScript, welcome to our world best JavaScript course";
// let index = str.lastIndexOf("JavaScript");
// console.log(index);
// let result = str.search(/javascript/i)
//? i -> it neglects the case senstivity of the text u r searching
// let result = str.match(/javascript/gi);
// let result = str.match(/JavaScript/g);
//? g-> it means the global value that text is having.
// let result= str.match("JavaScript");
// console.log(result);


// let str = "Hello JavaScript, welcome to our world best JavaScript course";
// let matchResult = str.matchAll("JavaScript");
// console.log(...matchResult);
// for (let item of matchResult)
    // console.log(item);

// let includeResult = str.includes("Java");
// console.log(includeResult);

// let str = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = str.endsWith("course");
// console.log(result);

// let result = str.slice(6,16);
// console.log(result);


// let str = "Hello JavaScript, welcome to our world best JavaScript course";
// result = str.replace("JavaScript","optional");
// result = str.replaceAll("JavaScript","optional");
// result = str.replace(/javascript/gi, "lund")
// console.log(result);


// let str ="                Hello, World!                     ";
// let trimWord = str.trim();
// console.log(str.length);
// console.log(trimWord);
// console.log(trimWord.length);



// let fruits=" apple, banana, cherry, watermelon, melon, guava";
// let result = fruits.split(",") .reverse().join();
// let result = fruits.split("");
// console.log(result);



//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.
// for(let char=97 ; char<=122 ; char++)/
    // console.log(String.fromCharCode(char));


//! 2: Write a function to count the number of vowels in a string?
// const vowelSearch = (str)=>{
//     let count = 0;
//     const vowels="aeiou";
//     for(let char of str){      
//         console.log(char);

//         if (vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// };
// console.log(vowelSearch("this is xuv7oo pearl blue"));    


//! 3: Write a function to check if all the vowels presents in a string or not?
// const vowelSearch = ((str)=>{
//     const vowels="aeiou";
//     for(let char of vowels)
//         if(!str.includes(char))
//             return false;
//     return true
// });
// console.log(vowelSearch("this is xuv7oo pearl blue"));    


//! 4: Write a JavaScript function to check if the given sting is Pangram or not?
var pangramChecker = (str) =>{
    let inputArr = str.toLowerCase().split("");
    // console.log(inputArr);
    const values = inputArr.filter((currElem)=>
        currElem.charCodeAt()>="a".charCodeAt()
     && currElem.charCodeAt()<="z".charCodeAt()    
    );
    // return values;
    // console.log(values);
    return(new Set(values).size===26);
};
console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));