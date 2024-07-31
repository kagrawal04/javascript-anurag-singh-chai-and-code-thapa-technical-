// const user= {
//     fName: 'Kaushal',
//     lName: 'Agrawal',
//     age: 27,
    
//     getAgeYear: function(){
//         return new Date().getFullYear() - user.age
//     }
// }

// function getAgeYear(age){
//     return new Date().getFullYear() - age
// }

// console.log(user.fName + ' ' + user.lName + '- ' + user.age);


function createUser(fName, lName, age){
    const user = {
        fName,
        lName,
        age,
        getAgeYear(){
            return new Date().getFullYear() - user.age
        },
    }
    return user
}

user1 = createUser('kaushal', 'agrawal', 26)
user2 = createUser('akanksha', 'dubey', 25)