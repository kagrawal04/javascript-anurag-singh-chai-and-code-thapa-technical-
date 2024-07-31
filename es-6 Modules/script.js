// import {usersData, myName as myNames} from "./usersData.js";
// import { usersData, myName } from "./usersData.js";
// console.log(usersData);
// console.log(myName);

import  usersData, {myName , getFirstUser}  from "./usersData.js";
console.log(usersData);
console.log(myName);
console.log("this is the first user data",getFirstUser());


// import * as something from "./usersData.js"
// console.log(something.default());
import productsData  from "./productsData.js";
console.log(productsData);
