// function getBirthYear(){
//     return new Date().getFullYear() - this.age
// }
// function createUser(fName, lName, age){
//     const user = {
//         fName,
//         lName,
//         age,
//         getBirthYear:createUser.commonMethods.getBirthYear
//     }
//     return user
// }


// createUser.commonMethods = {
//     getBirthYear: function(){
//         return new Date().getFullYear() - this.age
//     }
// }

// user1 = createUser('kaushal', 'agrawal', 126)
// user2 = createUser('akanksha', 'dubey', 25)

function createUser(fName, lName, age){
    this.fName = fName
    this.lName = lName
    this.age = age
}

createUser.prototype.getBirthYear = function(){
            return new Date().getFullYear() - this.age
        }
createUser.prototype.getFullName = function(){
            return this.fName + ' ' + this.lName + ' - ' + this.age
        }
user1 = new createUser('kaushal', 'agrawal', 126)
user2 = new createUser('akanksha', 'dubey', 25)