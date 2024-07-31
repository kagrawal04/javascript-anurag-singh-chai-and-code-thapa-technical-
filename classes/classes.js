class createUser{
    constructor(fName, lName, age){
        this.fName = fName
        this.lName = lName
        this.age = age
    }

    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    getFullName = function(){
        return this.fName + ' ' + this.lName + ' - ' + this.age
    }

}


user1 = new createUser('kaushal' , 'agrawal', 126)
user2 = new createUser('akanksha' , 'dubey' , 25)