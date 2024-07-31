class createUser{

    constructor(fName, lName, age){
        this.fName = fName
        this.lName = lName
        this.age = age
    }

    get FullName(){
            return `${this.fName} ${this.lName} ${'-'} ${this.age}`
        }
    set FullName(value){
        const splitted = value.split(' ');
        this.fName = splitted[0];
        this.lName = splitted[1];
    }
    
    
    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    
}

user1 = new createUser('kaushal' , 'agrawal', 126)
user2 = new createUser('akanksha' , 'dubey' , 25)



// const user= {
//     fName: 'kaushal',
//     lName: 'agrawal',
//     age: 25,
//     get fullName(){
//         console.log(45331);
//         return `${this.fName} ${this.lName}`
//     },
//     set fullName(value){
//         //const splitted = value.split(' ')
//                         // or
//         const [fName , lName] = value.split
//         this.fName = fName
//         this.lName = lName
//         // console.log(6464);
//         // console.log(value);
//     }
// }

// console.log(user.fullName);
// user.fullName = 'akanksha dubey'