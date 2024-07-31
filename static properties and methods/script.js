class createUser{

    constructor(fName, lName, age){
        this.fName = fName
        this.lName = lName
        this.age = age
    }

    // static hii = 'hello world'

    static{
        this.hii = 'hello'
        this.getFullName = function(user){
            return user.fName + ' ' + user.lName + ' - ' + user.age
        }
    
    }
    // static getFullName(){
    //     return this.fName + ' ' +this.lName+ ' - '+this.age;
    // }
    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    
}

// we can also create static method using this approach also

createUser.myHii = 'kaushal'

user1 = new createUser('kaushal' , 'agrawal', 126)
user2 = new createUser('akanksha' , 'dubey' , 25)

console.log(createUser.getFullName(user1));
console.log(createUser.getFullName(user2));
console.log(user1.getBirthYear());
// console.log(createUser.myHii());